---
title: "Mutable or immutable user properties"
date: 2021-04-06T18:33:39+02:00
draft: false
---

*This is an open engineering question at [June](https://june.so). If you want to solve problems like this one, please reach out - [we're hiring](https://www.notion.so/projectanalytics/Founding-Team-Engineer-339274009f594b58aff3d4bfd8e3f93e)*

June allows you to add dynamic traits to your users. For example, if you want to run an analysis only on users that are on your **pro plan**, you can do that by adding a "plan" trait to your users.

**The value of these properties is mutable and has no relationship with time. We're thinking about making it immutable.**

Since we added this feature, we haven't entirely made our minds about this compromise. This problem comes up for many companies. I decided to write about how we're thinking about it.

## Our current data model (mutable)

Users table
- app_id
- id
- user_id (from Segment)
- email
- traits
- updated_at

The traits field is a JSON that gets updated with new data any time one user sends us an identify call.

This data structure works as expected most of the time, but there are a few odd behaviors it has:

- If you update the value of a trait, the results of historical analyses change
- If you update the value of a trait, we lose the historical values that it had in the past
- Analytics databases have poor support for updating data, as they encourage keeping data immutable


## Counting active users on the pro plan (Case A)
Here's an example of unexpected behavior you get from modeling data this way:

I want to know the number of active users on a Pro plan month by month for the last year to see how it changed over time. We can count users with a "Pro plan" trait that were active each month. If some users from 1 year ago churned and aren't on the pro plan anymore, the graph would not include them.

This happens because the users' traits data is mutable, meaning it can change.

## An immutable alternative

We can model data in an immutable way to handle this edge case.

Identify logs table
- app_id
- timestamp
- user_id
- traits
- email


Now when we run analytical queries, we can select users with a specific trait in our analysis interval.

So any time we run the Case A analyses, we get the same (and correct) results.

We also have access to all historical changes to run queries flattening data in the same way as we're doing it with the mutable models.

There's a new problem, though. There's now more complexity that we need to expose to our users, and the effect of this can be very counterintuitive.

For example, it's good practice for companies to measure sign-ups by job title.

After signing up, you ask users their role in the company. You then want to use this data to make a chart with sign-ups by position.

If we try and do this using the traits we had at the moment users signed up, we'd get no results. If we run this same analysis on the sum of all the traits we ever received, we'd get the right results. So when defining rules to segment an audience, instead of saying "Users on the pro plan" we need to specify when they were on the pro plan, is it now, or at the time they performed an event?

This example shows how being technically correct sometimes adds friction and confusion to the experience.

On the other hand, this approach's benefit is that it helps you partition data more efficiently.

For example, suppose you partition the users' data by time instead of scanning through all your users to find your analyses' audience. In that case, you can only look at the active users at the time of your analysis.

## Conclusion

**So the open question for us is how we should model user data?**

Tools like Mixpanel go with the mutable approach.

Amplitude instead goes with the immutable approach, with no option to "flatten" all historical data.

When exporting data to a warehouse, segmentation also stores it in an immutable way.

The [parquet](https://en.wikipedia.org/wiki/Apache_Parquet) file of user data that Segment saves to S3 looks like: 

```
s3://<top-level-Segment-bucket>/data/<source-id>/segment_type=identify/day=<YYYY-MM-DD>/hr=<HH>
```

**This is an open engineering challenge at [June](https://june.so). If you want to solve problems like this one, please reach out - [we're hiring](https://www.notion.so/projectanalytics/Founding-Team-Engineer-339274009f594b58aff3d4bfd8e3f93e)**
