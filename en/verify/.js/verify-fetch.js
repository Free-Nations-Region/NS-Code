// Establish Variables
var resultBox = document.getElementById("resultBox");
var resultBoxText = resultBox.innerHTML;

async function checkVerification() {
    // Edit webpage
    document.getElementById("waiting").style.display = "inline";
    document.getElementById("vFormButton").disabled = "true";

    // Get Data
    var nation = document.getElementById("nName").value;
    var checksum = document.getElementById("vCode").value;
    var discordId = document.getElementById("discordId").value;
    if (document.getElementById("rFNR").checked) {
        var region = document.getElementById("rFNR").value;
    } else if (document.getElementById("rKS").checked) {
        var region = document.getElementById("rKS").value;
    }
    var url = "https://www.nationstates.net/cgi-bin/api.cgi?userAgent=https://ns.heaveria.com%20(In%20use%20by%20nation:%20" + nation + ")&a=verify&nation=" + nation + "&checksum=" + checksum;
    resultBox.innerHTML = resultBox.innerHTML + "\n>Request formatted for " + nation + "...\n>Sending API request...";

    // API Request. Returns integer.
    let request =
        await fetch(url);
    // Parse Result and Convert to Integer
    request = await request.text();
    let result = parseInt(request.trim());

    // Result
    if (result == 0) {
        // Failed message
        document.getElementById("waiting").style.display = "none";
        document.getElementById("failed").style.display = "inline";
        resultBox.innerHTML = resultBox.innerHTML + "\n>Sending result to Discord...";
        await fail(nation, checksum, discordId, region);
        resultBox.innerHTML = resultBox.innerHTML + "\n>Success! Result sent to Discord...";
        resultBox.innerHTML = resultBox.innerHTML + "\n>Error. Possible caues:\n- Wrong verification code.\n- Typo in the nation name.";
    } else if (result == 1) {
        resultBox.innerHTML = resultBox.innerHTML + "\n>Sending result to Discord...";
        // Discord Webhook
        await success(nation, checksum, discordId, region);
        resultBox.innerHTML = resultBox.innerHTML + "\n>Success! Result sent to Discord...";
        // Success message
        document.getElementById("waiting").style.display = "none";
        document.getElementById("success").style.display = "inline";
    } else {
        // Failed message
        document.getElementById("waiting").style.display = "none";
        document.getElementById("failed").style.display = "inline";
        resultBox.innerHTML = resultBox.innerHTML + "\n>Error. Possible caues:\n- Unknown. Attempt to refresh and try again.";
    }
}