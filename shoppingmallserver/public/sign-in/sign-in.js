function signUp() {
}

function validateUserId(id) {
  const checkEmailValidation = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  // 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
  return checkEmailValidation.test(id);
}

function validateUserPassword(password) {
  const checkPasswordValidation = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  // 8~16자리 숫자 영문 특수문자 포함

  return checkPasswordValidation.test(password);
}

function validateUserIdInfo() {

}

function validateUserPasswordInfo() {

}

function showIdErrorMessage(errorMessage) {

  const $inputId = document.querySelector('.input-id');

  $inputId.placeholder = errorMessage;
  return false;
}

function showPasswordErrorMessage(errorMessage) {
  const $inputPassword = document.querySelector('.input-password');

  $inputPassword.placeholder = errorMessage;
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

    if (!validateUserId(body.id)) {
      showIdErrorMessage('아이디가 틀립니다');
      return
    }

    if (!validateUserPassword(body.password)) {
      showPasswordErrorMessage('패스워드가 틀립니다');
      return
    }

    if (!validateUserIdInfo(body.id)) {
      showIdErrorMessage('아이디가 틀립니다');
      return
    }

    if (!validateUserPasswordInfo(body.password)) {
      showPasswordErrorMessage('패스워드가 틀립니다');
      return
    }

    return true;
  });
});

