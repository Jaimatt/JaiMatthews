function setParameters() {
    endHour = document.getElementById('hour').value
    endMinute = document.getElementById('minute').value
    partTwoMessage = document.getElementById('message').value
    document.getElementById('homeForm').style.display = "none"
    document.getElementById('homeButton').style.display = "block"
    penalty = 0
    window.history.replaceState(null, null, "?hour="+endHour+"&minute="+endMinute+"&message="+partTwoMessage+"&penalty="+penalty+"&fUnlock=false");
    document.body.style.backgroundImage = "url('assets/backdrop.png')"
}

function redirect(page,fuckyou) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    endHour = urlParams.get('hour')
    endMinute = urlParams.get('minute')
    partTwoMessage = urlParams.get('message')
    fUnlock = urlParams.get('fUnlock')
    // penalty = urlParams.get('penalty')
    if (fuckyou == 'override') {
        endHour = 'override'
    }
    window.location.href = page+"hour="+endHour+"&minute="+endMinute+"&message="+partTwoMessage+"&penalty="+penalty+"&fUnlock="+fUnlock
}

window.addEventListener('contextmenu', function (e) { 
    e.preventDefault(); 
}, false);