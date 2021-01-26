var ids = [];
var dispatchIndex = 0;
    
    
function filterIds() {
    console.log("Filtering dispatch ID's...")
    for (var i = 0; i < result.NATION.DISPATCHLIST.DISPATCH.length; i++) {
        ids.push(result.NATION.DISPATCHLIST.DISPATCH[i]._id)
    }
    console.log(ids);
    getDispatches();
}

function getDispatches() {
    console.log("Please wait...")
    dispatchRequestStatus = true;
    var rateLimit = setInterval(function() {
        if (dispatchIndex < ids.length) {
            var dispatchUrl = ["https://www.nationstates.net/cgi-bin/api.cgi?userAgent=https://ns.heaveria.com%20(In%20use%20by%20nation:%20" + uAgent + "&q=dispatch;dispatchid=" + ids[dispatchIndex]];
            jsonRequest(dispatchUrl, uAgent);
            resultBox.innerHTML = resultBox.innerHTML + "\n>Dispatch --> " + (dispatchIndex + 1) + "/" + ids.length;
        } else {
            prepareDispatches();
            clearInterval(rateLimit);
        }
        dispatchIndex++
    }, 2500)
}

function prepareDispatches() {
    // Adds all dispatches together.
    var between;
    console.log("Finalizing...")
    resultBox.innerHTML = resultBox.innerHTML + "\n>Finalizing...";
    for (var i = 0; i < dispatchResult.length; i++) {
        between = between + "Dispatch " + i + "/" + dispatchResult.length + "\n\n" + dispatchResult[i] + "\n";
    }
    dispatchResult = between;
    resultBox.innerHTML = resultBox.innerHTML + "\n>Result:\n" + dispatchResult;
    // Saves result as a .txt
    var blob = new Blob([dispatchResult],
                { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dispatches.txt");
    console.log(dispatchResult);
}