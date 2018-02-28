# Full Stack Warmup

You will create a server side app that responds with an array of data when it receives a GET request to /entities. You will then create a client side app that makes a request to the server and adds the data to the page.

## Server Setup

* Create a directory called server
* cd into the server folder and initialize it as an npm project
  * `npm init -y`
* Create a file called `.gitignore` with the following contents

```
node_modules
```

* Install dependencies
  * `npm install nodemon express morgan cors`
* Add a start script and development script
  * Update the `scripts` section of the `package.json` to look like this

```json
"scripts": {
  "start": "node ./bin/www",
  "dev": "nodemon ./bin/www",
}
```

* Create a file called `index.js`
* Add the following contents to the `index.js` file

```js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('tiny'));
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World! 🌈'
  });
});

app.use((req, res) => {
  res.status(404)
  res.json({
    message: 'Not found. 🔍'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
```

* Start the server
  * `npm run dev`
* Open `http://localhost:3000` in a web browser
* You should see

```json
{
  "message": "Hello World! 🌈"
}
```

* Add a new GET route below the hello world route

```js
app.get('/items', (req, res) => {
  res.json([{
    property1: 'value',
    property2: 'value',
    property3: 'value'
  }, {
    property1: 'value',
    property2: 'value',
    property3: 'value'
  }, {
    property1: 'value',
    property2: 'value',
    property3: 'value'
  }, {
    property1: 'value',
    property2: 'value',
    property3: 'value'
  }, {
    property1: 'value',
    property2: 'value',
    property3: 'value'
  }])
});
```

* Open `http://localhost:3000/items` in a web browser
  * You should see the array of data.
* Give the route a more descriptive name than `items` (e.g. `books`)
* Update the property1, property2 and property3 names and values of each object to match the more descriptive name you gave the route (the properties should be the same on each object)

Example:
```js
{
  name: 'The Hitchhiker\'s Guide to the Galaxy ',
  author: 'Douglas Adams',
  image: 'https://i.imgur.com/aWZv0Bp.jpg'
}
```

* Open `http://localhost:3000/moreDescriptiveNameHere` (e.g. `http://localhost:3000/books`) in a web browser
  * You should see the updated array of data.
* Server side done!

## Client Setup
* cd up one directory out of the server directory
* Create a directory called client at the same level as the server directory (NOT inside it) and cd into it
* Create an `index.html` file
* Add a CSS framework to the `index.html` file
* Add a `header` with a navbar and a name of the app to the body
* Create a `main` element inside the body
* Create a javascript file called `client.js`
  * Log `'hello world'`
* Add the javascript file to the `index.html`
* Start `lite-server` in the client directory
* Make sure you can see the log in the console
* Inside of `app.js` make a fetch request to your items route (e.g. `http://localhost:3000/books`)
  * Parse the response as json
  * Log the response to the console
* Iterate over the response array
  * Log each item in the array
* Append an element to the `main` element for every element in the array
  * Use a `card` or similar component from the CSS framework you chose
  * Include all 3 properties of the object
* Pat yourself on the back. YOU'RE A FULL STACK DEVELOPER

![](https://media.giphy.com/media/aQYR1p8saOQla/giphy-downsized.gif)

![](https://media.giphy.com/media/5GoVLqeAOo6PK/giphy-downsized.gif)

![](https://media.giphy.com/media/11sBLVxNs7v6WA/giphy-downsized.gif)

![](https://media.giphy.com/media/axu6dFuca4HKM/giphy-downsized.gif)
