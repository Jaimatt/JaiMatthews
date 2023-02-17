// Scroll Buttons

function section(n) {
    element = document.getElementById("sec"+n)
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

// Load Podcasts

podImgLinks = [
    "assets/Cover-05.png",
    "assets/Cover-04.png",
    "assets/Cover-03.png",
    "assets/Cover-02.png",
    "assets/Cover-01.png",

]

podGoLinks = [
    "index.html",
    "https://youtu.be/FSHchUziedg",
    "https://youtu.be/Bv6nEl0zsQo",
    "https://youtu.be/jUXt0Ar1vzA",
    "https://youtu.be/9zdNXWLgPRA",
]

podNav = 0
newPods = ""
podParent = document.getElementById("podParent")

function loadMore() {
    for (let i = 0; i < 3; i++) {
        if (podImgLinks.length > podNav) {
            newPods = newPods + `
                <a href="`+podGoLinks[podNav]+`" style="text-decoration: none;">
                <div class="podcast">
                    <img src="`+podImgLinks[podNav]+`">
                </div>
                </a>
            `
            podNav += 1
        } else {
            console.log("No more to load")
            document.getElementById("loadLink").style.display = 'none'
        }
    }
    podParent.innerHTML = newPods
}

loadMore()

// Load Reviews

reviewParent = document.getElementById("reviewParent")

hypertext = ""

reviewAccImg = [
    "assets/user.png",
    "assets/user.png",
    "assets/user.png",
    "assets/user.png",
    "assets/user.png",
    "assets/user.png",
]

reviewScore = [
    "3.5",
    "5",
    "0.5",
    "3",
    "4",
    "2",
]

reviewName = [
    "John Smith",
    "Mark Gurney",
    "Brad Surname",
    "Firstname Bradson",
    "Dr A Hasntgotaname",
    "King John of England"
]

reviewContent = [
    "The JaiRell Experience was a perfectly tolerable podcast. I may listen to the next episode.",
    "I thoroughly enjoyed listening to The JaiRell Experience.",
    "Absolutely appauling. I hated this podcast. The hosts smell weird.",
    "Is good",
    "A very fine podcast indeed. I particularly enjoyed the second installment.",
    "Magna Carta?",
]

for (let i = 0; i < reviewAccImg.length; i++) {

    count = 0
    stars = ""

    while (reviewScore[i] > 0) {
        console.log("hi")
        if (reviewScore[i] > 0.5) {
            stars = stars + `<i class="fa fa-star" aria-hidden="true"></i>`
        } else {
            stars = stars + `<i class="fa fa-star-half-o" aria-hidden="true"></i>`
        }
        count += 1
        reviewScore[i] -= 1
    }

    while (count < 5) {
        stars = stars + `<i class="fa fa-star-o" aria-hidden="true"></i>`
        count += 1
    }

    hypertext = hypertext + `
        <div class="reviewParent">
            <div class="img">
                <img src="`+reviewAccImg[i]+`">
            </div>
            <div style="display: inline-block; vertical-align: middle; margin-left: 10px;">
                `+stars+`
                <br>
                <b>`+reviewName[i]+`</b>
            </div>
            <p>`+reviewContent[i]+`</p>
        </div>
    `
}
reviewParent.innerHTML = hypertext