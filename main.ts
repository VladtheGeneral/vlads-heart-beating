basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        `)
})
