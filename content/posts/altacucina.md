---
title: "From idea to 100k uniques per week in two months"
date: 2019-06-25T20:06:19+01:00
draft: true
---

This is a roundup of my experience as a 👨🏻‍🍳 Chef Technology Officer

April 15th. I just finished interviewing for a bunch of tech companies.

Trying to figure out where I want to go and what I want to do.

I hit up my friend Simone and ask him “How’s your CTO hunt moving forward?”

Simone and his cofounder Alessandro built over the course of 3 years a community of 3 million Italian food lovers. After raising a seed round they now had to try to build their own platform and bring their community on it.

So we’re at their office, talking looking at their applicants CVs and sifting through all their proposals on how to implement their ideas.

I look at the budgets to build the MVP and timeframes and tell Alessandro: 

“This is insane! I can do this with 1/6th of the budget in 1/6th of the budget” 

I like challenges so I tell the guys to give me a “trial week” and that in one month I’d have an MVP ready.

## The start

On day one I draw down the data models, think about the simplest architecture.

I had experience with Python and Django. I also had a great experience building things with NextJS (great for SEO and overall speed of development).

It’s also easy to teach Python to anyone that will come after me.

So I break down things in tasks, load them to Trello and start basic repositories to get v0.0001 up and running.

After that it’s time to build a small, but great team of developers.

I contacted a couple of really smart friends, but everyone was busy, so decided to start interviewing some contractors on Upwork.

At this point we’re looking for two people to help me move faster, one taking ownership of the backend and one taking ownership of the frontend.

Here’s the job description we wrote for the backend job posting:


>  Hi there, my name is Simone, I'm the co-founder of a fast growth media company and we're trying to make the transition to become a tech company in the food space.

>  Our community currently counts over 3 million users (search for Al.ta Cucina on FB and Instagram :) ) and they're eagerly waiting to move to our own platform.

>    We finished preparing detailed specs and high fidelity product mockups and are now looking for a Python developer to help us bring our APIs to life.

>    A basic version of our APIs are already up and running, but your work is going to be on:

>    * Working on a Django Rest API application
>    * Using the best practices in backend and API development (Tests, Docker, CI pipelines etc.. feel free to propose some ideas)
>    * Implementing the architecture we designed.
    
>    We are looking for a full time commitment from someone eager to learn new technologies or grow within our organisation!
    
 >   Reach out if you're a hungry and motivated developer. If you are ready to take initiative and share your crazy ideas with our team and build a product that will be used by millions!

>    Eat pasta, ship faster!
>    Join us now

## How did I screen people?
Github profile link. 

## Empty profile or no personal projects?
Heavy next.

## How did I pick people?
I opened these people’s Github and looked at code asking myself “am I learning something reading this code?” and “is the experience on a similar tech stack?”

On day one we hired the frontend developer and a backend developer.

My only rule and requirement for day one was, whatever happens, push something to the repository on day one (even something small like an improvement on the readme).

One of the two developers (the backend guy) didn’t deliver on this, so we let him go. So I spent more time finding a good fit fo the project and hired a replacement on day 2.

I don’t think this is by any means a great way to evaluate people, but I also didn’t care about evaluating people. I only wanted to be sure I didn’t make a bad hiring decision, limiting risk.

## Lesson Learned: The time spent finding the best fit for the project has a 10x effect on productivity.

After 2 days I didn’t have to juggle anymore between hiring, developing, architecting and managing people.

One month of work passed quite quickly and we managed to have a “launch” ready version on the exact day I had predicted!

The night before of our launch, we all went for dinner with our friends from [Superlinear](https://superlinear.co/). Fortunately or unfortunately we found out from them that we had made a terrible mistake!

We were using GIFs to show step by step recipes, but by using compressed .mp4 and .webm videos we could’ve cut the size of media files by 10x. While gaining more control over looping and autoplay of recipe steps.

So we decided to delay launch by 3 days. In 2 days we managed to get a worker up and running compressing and generating all the video types we needed, create a custom video player and deploy!

Unsurprisingly, the biggest trouble we had was with CSS and Html.. It turns out that autoplay of videos on iOS Safari is extremely tricky to implement and test!

## Lesson Learned: Never use GIFs
#### Not even Giphy uses them anymore, autoplay muted .mp4 or .webm videos. Also always talk about your projects and work to get advice.

How can you squeeze out maximum productivity from developers

As this was a short term “rush” project, my goal was to squeeze out the maximum results from myself and everyone involved with the product.

If I had to build a team for the longer term I would’ve probably not cared about the programming languages the developers I hired had experience in.

And I would’ve tried to find more of a cultural fit, than a knowledge fit.

From my previous experiences I tried to list out what were the biggest bottlenecks of development and the biggest time drains.

## From day 1 I set out the following rules:

* On day 1 every engineer has to be productive on the codebase
* No meetings, but detailed specs
* All task assignments happen on Trello
* When you pick a task, you’re not allowed to have Slack open until you finish it
* When in doubt about something, take responsibility and make a decision yourself (and write articulating your thought process behind it)
* Establish for each developer ownership over an area of the app

Over time we also added peer (or external) review to code.

I also specifically told everyone during onboarding that my role, other than being a collaborator, was to get rid of any blockers. 

**So stuck on a dumb bug?** Happy to help.

**Need a glass of milk?** There you go 🥛

## Growing the team

After two weeks I also felt a bit cocky about how things were going, so I decided to hire two more developers. One developer would start the iOS app, and another one would work on the frontend, completing the React implementation of our Design System and focusing on reusability of our components.

I found that a team of 4 great developers, with me bridging the gaps and filling any need that comes up to be extremely efficient. Adding any other developers would have had diminished returns.

## Finding a good replacement for myself

Around the same time I started working on Al.ta Cucina I also accepted an offer from [Intercom](https://intercom.com), to move to Dublin and work as a product engineer.

I made this very clear with Simone and Alessandro, so we all had this <3 month deadline to find another Ferruccio.

I reached out to my contacts to find possible candidates and found a smart friend.

Simone also found an acquaintance that wanted to move back to Milan.

He also ran a Linkedin job post ad that led us to find some candidates, but only one had skills and experience that matched the ones of our two other candidates.

To make a hiring decision we created a tailored and very informal interview process to help us answer the following questions about each candidate:

- Has strong technical skills?
- Is a good product manager?
- Can come up with new features?
- Can they manage other developers?
- Are they a leader?
- Is this a person with an ambitious and global vision?
- Are they proactive?
- Are they a good cultural fit with the company?

Depending on the background of each person we tried to find ways to break through the “interview” mask and find answers.

With one person I pair programmed, with one I created an assignment and the other one I came up with a tricky a coding puzzle.

I also prepared some questions on the thought process and heuristics they use to translate data and requirements in product decisions.

After scoring each candidate I sent a message to Alessandro and Simone with my opinion.

They then made their mind up and made an offer to the person they thought was the best fit.

## Being Creative

Simone’s background is a creative one.

He used to be a creative for Anomaly coming up with crazy ideas for the biggest brands in the world.

I am a bit of a creative person too. But being exposed every day at the office to his insanely cool ideas was priceless!

I think that working with someone like him really levels up your output.

Creative ideas are about realizing what everyone else is doing, finding a pattern and then doing the exact opposite.

Other ideas come from breaking down words and looking at their actual meaning. 

This leads you to our cookie policy “free cookies for all” (actually sending cookies to people).

Or to moonshot, dreamed up collaborations, that with a cold mail can turn into reality.

Creativity is hard to define though.

In fact creative ideas can only be defined via negativa.

Most ideas are derivative from other ideas.

**Creative ideas are the non derivative ones.**


## Results

I could spend a couple of days writing about the many things I learned working with this team, but I’ll cut things short and summarise results.

Unique users from my start to my departure:
**297,545**

Best day in terms of unique users:
**25,883**

Avg. Session Time:
**1 minute 15 seconds**

Expenses compared to estimates by other developers and agencies:
**85% Less**

A win? **A win**

What’s next?

My life is a bit of a video game. In the sense that I try to level up in every area of it.

I had already built something used by:

✅ 1 person per week

✅ 10 people per week

✅ 100 people per week

✅ 1.000 people per week

✅ 10.000 people per week

I now unlocked a new achievement:

✅ **100.000 people per week**

Overall, this was a great adventure, but I just got off for a new one. 

Joining the lovely people at [Intercom](https://intercom.com)! 

Hopefully I'll be shipping something to millions of end users before Altacucina does!

Let’s see how much time it will take to win the next (and last) 3 levels.
