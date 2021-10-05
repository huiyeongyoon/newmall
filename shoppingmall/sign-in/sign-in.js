
function signUp() {
}

function validateUserInput(id,password) {
  const emailValidation = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  // 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
  const passwordValidation = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  // 8~16자리 숫자 영문 특수문자 포함
  if (!emailValidation.test(id)) {
    showError('아이디 혹은 비밀번호가 틀립니다');
  }

  if (!passwordValidation.test(password)) {
    showError('아이디 혹은 비밀번호가 틀립니다');
  }

  return true;
}

function showError(message) {
  console.error(message);
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

    console.log(body);
  });
});

