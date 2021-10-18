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

function showIdErrorMessage(errorMessage) {
  const $inputId = document.querySelector('.input-id');

  $inputId.placeholder = errorMessage;
  $inputId.value = null;
  return false;
}

function showPasswordErrorMessage(errorMessage) {
  const $inputPassword = document.querySelector('.input-password');

  $inputPassword.placeholder = errorMessage;
  $inputPassword.value = null;

  return false;
}

function showUserinfoErrorMessage(errorMessage) {
  const $inputId = document.querySelector('.input-id');
  const $inputPassword = document.querySelector('.input-password');

  if (!errorMessage.success) {
    $inputId.placeholder = '아이디가 틀립니다';
    $inputId.value = null;
    $inputPassword.placeholder = '패스워드가 틀립니다';
    $inputPassword.value = null;
  } else {
    const $formSignIn = document.querySelector('.form-sign-in');
    $formSignIn.submit();
  }
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
          showUserinfoErrorMessage(data);
        });

    return true;
  });
});

