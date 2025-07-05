---
title: From Idea to MVP in a Saturday Night
date: "2018-04-24T16:46:03.284Z"
draft: false
---

Every time you finish writing a blog post you get that feeling that it's not ready to post it.

It's time for proofreading, but it's painful to proofread your own writings.

What is fun instead is reading someone else's writings.

**So how great would it be if you could post your drafts somewhere, read and comment a couple of blog posts by people with your same interests, while your own get proofread by people like you?**

You can do this now, on my new website [DraftBunny](https://draftbunny.xyz)

Here's the story behind it.

## Saturday 18PM
I get home after a day of studying for exams and come up with the idea of making a website for people with personal blogs to share their drafts to proofread one another.
Text the idea to Marco and he likes it, saying he would use it.

## Saturday 18.10PM
I start a Django project, set it up (repository and standard settings) and start creating the basic models for the database.

In about two hours, I had the first working version, with plain html:
* A form where anyone could post a link and a title, a button to submit.
* A list of the most recent articles.
* A link to a Telegram group to discuss with users what to build next.

After making this I realize that I should probably let people create accounts and pages for articles so that everyone knows who is contributing and how.

## Saturday 21.08PM
I now send a message on the Solo Founders telegram group to get some feedback:

![](/first-feedback.png)

It's now time to get a front end together.
At first I thought about just using bootstrap, but then started browsing to find a lightweight library to start from.

I found [Skeleton](http://getskeleton.com/) and used it to style the front end. 
Probably it wasn't a smart decision as I spent more time than I wished I did on looking for class names, to style the pages.
Next time I'll probably use this library again as I learned it, but I should have probably sticked with bootstrap.

Now only three things were missing, name, logo and deployment.

After some brainstorming I came up with a logo:
![](/draftbunny.png)

While looking for a name I kept thinking about Bugs Bunny:
<div style="width:100%;height:0;padding-bottom:72%;position:relative;"><iframe src="https://giphy.com/embed/wPGhh1ZBFFNZe" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><br>
I came up with the name DraftBunny.
I found the domain draftbunny.xyz for 1$ on Namecheap and snagged it.

I now needed hosting, so I asked some friends what services I could use.
I chose [Linode](https://linode.com) because I wanted to learn how to deploy apps setting up things. (I only had experience with Google App Engine and AWS)

This turned out to be a dumb decision as it delayed launch until now, but I'm glad I made the decision to learn something new.

## Sunday 0:00AM
So the MVP was ready, deployment and launch were the only two things missing, so I decided to call it a day and go to sleep.

In the next days I had a series of problems, like my ISP's firewall blocking ssh.
In around two hours of messing around with the server I managed to deploy the app with https (finding a bug in let's encrypt's certbot in the process). 

#### Total Expenses: 6$
**1$ - Domain name**

**5$ - Linode Credit (got 10 extra for free)**

**Enjoyed this post? Got any content to suggest?**

*My articles are always a work in progress, and almost never complete so if you have any suggestions of how I can improve hit me up at hi[at]ferrucc[dot].io or DM me on [X](https://x.com/0xferruccio)*