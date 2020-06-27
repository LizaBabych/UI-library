//addModalForm();

function addModalForm() {
  let send = document.querySelectorAll(".modal-trigger");
  let closeModal = document.querySelectorAll(".modal-close");
  let newButton = document.createElement("button");
  newButton.textContent = "X";

  send.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      item.nextElementSibling.firstElementChild.firstElementChild.appendChild(newButton);
      item.nextElementSibling.style.display = "block";
      newButton.addEventListener('click', (e) => {
        closeModal[i].parentElement.parentElement.parentElement.style.display = "none";
      });
    });
  });

  closeModal.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      closeModal[i].parentElement.parentElement.parentElement.style.display = "none";
    });
  });
}
