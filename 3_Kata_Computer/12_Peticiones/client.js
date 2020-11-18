const request = require('request');

request.get('https://www.google.com', (err, response, body) => {
    console.log(response.statusCode);
    console.log(main);
    console.log(err);
});
