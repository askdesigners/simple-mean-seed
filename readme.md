# AngularJS / Mongo / Passport - Seed / Grunt

This is a really simple Seed app I made, based on the one by Tiago Dreis.
That can be found here > https://github.com/tiagodreis/angularseed

I basically stripped out requireJS, as I find it silly for small projects, and added Grunt as the build tool.
Most of this read me is the same as the original, so I'll leave it in place.

## Core technologies used

- NodeJS
- Express Framework
- AngularJS
- MongoDB (mongoose)

(Other libraries used: Passport, Nodemailer and crypto)

## Instructions

1. Make sure you have Mongo installed and running
2. Run npm install (with administration rights)
3. Install Grunt locally if you don't have it already
4. Run ```grunt``` to build out the app directory (check the gruntfile for more tasks)
3. Run node app.js

## Overview

This Seed provides users with PassportJS registration / authentication and AngularJS as the client framework, as well as Grunt build tasks.

Upon registration, the application sends a confirmation e-mail (make sure you use a valid email address that you can check for the confirmation email). As for now, I'm not doing anything with it, but I plan to add more features sometime soon (Tests are a must).

## Directory Structure
    
  app.js                --> web server
    package.json          --> package dependencies
    gruntfile.js        --> grunt setup stuffs
    app/                --> main client app
        css/                --> css files, get built by Grunt
        js/                 --> javascript files, get built by Grunt
        views/        --> main view and partials, get built by Grunt
        assets/       --> images, audio, etc, get built by Grunt
    src/            --> src folder for all client-side app files
        css/                --> css files, gets built by Grunt
        js/                 --> javascript files, everything here gets concat'd into app.js
            controllers/    --> everything in here gets concat'd into controllers.js
            components/    --> everything in here gets concat'd into components.js
            services/    --> everything in here gets concat'd into services.js
        views/        --> main view and partials, these get processed and copied to app/views
        assets/       --> images, audio, etc, get copied to app/assets by Grunt, with folders intact
  config/         --> application config folder
    app(.)-strings.js   --> re-usable strings used by application
    config.js       --> app default configs (db name, etc)
    conf(.)-routes.js   --> routing passing point
    mailer.js       --> mailer module
    passport.js     --> passportjs configuration
    routes.js       --> routes's implementation
  server/         --> server side logic
      api/        --> api for model manipulation  
        helpers/      --> generic helpers (I added an encryption helper)
      models/       --> mongoose models       

Yay!
- Ryan