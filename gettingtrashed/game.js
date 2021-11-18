var buttonelementA = document.getElementById('gamebutton_1');
var buttonelementB = document.getElementById('underline2BUTTON_B');
var buttonelementC = document.getElementById('underlineBUTTON_B');
var buttonelementD = document.getElementById('gamebutton_2');
var buttonelementE = document.getElementById('underline2BUTTON_C');
var buttonelementF = document.getElementById('underlineBUTTON_C');


buttonelementA.style.display = 'none';
buttonelementB.style.display = 'none';
buttonelementC.style.display = 'none';
buttonelementD.style.display = 'none';
buttonelementE.style.display = 'none';
buttonelementF.style.display = 'none';

var form = document.getElementById('finalform');
form.style.display = 'none';


var image;
var points;
var round;
var image_size;
image_size = 360
points = 0
round = 0
var chosen = new Array ();
var feedback = new Array ();
var trueorfalse = new Array ();
var trash = new Array (); 
        trash[0] = ` src=
    assets/newtrash/image0.jpg        
    >`;
        trash[1] = ` src=
    assets/newtrash/image1.jpg
    >`;
        trash[2] = ` src=
    assets/newtrash/image2.jpg
    >`;
        trash[3] = ` src=
    assets/newtrash/image3.jpg
    >`;
        trash[4] = ` src=
    assets/newtrash/image4.jpg
    >`;
        trash[5] = ` src=
    assets/newtrash/image5.jpg        
    >`;
        trash[6] = ` src=
    assets/newtrash/image6.jfif
    >`;
        trash[7] = ` src=
    assets/newtrash/image7.jpg        
    >`;
        trash[8] = ` src=
    assets/newtrash/image8.jpg
    >`;
        trash[9] = ` src=
    assets/newtrash/image9.jpg
    >`;


function new_image() {
    image_size = 360
    var pickrandom = Math.floor(trash.length * Math.random());
    document.getElementById("demo").innerHTML = (`<img width=360 height=240`+trash[pickrandom]);
    image = pickrandom
}

function show_button() {
    var hidebutton1 = document.getElementById('hb1');
    var hidebutton2 = document.getElementById('hb2');
    var hidebutton3 = document.getElementById('hb3');
    var hidebutton4 = document.getElementById('hb4');

    var startbutton = document.getElementById('start');

    hidebutton1.style.display = 'inline-block';
    hidebutton2.style.display = 'inline-block';
    hidebutton3.style.display = 'inline-block';
    hidebutton4.style.display = 'inline-block';

    startbutton.style.display = 'none';
}

function validate(a) {
    var hidebutton2 = document.getElementById('hb2');
    var hidebutton3 = document.getElementById('hb3');
    var hidebutton4 = document.getElementById('hb4');
    var hidebutton1 = document.getElementById('hb1');


    hidebutton2.style.display = 'none';
    hidebutton3.style.display = 'none';
    hidebutton4.style.display = 'none';

    var trashcheck = new Array ();
        trashcheck[0] = '1';
        trashcheck[1] = '2';
        trashcheck[2] = '3';
        trashcheck[3] = '3';
        trashcheck[4] = '1';
        trashcheck[5] = '1';
        trashcheck[6] = '2';
        trashcheck[7] = '2';
        trashcheck[8] = '3';
        trashcheck[9] = '3';

    round = round + 1

    var you_answered = ''
    if (a == 1) {
        you_answered = 'Landfill'
    } else if (a == 2) {
        you_answered = 'Recycling'
    } else if (a == 3) {
        you_answered = 'Compost'
    }

    var true_answer = ''
    if ((trashcheck[image]) == 1) {
        true_answer = 'Landfill'
    } else if ((trashcheck[image]) == 2) {
        true_answer = 'Recycling'
    } else if ((trashcheck[image]) == 3) {
        true_answer = 'Compost'
    }

    feedback.push(`
    You answered: <br>`+you_answered+`.<br>
    The correct answer is: <br> `+true_answer+`.
    `)
    chosen.push((`<img width=180 height=120`+trash[image]));

    var bigprefix = '<img width=360 height=240'
    var smallprefix = '<img width=180 height=120'
    var correct = ' src=assets/tick.jpg>'
    var incorrect = ' src=assets/cross.jpg>'

    if (a == trashcheck[image]) {
        document.getElementById("demo").innerHTML = bigprefix+correct;
        trueorfalse.push(smallprefix+correct)
        points = points + 1;
    } else {
        document.getElementById("demo").innerHTML = bigprefix+incorrect;
        trueorfalse.push(smallprefix+incorrect)
    }
    
    if (round == 15) {
        var percentage = Math.round((points/15)*100)
        var message = 'GAME OVER. <br> You got '+percentage+ '% on the Test! <br> That means you got ' +points+ ' questions right. <br><br><i>'
        

        if (points == 0) {
            message = message + "No points? You're a f*cking joke!"
        } else if (points == 1) {
            message = message + "1 Point? You a useless piece of garbage!."
        } else if (points == 2) {
            message = message + "Do you really want the turtles to die?"
        } else if (points == 3) {
            message = message + "Yes, the game's called 'Getting trashed', but that doesn't mean you need to be trash!"
        } else if (points == 4) {
            message = message + "Looking at it optimistically, It's better than 3."
        } else if (points == 5) {
            message = message + "33%! WOW! You still failed!"
        } else if (points == 6) {
            message = message + "You're Below Average. Trash."
        } else if (points == 7) {
            message = message + "You Suck."
        } else if (points == 8) {
            message = message + "Half Correct is still half f*cked up."
        } else if (points == 9) {
            message = message + "9 Points? I'm just dissapointed at this point.."
        } else if (points == 10) {
            message = message + "Don't be fooled, 66% is still awful"
        } else if (points == 11) {
            message = message + "Well done. You're better than Bambi."
        } else if (points == 12) {
            message = message + "Getting there..."
        } else if (points == 13) {
            message = message + "Close, but no cigar!"
        } else if (points == 14) {
            message = message + "You just missed it son!"
        } else {
            message = message + "You're a trash God!"
        }

        message = message + `</i><br><br><br><br><br><br> 
        <u>Here's an outline of how you went:</u> 
        <br><br><table style="border-style:solid;margin-left:auto;margin-right:auto;">`
        

        for (let i = 0; i < chosen.length; i++) {
            message = message + `<tr>
            <td>Question `+(i+1)+`:<td>
            <td>`+chosen[i]+`</td>
            <td>`+feedback[i]+`</td>
            <td>`+trueorfalse[i]+`</td>
            </tr>`
        }
        

        message = message + '</table><br>'
        
        document.getElementById("demo").innerHTML = message;

        hidebutton1.style.display = 'none';

        buttonelementA.style.display = 'block';
        buttonelementB.style.display = 'block';
        buttonelementC.style.display = 'block';
        buttonelementD.style.display = 'block';
        buttonelementE.style.display = 'block';
        buttonelementF.style.display = 'block';
        form.style.display = 'block';
    } else {
        setTimeout(function() {

            new_image()
            show_button()
    
        }, 250)
    }
    
}

function submit() {
    var username = document.getElementById("fname").value;
    console.log(username)
    console.log(points)
    /* 
    
    Here goes the code that needs to get the variables (username, points) into SQL.
    
    */
    form.style.display = 'none';
}