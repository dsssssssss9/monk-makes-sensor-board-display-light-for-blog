basic.clearScreen()
basic.forever(function () {
    basic.showString("" + (Sensor.lightLevel(AnalogPin.P2)))
    basic.pause(200)
    basic.clearScreen()
})
