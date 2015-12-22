# Parody

Building web apps that pull information from the environment is
all fun and games until you need to modify your request headers.

Now, it can continue to be fun and games, even *when* you need
to modify your request headers!

## Quick start

1. Run `npm install -g parody` to install the command-line tool
2. Move to your working directory
3. Create a `parody.json` file that has at least the following directives

```json
{
  "headers": {
    "header_one": "value_one",
    "header_two": "value_two"
  },
  "target": "http://some-awesome-hostname:8080",
  "debug": false,
  "port": 8080
}
```

This will add the following HTTP headers to the request:

```
"header_one" = value_one
"header_two" = value_two
```

4. Run `parody` in your working directory to start a proxy server
5. Access `http://localhost:$PORT` (where `$PORT` is your configured port in
  `parody.json`, or a default of `8080`)

## Report issues!

If you encounter anything strange while using parody, make an issue, or [ask me on Twitter](http://twitter.com/brandon_mn).

## Incoming improvements

- expanded documentation
- revamped debug mode
- HTTPS support

## See also:

Parody uses [Node HTTP Proxy](http://npmjs.com/http-proxy) to add headers
to HTTP requests. If you're looking to programmatically proxy things, check
out that project.
