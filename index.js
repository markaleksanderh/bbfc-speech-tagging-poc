window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = "en-UK"
recognition.continuous = true
recognition.interimResults = true
recognition.onresult = (event) => {
    console.log("Result: ", event.results[event.results.length - 1][0].transcript)

}

document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
        return
    }
    var key = event.key || event.keyCode
    if (key === 'i') {
        recognition.start()
        console.log("Listening")
        console.log("Press `escape` to stop")      
    }
    if (key === 'Escape' || key == 'Esc' || key === 27) {
        console.log("Stop")
        recognition.stop()
    }
})

recognition.onend = (event) => {
    if (!event.results) {
        console.log("No results")
    }
    else {
        console.log(event.results)
    }
}