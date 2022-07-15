//============== learn XHR(XMLHttpRequest) ========
//--------- topic:
// 1) event : onload(), onerror()
// 2) property : response, responseText, responseURL, status, statusText
// 3) function : open(), send(), sentRequestHeader()

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open(`GET`, `https://jsonplaceholder.typicode.com/posts`);
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

getData()