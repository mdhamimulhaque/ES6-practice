// ---> axios get method
// =====================
// axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))


// ---> axios post method
// ======================
axios
    .post('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))