const sliderControl = document.querySelector(`#font-size-control`);
const content = document.querySelector(`#text`);

sliderControl.addEventListener(`input`, fontSize);

function fontSize(event) {
    const fontSize = event.target.value + 'px';
    content.style.fontSize = fontSize;
  }