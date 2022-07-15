//============== learn XHR(XMLHttpRequest) ========
//--------- topic:
// 1) event : onload(), onerror()
// 2) property : response, responseText, responseURL, status, statusText
// 3) function : open(), send(), sentRequestHeader()

const makeRequest = (method, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open(`${method}`, `${url}`);
    xhr.onload = () => {
        let data = xhr.response; //---->load data JSON formate
        let myData = JSON.parse(data) //--------> convert JSON to object
        console.log(myData)
    }

    //-------> for error handling ------
    xhr.onerror = () => {
        console.log(`error is here`)
    }



    xhr.send(xhr);
}

// --------> we can pass different different URl with this get method 
const getData = () => {
    makeRequest(`GET`, `https://jsonplaceholder.typicode.com/posts`)
}

getData()