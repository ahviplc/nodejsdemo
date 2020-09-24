// axios中文网|axios API 中文文档 | axios
// http://www.axios-js.com/

// GitHub - axios/axios: Promise based HTTP client for the browser and node.js
// https://github.com/axios/axios

const axios = require('axios').default;

console.log("================================================================================");

// GET

// axios.<method> will now provide autocomplete and parameter typings
// Make a request for a user with a given ID
axios.get('http://httpbin.org/get?ID=12345')
    .then(function (response) {
        // handle success
        // console.log(response);
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
        console.log("then1================================================================================");
    });

console.log("================================================================================");

// GET request for remote image in node.js
axios({
    method: 'get',
    url: 'http://httpbin.org/get?ID=54321',
    // responseType: 'stream'
}).then(function (response) {
    console.log(response.data);
    console.log("then2================================================================================");
}).catch(function (error) {
    // handle error
    console.log(error);
});

console.log("================================================================================");

// Optionally the request above could also be done as
// axios.get('http://httpbin.org/get', {
//     params: {
//         ID: 12345
//     }
// })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });

// console.log("================================================================================");

// Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//     try {
//         const response = await axios.get('http://httpbin.org/get?ID=12345');
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }

// console.log("================================================================================");

// POST

axios.post('http://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
    .then(function (response) {
        // console.log(response);
        console.log(response.data);
        console.log("then3================================================================================");
    })
    .catch(function (error) {
        console.log(error);
    });

// Send a POST request
axios({
    method: 'post',
    url: 'http://httpbin.org/post',
    data: {
        firstName: 'Fred2',
        lastName: 'Flintstone2'
    }
}).then(function (response) {
    // console.log(response);
    console.log(response.data);
    console.log("then4================================================================================");
}).catch(function (error) {
    console.log(error);
});
