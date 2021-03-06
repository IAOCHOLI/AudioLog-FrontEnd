var duoSynth = new Tone.DuoSynth(
    {
        vibratoAmount: 0.5,
        vibratoRate: 5,
        harmonicity: 1.5,
        voice0: {
            volume: -10,
            portamento: 0,
            oscillator: {
                type: sine
            },
            filterEnvelope: {
                attack: 0.01,
                decay: 0,
                sustain: 1,
                release: 0.5
            },
            envelope: {
                attack: 0.01,
                decay: 0,
                sustain: 1,
                release: 0.5
            }
        },
        voice1: {
            volume: -10,
            portamento: 0,
            oscillator: {
                type: sine
            },
            filterEnvelope: {
                attack: 0.01,
                decay: 0,
                sustain: 1,
                release: 0.5
            },
            envelope: {
                attack: 0.01,
                decay: 0,
                sustain: 1,
                release: 0.5
            }
        }
    }

).toMaster();