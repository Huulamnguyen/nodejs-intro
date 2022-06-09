const request = require('request');

// todo 1 GET: https://jsonplaceholder.typicode.com/posts
const url1 = `https://jsonplaceholder.typicode.com/posts`;
request({ url: url1 }, (error, response) => {
  if (error) return console.log("error");
  console.log(response.body);
});


// todo 2 GET: https://jsonplaceholder.typicode.com/posts/{id}
const id = 2;
const url1 = `https://jsonplaceholder.typicode.com/posts/${id}`;
request({ url: url1 }, (error, response) => {
  if (error) return console.log("error");
  console.log(response.body);
});

//todo 3 POST: https://jsonplaceholder.typicode.com/posts

const post = {
  userId: 1010,
  title: "my post",
  body: "this is my post",
};

const options = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    json: true,
    body: post,
};

request.post(options, (err, res, body) => {
    if(err) return console.log(err);
    console.log(body)
})

//todo 4 PUT: https://jsonplaceholder.typicode.com/posts/{id}
const updatePost = {
    body: "update my post",
}

const options = {
    url: `https://jsonplaceholder.typicode.com/posts/${2}`,
    json: true,
    body: updatePost,
}

request.put(options, (err, res, body) => {
    if(err) return console.log(err);
    console.log(res.statusCode)
})


//todo 5 DELETE: https://jsonplaceholder.typicode.com/posts/{id}
request.delete('https://jsonplaceholder.typicode.com/posts/2', (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log('Status Code:', res.statusCode);
});