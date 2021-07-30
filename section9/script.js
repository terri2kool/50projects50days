const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('') // turns the letters into an array
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>` //the "style" creates the wave animation effect in the form
    )
    .join('') // turns the letter array into a strin
})
