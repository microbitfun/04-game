input.onButtonPressed(Button.A, function () {
    led.plot(randint(0, 4), randint(0, 4))
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
