const express = require('express')
var axios = require("axios").default;
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(path.join(__dirname, 'public'))
    res.sendFile('public/index.html', { root: __dirname })
})
    app.get('/searchword', (req, res) => {
 
  console.log(req.query)

var options = {
  method: 'GET',
  url: 'https://api.api-ninjas.com/v1/dictionary',
  params: {word: req.query.entry},
  headers: {'X-Api-Key': '4dNuFsu07Ip53bhVHfapxw==IYN1IkfGgIAeROBW'}
};

axios.request(options).then(function (response) {
  
res.json(response.data);
}).catch(function (error) {
  console.error(error);
});


})


app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000`)
})
