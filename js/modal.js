const send = document.querySelectorAll(".modal-trigger");
const closeModal = document.querySelectorAll(".modal-close");
let newButton;

function openModalWindow() {
  send.forEach((item, i) => {
    item.addEventListener('click', function() {
      item.nextElementSibling.style.display = "block";
      newButton = document.createElement("button");
      newButton.textContent = "X";
      item.nextElementSibling.firstElementChild.firstElementChild.appendChild(newButton);
      newButton.addEventListener('click', function(){closeModalWindow(closeModal[i])});
    });
  });

  closeModal.forEach((item, i) => {
    item.addEventListener('click', function(){closeModalWindow(closeModal[i])});
  });
}

function closeModalWindow(id) {
  id.parentElement.parentElement.parentElement.style.display = "none";
  newButton.remove();
}
