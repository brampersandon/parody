# ahead-er

Making HTTP requests is all fun and games until you need to modify your request
headers.

Now, it can continue to be fun and games, even *when* you need to modify your
request headers!

Good deal.

## Quick start

1. Clone this repository
2. Run `npm install` to pull in dependencies
3. Rename `headers.example.json` to `headers.json` and set the variables therein
as appropriate to your application.
4. Run `npm start` to start the server
5. Access `http://localhost:$PORT` (where `$PORT` is your environment var, or
  8080 if no env var is set)

## No, seriously, what good is this bundle'o'javascript?
Some apps hosted behind a web server (like Apache) use HTTP headers to pass
information from the web server to the application itself.

This is particularly helpful if you're looking to provide information through HTTP
headers, as though you were running a [Shibboleth Service Provider](https://wiki.shibboleth.net/).

Using *ahead-er*, you can make it really easy to add headers to all your HTTP
requests, by proxying them through the awesome
[node-http-proxy](http://github.com/nodejitsu/node-http-proxy).

This app simply wraps node-http-proxy, so you can add headers in a config file
with ease. It helps me proxy HTTP requests to my Docker containers. You might be
 interested if you, too, use containers to manage local development of web apps.

## What's next?

- A prettier debug mode  
- A CLI  
- More awesomeness that hasn't yet been explored  
