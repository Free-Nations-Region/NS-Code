var result;
var dispatchResult = [];
var dispatchRequestStatus = false;
var idsStatus = false;
var url = 'https://www.nationstates.net/cgi-bin/api.cgi';
var uAgent;

// Create the URL for jsonRequest
function generateApiUrl(nr,uAgent,name,shard) {
    var url;
    var shards = shard[0];
    // String shards together into one
    for (var i = 1; i < shard.length; i++) {
        shards = shards + "+" + shard[i];
    };
    
    if (nr == "nation") {
            url = "https://www.nationstates.net/cgi-bin/api.cgi?nation=" + name + "&q=" + shards; 
        } else if (nr== "region") {
            url = "https://www.nationstates.net/cgi-bin/api.cgi?region=" + name + "&q=" + shards;
        } else if (nr == "dispatch") {
            url = "https://www.nationstates.net/cgi-bin/api.cgi?q=" + shards;
        };    
    console.log(url);
    resultBox.innerHTML = resultBox.innerHTML + "\n>URL created...";
    uAgent = uAgent;
    jsonRequest(url, uAgent);
}
    

function jsonRequest(url, uAgent) {
   // Checks User-Agent
   if (uAgent == "") {console.log("Error: No User-Agent defined."); return;};
   // API Request
   fetch(url)
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            resultBox.innerHTML = resultBox.innerHTML + "\n>Request finished...\n>Parsing...";
            result = x2js(data);
            if (dispatchRequestStatus == true) {
            dispatchResult.push(result.WORLD.DISPATCH.TEXT);
            } else {
                filterIds();
                resultBox.innerHTML = resultBox.innerHTML + "\n>Dispatches:\n" + ids.toString();
            }
            console.log(result);
            
        });
    
}

// Parse Text
function x2js(text) {
   var x2js = new X2JS();
   return x2js.xml2json(text); 
}
