let CompassBearing = 0
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    CompassBearing = input.compassHeading()
    if (CompassBearing > 315 || CompassBearing < 45) {
        basic.showString("N")
    }
    basic.pause(1000)
})
