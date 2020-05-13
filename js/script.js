// ============= Открытие модального окна ===========

var modal = document.querySelector(".modal-search-hotel");
var trigger = document.querySelector(".modal-button");

modal.classList.add("modal-hide");

function toggleModal(event) {
  event.preventDefault();
  modal.classList.toggle("modal-hide");
}

trigger.addEventListener("click", toggleModal);

// ========== Заткрытие модального окна по Esc =====

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-search-hotel")) {
      evt.preventDefault();
      modal.classList.toggle("modal-hide");
    }
  }
});
