radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 255)
    } else if (receivedString == "backward") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 255)
    } else if (receivedString == "") {
    	
    } else {
    	
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
