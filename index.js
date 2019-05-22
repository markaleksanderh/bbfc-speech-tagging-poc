window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = "en-UK"
recognition.continuous = true
recognition.interimResults = true
recognition.onresult = (event) => {
    console.log("Result: ", event.results[event.results.length - 1][0].transcript)

}


// recognition.start


document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
        return
    }
    var key = event.key || event.keyCode
    if (key === 'i') {
        recognition.start()
        console.log("Listening")
        
    }
})





// const icon = document.querySelector('p.microphone')


// icon.addEventListener('click', ()=> {
//     console.log("Listening")
//     dictate()
// })

// const dictate = () => {
//     recognition.start()
//     // document.querySelector('p.microphone').textContent = "Listening"

//     recognition.onresult = (event) => {
//         const speechToText = event.results[0][0].transcript
//         document.querySelector('.text-box').textContent = speechToText
//         // document.querySelector('p.microphone').textContent = "Start"
//     }
// }

