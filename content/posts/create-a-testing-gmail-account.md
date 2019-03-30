---
title: "Create a Development Gmail Account for Testing"
date: 2019-03-30T15:58:06+01:00
draft: false
description: "A step by step guide to create Gmail accounts for testing and development purposes"
---

You are developing an app that uses emails, and need a testing account?

What's the fastest and easiest way to get a test account up and running?

By default Gmail doesn't support email importing from a file.

So the first step we'll have to go through is creating an Outlook email account here:

[Create an Outlook Account](https://signup.live.com/signup)

![](/create-a-test-gmail-account/signup.png)

After creating an Outlook account we need to import data into it.

The reason I suggest you use Outlook is that it supports a format called **.pst**. This format will let us upload emails in bulk.

Download a .pst file from the internet:

A place where you can find a list of .pst files is [here](https://ftp.icm.edu.pl/packages/Hacked%20Team/mail/)

Pick any file you want and download it.

To import data into an Outlook account you'll have to download the desktop Outlook app. (for [Mac](https://itunes.apple.com/us/app/microsoft-outlook/id985367838)).

Once you installed the app to import some emails you'll have to:

* Open Outlook and login with your newly created account

* Pick the import feature from the File menu

![](/create-a-test-gmail-account/import-1.png)

* Select your .pst file and import it

![](/create-a-test-gmail-account/import-2.png)

This process will take a while, and once you're done the emails will be in a folder on your sidebar.

After importing the emails you'll have to sync them with your Outlook Server:

![](/create-a-test-gmail-account/sync.png)

This process will take a couple of hours..

What you can do in the meantime is to finally [create a Gmail account](https://accounts.google.com/SignUp).

Once you created your account to import emails open Gmail and click on settings:

![](/create-a-test-gmail-account/settings.png)

And click on import:

![](/create-a-test-gmail-account/gmail-import.png)

You'll then be able to login with your dummy Outlook account and import all your emails.

You can even do this before the email upload from your computer is completed as for the next 30 days Gmail will keep importing emails from your dummy account.

**The End**
