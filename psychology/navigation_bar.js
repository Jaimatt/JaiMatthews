
console.log("hello")

function scrollto(iteminlist) {
    var elmnt = document.getElementById(iteminlist);
    elmnt.scrollIntoView();
}

function clearsidebar() {
    document.getElementById("button1").classList.remove('active');
    document.getElementById("button2").classList.remove('active');
    document.getElementById("button3").classList.remove('active');
    document.getElementById("button4").classList.remove('active');
    document.getElementById("button5").classList.remove('active');
    document.getElementById("button6").classList.remove('active');
    document.getElementById("button7").classList.remove('active');
    document.getElementById("button8").classList.remove('active');
    document.getElementById("button9").classList.remove('active');
    document.getElementById("button10").classList.remove('active');
    document.getElementById("button11").classList.remove('active');
    document.getElementById("button12").classList.remove('active');
    document.getElementById("button13").classList.remove('active');
    document.getElementById("button14").classList.remove('active');
}

var arrayname = new Array();
    arrayname[0]="button1"
    arrayname[1]="button2"
    arrayname[2]="button3"
    arrayname[3]="button4"
    arrayname[4]="button5"
    arrayname[5]="button6"
    arrayname[6]="button7"
    arrayname[7]="button8"
    arrayname[8]="button9"
    arrayname[9]="button10"
    arrayname[10]="button11"
    arrayname[11]="button12"
    arrayname[12]="button13"
    arrayname[13]="button14"

var distances = []
window.addEventListener('scroll', function() {

    var itemA = document.getElementById("itemA");
    itemA = (itemA.getBoundingClientRect().top);
    if ((Math.sign(itemA)) == -1) {
        itemA = itemA * -1
    }
    distances.push(itemA)

    var itemB = document.getElementById("itemB");
    itemB = (itemB.getBoundingClientRect().top);
    if ((Math.sign(itemB)) == -1) {
        itemB = itemB * -1
    }
    distances.push(itemB)

    var itemC = document.getElementById("itemC");
    itemC = (itemC.getBoundingClientRect().top);
    if ((Math.sign(itemC)) == -1) {
        itemC = itemC * -1
    }
    distances.push(itemC)

    var itemD = document.getElementById("itemD");
    itemD = (itemD.getBoundingClientRect().top);
    if ((Math.sign(itemD)) == -1) {
        itemD = itemD * -1
    }
    distances.push(itemD)

    var itemE = document.getElementById("itemE");
    itemE = (itemE.getBoundingClientRect().top);
    if ((Math.sign(itemE)) == -1) {
        itemE = itemE * -1
    }
    distances.push(itemE)

    var itemF = document.getElementById("itemF");
    itemF = (itemF.getBoundingClientRect().top);
    if ((Math.sign(itemF)) == -1) {
        itemF = itemF * -1
    }
    distances.push(itemF)

    var itemG = document.getElementById("itemG");
    itemG = (itemG.getBoundingClientRect().top);
    if ((Math.sign(itemG)) == -1) {
        itemG = itemG * -1
    }
    distances.push(itemG)

    var itemH = document.getElementById("itemH");
    itemH = (itemH.getBoundingClientRect().top);
    if ((Math.sign(itemH)) == -1) {
        itemH = itemH * -1
    }
    distances.push(itemH)

    var itemI = document.getElementById("itemI");
    itemI = (itemI.getBoundingClientRect().top);
    if ((Math.sign(itemI)) == -1) {
        itemI = itemI * -1
    }
    distances.push(itemI)

    var itemJ = document.getElementById("itemJ");
    itemJ = (itemJ.getBoundingClientRect().top);
    if ((Math.sign(itemJ)) == -1) {
        itemJ = itemJ * -1
    }
    distances.push(itemJ)

    var itemK = document.getElementById("itemK");
    itemK = (itemK.getBoundingClientRect().top);
    if ((Math.sign(itemK)) == -1) {
        itemK = itemK * -1
    }
    distances.push(itemK)

    var itemL = document.getElementById("itemL");
    itemL = (itemL.getBoundingClientRect().top);
    if ((Math.sign(itemL)) == -1) {
        itemL = itemL * -1
    }
    distances.push(itemL)

    var itemM = document.getElementById("itemM");
    itemM = (itemM.getBoundingClientRect().top);
    if ((Math.sign(itemM)) == -1) {
        itemM = itemM * -1
    }
    distances.push(itemM)

    var itemN = document.getElementById("itemN");
    itemN = (itemN.getBoundingClientRect().top);
    if ((Math.sign(itemN)) == -1) {
        itemN = itemN * -1
    }
    distances.push(itemN)

    const min = Math.min(...distances)
    const closest_item = distances.indexOf(min)

    clearsidebar()
    document.getElementById(arrayname[closest_item]).classList.add('active');

    distances = [] 
});

window.addEventListener('scroll', function() {
    
    var myDiv = document.getElementById("topbar");

    if (document.documentElement.scrollTop <= myDiv.clientHeight) {
        document.getElementById("list").style.position = "absolute"
        document.getElementById("list").style.top = "auto"
    } else {
        document.getElementById("list").style.position = "fixed"
        document.getElementById("list").style.top = "0.3%"
    }
});