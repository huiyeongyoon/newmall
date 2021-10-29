function signUp() {
}

function validateUserId(id) {
  const checkEmailValidation = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  // 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
  const main = document.querySelector('#main')
  main.innerHTML += '<div class=modal-wrapper></div>';
  main.appendChild();


  return checkEmailValidation.test(id);
}

function validateUserPassword(password) {
  const checkPasswordValidation = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  // 8~16자리 숫자 영문 특수문자 포함

  return checkPasswordValidation.test(password);
}

function showIdErrorMessage() {
  const $inputId = document.querySelector('.input-id');
  const $inputIdBlank = document.querySelector('.input-id-blank');
  $inputId.value = null;
  $inputIdBlank.textContent = '아이디가 틀립니다';
  return false;
}

function showPasswordErrorMessage() {
  const $inputPassword = document.querySelector('.input-password');
  const $inputPasswordBlank = document.querySelector('.input-password-blank')
  const $inputId = document.querySelector('.input-id');
  const $inputIdBlank = document.querySelector('.input-id-blank');
  $inputId.value = null;
  $inputPassword.value = null;
  $inputId.style.outlineColor = 'red';
  $inputPassword.style.outlineColor = 'red';
  $inputIdBlank.textContent = '아이디가 틀립니다';
  $inputPasswordBlank.textContent = '비밀번호가 틀립니다';
  return false;
}

function signIn(errorMessage) {
  if (!errorMessage.success) {
    showIdErrorMessage()
    showPasswordErrorMessage()
  } else {
    const $formSignIn = document.querySelector('.form-sign-in');
    $formSignIn.submit();
  }
}

window.addEventListener('DOMContentLoaded', function(event) {

  const $signUp = document.querySelector('.button-sign-up');
  const $signIn = document.querySelector('.form-sign-in');
  const $inputId = document.querySelector('.input-id');
  const $inputPassword = document.querySelector('.input-password');
  const $inputIdBlank =document.querySelector('.input-id-blank');
  const $inputPasswordBlank = document.querySelector('.input-password-blank')
  $inputId.addEventListener('keyup', function(event) {
    event.preventDefault()
    $inputIdBlank.textContent = '';
    $inputId.style.outlineColor = 'black';
  })

  $inputPassword.addEventListener('keyup', function(event) {
    event.preventDefault()
    $inputPasswordBlank.textContent = '';
    $inputPassword.style.outlineColor = 'black';
  })


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

    fetch(
        'http://localhost:3000/sign-in',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body),
        }
    )
        .then(response => {
          console.log('fetch를 통해 받은 응답값 입니다.', response);
          return response.json();
        })
        .then(data => {
          console.log('응답값 : ', data);
          signIn(data);
        });

    return true;
  });
});

