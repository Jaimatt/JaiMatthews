var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
message = urlParams.get('message')
document.getElementById('message').innerText = message