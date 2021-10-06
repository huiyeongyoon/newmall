const $main = document.querySelector('#main');
const $inputId = document.querySelector('.input-id');
const $inputPassword = document.querySelector('.input-password');
const $modalWrapper = document.querySelector('.modal-wrapper');
function signUp() {
}

function validateUserInput(id,password) {
  const checkEmailValidation = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  // 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
  const checkPasswordValidation = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  // 8~16자리 숫자 영문 특수문자 포함
  let flag = false;
  if (!checkEmailValidation.test(id)) {
    validateUserInfo(id);
    createModal();
    return false;
  }

  if (!checkPasswordValidation.test(password)) {
    validateUserInfo(password);
    createModal();
    return false;
  }
  validateUserInfo(id, password);

  return true;
}

function validateUserInfo(id, password) {
  // 왜 아이디만 적으면 공백으로 나올까?
  if (id !== 'name2960@naver.com') {
    createModal();
    showIdError();
    return false;
  } else {
    $inputId.style.outline = '0px';
  }

  if (password !== 'name@960') {
    createModal();
    showPasswordError();
    return false;
  } else {
    $inputPassword.style.outline = '0px';
  }

  return true;
}

function showIdError(id) {
  $inputId.placeholder = '아이디가 틀립니다';
  $inputId.placeholder.color = 'red';
  $inputId.style.outline = 'solid 1px red';
  $inputId.focus();
  const $modalWrapper = document.querySelector('.modal-wrapper');
  $modalWrapper.classList.add('modal-wrapper-active');

  return false;
}

function showPasswordError(password) {
  $inputPassword.placeholder = '비밀번호가 틀립니다';
  $inputPassword.placeholder.color = 'red';
  $inputPassword.style.outline = 'solid 1px red';
  $inputPassword.focus();

  return false;
}

function createModal() {

  const modalWrapper = document.createElement('div');
  $main.appendChild(modalWrapper);
  modalWrapper.classList.add('modal-wrapper');

  const modal = document.createElement('div');
  modalWrapper.appendChild(modal);
  modal.classList.add('modal');

  const closeButtonWrapper = document.createElement('div');
  modal.appendChild(closeButtonWrapper);
  closeButtonWrapper.classList.add('close-button-wrapper');

  const buttonClose = document.createElement('button');
  closeButtonWrapper.appendChild(buttonClose);
  buttonClose.classList.add('button-close');

  const modalContentsWrapper = document.createElement('div');
  modal.appendChild(modalContentsWrapper);
  modalContentsWrapper.classList.add('modal-contents-wrapper');

  const modalContents = document.createElement('h2');
  modalContentsWrapper.appendChild(modalContents);
  modalContentsWrapper.classList.add('modal-contents');
  document.querySelector('.modal-contents').textContent = '아이디가 틀립니다';

  return false;
}



window.addEventListener('DOMContentLoaded', function(event) {

  const $signUp = document.querySelector('.button-sign-up');
  const $signIn = document.querySelector('.form-sign-in');

  $signUp.addEventListener('click', function(event) {
    event.preventDefault();
    signUp();
  })


  $signIn.addEventListener('submit', function(event) {
    event.preventDefault();

    const signInData = new FormData(event.target);
    const body = {
      id: signInData.get('input-id'),
      password: signInData.get('input-password')
    }

    if (validateUserInput(body.id, body.password)) {

    }
    return false;
  });

  const $buttonClose = document.querySelector('.button-close');

  $buttonClose.addEventListener('click', function(event) {
    $modalWrapper.classList.remove('modal-wrapper-active');
  })

  window.addEventListener('keyup', function(event) {
    if(event.key === "Escape") {
      $modalWrapper.classList.remove('modal-wrapper-active');
    }
  })

  $modalWrapper.addEventListener('click', function(event) {
    $modalWrapper.classList.remove('modal-wrapper-active');
  })


});

