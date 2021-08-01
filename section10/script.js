const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach((sound) => {
  const btn = document.createElement('button') // creates the button variable
  btn.classList.add('btn') // adds the btn class for styling

  btn.innerText = sound

  btn.addEventListener('click', () => {
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn) // used to style the buttons
})
