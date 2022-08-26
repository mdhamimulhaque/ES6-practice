// ========> fetch data with async-wait use <=========

// const jsonDataLoad = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()

//     return data;
// }

// jsonDataLoad().then(data => console.log(data));




// ===========>all api work done with fetch data with common functionality <============
// ===============================================================
const makeRequest = async (url, config) => {
    const res = await fetch(url, config)
    if (!res.ok) {
        const message = `Error : ${res.status}`;
        throw new Error(message)
    }
    const data = await res.json();
    return data;
}

// -----> Load Data <-----
// -----------------------

// const dataLoad = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err))
// }

// dataLoad()



// -----> post Data <-----
// -----------------------

// const postData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'This is post',
//             body: 'Hii.. this is Md Hamimul Haque',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((data) => { console.log(data) })
//         .catch((err) => console.log(err))
// }

// postData()

// -----> update Data <-----
// -------------------------

// const updateData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: 1,
//             title: 'update my post',
//             body: 'hii.... Tamal',
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((data) => { console.log(data) })
//         .catch((err) => console.log(err))
// }

// updateData()

// -----> PATCH method <-----
// --------------------------

// const patchData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PATCH',
//         body: JSON.stringify({
//             id: 1,
//             title: 'PATCH DATA',
//             body: 'hey...who are you?',
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((data) => { console.log(data) })
//         .catch((err) => console.log(err))
// }

// patchData()

// -----> delete Data <-----
// -------------------------

const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    })
        .then((data) => { console.log(data) })
        .catch((err) => console.log(err))
}

deleteData()

