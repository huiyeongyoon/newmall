const $inputId = document.querySelector('.input-id');
const $inputPassword = document.querySelector('.input-password');
const $modalWrapper = document.querySelector('.modal-wrapper');
const $buttonClose = document.querySelector('.button-close');
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
    return false;
  }

  if (!checkPasswordValidation.test(password)) {
    validateUserInfo(password);
    return false;
  }
  validateUserInfo(id, password);

  return true;
}

function showIdError(id) {
  $inputId.placeholder = '아이디가 틀립니다';
  $inputId.placeholder.color = 'red';
  $inputId.style.outline = 'solid 1px red';
  $inputId.focus();
  $modalWrapper.classList.add('modal-wrapper-active');
  return false;
}

function showPasswordError(password) {
  $inputPassword.placeholder = '비밀번호가 틀립니다';
  $inputPassword.placeholder.color = 'red';
  $inputPassword.style.outline = 'solid 1px red';
  $inputPassword.focus();

  return true;
}

function validateUserInfo(id, password) {

  console.log(id)
  console.log(password)
  // 왜 아이디만 적으면 공백으로 나올까?

  if (id !== 'name2960@naver.com') {
    showIdError();
    return false;
  } else {
    $inputId.style.outline = '0px';
  }

  if (password !== 'name@960') {
    showPasswordError();
    return false;
  } else {
    $inputPassword.style.outline = '0px';
  }

  return true;
}

window.addEventListener('DOMContentLoaded', function(event) {
  const $signUp = document.querySelector('.button-sign-up');
  const $signIn = document.querySelector('.form-sign-in');
  $signUp.addEventListener('click', function(event) {
    event.preventDefault();
    signUp();
  })

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

