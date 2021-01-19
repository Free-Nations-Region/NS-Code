function x2js(text) {
   var x2js = new X2JS();
   return x2js.xml2json(text);
   resultBox.innerHTML = resultBox.innerHTML + "\n>XML parsed to JSON..."; 
}