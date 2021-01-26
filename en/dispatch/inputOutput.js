var resultBox = document.getElementById("resultBox");
var resultBoxText = resultBox.innerHTML;

document.getElementById("submitDispatchButton").addEventListener("click", function() {
    uAgent = document.getElementById("uAgent").value,
    document.getElementById("submitDispatchButton").disabled = true;
    generateApiUrl('nation', 
    document.getElementById("uAgent").value,
    document.getElementById("nName").value,
    ['dispatchlist']); 
});