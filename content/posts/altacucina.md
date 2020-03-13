---
title: "From idea to 100k uniques per week in two months"
date: 2019-06-30T15:06:19+01:00
featured_image: "/altacucina/altacucina-thumb.png"
draft: false
---

This is a roundup of my experience as a 👨🏻‍🍳 Chef Technology Officer, building the tech side of [Al.ta Cucina](https://altacucina.co), the fastest growing recipe site in Italy!

In two months we went from idea 💡, to [product](https://altacucina.co):

![](/altacucina/site.png)

![](/altacucina/recipe-view.gif)

![](/altacucina/step-by-step.gif)

### The Story

April 15th.

I just finished interviewing for a bunch of tech companies to move away from Italy.

I'm trying to figure out where I want to go and what I want to do next.

I hit up my friend Simone and ask him “How’s your CTO hunt moving forward?”

Simone and his co-founder Alessandro built over the course of 3 years a community of 3 million Italian food lovers. After raising a seed round they now had to try to build their own platform and bring their community on it.

![](/altacucina/alta-banner.png)

So we’re at their office, talking looking at their applicants CVs and sifting through all their proposals on how to implement their ideas.

I look at the budgets to build the MVP and time frames for development and tell Alessandro: 

> “This is insane! I can do this with 1/6th of the budget in 1/6th of the time” 

I like challenges so I tell the guys to give me a “trial week” and that in one month I’d have an MVP ready.

## The start

On day one I draw down the data models, think about the simplest architecture.

I already had some experience with Python and Django and loved the admin panel and boilerplate it comes with. I also had a great experience building things with NextJS (great for SEO and overall speed and simplicity of development).

It’s also easy to teach Python or Javascript to anyone that will come after me.

So I break down things in tasks, load them to Trello and start basic repositories to get v0.0001 up and running.

For easy deployment I decided to go with [Render](https://render.com), an alternative to Heroku that has a fair pricing and easily lets you run and scale any app you want.

After having something up and running it was time to build a small and great team of developers.

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

>    Eat pasta, ship fasta!
>    Join us now

## How did I screen people?
Github profile link. 

## What if they had an empty profile or no personal projects?
Skipped to next applicant.

## How did I pick people?
I opened these people’s Github and looked at code asking myself “Am I learning something reading this code?” and “Is the experience on a similar tech stack?”

On day one we hired the frontend developer and a backend developer.

My only rule and requirement for day one was, whatever happens, push something to the repository on day one (even something small like an improvement on the readme).

The strict time requirements required us to be ruthless with this.

One of the two developers (the backend guy) didn’t deliver on this, so we let him go.

I don’t think this is by any means a great way to evaluate people, but I also didn’t care about evaluating people. I only wanted to be sure I didn’t make a bad hiring decision, limiting risk.

## Lesson Learned: When on the other side of the deal (contracting) don't take things personally

After 3 days I didn’t have to juggle anymore between hiring, developing, architecting and managing people.

We created a very simple workflow:

**Everyone first thing of the day had to post on our #general Slack channel what they did in the previous day and what they expected to get done in the following day.**

A month of work passed quite quickly and we managed to have a “launch” ready version on the exact day I had predicted!

The night before of our launch, we all went for dinner with our friends from [Superlinear](https://superlinear.co/). Fortunately or unfortunately we found out from them that we had made a terrible mistake!

We were using GIFs to show step by step recipes, but by using compressed .mp4 and .webm videos we could’ve cut the size of media files by 10x. While gaining more control over looping and autoplay of recipe steps.

So we decided to delay launch by 3 days. In 2 days we managed to get a worker up and running compressing and generating all the video types we needed, create a custom video on the frontend player and deploy!

Unsurprisingly, the biggest trouble we had was with CSS and HTML.. It turns out that autoplay of videos on iOS Safari is extremely tricky to implement and test!

## Lesson Learned: Never use GIFs for serious projects

#### Not even Giphy uses them anymore, autoplay muted .mp4 or .webm videos.

## Lesson Learned: Safari sucks, test things on it, they will break.

## Extra Lesson: Also always talk about your projects with friends to get advice.

How can you squeeze out maximum productivity from developers.

As this was a short term rushed project, my goal was to squeeze out the maximum results from myself and everyone involved with the product.

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

I also specifically told everyone during onboarding that my role, other than being a collaborator and coworker, was to get rid of any blockers. 

**So stuck on a dumb bug?** Happy to help.

**Need a glass of milk?** There you go 🥛

## Growing the team

After two weeks I also felt very confident about how things were going, so I decided to hire two more developers. One developer would start the iOS app, and another one would work on the frontend, completing the React implementation of our Design System and focusing solely on the reusability of our components.

I found that a team of 4 great developers, with me bridging the gaps and filling any need that comes up to be extremely efficient. Adding any other developers would have had diminishing returns.

## Finding a good replacement for myself

Around the same time I started working on Al.ta Cucina I also accepted an offer to move to Dublin and work as a product engineer.

I made this very clear with Simone and Alessandro, so we all had this <3 month deadline to find someone to take over my position.

I reached out to my contacts to find possible candidates and found a smart friend.

Simone also found an acquaintance that wanted to move back to Milan.

He also ran a Linkedin job post ad that led us to find some candidates.

We also tried to post an ad on Stackoverflow, but after having a call with their sales team, we decided it wasn't worth the money for us.

To make a hiring decision we created a very informal and flexible interview process to help us answer the following questions about each candidate:

- Has strong technical skills?
- Is a good product manager?
- Can come up with new features?
- Can they manage other developers?
- Are they a leader?
- Is this a person with an ambitious and global vision?
- Are they proactive?
- Are they a good cultural fit with the company?

Depending on the background of each person we tried to find ways to break through the “interview facade” and find the real answers.

For instance, with one person I pair programmed, with one I created an assignment and the other one I came up with a tricky a coding puzzle etc...

I also prepared some questions on the thought process and heuristics they use to translate data and requirements in product decisions.

The CTO search ended happily, with my friend Charlie Desbaux taking the job and moving back to Italy in mid-September.

## Being Creative

Simone’s background is a creative one.

He used to be a creative for [Anomaly](https://anomaly.com) coming up with crazy ideas for the biggest brands in the world.

I am a bit of a creative person too. But being exposed every day at the office to his insanely cool ideas was priceless!

I think that working with someone like him really levels up your creative output.

I found myself thinking a lot about what makes a creative idea, creative.

Creative ideas are about realizing what everyone else is doing, finding a pattern and then doing the exact opposite.

Other ideas come from breaking down words and looking at their actual meaning.

An example of this leads you to our cookie policy “free cookies for all” (actually sending cookies to people).

Or to moonshot, dreamed up collaborations, that with a some cold emails can turn into reality.

Creativity is hard to define though.

In fact my conclusion is that creative ideas can only be defined via negativa.

Most ideas are derivative from other ideas.

**Creative ideas are the non derivative ones.**

Most non derivative ideas though are also bad ideas, so the sweet spot is finding something non derivative, but effective.

## Results

I could spend a couple of days writing about the many things I learned working with this team, but I’ll cut things short and summarise results.

I had tons of fun and made friends with a great team:

![Our Team](/altacucina/team.jpg)

Unique users from my start to my departure:

**410.000**

Best day in terms of unique users:
**25,883**

Avg. Session Time:
**1 minute 15 seconds**

Uniques in the last 30 days:

![](/altacucina/30-days.png)

Uniques in the last 7 days:

![](/altacucina/7-days.png)

Expenses compared to estimates by other developers and agencies:
**85% Less**

iOS App state:
**App is on TestFlight and being actively tested and is live here** - [App Store](https://apps.apple.com/it/app/al-ta-cucina-italian-recipes/id1465269621?l=en)

What’s next?

Well my friend [Charlie](https://twitter.com/desbaux) moved back to Italy to take the role of CTO!

What’s next for me?

My life is a bit of a video game. In the sense that I try to level up in every area of it.

I had already built something used by:

✅ 1 person per week

✅ 10 people per week

✅ 100 people per week

✅ 1.000 people per week

✅ 10.000 people per week

I now unlocked a new achievement:

✅ **100.000 people per week**

Overall, this was a great adventure, and I just got off for a new one. 

![](/altacucina/new-adventure.png)

Joining the most friendly people ever at [Intercom](https://intercom.com)!

Want to join the Al.ta Cucina team? Get in touch with simone at altacucina.co

### Er Mejo Deve Ancora Arrivà
![](/altacucina/er-mejo.jpg)

*The best is yet to come (in Roman Dialect), a gift, and reminder from [Simone](https://twitter.com/SimoneMascagni) & Alessandro*