const $idError = document.querySelector('.id-error');
const $passwordError = document.querySelector('.password-error');
const $inputId = document.querySelector('.input-id');
const $inputPassword = document.querySelector('.input-password');

function signUp() {
}

function validateUserInput(id,password) {
  const checkEmailValidation = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  // 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
  const checkPasswordValidation = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  // 8~16자리 숫자 영문 특수문자 포함
  let idValue = '';
  let passwordValue = '';
  let flag = false;
  if (!checkEmailValidation.test(id)) {
    idValue = showError(id);
  }

  if (!checkPasswordValidation.test(password)) {
    passwordValue = showError(password);
  }

  if (showError(id, password)) {

  }

  return true;
}

function showError(id, password) {

  console.log($inputId);
  if (id !== 'name2960@naver.com') {
    $idError.textContent = '아이디가 틀립니다';
    $idError.style.display = "block";
    $inputId.style.outline = "solid 1px red";
    $inputId.focus();
    return false;
  } else {
    $idError.style.display = "none";
    $inputId.style.outline = "0px";
  }

  if (password !== 'name2960') {
    $passwordError.textContent = '비밀번호가 틀립니다';
    $passwordError.style.display = "block";
    $inputPassword.style.outline = "solid 1px red";
    $inputPassword.focus();
    return false;
  } else {
    $passwordError.style.display ="none";
    $inputPassword.style.outline = "0px";
  }

  return true;
}

function hideWarn(id, password) {

  $idError.style.display = 'none';
  $passwordError.style.display = 'none';
  return true;

}

window.addEventListener('DOMContentLoaded', (event) => {
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
});

