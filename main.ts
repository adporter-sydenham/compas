let CompassBearing = 0
basic.forever(function () {
    CompassBearing = input.compassHeading()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (CompassBearing > 315 || CompassBearing < 45) {
        basic.showString("N")
    }
    if (CompassBearing > 45 || CompassBearing < 135) {
        basic.showString("E")
    }
    if (CompassBearing > 135 || CompassBearing < 225) {
        basic.showString("S")
    }
    if (CompassBearing > 225 || CompassBearing < 315) {
        basic.showString("S")
    }
    basic.pause(1000)
})
