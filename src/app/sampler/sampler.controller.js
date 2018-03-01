var sampler = new Tone.Sampler({
	"C3" : "path/to/C3.mp3",
	"D#3" : "path/to/Dsharp3.mp3",
	"F#3" : "path/to/Fsharp3.mp3",
	"A3" : "path/to/A3.mp3",
}, function(){
	//sampler will repitch the closest sample
	sampler.triggerAttack("D3")
}) 