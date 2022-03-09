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
    music.playTone(262, music.beat(BeatFraction.Whole))
    if (CompassBearing > 315 || CompassBearing < 45) {
        basic.showString("N")
    } else {
        if (CompassBearing > 45 && CompassBearing < 135) {
            basic.showString("E")
        } else {
            if (CompassBearing > 135 && CompassBearing < 225) {
                basic.showString("S")
            } else {
                if (CompassBearing > 225 && CompassBearing < 315) {
                    basic.showString("W")
                } else {
                    basic.showIcon(IconNames.No)
                }
            }
        }
    }
    basic.pause(1000)
})
