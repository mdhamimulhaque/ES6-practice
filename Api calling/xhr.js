//============== learn XHR(XMLHttpRequest) ========
//--------- topic:
// 1) event : onload(), onerror()
// 2) property : response, responseText, responseURL, status, statusText
// 3) function : open(), send(), setRequestHeader()

const makeRequest = (method, url, sendData) => {
    const xhr = new XMLHttpRequest();
    xhr.open(`${method}`, `${url}`);

    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8') //---------> for send-data 

    xhr.onload = () => {
        let data = xhr.response; //---->load data JSON formate
        let myData = JSON.parse(data) //--------> convert JSON to object
        // console.log(`check responseURL: ${xhr.responseURL} | status: ${xhr.status} `) //--------> check
        console.log(myData)
    }

    //-------> for error handling ------
    xhr.onerror = () => {
        console.log(`error is here`)
    }


    xhr.send(JSON.stringify(sendData)) //---------> for post data need to convert object to JSON formate
    // xhr.send(xhr); //--------> data-load(get data)
}

// --------> we can pass different different URl with this get method 
const getData = () => {
    makeRequest(`GET`, `https://jsonplaceholder.typicode.com/posts`)
}

getData() //---------> data-load(get data)

//============ for post data ==========
const postData = () => {
    makeRequest(`POST`, `https://jsonplaceholder.typicode.com/posts`, {
        title: 'Md Hamimul',
        body: 'Haque',
        userId: 1,
    })
}

postData()


//============ for update data ========
//---------> for update use (PUT) & update only a single value (PATCH & only value which i want to change)
const updateData = () => {
    makeRequest(`PUT`, `https://jsonplaceholder.typicode.com/posts/1`, {
        id: 1,
        title: 'Md Rafaetul',
        body: 'Haque',
        userId: 1,
    })
}

updateData()

//-------------> single data update

const updateSingleData = () => {
    makeRequest(`PATCH`, `https://jsonplaceholder.typicode.com/posts/1`, {
        title: 'Md HHH',
    })
}

updateSingleData()

//================== delete-Data ==================
const deleteData = () => {
    makeRequest(`DELETE`, `https://jsonplaceholder.typicode.com/posts/1`)
}

deleteData()