radio.onReceivedNumber(function (receivedNumber) {
    KLIK = 0
})
input.onButtonPressed(Button.AB, function () {
    if (KLIK == 0) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
let KLIK = 0
KLIK = 1
basic.forever(function () {
	
})
