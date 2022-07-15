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

// getData() //---------> data-load(get data)

//============ for post data =====
const postData = () => {
    makeRequest(`POST`, `https://jsonplaceholder.typicode.com/posts`, {
        title: 'Md Hamimul',
        body: 'Haque',
        userId: 1,
    })
}

postData()