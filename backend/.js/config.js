let xhr = new XMLHttpRequest();

var nationName;
var regioName;
var shard;

var resultBox = document.getElementById("resultBox");
var resultBoxText = resultBox.innerHTML;

var done;
var apiURL;
var response;
var jsonResult;

var ids = [];
var dispatches = [];