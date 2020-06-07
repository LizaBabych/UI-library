const send = document.getElementsByClassName("modal-trigger");
const closeModal = document.getElementsByClassName("modal-close");
let newButton;

for (let i = 0; i < send.length; i++) {
  send[i].addEventListener('click', function() {
    send[i].nextElementSibling.style.display = "block";
    newButton = document.createElement("button");
    newButton.textContent = "X";
    send[i].nextElementSibling.firstElementChild.firstElementChild.appendChild(newButton);
    newButton.addEventListener('click', function(){closeModalWindow(closeModal[i])});
  });
}

for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener('click', function(){closeModalWindow(closeModal[i])});
}

function closeModalWindow(id) {
  id.parentElement.parentElement.parentElement.style.display = "none";
  newButton.remove();
}
