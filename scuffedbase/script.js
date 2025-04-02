const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');
const refreshBtn = document.getElementById('refresh');

backBtn.addEventListener('click', goBack);
forwardBtn.addEventListener('click', goForward);
refreshBtn.addEventListener('click', refreshPage);

function goBack() {

}

function goForward() {

}

function refreshPage() {

}

const urlInput = document.getElementById('url');

urlInput.form.addEventListener('submit', loadPage);

function loadPage(e) {
  e.preventDefault();

  let url = urlInput.value;


}

let blink = new BlinkWrapper();

function loadPage(url) {
  blink.loadURL(url);
}
