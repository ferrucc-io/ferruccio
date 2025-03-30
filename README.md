# The source for the ferrucc.io site

In this repository you can find the source of my personal blog.

The site is a static Hugo blog hosted on Github pages. It's currently running on Hugo 0.84.4.

The deployed version of the site is inside the `docs/` folder. If you push a change it gets deployed automatically.

To run this site locally clone the repository and install the correct theme:

```bash
git submodule init
git submodule update
```

You can now build the static site with Hugo:

```bash
hugo server
```

To run the development version of the site (including drafts) run:

```
hugo server -D
```

To build the changes you made run:

```
HUGO_ENV=production hugo
```

To add a blog post run the following command:

```
hugo new posts/[your post title].md
```

To add a page run the following command:

```
hugo new [your page title].md
```

After you update the theme run:

```
    git submodule update --remote
```

So that the git submodule gets updated
