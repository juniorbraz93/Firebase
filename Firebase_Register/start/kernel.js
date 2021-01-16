"use strict";

/** @type {import('@adonisjs/framework/src/Server')} */
const Server = use("Server");
const Firebase = require("./firebase.json");
const admin = require("firebase-admin");
const { ioc } = require("@adonisjs/fold");
/*
|--------------------------------------------------------------------------
| Global Middleware
|--------------------------------------------------------------------------
|
| Global middleware are executed on each http request only when the routes
| match.
|
*/
const globalMiddleware = [
  "Adonis/Middleware/BodyParser",
  "App/Middleware/ConvertEmptyStringsToNull",
];

/*
|--------------------------------------------------------------------------
| Named Middleware
|--------------------------------------------------------------------------
|
| Named middleware is key/value object to conditionally add middleware on
| specific routes or group of routes.
|
| // define
| {
|   auth: 'Adonis/Middleware/Auth'
| }
|
| // use
| Route.get().middleware('auth')
|
*/
const namedMiddleware = {
  auth: "Adonis/Middleware/Auth",
  guest: "Adonis/Middleware/AllowGuestOnly",
};

ioc.singleton("User/Firebase", (app) => {
  const adminFirebase = admin.initializeApp(
    {
      credential: admin.credential.cert(Firebase),
      databaseURL: "https://med365-cd2ae.firebaseio.com/",
    },
    "second" // this name will be used to retrieve firebase instance. E.g. first.database();
  );

  return adminFirebase;
});

/*
|--------------------------------------------------------------------------
| Server Middleware
|--------------------------------------------------------------------------
|
| Server level middleware are executed even when route for a given URL is
| not registered. Features like `static assets` and `cors` needs better
| control over request lifecycle.
|
*/
const serverMiddleware = [
  // 'Adonis/Middleware/Static',
  "Adonis/Middleware/Cors",
];

Server.registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(serverMiddleware);
