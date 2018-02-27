const express = require('express')
const app = express()

var userService = require('./service/userService')
var jsonParser = express.json()
var path = require('path');

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'js', 'css'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}
app.use(express.static(__dirname + '/public', options))
app.use(jsonParser)

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.get('/hello', (req, res) => res.send("Hello path :)"))
app.post('/addUser', function (req, res) {
    console.log(req.body);
    var user = req.body;
    userService.saveUser(user)
})

app.delete('/deleteUser/:userName', function (req, res) {
    userService.deleteUser(req.params.userName)
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
