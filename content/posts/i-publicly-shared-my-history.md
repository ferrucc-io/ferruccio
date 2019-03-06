---
title: "I Shared my browsing History for 2 weeks and this is what happened"
date: 2019-03-04T21:19:48+01:00
draft: true
---

On February 19th I asked myself the following question:

## What happens if I share my browsing history publicly?

Initially I thought that people would have some cool things to say when introducing themselves via email and maybe suggest some cool resources.

I also thought that maybe someone was going to stalk me and do something weird.

I obviously decided to move forward and try to implement this with software.

## 👨🏼‍💻 The Code side of things

The first step was figuring out "Where does Chrome store my browsing history?". 

I was extremely surprised to find out that Chrome saves this data on an SQLite database that you can find here:

```
~/Library/Application Support/Google/Chrome/Default/History
```

So to get my history I had to make a copy of that database and run an SQL query on it to get the data I wanted:

```
SELECT url, title FROM urls
```

At first I was sharing the full URL, but then after a while I realised that sometimes there's dangerous stuff in the URL so I decided to strip away the exact page route from URLs and just leave the site name.

After getting the data and cleaning it up I also realised I don't have a backend for my personal site 😂

As I didn't want to create an app specifically to serve this data I considered the following approaches:

* Auto add to the site repository the history by editing the site source code and pushing changes to master so all the content is static.
* Save all the data to a Google Spreadsheet and turn it into an API using [Sheety](https://sheety.co/) and call the endpoint from the site to load the data.

The second approach seemed the most convoluted and insulting to scalability and software engineering good practices, so I obviously picked it.

I used a Python library called `gspread` to get the google sheets workflow up and running and that's basically it on the technical side of things.

## 🌻 The Cool side of things

**So what happened?**

My friends started sending me screenshots of my history edited with either obscure types of porn or hilarious funny titles.

No one emailed me mentioning something from my history 😢

