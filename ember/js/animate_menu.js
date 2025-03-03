function mouseEffect() {
    for (i=0;i<5;i++) {
        objects.push(
            new Spark(
                mouseToSystem().x,
                mouseToSystem().y,
                rand(-1.5,1.5),
                rand(-1.5,1.5),
                rand(),
                {r:255, g:rand(100,200), b:0, a:1}
            )
        )
    }
}

for (x = 0; x < 1000; x++) {
    objects.push(
        new Bouncer(
            rand(-500,500),
            rand(-500,500),
            rand(-0.5,0.5),
            rand(-0.5,0.5),
            rand(0.5,2),
            {r:255,g:255,b:255,a:rand(0,0.25)}
        )
    )
}