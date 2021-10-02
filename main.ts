radio.onReceivedNumber(function (receivedNumber) {
    radio_no = receivedNumber
})
let radio_no = 0
radio.setGroup(194)
basic.forever(function () {
    if (radio_no == 1) {
        wuKong.setAllMotor(100, 100)
    } else if (radio_no == 2) {
        wuKong.setAllMotor(-100, -100)
    } else if (radio_no == 3) {
        wuKong.setAllMotor(100, -100)
    } else if (radio_no == 4) {
        wuKong.setAllMotor(-100, 100)
    } else {
        wuKong.setAllMotor(0, 0)
    }
})