const img = document.getElementsByClassName('img')[0];
const input = document.getElementById('input-text');
const button = document.getElementById('btn');
const btnDown = document.getElementsByClassName('btn-download');
const alertBox = document.getElementsByClassName('alert')[0];
const qrBox = document.getElementsByClassName('qrbox-container');

const submitFunc = async () => {
  if (!input.value) {
    alertBox.innerText = `Please enter your text ! 😓`;
    btnDown[0].classList.add('None');
    img.classList.add('None');
    alertBox.classList.add('red');
    qrBox[0].classList.remove('resize');
    return;
  } else if (input.value && img?.src) {
    img.classList.remove('None');
    alertBox.innerText = `loading... 😚`;
    alertBox.classList.add('black');
  }

  setTimeout(() => {
    img.src =
      'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' +
      encodeURIComponent(input.value);
    img.classList.add('show');
    alertBox.classList.remove('black');
    alertBox.classList.remove('red');
    alertBox.classList.add('green');
    alertBox.innerText = `complete ! 😄`;
    button.disable = true;
    btnDown[0].classList.remove('None');
    qrBox[0].classList.add('resize');
  }, 1000);
};

const downloadImage = () => {
  const link = document.createElement('a');
  link.href = img.src;
  link.download = 'qr-code.png';
  link.click();
  document.body.removeChild(link);
};
button.addEventListener('click', submitFunc);
btnDown[0].addEventListener('click', downloadImage);
