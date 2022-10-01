// ---> axios get method
// =====================
// axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))


// ---> axios post method
// ======================
// axios
//     .post('https://jsonplaceholder.typicode.com/posts', {
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))


// ---> axios put method
// ======================
// axios
//     .put('https://jsonplaceholder.typicode.com/posts/1', {
//         body: JSON.stringify({
//             title: 'Md Hamimul',
//             body: 'Haque',
//             userId: 1,
//         }),
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))

// ---> axios patch method
// ======================
axios
    .patch('https://jsonplaceholder.typicode.com/posts/1', {
        body: JSON.stringify({
            title: 'Md Rafaetul',
            body: 'He is a kind man',
            userId: 1,
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))