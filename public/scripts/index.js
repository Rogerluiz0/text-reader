const textContent = document.querySelector( '#tex-content' )
const speakButton = document.querySelector( '#speak' )
const stopButton = document.querySelector( '#stop' )
const select = document.querySelector( '[name="select-speed"]' )

const utterance = new SpeechSynthesisUtterance()
utterance.lang = 'pt-BR'

textContent.addEventListener( 'input' , ( event ) => {
  utterance.text = event.target.innerText
} )

speakButton.addEventListener( 'click' , () => {
  speechSynthesis.speak( utterance )
} )

stopButton.addEventListener( 'click' , () => {
  speechSynthesis.cancel()
} )

select.addEventListener( 'change' , () => {
  let speed = select.options[select.selectedIndex].value
  utterance.rate = speed
} )