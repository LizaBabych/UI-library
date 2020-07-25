//addModalForm();

function addModalForm() {
  const send = document.querySelectorAll(".modal-trigger");
  const closeModal = document.querySelectorAll(".modal-close");
  const newButton = document.createElement("button");
  newButton.textContent = "X";
  let xButton = document.querySelectorAll(".modal-head");
  let modal;

  send.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      item.nextElementSibling.firstElementChild.firstElementChild.appendChild(newButton);
      modal = document.getElementById(item.dataset.target);
      modal.style.display = "block";
      newButton.addEventListener('click', (e) => {
        modal.style.display = "none";
      });
    });
  });

  closeModal.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      modal.style.display = "none";
    });
  });
}
