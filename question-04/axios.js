const axios = require('axios');

// todo 1 GET: https://jsonplaceholder.typicode.com/posts
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    });
    
// todo 2 GET: https://jsonplaceholder.typicode.com/posts/{id}
const id = 1;
axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    })

// todo 3 POST: https://jsonplaceholder.typicode.com/posts
const newPost = {
    userId: 10,
    title: "at nam consequatur ea labore ea harum",
    body: "suscipit recusandae consequuntur expedita et cum\n"
}

const createPost = async () => {
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
        console.log("data:", res.data);
        console.log("HTTP status code:", res.status);
    } catch (err) {
        console.error(err);
    }
};
createPost();

//todo PUT: https://jsonplaceholder.typicode.com/posts/{id}
const updatePost = async () => {
    try {
        const res = await axios.put('https://jsonplaceholder.typicode.com/posts/2', {
            title: 'Atta Shah',
            body: 'blah blah blah'
        });
        console.log("data:", res.data);
        console.log("HTTP status code:", res.status);
    } catch (err) {
        console.error(err);
    }
};

updatePost();


//todo DELETE: https://jsonplaceholder.typicode.com/posts/{id}
const deletePost = async () => {
    try {
        const res = await axios.delete('https://jsonplaceholder.typicode.com/posts/2');
        console.log("DELETE HTTP Method Status Code:", res.status);
    } catch (err) {
        console.error(err);
    }
};
deletePost();