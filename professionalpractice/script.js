function act() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

links = [
    {
        title : "Portfolio Website",
        date : new Date(2026,6,5),
        img : "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_ticket.svg",
        link : ""
    },
    {
        title : "GiT Expo Workshops",
        date : new Date(2026,2,26),
        img : "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_ticket.svg",
        link : ""
    },
    {
        title : "Flinders University Game Jam",
        date : new Date(2026,2,19),
        img : "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_ticket.svg",
        link : ""
    },
    {
        title : "CS Club Industry Night",
        date : new Date(2026,3,10),
        img : "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_ticket.svg",
        link : ""
    },
    {
        title : "Crack the Cyber Case Workshop",
        date : new Date(2026,3,4),
        img : "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_ticket.svg",
        link : ""
    },
    {
        title : "Kuarna Day",
        date : new Date(2026,3,5),
        img : "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_ticket.svg",
        link : ""
    },
    {
        title : "Finding Casual Work",
        date : new Date(2026,3,16),
        img : "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_ticket.svg",
        link : ""
    },
    {
        title : "How to use LinkedIn",
        date : new Date(2026,3,18),
        img : "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_ticket.svg",
        link : ""
    },
    {
        title : "How to write a resume and cover letter that work ",
        date : new Date(2026,3,23),
        img : "https://ssl.gstatic.com/calendar/images/eventillustrations/2024_v2/img_ticket.svg",
        link : ""
    }
]

a = false;

function refresh() {
    document.querySelector(".links").innerHTML = '';

    if (document.querySelector("#sel").value == "a") {
        links.sort(function(a, b){return a.date.getTime() - b.date.getTime()});
        console.log('sorting by date')
    } else if (document.querySelector("#sel").value == "b") {
        links.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        });
        console.log('sorting by title')
    }

    if (document.querySelector("#sel2").value == "rev") {
        links.reverse()
    }
    

    for (x of links) {
        document.querySelector(".links").innerHTML += `
        <div class="link ${a ? "accessible" : ""}" style="background-image: url(${x.img});">
            <div>
                <h1>${x.title}</h1>
                <p>${x.date.getDate()}.${x.date.getMonth()}.${x.date.getFullYear()}</p>
            </div>
        </div>
        `
    }

    l = document.getElementsByClassName('link')

    for (x = 0; x < l.length; x++) {
        l[x].style.animationDelay = x / 10 + 's'
        l[x].style.display = 'inline-block'
    }
}

function img() {
    a = !a;
    console.log('hi')
    l = document.getElementsByClassName('link')

    for (x = 0; x < l.length; x++) {
        l[x].classList.toggle('accessible')
    }
}

refresh()