window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = "en-UK"


const icon = document.querySelector('p.microphone')


icon.addEventListener('click', ()=> {
    console.log("Listening")
    dictate()
})

const dictate = () => {
    recognition.start()
    // document.querySelector('p.microphone').textContent = "Listening"

    recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript
        document.querySelector('.text-box').textContent = speechToText
        // document.querySelector('p.microphone').textContent = "Start"
    }
}

