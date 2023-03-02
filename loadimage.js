const illustration = urlParams.get('no')
console.log(illustration);

const titles = [
    "Moonlit Seas",
    "Lakeside",
    "Lakeside REDUX",
    "Borealis",
    "Kara Kara Bazaar",
    "The Lighthouse",
    "Metalhead",
    "Night Time Savanna",
    "The Jetty",
    "Lakeside III",
    "Reef",
    "In The Library",
    "In The Fireplace",
    "In The Dial",
    "The Garden",
    "Sunlit Seas",
    "End of the Day",
    "A Dying Universe",
    "Borealis MkII",
    "Street Corner",
    "Volcanic",
    "A Machine of Immortality",
    "Into the Unknown",
    "The Dreamatorium",
    "The Island",
    "Sundown in the Ocean",
    "Moonlit Seas 365",
    "The Upside-Down"
]

const dates = [
    "8 December, 2020",
    "10 December, 2020",
    "23 December, 2020",
    "29 December, 2020",
    "7 January, 2021",
    "12 February, 2021",
    "14 February, 2021",
    "4 March, 2021",
    "16 April, 2021",
    "17 April, 2021",
    "22 April, 2021",
    "1 May, 2021",
    "3 May, 2021",
    "12 May, 2021",
    "5 July, 2021",
    "5 July, 2021",
    "8 July, 2021",
    "4 August, 2021",
    "13 August, 2021",
    "14 August, 2021",
    "28 August, 2021",
    "7 September, 2021",
    "13 September, 2021",
    "20 September, 2021",
    "14 October, 2021",
    "14 November, 2021",
    "8 December, 2021",
    "19 February, 2022"
]

const desc = [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " "
]

const caption = [
    "The moon used in this illustration. It would go on to be used in a couple of others.", "The stars used. They use a fairly primitive design that was expanded upon in other illustrations.", "The reflection of the water was achieved with a few iterations of one chaotic shape.",
    "Here is a sketch I did. This was the first illustration I did where a sketch was done beforehand.", "This is the same moon that was used in the first illustration that I did.", "The outline view of the artwork. It shows the shapes of all the elements.",
    "This is the sketch that the original Lakeside illustration was based upon", "Lakeside, the illustration Lakeside Redux is based upon", "In this illustration, the sun is actually composed of three separate shapes on top of one another as shown.",
    "As is usual with most of the wider landscape illustrations, a sketch was done before the illustrator work", "Secretly, I managed to put a Doctor Who reference into the artwork - A TARDIS", "The blend tool allowed me to create two shapes then generate the shapes between them",
    "The screenshot from Breath of the Wild that the illustration was based upon", "An alternate angle of Kara-Kara Bazaar from Breath of the Wild", "An image of link from BOTW showing the game's overall cell-shaded art style.",
    "This is the painting I saw that gave me the idea of basing the illustration on a lighthouse", "This is a sketch I did beforehand of the lighthouse illustration.", "This illustration was the first time I used a texture across a surface or a shape. In this case; sand.",
    "The shot in Black Mirror that this illustration is based upon.", "The sketch that was done before doing this illustration.", "A view of the illustration with the lines & vignette hidden.",

    "New Moon! This is the second moon I have designed for my series of illustrations.", "These shooting stars were a fairly simple element to add and they help make the sky more interesting.", "These details were an attempt to represent the Milky Way in the sky.",
    "This is the photograph taken at Moonta Bay that this illustration was based upon.", "This photo was taken in the same place but at day, revealing more of the area.", "The outline view for this artwork shows the simple shapes used.",
    "This is the sketch that the original Lakeside illustration was based upon", "Lakeside, the illustration Lakeside III is based upon", "One of my favourite assets I've ever created was this ripple based on a few blurred circles.",
    "This was one of the most complicated and necessary sketches I've done for an illustration.", "These two fish were actually created by Josh Brown (left) and Aidan de Sousa (right).", "These are some other sea creatures that I created for the illustration.",
    "This screenshot shows how the text warping was achieved through a malleable mesh structure", "The astronaut from Doctor Who that is shown in the illustration.", "This is the shot that inspired the design for this illustration.",
    "This beautiful vector fire was created using some complex brush strokes and transparency logic over a gradient mesh.", "The fireplace from Doctor Who that this artwork is based upon.", "The most difficult part of this illustration was to vectorise this clock from the show.",
    "This work in progress shot shows the tower before it was stylised to look the way it eventually does.", "This is the skull from Doctor Who that appears in the illustration.", "A screenshot from Doctor Who depicting the tower this illustration is based upon",

    "The Outline View for this illustration shows just how chaotic and complex this illustration is.", "This is the photograph taken in the Botanic Gardens that the illustration is based upon", "This is another photograph of the building depicted in the illustration.",
    "Sunlit Seas serves as a 'sequel' to the original 'Moonlit Seas' shown above.", "The clouds in this illustration are actually just blurred out nonsensical shapes.", "The outline view shows the water as being simply made of strokes.",
    "The sketch completed before the final artwork was created in illustrator.", "This illustration had one of the most well-defined colour schemes I've made.", "The arcs in the top corners of the outline view show the huge size of the sun's beam",
    "The outline view shows the black hole to be made mostly of many concentric circles.", "This was the first time I used illustrator's DASHED LINE feature for an artwork.", "One of my favourite assets is this decaying planet that appears in the top-right of the illustration.",
    "The original Borealis illustration that prompted the creation of this new one.", "A sketch done for the illustration ahead of time to make the vectorisation easier.", "This was one of the only assets I had to create for this illustration (besides the borealis), a tree.",
    "This illustration was the first ever artwork based upon the photography of someone else.", "Here is the original photo, by Annie Stiller, that inspired my artwork.", "Another image of the street corner where this illustration is based.",
    "A visually similar illustration that even uses the same rain asset as the Volcanic illustration.", "The lava is actually made of many of the lava pockets next to one another with the 3 gradients pictured below over the top.", "A work-in-progress shot of the illustration showing the cloud's outline before it was finalised.",

    "Interestingly, this was the first ever time I did the sketch for an artwork digitally.", "This is the scene from Doctor Who that inspired the creation of this illustration.", "This is an image of the illustration with the text hidden, showing only the artwork that lays underneath.",
    "The larger of the planets in this artwork were created using some hand-drawn round squiggles.", "The smaller planets in the background are just gradients between two colours.", "The shapes in the background of the empty space are actually the same as the big planet.",
    "Troy and Abed's Dreamatorium in their apartment in the TV show Community.", "The library building from Community that blends into the Dreamatorium.", "A work-in-progress shot of the unfinished illustration without any detail or shading.",
    "I created quite a few different plants that appear at the base of this illustration.", "Like many of the landscapes, this illustration started off as a sketch on paper.", "The islands that appear in the background of this illustrations are incredibly simple shapes.",
    "Interestingly, the birds in this artwork are nothing more than a black stroke.", "This is the candle box that the illustration was designed to be used for.", "This is a part of the die-line for the final candle box featuring the illustration.",
    "The original Moonlit Seas illustration, completed a year before Moonlit Seas 365.", "Third Moon! This is the third design for a moon that I've created.", "I used an interesting brush stroke to create some fun elements in the background of the sky.",
    "The forest featured in Stranger Things. This is in the overworld.", "An image from Stranger Things of the upside-down universe.", "The overall colours of each of the halves of the illustrations."
]

document.getElementById("download").href="assets/illustrations/"+illustration+".png";

document.getElementById("image").src="assets/illustrations/"+illustration+".png";

document.getElementById("p0").innerText="Illustrations | "+titles[illustration-1]

document.getElementById("p1").innerText="#"+illustration

document.getElementById("p2").innerText=titles[illustration-1]

document.getElementById("p3").innerText=dates[illustration-1]

document.getElementById("p4").innerText=desc[illustration-1]

document.getElementById("p5").innerText=caption[3*(illustration-1)]
document.getElementById("p6").innerText=caption[3*(illustration-1)+1]
document.getElementById("p7").innerText=caption[3*(illustration-1)+2]

document.getElementById("p8").innerHTML="Illustration #"+illustration+"<br>"+`"`+titles[illustration-1]+`"`+"<br>"+dates[illustration-1]

document.getElementById("i1").src="assets/illustrations/other/"+illustration+"_A.png";
document.getElementById("i2").src="assets/illustrations/other/"+illustration+"_B.png";
document.getElementById("i3").src="assets/illustrations/other/"+illustration+"_C.png";

var a = illustration-2
if (a <= 0) {a += titles.length}
var b = illustration-1
if (b <= 0) {b += titles.length}
var c = parseInt(illustration)+1
if (c > titles.length) {c -= titles.length}
var d = parseInt(illustration)+2
if (d > titles.length) {d -= titles.length}

document.getElementById("i4a").href="illustration.html?no="+(a);
document.getElementById("i4b").src="assets/illustrations/icons/"+(a)+".jpg";
document.getElementById("i5a").href="illustration.html?no="+(b);
document.getElementById("i5b").src="assets/illustrations/icons/"+(b)+".jpg";
document.getElementById("i6a").href="illustration.html?no="+(c);
document.getElementById("i6b").src="assets/illustrations/icons/"+(c)+".jpg";
document.getElementById("i7a").href="illustration.html?no="+(d);
document.getElementById("i7b").src="assets/illustrations/icons/"+(d)+".jpg";

var d1 = document.getElementById("d1")
d1.style.background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('assets/illustrations/"+illustration+".png')"
d1.style.backgroundSize="100%"