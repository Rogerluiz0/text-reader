window.addEventListener( 'load' , () => {
  const textContent = document.querySelector( '#tex-content' )
  const speakButton = document.querySelector( '#speak' )
  const stopButton = document.querySelector( '#stop' )
  const selectLanguage = document.querySelector( '[name="select-language"]' )
  const selectSpeed = document.querySelector( '[name="select-speed"]' )

  const utterance = new SpeechSynthesisUtterance()

  textContent.addEventListener( 'input' , ( event ) => {
    utterance.text = event.target.innerText
  } )

  speakButton.addEventListener( 'click' , () => {
    speechSynthesis.speak( utterance )
  } )

  stopButton.addEventListener( 'click' , () => {
    speechSynthesis.cancel()
  } )

  selectLanguage.addEventListener( 'change' , () => {  // Language
    let language = selectLanguage.options[selectLanguage.selectedIndex].value
    utterance.lang = language
  } )

  selectSpeed.addEventListener( 'change' , () => { // Speed
    let speed = selectSpeed.options[selectSpeed.selectedIndex].value
    utterance.rate = speed
  } )
} )