let currfreq = 0
let lastfreq = 0
basic.forever(function () {
    currfreq = 0
    lastfreq = currfreq
})
basic.forever(function () {
    currfreq = Math.map(input.acceleration(Dimension.X), -1024, 1023, 1, 5000)
    lastfreq = currfreq
})
basic.forever(function () {
    currfreq = Math.map(input.acceleration(Dimension.X), -1024, 1023, 0, 5000)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    lastfreq = currfreq
})
basic.forever(function () {
    currfreq = Math.map(input.acceleration(Dimension.X), -1024, 1023, 0, 5000)
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    Math.map(input.acceleration(Dimension.X), -1024, 1023, 0, 5000),
    Math.map(input.acceleration(Dimension.Y), -1024, 1023, 0, 5000),
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    currfreq = Math.map(input.acceleration(Dimension.X), -1024, 1023, 0, 5000)
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    Math.map(input.acceleration(Dimension.X), -1024, 1023, 0, 5000),
    Math.map(input.acceleration(Dimension.Y), -1024, 1023, 0, 5000),
    randint(0, 1024),
    randint(0, 1024),
    randint(40, 100),
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    lastfreq = currfreq
})
basic.forever(function () {
    currfreq = Math.map(input.acceleration(Dimension.X), -1024, 1023, 1, 5000)
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    Math.map(input.acceleration(Dimension.X), -1024, 1023, 1, 5000),
    Math.map(input.acceleration(Dimension.X), -1024, 1023, 1, 5000),
    randint(0, 1024),
    randint(0, 1024),
    randint(40, 100),
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    lastfreq = currfreq
})
