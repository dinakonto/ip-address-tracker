# Frontend Mentor - IP Address Tracker

![Design preview for the IP Address Tracker coding challenge](./design/desktop-preview.jpg)

## What is this?
This is my response to a front-end coding challenge from [Frontend Mentor](https://www.frontendmentor.io). Frontend Mentor provides great development challenges alongside beautiful designs, enabling you to build your skills using realistic projects.

I plan to take on most, if not all, of the free challenges in order from easiest (*'Newbie'*) to hardest (*'Advanced'*).

## The challenge
Challenge #16
Difficulty: Intermediate

This challenge was to build out an IP Address Tracker app and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP Address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

## My approach
I started by focusing on handling the API call to [IPify](https://geo.ipify.org/) using jQuery's `.ajax()` method. It's my first time really working with an API, so I relied heavily of IPify's documentation and a useful article on how to [Make Your First API Calls with JQuery AJAX](https://hackersandslackers.com/making-ajax-calls-with-jquery/) from Hackers and Slackers.

Once I got that working, I interpreted the responses into a functioning map using [LeafletJS](https://leafletjs.com/). I then went mobile-first on the styling with Sass, using the [PerfectPixel Chrome extension](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi) to help get the page as close to the designs as possible. 

## Questions
Lots more reading to do on APIs but my biggest question at the moment is how you'd go about making the API call secure?

Cheers! 🍻
