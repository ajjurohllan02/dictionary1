var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://api.api-ninjas.com/v1/dictionary',
  params: {word: ['code', 'come']},
  headers: {'X-Api-Key': '4dNuFsu07Ip53bhVHfapxw==IYN1IkfGgIAeROBW'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});