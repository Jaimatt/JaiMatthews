function mouseEffect() { return }

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