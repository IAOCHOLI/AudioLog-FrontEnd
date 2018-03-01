

var monophonicSynth = new Tone.Monophonic (
    {
        portamento:0,
        volume:-6
    }
 )

 monophonicSynth.setNote("F#6", "+4n");


 //Insert Effect

 var eq = new Tone.EQ3({
    low: 0,
    mid: 0,
    high: 0,
    lowFrequency: 400,
    highFrequency: 2500
  });
 
var panner = new Tone.Panner({
    Default: 0
}
);

var filter = new Tone.Filter(
    {
        type  : lowpass ,
        frequency  : 350 ,
        rolloff  : -12 ,
        Q  : 1 ,
        gain  : 0
    }
);




 //connections
monophonicSynth.chain( panner, eq, filter, Tone.Master);




// Appegio
Tone.Transport.scheduleRepeat(function (time) {
    var note = notes[current_note % notes.length];
    synth.triggerAttackRelease(note, '16n', time);
    current_note++;
  }, '16n');




  
pad1.on('change' ,function(value){
    if(value.state = true){
    editPad(event, 'PadOneEdit');
    vol.mute.value = true;
    }
  
  })