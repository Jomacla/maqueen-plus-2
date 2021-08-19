radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 255)
    } else if (receivedString == "backward") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 255)
    } else if (receivedString == "left") {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 127)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 127)
    } else if (receivedString == "right") {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 127)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 127)
    } else if (receivedString == "up") {
        DFRobotMaqueenPlus.servoRun(Servos.S2, 0)
    } else if (receivedString == "down") {
        DFRobotMaqueenPlus.servoRun(Servos.S2, 90)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    # . . . #
    # # # # #
    `)
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
basic.forever(function () {
	
})
