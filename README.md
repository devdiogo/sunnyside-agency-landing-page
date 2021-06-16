# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef) on Frontend Mentor.

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Links

- Live Site URL: [https://sunnyside-agency-landing-page-a1y3r1wm0-devdiogo.vercel.app/](https://sunnyside-agency-landing-page-a1y3r1wm0-devdiogo.vercel.app/)

### Built with

- Mobile-first workflow
- HTML5
- Flexbox
- [Next.js](https://nextjs.org/) - React framework
- [styled components](https://styled-components.com/) - For styles

### One small thing I learned

There's something called Variable Fonts.<br>

<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide">
Variable fonts are an evolution of the OpenType font specification that enables many different variations of a typeface to be incorporated into a single file, rather than having a separate font file for every width, weight, or style. They let you access all the variations contained in a given font file via CSS and a single @font-face reference... - MDN Web Docs
</blockquote>

The challenge tells us to use the font called **Fraunces**, but if you just go to [https://fonts.google.com/specimen/Fraunces](https://fonts.google.com/specimen/Fraunces) and pick the styles, it won't work like you want to.

You need to import it like this:

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9,700..900,50&display=swap" rel="stylesheet" />
```

opsz = Optical sizing
SOFT = Softness

## Author

- GitHub - [https://github.com/devdiogo](https://github.com/devdiogo)
- Frontend Mentor - [@devdiogo](https://www.frontendmentor.io/profile/devdiogo)
