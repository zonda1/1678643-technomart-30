let feedbackWindow = document.querySelector('.modal-feedback-wrapper');
let buttonOpen = document.querySelector('.company-contacts-button');
let buttonClose = document.querySelector('.close-link');
let mapOpen = document.querySelector('.map-link');
let mapPopup = document.querySelector('.modal-map');
let mapClose = mapPopup.querySelector('.map-close-link');
let bookmarkColor = document.querySelector('.bookmark-link');
let bookmarkButton = document.querySelectorAll('.bookmarks-button');
let cartColor = document.querySelector('.cart-link');
let cartButton = document.querySelectorAll('.buy-button');

let feedbackName = feedbackWindow.querySelector('[name=your-name]');
let feedbackmail = feedbackWindow.querySelector('[name=your-email]');
let isStorageSupport = true;
let nameStorage = '';
let mailStorage = '';

try {
  nameStorage = localStorage.getItem('feedbackName');
  mailStorage = localStorage.getItem('feedbackmail');
} catch (err) {
  isStorageSupport = false;
}

mapOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-map-open');
});

mapClose.addEventListener('click', function () {
  mapPopup.classList.remove('modal-map-open');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-map-open')) {
      evt.preventDefault();
      mapPopup.classList.remove('modal-map-open');
    }
  }
});

buttonOpen.addEventListener('click', function () {
  feedbackWindow.classList.add('modal-feedback-wrapper-open');
  feedbackName.focus();
  if (nameStorage || mailStorage) {
    feedbackName.value = nameStorage;
    feedbackmail.value = mailStorage;
  }
});

buttonClose.addEventListener('click', function () {
  feedbackWindow.classList.remove('modal-feedback-wrapper-open');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackWindow.classList.contains('modal-feedback-wrapper-open')) {
      evt.preventDefault();
      feedbackWindow.classList.remove('modal-feedback-wrapper-open');
    }
  }
});

feedbackWindow.addEventListener('submit', function (evt) {
  evt.preventDefault();
  console.log('Форма отправилась');
  if (!feedbackName.value || !feedbackmail.value) {
    feedbackWindow.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('feedbackName', feedbackName.value);
      localStorage.setItem('feedbackmail', feedbackmail.value);
    }
  }
});


let colorChangeBookmark = function () {
  bookmarkColor.classList.add('bookmark-change-color');
}

let colorChangeCart = function () {
  cartColor.classList.add('cart-change-color');
}

for (let item of bookmarkButton) {
  item.addEventListener('click', colorChangeBookmark);
}

for (let item of cartButton) {
  item.addEventListener('click', colorChangeCart);
}
