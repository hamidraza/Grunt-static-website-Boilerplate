Grunt Static website Boilerplate
================================

Static website Boilerplate with [Grunt](http://gruntjs.com/) ([Sass](http://sass-lang.com/), [CoffeeScript](http://coffeescript.org/), [jade](http://jade-lang.com/))


### Start developing
###### Run in terminal

    'npm install'
    'grunt prod'
    'grunt dev' or 'grunt' for development

Now start changin `.sass`, `.coffee` or `.jade` files and save.
Relavent css, js and html files will get generated automatically.

###### Add New HTML files
Create `.jade` file (ex: services.jade) in `./jade` folder and add like following code for compile in file `Gruntfile.js` 

    jade: {
        ....
        files: {
            "services.html": "services.jade",
            ....
        }
        ....
    }


###### Dependencies
1. [Node.js](http://nodejs.org/)
  1. [Grunt-cli](https://www.npmjs.org/package/grunt-cli) - `npm install -g grunt-cli`
