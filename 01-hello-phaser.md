---
title: Hello, Phaser
layout: post
---

Phaser is an engine for creating JavaScript games.  To get started, downloaded
`phaser.js`.  You'll want `phaser.min.js` when you're going to deploy, but it's
handy to be able to read the source during development.

If you get stuck with anything, there are excellent
[examples](http://phaser.io/examples) of almost anything you might want to do on
the website.

Create a directory (this will be where all of your game files live) and add the
following `index.html` file:

<pre>
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Phaser Game&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src="/phaser.js"&gt;&lt;/script&gt;
    &lt;script src="/my_game.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

Put `phaser.js` in this directory and create an empty file `my_game.js`.  This
will contain your actual game.

In `my_game.js`, add the following code:

```
var createStuff = function() {
  this.add.text(10, 5, "I'm a game.", {fill: '#ffffff'});
};

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {create: createStuff});
```

Now run `python -m SimpleHTTPServer` in this directory.  It will start a basic
fileserver on port 8000, so open your browser and go to
[localhost:8000](http://localhost:8000).  You should see a black game area and
"I'm a game." in the upper-left corner.

There are already a bunch of things going on with this code, which creates a
game world and adds a text string to it.

The entire game is basically managed by the Phaser.Game instance. Generally
you'll only have one instance of Phaser.Game per game.  One of Phaser's more
quirky aspects is that its methods collect arguments like nobody's business.
This is the first example of that: 90% of the time you're going to call this
function with 5 arguments, but only actually need to set the 5th one (the first
four arguments as specified above are the default values). Here's a rundown of
what each one is:

* The first two arguments are the width and height of the game, in pixels.
* The next (third) argument is what renderer to use, AUTO autodetects whether
  canvas or WebGl should be used.
* The fourth argument can be used to put your game in a specific HTML element on
  the page.  If we wanted to add it to, say, a div, we can specify the div's id
  as the fourth argument.  If the string is `''` (as above) or there are no
  elements matching the given id, the HTML element representing the game will
  simply be appended to the body element.
* The fifth argument is the tells Phaser where to find the code for our game. It
  says, "On game creation, run the `createStuff` function."

> Note that `createStuff` is defined before `game`. If
> the order is reversed (the first line is `var game = ...`) then `createStuff`
> will be undefined when the Phaser.Game constructor is called. Most of the
> phaser.io examples show `var game = ...` as the first line, which works for
> them because they use JavaScript's `function createStuff() {...}` syntax for
> function declaration.
>
> I try to follow the [Google JavaScript style
> guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
> which prefers the `var createStuff = function() {...}` form, so that's what this
> tutorial uses.

In the `createStuff` function, `this` is `game` (or whatever you called your
Phaser.Game instance). `add` is a
[Phaser.GameObjectFactory](http://phaser.io/docs/2.4.4/Phaser.GameObjectFactory.html)
and has lots of helpers to make it easier to add sprites and other things to
your game. The [`text`](http://phaser.io/docs/2.4.4/Phaser.GameObjectFactory.html#text)
method displays a string, indented 10 pixels to the right and 5 pixels below
the top left corner of the screen. The default text color is black, so it also
sets the text's fill to white ('#ffffff').
