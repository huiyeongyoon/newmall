const $main = document.querySelector('#main');
const $inputId = document.querySelector('.input-id');
const $inputPassword = document.querySelector('.input-password');
const $modalWrapper = document.querySelector('.modal-wrapper');
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

function validateUserInfo(id) {

}

function showErrorMessage(errorMessage) {
  console.log(errorMessage);
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
      showErrorMessage('아이디가 틀립니다');

    }

    if (!validateUserPassword(body.password)) {
      showErrorMessage('패스워드가 틀립니다');

    }

    if (!validateUserInfo(body.id)) {
      showErrorMessage('아이디가 틀립니다');
    }

    if (!validateUserInfo(body.password)) {
      showErrorMessage('패스워드가 틀립니다');
    }

    fetch(
        'http://localhost:3000/login',
        {

        }
    )
  });

  // const $buttonClose = document.querySelector('.button-close');
  //
  // $buttonClose.addEventListener('click', function(event) {
  //   $modalWrapper.classList.remove('modal-wrapper-active');
  // })
  //
  // window.addEventListener('keyup', function(event) {
  //   if(event.key === "Escape") {
  //     $modalWrapper.classList.remove('modal-wrapper-active');
  //   }
  // })
  //
  // $modalWrapper.addEventListener('click', function(event) {
  //   $modalWrapper.classList.remove('modal-wrapper-active');
  // })


});

