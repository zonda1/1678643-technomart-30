let additemWindow=document.querySelector('.modal-add-item-wrapper');
let  windowOpenButton=document.querySelectorAll('.buy-button');
let buttonClose=document.querySelector('.close-link');

let modalOpen=function () {
  additemWindow.classList.add('modal-add-item-wrapper-open');
}

for (let item of  windowOpenButton) {
  item.addEventListener('click',modalOpen);
}

buttonClose.addEventListener('click', function () {
  additemWindow.classList.remove('modal-add-item-wrapper-open');
});


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (additemWindow.classList.contains('modal-add-item-wrapper-open')) {
      evt.preventDefault();
      additemWindow.classList.remove('modal-add-item-wrapper-open');
    }
  }
});
