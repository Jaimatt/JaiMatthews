queryString = window.location.search;
urlParams = new URLSearchParams(queryString);
place = Number(urlParams.get('pos'))
origin = urlParams.get('from')

inventory = []
tutorial = false

world = {
    null: ['it is nearby.', 'you are there'],
    11: ["the entrance the Thesius Caves, but it's been caved in.",     'You wearily venture into the Thesius Caves. The only noises that break its silence is the quivering of your breath and the echoed dripping of water in the distance.'],
    12: ["an impressively tall, Mount Arcadia.",                        'As you stand in front of the forboding precipice of Mount Arcadia, you notice a door in the side of the mountain.'],
    13: ['Flarot Beach.',                                               'You walk onto Flarot Beach and sink your feet into the warm, delicate sand. The sunbeams dance on the pristine waters as the waves slither along the beach.'],
    14: ['Flarot Town.',                                                'You enter the beachside settlement of Flarot Town, a town just larger than Parker Village. The townspeople hurry to and fro, busy with the affairs of their day.'],
    15: ['the old lighthouse, now dubbed Silentium Lighthouse.',        "You venture to the top of Silentium lighthouse. You can see the whole island from up here. All of Haven, it's beautiful. There's also a chest sitting in the corner."],
    21: ['Wesselingh City, now in ruins.',                              'You cautiously wander into the ruins of Wesselingh City. The once-capital of Haven is now nothing more that innumerable piles of rubble.'],
    22: ['the magical Satori Marsh.',                                   'The ground squelches beneach your feet and the pong of Satori Marsh invades your nostrils. A strange women with an enthusiastic grin hurriedly approaches you.'],
    23: ['Flarot Shooting Range.',                                      'When you walk onto the barren Flarot Shooting Range, the first thing you notice is the heat. The second is the whistle of an arrow narrowly missing your head.'],
    24: ['the largest inland body of water on Haven, Elysium Lake.',    'Elysium lake glitters enticingly in the sunlight. As you swim through the soothing waters, you approach a small island with a doorway.'],
    25: ['the lush Laeto Jungle.',                                      "After you wrangle your way through the dense jungle, you find a small clearing. Despite the inate beauty of the landscape, something about it makes you feel anxious."],
    31: ['the Great Braincell Library.',                                "Infront of you stands the majestic grandeur of the Great Braincell Library. It's said to be one of the oldest buildings on Haven."],
    32: ['a terrifying, bottomless ravine.',                            'Using your climbing gear, you begin your descent into the Braincell Ravine. As you hold on to the side of the rock for dear life, you heard an ominous noise in the background.'],
    33: ["Haven's famous wishing well.",                                "The Haven Wishing Well stands solitude in the middle of a silent patch of grass. One day, it will save your Granfather's life. You're sure of it."],
    34: ['the calm, relaxing Botany River.',                            "You once went on a holiday to the windswept banks of Botany River. It's still as beautiful as ever. It's said that merely sitting here will always make you feel better."],
    35: ["Botany River's unforgiving precipice, Formido Falls",         "The violent thrashing of Formido Fall's waters is deafening. The falls have taken the lives of many people naive enough to step through the door at its base."],
    41: 0, //this is a duplicate of world[32]
    42: ['a small plateau of land.',                                    "You wander onto the rough soil of Watchel Plateau. Despite usually being empty, a small family sits here eating their lunch. A good enough spot for a picnic, you suppose."],
    43: ["Parker Village Cemetery.",                                    "When you slowly pace into Parker Village Cemetery, you're reminded of Grandad. Would he soon join your parents by the big oak tree? No. You have to save him."],
    44: ['part of the sprawling Haven Field.',                          'haven field north'],
    45: ['part of the sprawling Haven Field.',                          'haven field east'],
    51: ['the sands of Trombe Desert.',                                 "The sun scorches your back as you stumble through the unforgiving Trombe Desert. You're about to collapse into the sand, but then you notice a small structure in the middle of the desert."],
    52: ["Parker Village's Botanic Garden.",                            "You journey into the Parker Village Garden, cared for by the Village's own resident botanist. He sometimes brags that even sitting by his plants can cure your wounds."],
    53: ['your home, Parker Village',                                   "You stand proudly in your home town, Parker Village. After 17 years living in its borders, the calming feeling of familiarity washes over you."],
    54: ['part of the sprawling Haven Field.',                          'haven field west'],
    55: ['part of the sprawling Haven Field.',                          'haven field south'],
    61: ['a small fishing pier.',                                       "You approach a small fishing pier. This far south, the clouds are grey and the air has a salty smell to it. Whilst there's no one there, you see a fishing rod leaning against the rocks."],
    62: ['a wonderful lookout point.',                                  "You begrudgingly journey up the steep stairs to the Southern Seas Lookout. But your patience is worth it. At this height the wind courses past your head and you can see the whole island. It's beautiful."],
    63: ['the Temple of Wesselingh.',                                   'As you confidently pace into the Temple of Wesselingh, the sound of your footsteps reverberates around the room. As you approach the resting place of the ancient messiah, you see a golden chest.'],
    64: ['Austral Beach',                                               'The moment you step onto Austral Beach, you know something is very wrong. Where are the shops, the tourists, the greenery? Then, a growl in the distance shocks you to your core.'],
    65: ['the forboding Forest of Despair',                             "Warped trees with battered trunks. A thick layer of fog. Many have entered the Forest of Despair and never returned. Now here you are, standing in front of its entrace."],
}

world[41] = world[32]

npc = {
    //flarot town
    14: [
        ['Pierre',['Bonjour.','Je suis désolé mademoiselle, je ne parle pas anglais.','Au revoir.']],
        ['Humphrey',["Huh? What's that?",'Who are you?','Leave me alone.','ARGH!','*muttering*']],
        ['Timmy',['Woah! Is that a sword on your back??',"I've never seen one like that before!",'My Dad collects swords, but he never lets me play with them...',"But when I grow up, I'm going to buy my own and stab him through the heart."]],
        ['Edith',["Evelyn, isn't it?",'I heard all about you.',"The Girl from Parker Village who's travelling the world the save her grandad",'Good luck!']],
        ['Joan',["You're new in town, aren't you.",'Well let me give you some friendly advice...','Watch out for Daniel.',"He's not to be messed with."]],
        ['Agnes',["Good morning ma'am.","You look like an intelligent busniess-minded young lady, how about a trade?","If you give me a fish, I'll give you some explosives.","How's that sound?",'Hmm?']],
    ],
    //the marsh
    22: [
        ['Maeve',['Hey! You there! My name is Maeve.','Did you know Wesselingh City was named after the first king of Haven?','It was the capital for decades, but fell into ruins following... the conflict.','Now monsters inhabit its decaying buildings.','If you plan to visit, be careful.']],
        ['Maeve',["Good morning, I'm Maeve.",'Thanks for visiting Satori Marsh',"This used to be a vibrant forest, but it decayed during... the conflict.","No longer a true homage to it's namesake, don't you think?","Oh well, you be on your way then."]],
        ['Maeve',["Hello young Lady, I'm Maeve","You're on an ADVENTURE, you say?",'Well, that certainly is exciting.',"My life's not bad either.",'I spend my days here in Satori Marsh, telling travellers the history of our beautiful Island of Haven.']],
    ],
    //watchel plateau
    42: [
        ['Jennifer',['Luke! Stop that!',"No, that doesn't go in your mouth!","Spit it out. Now!",'Oh! Evelyn, Hi.',"I'm a bit busy at the moment sorry."]],
        ['Hugo',['Hi Evelyn! What brings you out to the plateau?',"We're here for a family picnic.","It's a lovely place for it, don't you think?"]],
        ['Luke',["Mommy said I was named after the great King Wesselingh of Haven.","I asked if we could go to his temple for the picnic, but Daddy said that would be 'diswespectfull'.","I wonder what that word means?"]],
    ],
    //parker village
    53: [
        ['Mark',['Anything ITC does, I could do if I had ADMIN.','My code is going bad.','Evelyn, is this box centered to the screen?','None of your business']],
        ['Margaret',['Good morning Evelyn.',"I'm so sorry to hear about your grandfather.",'Please, come to me if you need anything.']],
        ['Bruce',["I heard your grandad died.","Honestly he was a bit of a prick, wasn't he?","I for one won't be at his funeral.","What's that look for? He's dead now, he doesn't care."]],
        ['Henry',["Evelyn! Wait up! I heard you're trying to save your Grandads life.","That's mighty admirable, good on you.","You know, there's an old sword in the temple to the south.","I'd suggest you start there."]],
        ['Father Gabriel',['Evelyn, Evelyn, Evelyn...','I am SO sorry to hear about your grandfather.','Have you begun to think about funeral arrangements?','At my church we offer the service for fairly resonable prices.']],
        ['Luis',["My Dad always told me there's one thing to do if I'm lost:","I should climb high enough to see the whole island!","I usually use the lookout point to the south-west of here.",'Bye!']],
    ],
}

log('You step out of ' + origin + '.')
logPosition(parseInt(place))
refreshSug()
// inBox.style.display = 'inline'

inChild.onkeyup = function (e) {
    type(e.key)
    if (e.key == 'Enter') {
        if (C_direction.includes(type(e.key))) {
            if (venture(type(e.key)) != 'error') {
                inBox.style.display = 'none'
            }
        } else if (type(e.key) == 'chest') {
            openChest()
        } else if (type(e.key) == 'look') {
            look()
        } else if (type(e.key) == 'enter') {
            dungeon()
        } else if (type(e.key) == 'chat') {
            talk()
        } else if (type(e.key) == 'sit') {
            sit()
        } else if (type(e.key) == 'fish') {
            fish()
        } else if (type(e.key) == 'trade') {
            trade()
        }
        inputColour('R')
    }
}