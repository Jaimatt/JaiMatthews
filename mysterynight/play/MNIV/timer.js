var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
endHour = urlParams.get('hour')
endMinute = urlParams.get('minute')
// partTwoMessage = urlParams.get('message')
console.log(endHour)
console.log(endMinute)

if (endHour == 'override') {
    override = 'true'
} else {
    override = 'false'
}

endHour = parseInt(endHour);
endMinute = parseInt(endMinute);

penalty = urlParams.get('penalty')

var div=document.getElementById("timer");

function timeCheck() {
    if (override == 'true') {
        document.getElementById('timerParent').style.display = 'none'
        return
    }
    var toDate=new Date();
    var tomorrow=new Date();
    tomorrow.setHours(endHour,0,0,0);
    var diffMS=tomorrow.getTime()/1000-toDate.getTime()/1000;
    var diffHr=Math.floor(diffMS/3600);
    diffMS=diffMS-diffHr*3600;
    var diffMi=Math.floor(diffMS/60);
    diffMS=diffMS-diffMi*60;
    var diffS=Math.floor(diffMS);
    var result=(diffHr*60)+(diffMi)+endMinute-penalty
    var mins = result
    result+=":"+((diffS<10)?"0"+diffS:diffS);
    div.innerHTML=result;
    console.log(penalty)
    
    if (mins == 0) {
        document.getElementById('timer').style.color = 'red'
        document.getElementById('timer').style.textShadow = '0px 0px 10px red'
    } else if (mins < 0) {
        url = window.location.href
        if (url.includes('login.html')) {
            redirect('failed.html?')
        } else {
            redirect('failedDUPLICATE.html?')
        }
        return
    } // else if (mins > 79) {
    //     div.innerHTML="80:00";
    // }
}

function penalise(time) {
    penalty = parseInt(penalty)
    penalty = penalty + time
}

timeCheck()
setInterval(function(){ 
    timeCheck()
},1000);