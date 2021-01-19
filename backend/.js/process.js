function getIds() {
    for (var i = 0; i < jsonResult.NATION.DISPATCHLIST.DISPATCH.length; i++) {
    ids.push(jsonResult.NATION.DISPATCHLIST.DISPATCH[i]._id)
    }
    resultBox.innerHTML = resultBox.innerHTML + "\n>Dispatches filtered:\n" + ids;
}