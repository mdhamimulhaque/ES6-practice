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
// axios
//     .patch('https://jsonplaceholder.typicode.com/posts/1', {
//         body: JSON.stringify({
//             title: 'Md Rafaetul',
//             body: 'He is a kind man',
//             userId: 1,
//         }),
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))

// ---> axios delete method
// ======================
// axios
//     .delete('https://jsonplaceholder.typicode.com/posts/1')
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))



// ---> axios with async await <---
// ================================

const makeRequest = async (config) => {
    return await axios(config)
}

// ---> ( get data )
// const getData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// getData()


// ---> ( post data )
const postData = () => {
    makeRequest({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "post",
        data: JSON.stringify({
            id: 1,
            title: 'Md Hamimul',
            body: 'He is a programmer',
            userId: 1,
        })
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}
postData()