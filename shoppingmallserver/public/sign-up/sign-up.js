const $inputId = document.querySelector('#input-id');
const $inputName = document.querySelector('#input-name');
const $inputPassword = document.querySelector('#input-password');
const $inputPasswordConform = document.querySelector('#input-password-conform');
const $formSignUp = document.querySelector('.form-sign-up');

function validateUserEmail(id) {
  const checkEmailValidation = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  // 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력

  return checkEmailValidation.test(id);
}

function validateUserName(name) {
  const validateUserNameValidation = /^[가-힣]{2,4}$/;
  // 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
  return validateUserNameValidation.test(name);
}

function validateUserPassword(password) {
  const checkPasswordValidation = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  // 8~16자리 숫자 영문 특수문자 포함
  return checkPasswordValidation.test(password);
}

function validateUserPasswordConfirm(passwordConfirm) {
  const checkPasswordConfirmValidation = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  // 8~16자리 숫자 영문 특수문자 포함
  return checkPasswordConfirmValidation.test(passwordConfirm);
}

function showErrorMessage($wrapper) {
  $wrapper.classList.add('show-error');
}

function removeErrorMessage($wrapper) {
  $wrapper.classList.remove('show-error');
}

window.addEventListener('DOMContentLoaded', function(event) {

  $formSignUp.addEventListener('submit', function(event) {
    event.preventDefault();
    const signInData = new FormData(event.target);
    const body = {
      id: signInData.get('input-id'),
      name: signInData.get('input-name'),
      password: signInData.get('input-password'),
      passwordConfirm: signInData.get('input-password-confirm'),
    }

    if(!validateUserEmail(body.id)) {
      showErrorMessage(document.querySelector('.id-wrapper'));
    }

    if(!validateUserName(body.name)) {
      showErrorMessage(document.querySelector('.name-wrapper'));
    }

    if(!validateUserPassword(body.password)) {
      showErrorMessage(document.querySelector('.password-wrapper'));
    }

    if(!validateUserPasswordConfirm(body.passwordConfirm)) {
      showErrorMessage(document.querySelector('.password-confirm-wrapper'));
      return
    }

    location.href='/';
  })

  $inputId.addEventListener('keyup', function(event) {
    event.preventDefault();
    removeErrorMessage(document.querySelector('.show-error'));
  })

  $inputName.addEventListener('keyup', function(event) {
    event.preventDefault();
    removeErrorMessage(document.querySelector('.show-error'));
  })

  $inputPassword.addEventListener('keyup', function(event) {
    event.preventDefault();
    removeErrorMessage(document.querySelector('.show-error'));
  })

  $inputPasswordConform.addEventListener('keyup', function(event) {
    event.preventDefault();
    removeErrorMessage(document.querySelector('.show-error'));
  })

});

