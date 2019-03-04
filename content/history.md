---
title: "History"
date: 2019-02-19T01:00:40+01:00
draft: false
description: "This is my full browsing history! If you want to introduce yourself and don't know what to say, pick something from here as an inspiration"
---

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	$.getJSON("https://api.sheety.co/5b7e111f-74d8-4ec1-b0c4-7c0b8d8d8d33", function(data) {
		var template = Handlebars.compile($("#item-template").html())
		$("#items").html(template(data.reverse()))
	})
})
</script>

This is my full browsing history! (Until March 4th 2019)

Why? 

**Why not?**

I think it might be fun for people wanting to introduce themselves via email to know where I'm hanging out on the interwebz. I hope to get some good reading suggestions from this. I also hope to get more picky with the content I decide to consume.

How am I doing this? [This script](https://github.com/ferrucc-io/chrome-history-to-sheets) runs every hour and updates a [Google Sheet](https://docs.google.com/spreadsheets/d/13HW9eVSUiUe_i0yiiuzPj_C3oCl-CcgH4GZLHA8kTUc/edit).

This page loads the data from there using an API generated using a service called [Sheety](https://sheety.co).

## My Browsing History sorted by the latest site I've visited:


<script id="item-template" type="text/x-handlebars-template">
<ul>
	{{#each this}}
    <div>
		<p class="dont-break-out"><span class="b dont-break-out">{{title}}</span> - {{address}}</p>
    </div>
	{{/each}}
</ul>
</script>
<style>
.dont-break-out {

  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

}
</style>

<div id="items">Loading History...</div>