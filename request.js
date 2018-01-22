
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg', function(response) {
  console.log('Download complete.');
       })
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Downloading image...');
         console.log('Response Status Code: ', response.statusCode, response.statusMessage, response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));

/*
If you wanted to improve user experience, you might wish to let the user know what is happening,
perhaps with two console.log statements:
console.log('Downloading image...');
console.log('Download complete.');
Since we know request is asynchronous, where would you insert those console.log statements to ensure they occur in order and at the right time? Give it a try!
Although you have a good spot to place the 'downloading' statement, if you tried logging 'complete' after the .pipe, what did you notice?
How could you solve this? We know request is a stream, and streams generally respond to a certain four functions (see the previous exercise if you don't remember) - which function could you chain to mark the end of a writable stream?
*/