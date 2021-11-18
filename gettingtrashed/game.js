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
    http://4.bp.blogspot.com/_e6X_AxswX3M/TFp2nqcFt6I/AAAAAAAAALg/ouYsKRkZ35I/s1600/Meat+trays.jpg        
    >`;
        trash[1] = ` src=
    https://images.theconversation.com/files/168390/original/file-20170508-5468-15e9j0c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip        
    >`;
        trash[2] = ` src=
    https://media.istockphoto.com/photos/used-paper-tissue-on-white-picture-id463230517?k=6&m=463230517&s=170667a&w=0&h=rJvKkDXEbDM02Kn6oKNQflxUJoKpWvq0XJxp1rBlX8Q=        
    >`;
        trash[3] = ` src=
    https://media.npr.org/assets/img/2011/08/11/banana-peel_wide-d9a03d2acf5f572ca6e6c2f5cb68055ce693a996.jpg?s=1400        
    >`;
        trash[4] = ` src=
    https://images.ctfassets.net/cnu0m8re1exe/4tdPnjLs1jS94Qbz0e02de/9425fb6af056f1e45cee8ed159ebd32d/Plastic-Chip-Bag.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill        
    >`;
        trash[5] = ` src=
    https://i.ebayimg.com/images/g/KHwAAOSwOu9cmPmo/s-l400.jpg        
    >`;
        trash[6] = ` src=
    data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhUZGBgYGBgYGBoaHBgcGBgaGBoZGRwYGBgcIS4lHB4rIRoYJjgmKy8xNjU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHz8hJCE0NDQ0MTQ0NjQ0NDQ0NDQ0NDQ0NjQ2MTE3NDQ0MTQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NP/AABEIALEBHQMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEAQAAEDAgMFBAgCCAYDAAAAAAEAAhEDIQQSMQUGQVFhInGBkRMyQlKhscHRB2IWIzNykqLh8RRDRILC8BUXY//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACkRAQACAQIFBAEFAQAAAAAAAAABAhEDURITITFBBBQiYaEyUnGBkUL/2gAMAwEAAhEDEQA/APZkREBERAREQEREBEUIJUIsLaOKDabjInKQBImTYW8VJnEZWIzOGbKSuDzHmVBXP7j6e3I+3erC2ljBSYXe0bNHM/YarjYVTQpPqOnSFjQ69ZZzNsV/fnvaz6BXht2qPcPeD9CtZCBePMvu9eXXZt27fqcWt8JH1KuDeE8aYP8Auj6LSEKVedfdOVXZv2bwc6Z8CD9Aqxt+nxa7+U/Vc6VEK8+ycmrp27do/mHe37K4Ns0ff/ld9lyihX3Fk5EOwbtSif8AMb4yPmqxtCkdKjP4m/dcXChyvuZ2ORG7u2V2nRwPcQrkrz6FIJGhjuV9z9J7f7egIuBbinjR7x3Od91W3aFYaVXeLifmtR6mNmeRO7u0Wn3exjnsOd2ZzXa8YIkfXyW4XvW0WjMPG0TE4lKIi0giIgIiICIqSQLlBKLCqbUot1qN8DPylYdXeCmPVa53kB9/gsTesd5aitp7Q3KwNr4hzKeZsTIBkTY/1haervBUOjWtHWSfOw+C1eM2hVdGZ5IkSLAETxA1/ovO2tXGIeldK2erMO1q59vyDR9FZdjqp1qO8HEfJWFELmm9p8veKV2VPqOd6zie8k/NUqZQLOWghIUqCEUAUohUBCiKKIhQKCHBSEQIIIRSVBQRCpVUpKClQVKOQUEKkhVFQSjTb7s18tUt4Pb8W3HwzLrFwWDrZHtdPquBPdofhK70Lt9PbNcbOLXri2d0oiLoeIiIghFZrYhrBLnBveY8ua1tfb9MeqC4/wAI8zf4LM3iveVisz2huFzm9FIgNqz2RDXA8JPZcPEwe8HQFWMRt2q71YaOgk+Z+wWsxRzgh5L5EHMSbHhdeN9Wsxh7U07ROVKLBwlYtd6J5uBLHH22jh+8OPS/NZwXNLoSFaqMkEcwQrgUOUVVTdLQeYB81WrOHNiORI8zI+BCulECkIVIRRSFTqpIUElQVIQBQRClSoUVBRCFJCAiAIgpJRSiCFSQqioQUqCpJVJQHBUQpJRGkELuNlVs9Jh45QD3jsn4hcMV0u61eWvZ7pBHc4aeY+K9/T2xbG7n165jOzoURF3OQREQaLeDZj6kVKRGZoILDAbUbrGbVrheDpcgi8jmqVQOnUFpyua4Q5jhq1w4H7gixXoK0u29iCt22EMrNEB0WeBfJUA9ZusHVsmNSD46mlxdY7vWmpw9J7OchQVap1nZnMewsqM9dhvY6PY7RzDwcO4wZCuLkmJju6YnLGxmFD26w4GWOHsuGhTAYrOCHDK9hh7eR4EflPDx5LKIWBjaDgRUYO22xHvt4tP0RWcgCtYeu17Q9psfMHiCOBGiuqKt0rPcOYB+YP8AxWRCx3GHtPOW+Yn/AIhX5QCpVIKqaoJAUwhKguQIQhSpCgBUqUKgISgQhFQFClIQAVBUwocEBQpRyCiFAVcKHILblSripIRpbIWy3erZKzRwcC0/MfEAeK15U03lrg4atIcO8GVaW4bRLFo4qzD0NFbpPDmhw0IBHcbq4vqPniIiAiIg1e2NkMrtAMtc2Syo2M7DzB4g8QbHiuPqipReKVcBrzORzZ9HWA4tn1Xc2G44SLr0NYm0MBTrUzTqNDmngdQRoWkXBHAi4XnfTi38t1vNXGhQ8KjHYV+EdlquLqJMMrnVs6MrxYHk/Q8YKuELjtWaziXVW0WjMNZWmi/OP2bvXaPZPvgfMLZW1F5vI5d6h4BBBv0Wuwz/AELxScew4/q3H2SfYPTl5LPdplYkwJ90h3kQT8JWWrNRsgjmI81NB+ZjTzAnv4/FFV6qQVKgBQC5SCkICoqVIQqIRElQihqiqklQCiCSFCApCCECQhQCEQoghUuUqlBSVJcphUQjSAVS4qZVJQdju9XzUQOLCWeVx8CFtVxeyNqtoF2YEtdlki+UibxxF11eExjKjczHBw6ajvGo8V36V4msR5cOrSa2mfDKREXs8hERAREQWa1Jr2lrmhzXAhzSAQQdQQdQuH2psephJdTDqmG4tu6phx+Xi6mOWreoC71Fi1YtGJaraazmHn1J7XNDmuBBEgi4I5ghWsXhmvYWO0PwPMdVtNtbuPpudWwjZBOaph5hr+bqXBj+Y0d3rV4TFMqNzMOhIcCIc1wsWvabtIXHek1l1UvFoY+AxLpNN57bRY++3g4deaz6bABA0ufMk/VUZBmzQM0ETxjlKutWJeiSoBUZoUtUVUgCSplRBGqVDUESikhCFFAoUgKUFJCIphBCSh7lDggqDVDlEmFMIKQoKEKSgtuN1EKXKC1GkSoUuVOUoKXslpHNYuFrObBaS0jiCQfMLLlYdZjoeGkNcfVcW5g2b3bInzSDw7LY+3mvysfIebAm4cY4ECxsbfFdAuT3Z3Ww9MtxBqPxFWDlqPMBsgtIp02w1mpGhNzddYvpUzjrOXzr4z0jCURFtkREQEREELkN8MHQpRi3RTc0hr3A5fSNIIDXCIeRrJIgNN4XXos2rFoxK1nE5h45h99cG6Ic+5A9RxudAcoMSs2jvVgnC2IZrHazNk9MwEruN5N3qGJpuDwGvAltQAZmxe/vN5tNu7VeZVNy6JJIe9pJkwRY62EW+i5r0pXu6aXtbs39HaeHeezXpuPIPZPlKzWX0MjouFfuC0epVdYyMzWkA8xAHTyWL+gL2mWVGGLiWvBB781/FefDSfP4bzbZ6OVGq88bu3j2epiHGDNq9Rs9DA0VQpbXZ/mPdBm3onyOUvFu/wCCcEeJg4p2ehgKYXnzds7VYO3TBveac9nlDDr4qpm+eLb6+Fbre1VojnJBv4dynKnx1/teKPLv5UgrhKX4giYfhiLxaq2ehggAeazaW/8AhjrSri8Wa0g9YDpjwUnStsccbusITiudZvtgjrVLbxdjzfva0iOullnU94sIf9RTF47Tg0zyIdBBuszS0eGotG7bKAsejjqTx2KrHTEZXtdPkVfaPJQS4KkBHFJUUKkKiUBQHKMylxUSFloIVDgqnjqqY5rQKhwVSpcsigqh4uDzBB8P7nyV0q1W0nlfy1+EoMnZ20X0HFzTLfaaT2SOfQ9V22z8ayswPpmWm3cRqD1XnlLY+FxNVjcSxzmiQ2HOaJMRmykZhqOmY8yvRcBgadGm2lSYGsYIa0aAchK7vT54e7j18cXZloiLpeAiIgIiICIiDW7cq5aLusN/iMH4SuPhdJvXsmriKLWUappPFRrs3AgAgtdY2M8OIHceOfuFtAmf/I5RpDWuPjmkX8IXPq6U2nMPbT1IrHVmhqrDei43eTdTaOHdTDcXUrAtcS7O+nebg9ok2I0iFqP0dx7tarheZNZ5J5TI06f9HjOlETiZe0XmYzEPSsipc0f3Xm53NxLx2qovcy57j3SeH/eSkbh1Dq+mJsYa+T39r5KcNf3fhrits9Ee9g1e0d5AVp+Ooj1qtMdC9g+ZXDU9wDBmq24gkNMkd+b+/FX2bgNGtU6RZomDwkzb+2imKfu/Bm235dNUx+C0dWw5mLF9MkzpaVg1q+y3es7DEnS7CTwtC11PcGmI/WvPc1gibEC3FXWbiUBYuf8AyjXlAT4R5lflPhbrDZM+uwcBkNQHXQZeMxZa6rS2OJy1XAzl7Lahk8oLCJ+63bNy8MOD45B0ecK8zc/CjRj/AON/3Vi9Y8ynDafEOQq4TZ0uIxFRxkZppOcM02LuyOJi/MhYTzQaXejxNXUCGsc2OUQ+3KwXfs3Uwo/yp4es77qxWwezaZyvFEOMgCQ51tRlElbjUj7lmdOfpw52zXY45MTXOggFxDesOcQ7rr4WWTT3uxbXQMQSAI7TKbr6yTF+VvDmdvitsbMaOxQL5FsrA1pjSS6CO+OC02KxzKlqODZfiZfHTsAX8bdVuJie8f6zMY7Szae/mIBgmi61yWvF+5piOGp59Fm0d/algaNNx9otqFrQekgnvt5rjscwtd2mtbEdkBodJveJLe4/1WK+pJFpA4G4H08eq3yqT4Z47R5ejt34bYPw75PuOa9o1g5oAv8A3hZTd9MP2czatMkwMzWza3suMCbX14LypzjczrroJm9/6r0rcT8M6lbLWxRfSomHNpgltSoNe1xYw/xH8tipyKSnOtDbM3rwhAmoWzAGdj2gk8AS2CVkUduYV1m4imY/M0ReLzpddvW3TwDhDsHQMCP2bJjvAkrAxX4e7NqCHYYaz2X1WidJhrwJjisz6au6xrzs0dPEMd6r2u/dcD8ipc3vWTivwq2e8EAVac6ljxJ73Pa4/eBKwn/hQxoPocbXYSIkw6OoDS0SefyWZ9LtLUeojZWAj2AgiYkETxAIiQsT/wBd49kmntMuMQA9r8s6SQXO8hafJW6W6e2WkZq+HeBqLAGNIPogWzx16a2z7aYXn1lm4b8O8SHNLtpvc0EOyikQHN1ymKmnUXv3R6OBCxtmMeKTBUjOGtDo0kBZa66xEdow5rWme6URFpkREQEREBERAUKUQc/vTRltN/ulzf4hM/yjzXOGmuz21RzUHjiG5h3t7UeMR4rjCYuTAHPRcevX5Z3dWhPxxsnIFEQtdit4cLTMOrszDVrTncIuZDZiBe+i1X6bUnuDMPSqVnHSAGjvIu6P9q8o07T2h6zesd5dSoDV51id+8Q+1JjGXtZ1RxHAiDAPQjxWE+ttHEEjPVynQAimP5dfEeS1yZ/6nDPHHiMvTsRjKdMS+oxg5vc1ov8AvELSYzfHBssHmo6JhjS6R0JgHzXK4fcms85nvY2eQLjHI5jB53HVbvDbk0Rd7nvPUwPIWTh047zn+F+U+MMbGfiAAcrMOZPF7wIPDstBnwKwH7x7QrQKbQ0GxyMjXk6rOnPiuywexMPTgNpMHgFsGU2jQAKcdY/TX/V4beZeefo/jq/7Wo6PzvLgZ5sFvDT5rPwu4rbZ3kgaBgDQONj63xW12rvZh6JLWH0r5IDWEZQRaHP0F7cVpajcdjT2j6KkfYbmbPOTOZw4XtaYWuK8x1nhhMV8RmV3EjZ+GJGQVnjUDtlv77z2W92vQrHb/i8SIYwYakQQA0Q4jq/1jbgIC32zN2aNGDlD3e8dZ6DQLdNYAFibxHbr9y1FZ8/hyFDc9jRftdTxPXr9li4vYDGuFNlM1KroyU2DtOmYJ4NbY9o2EE8DHVUHVsU80cHFpbUxBE0qXMN4VH8gJE68Y7vd3dujhGnLL6jzNSq+73m2p9lthDRaw1N176Vbz1tPR5al6R0rHVy+5v4b06Dm18TlqVQczaYH6qmeBIJOd4tc2B0EgOXoiKV1OSZyIiICIiAiIgIiICIiAiIgIiICIiAiIgtvYCCDoQQe4rz0fhXQM+lxFeo0nQEA5R7OZ2YxpMQTHUr0VFMLEzDl9nbg7OoiG4Zr7R+sLqkjlDyRFtIXRYbDMY3KxjWDk0Bo8gr6Ko873n3dbQrOxdNgNJ5nENAvTcT+3b+U+2Ofa95UNYIBEEFeiPaCCCJBsQeM8FwW1Nn/AOEfH+nfmLHE2okAuNNxPsQCWnoRwBPNraWesOjR1MdJUsYFLiBJMAcToAOq5jaO+DGhww7HV3NDiXCRTa1olznO1LQIkgRfVaFtHE7QgvqH0ZIMCAyR7rGn4uJMrwjTnGbdIe/HmcR1b7a2+WHZ2aQNd85ex6k/v+1w9WVpn0sbjf2j/R0zctaMrSORabuH7x8F0Oy93aVK+XM6IzOufNbhrALBTirX9Mf3K8Mz+qWl2Tu3RpAHLmOkmDHdy8Fu6bANLK5K1u1drMo5Ww51R5Ap0mgl73GYAABgEiJKx8rzvK5iI2hlYzFMpsL3uDWiLnrYAcyeQVjZmw6+0O0/Ph8IbQRlrYgTq0yclMjjFwbTII2m725znvbicdDngA08OINKkdczvffeJ077R3q7NLQivWe7l1NaZ6QxcDgmUWCnTaGtaIAHzJ1JPEm5WWiLoeAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAsTH4NlZjqdRocxwgtMieOouDMEEXELLRBhbP2bRotyUqbGNOoaAJ6uOrj1K4Xbm5D8O92J2eAAb1ML7DubqQ9k/lHh7p9GRSYiYxKxaYnMPL9m7SZWacste2z2Os9h5Ed/HRZZW53p3SbXPp6BFLEt0cLNf0qAa9/nMCOVdsrHYqs6g1pw9JnZq1nAh7j/wDPQX1seVwDfktoTxdHVXWiYzKzi9pVaj/8Pg2GpXOro/V07wXPdoY8pgG5APabq7pMwv6yofS4hwOaoZOUnVtPNJa3hJMmBoAANju9u9h8FSFKgwNGribve73nu4n4DgAtuuimnFY6PC+pNkoiL0eYiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCEREBSiICIiAiIgIiICIiAiIgIiICIiD//Z        
    >`;
        trash[7] = ` src=
    https://sanjoserecycles.org/wp-content/uploads/2015/02/milk-jug-empty.jpg        
    >`;
        trash[8] = ` src=
    https://homesteading.com/wp-content/uploads/2019/09/59-The-Magnificent-Orange-Peel-Clever-Homestead-Uses-for-Citrus-Peels-ss-1200x900.jpg        
    >`;
        trash[9] = ` src=
    https://static.turbosquid.com/Preview/2014/05/19__22_55_06/thumbnail.png096d5d1e-220e-4a3b-8cdd-4d765a90820eLarge.jpg        
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
    var correct = ' src=https://thumbs.dreamstime.com/b/green-correct-symbol-white-background-green-correct-symbol-108998257.jpg>'
    var incorrect = ' src=https://thumbs.dreamstime.com/b/incorrect-rubber-stamp-vector-red-isolated-151086702.jpg>'

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