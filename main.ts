input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    wuKong.setAllMotor(100, 100)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.setAllMotor(-100, -100)
    basic.pause(100)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    wuKong.setAllMotor(-100, -100)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.North)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    wuKong.setAllMotor(100, 100)
    basic.pause(100)
    wuKong.stopAllMotor()
})
basic.forever(function () {
	
})
