let feedbackWindow=document.querySelector('.modal-feadback-wrapper');
let buttonOpen=document.querySelector('.company-contacts-button');
let buttonClose=document.querySelector('.close-link');

let feedbackName = feedbackWindow.querySelector('[name=name]');
let feedbackmail = feedbackWindow.querySelector('[name=email]');
let isStorageSupport = true;
let nameStorage = '';
let mailStorage = '';

try {
  nameStorage = localStorage.getItem('feedbackName');
  mailStorage = localStorage.getItem('feedbackmail');
} catch (err) {
  isStorageSupport = false;
}


buttonOpen.addEventListener('click', function () {
  feedbackWindow.classList.add('modal-feadback-wrapper-open');
  feedbackName.focus();
  if (nameStorage || mailStorage) {
    feedbackName.value = nameStorage ;
    feedbackmail.value = mailStorage;
  }
});

buttonClose.addEventListener('click', function () {
  feedbackWindow.classList.remove('modal-feadback-wrapper-open');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackWindow.classList.contains('modal-feadback-wrapper-open')) {
      evt.preventDefault();
      feedbackWindow.classList.remove('modal-feadback-wrapper-open');
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



