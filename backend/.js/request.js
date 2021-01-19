function request() {
    createURL();
    getRequest();
    var convertInterval = setInterval(function() {
        if (done == true) {
            jsonResult = x2js(response);
            console.log(jsonResult);
            getIds();
            clearInterval(convertInterval);
        }
    }, 1);
}