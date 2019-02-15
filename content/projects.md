---
title: "Projects"
date: 2019-02-15T13:59:23+01:00
draft: false
type: "page"
layout: "page"
featured_image: "/projects/projects-social.png"
description: "Here you can find an overview of all the projects I made over the years"
---

Here you can find an overview of all the projects I made over the years.

At the moment there's only some links to my latest products, but I'm working on making this more interesting.

<style>

img.w-100{
    display: none;
}

body{
    background-color: black;
}

a{
    border-color: #fee18b;
}

article {
    padding-top: 0.5rem !important;
}

.project-preview{
    display: flex;
    margin-bottom: 0.875rem;
}

.preview-logo{
    width: 90px;
    height: 90px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(245, 245, 245);
    border-radius: 2px;
    margin-right: 1.16667rem;
    img {
        width: 46px;
        height: 46px;
    }
}

.project{
    :not(:last-child) {
        margin-bottom: 2.625rem;
    }
}

.project-content-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
}

.project-title-link {
    margin-bottom: 0.4375rem;
    text-decoration: none;
    border-bottom: none;
}

.project-title-link :hover, .project-title-link :focus, .project-title-link :active {
    color: white;
    text-decoration: none;
    transform: scale(1.05)
}

.project-title {
        margin: 0px;
        margin-block-start: 0px;
        margin-block-end: 0px;
        line-height: 1.1;
}

.project-description {
    font-size: 1.05rem;
    margin-bottom: 0.4375rem;
}

.project-meta {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 14px;
}

.project-link {
    color: #fee18b !important;
    border-bottom: none;
}

.project-link:hover{
    text-decoration: underline;
    transform: scale(1.02);
}



.logo{
    max-height: 60px;
    max-width: 60px !important;
}


h2.title {
    font-size: 3rem;
}

.skills {
    display: flex;
    flex-direction: row;
}


.skill{
    display: block;
    margin-right: 0.875rem;
}

.preview-skill{
    width: 90px;
    height: 90px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(245, 245, 245);
    border-radius: 2px;
    img {
        width: 46px;
        height: 46px;
    }
}

.skill-icon {
    max-height: 60px;
    max-width: 60px !important;
}

.skill-name {
    display: block;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    margin: 0px;
    margin-top: 0.2rem;
}

@media (max-width: 576px) {
    .project-preview {
        flex-direction: column;
        margin-bottom: 1rem;
    }

    .preview-logo{
        width: 100%;
        height: 70px;
    }

    .project-content-container{
        margin-top: 1rem;
    }


    .preview-skill{
        width: 64px;
        height: 64px;
            img {
                width: 46px;
                height: 46px;
            }
        }

    .skill-icon {
        max-height: 45px;
        max-width: 45px !important;
    }

    .skill-name {
        font-size: 0.6em;
    }
}

.radius2 {
    border-radius: 2px;
}
.label {
    background-color: #385e94;
    border-radius: 8px;
    padding: 0 8px;
    float:right;
    margin: -20px;
    margin-left: -120px;
}

.nested-links a:hover{
    color:white;
}

</style>

<h2 class="title">📦 Products</h2>

<div class="projects">
    <div class="project">
        <div class="project-preview">
            <div class="preview-logo">
                <img src="/projects/kit.png" class="logo">
            </div>
            <div class="project-content-container">
                <a class="project-title-link" href="https://kit.st">
                  <h3 class="project-title">KIT - Keep In Touch</h3>
                </a>
                <div class="project-description">
                    A personal CRM built on Blockstack.
                </div>
                <div class="project-meta">
                    <div style="margin-right: 0.4375rem;">November 2018</div>
                    <div style="margin-right: 0.4375rem;">·</div>
                    <a href="https://kit.st" class="project-link">https://kit.st</a>
                </div>
            </div>
        </div>
    </div>
    <div class="project">
        <div class="project-preview">
            <div class="preview-logo">
                <img src="/projects/magehash.png" class="logo">
            </div>
            <div class="project-content-container">
                <a class="project-title-link" href="https://magehash.com">
                  <h3 class="project-title">Magehash</h3>
                </a>
                <div class="project-description">
                    Static Asset Monitoring, to avoid Magecart attacks <a href="/magecart" class="project-link">more about it here</a>.
                </div>
                <div class="project-meta">
                    <div style="margin-right: 0.4375rem;">October 2018</div>
                    <div style="margin-right: 0.4375rem;">·</div>
                    <a href="https://magehash.com" class="project-link">https://magehash.com</a>
                </div>
            </div>
        </div>
    </div>
    <div class="project">
        <div class="project-preview">
            <div class="preview-logo">
                <img src="/projects/klippedin.png" class="logo">
            </div>
            <div class="project-content-container">
                <a class="project-title-link" href="https://klipped.in">
                  <h3 class="project-title">Klipped.in</h3>
                </a>
                <div class="project-description">
                    A cross platform clipboard based on the same concept of Appear.in
                </div>
                <div class="project-meta">
                    <div style="margin-right: 0.4375rem;">September 2018</div>
                    <div style="margin-right: 0.4375rem;">·</div>
                    <a href="https://klipped.in" class="project-link">https://klipped.in</a>
                </div>
            </div>
        </div>
    </div>
    <div class="project">
        <div class="project-preview">
            <div class="preview-logo">
                <img src="/projects/dripform.png" class="logo">
            </div>
            <div class="project-content-container">
                <a class="project-title-link" href="https://dripform.ga">
                  <h3 class="project-title">Dripform</h3>
                </a>
                <div class="project-description">
                    Receive forms as messages on Telegram
                </div>
                <div class="project-meta">
                    <div style="margin-right: 0.4375rem;">July 2018</div>
                    <div style="margin-right: 0.4375rem;">·</div>
                    <a href="https://dripform.ga" class="project-link">https://dripform.ga</a>
                </div>
            </div>
        </div>
    </div>
</div>

<h2 class="title">👨🏼‍💻 My Work</h2>

Working on this.. Will fill this soon!

<h2 class="title">🤹‍♂️ My Skills</h2>

<h3>Programming Languages</h3>
<div class="skills">
    <div class="skill">
        <div class="preview-skill">
            <img src="/projects/clj.png" class="skill-icon"/>
        </div>
        <p class="skill-name">Clojure</p>
    </div>
    <div class="skill">
        <div class="preview-skill">
            <img src="/projects/js.png" class="radius2"/>
        </div>
        <p class="skill-name">JS</p>
    </div>
    <div class="skill">
        <div class="preview-skill">
            <img src="/projects/py.png" class="skill-icon"/>
        </div>
        <p class="skill-name">Python</p>
    </div>
    <div class="skill">
        <div class="preview-skill">
            <img src="/projects/c.png" class="skill-icon"/>
        </div>
        <p class="skill-name">C</p>
    </div>
</div>

<h3>Languages</h3>

<div class="skills">
    <div class="skill">
        <div class="preview-skill">
            <h2>🇮🇹</h2>
        </div>
        <p class="skill-name">Italiano</p>
    </div>
    <div class="skill">
        <div class="preview-skill">
            <h2>🇺🇸</h2>
        </div>
        <p class="skill-name">English</p>
    </div>
    <div class="skill">
        <div class="preview-skill">
            <h2>🇫🇷</h2>
        </div>
        <p class="skill-name">Français</p>
    </div>
    <div class="skill">
        <span class="label">basic</span>
        <div class="preview-skill">
            <h2>🇨🇳</h2>
        </div>
        <p class="skill-name">中文 (不错)</p>
    </div>
</div>

<h2 class="title">🗺 Around The Internet</h2>

You can find me on [twitter](https://twitter.com/0xferruccio), [github](https://github.com/ferrucc-io) and monthly in your inbox, if you subscribe to my newsletter.