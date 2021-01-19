// Concatenate URL for Request
function createURL() {
    nationName = document.getElementById("nName").value;
    shard = "dispatchlist";
    /* shard = document.getElementById("shard").value; <-- Only if needed */
    apiURL = "https://www.nationstates.net/cgi-bin/api.cgi?nation=" + nationName + "&q=" + shard;
    resultBox.innerHTML = resultBox.innerHTML + "\n>URL created...";
}

// Send Request
function getRequest() {
    done = false;
    xhr.open("GET", apiURL);
    xhr.responseType = 'document';
    xhr.send();
    if (xhr.status === 200) {
        response = xhr.response;
    }
    xhr.onload = function() {
        response = xhr.response;
        done = true;
    };
    resultBox.innerHTML = resultBox.innerHTML + "\n>Request finished...";
}