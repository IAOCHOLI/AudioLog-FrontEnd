
//create some send effect

var pingPong = new Tone.PingPongDelay(
    {
        delayTime: 0.25,
        maxDelayTime: 1.0
    }).toMaster();

var phaser = new Tone.Phaser({
    frequency: 15,
    octaves: 1,
    baseFrequency: 1000
}).toMaster();

var freeverb = new Tone.Freeverb({
    roomSize: 1,
    dampening: 300,
    wet: 0.1
}).toMaster();

var chorus = new Tone.Chorus(
    {
        frequency: 1.5,
        delayTime: 3.5,
        depth: 0.7,
        feedback: 0.1,
        type: sine,
        spread: 180
    }
).toMaster();

var autoWah = new Tone.AutoWah(
    {
        baseFrequency: 100,
        octaves: 6,
        sensitivity: 0,
        Q: 2,
        gain: 2,
        follower: {
            attack: 0.3,
            release: 0.5
        }
    }

).toMaster();

