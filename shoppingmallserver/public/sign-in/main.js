function closeModal() {

  console.log('dd');
}

function makeModal() {
  const $modal = `<div class="modal">
                    <div class="modal">
                      <button type="button" class="button-close"></button>
                    </div>
                    <div class="modal-contents-wrapper">
                      <h2>아이디가 틀립니다</h2>
                    </div>
                  </div>`
  return $modal;
}

function addModal() {
  const $tempContainer = document.createElement('div');
  $tempContainer.classList.add('modal-wrapper');
  $tempContainer.classList.add('modal-wrapper-active');
  const $main = document.querySelector('#main');
  $tempContainer.innerHTML = makeModal();
  $main.appendChild($tempContainer);
}
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

function showIdErrorMessage() {
  const $inputId = document.querySelector('.input-id');
  const $inputIdBlank = document.querySelector('.input-id-blank');
  $inputId.value = null;
  $inputIdBlank.textContent = '아이디가 틀립니다';
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
}

function signIn(errorMessage) {
  if (!errorMessage.success) {
    showIdErrorMessage();
    showPasswordErrorMessage();
  } else {
    location.href='http://localhost:3000/home/'
  }
}

function changeInput(outline, blank) {
  outline.style.outlineColor = 'black';
  blank.textContent = '';
}

window.addEventListener('DOMContentLoaded', function(event) {
  const $signUp = document.querySelector('.button-sign-up');
  const $signIn = document.querySelector('.form-sign-in');
  const $inputId = document.querySelector('.input-id');
  const $inputIdBlank =document.querySelector('.input-id-blank');
  const $inputPassword = document.querySelector('.input-password');
  const $inputPasswordBlank = document.querySelector('.input-password-blank');
  const $buttonClose = document.querySelector('.button-close');

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
      addModal()
      return;
    }

    if (!validateUserPassword(body.password)) {
      showPasswordErrorMessage('패스워드가 틀립니다');
      addModal()
      return;
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
    ).then(response => {
      console.log('fetch를 통해 받은 응답값 입니다.', response);
      return response.json();
    }).then(data => {
      console.log('응답값 : ', data);
      signIn(data);
    });

    return true;
  });

  $inputId.addEventListener('keyup', function(event) {
    event.preventDefault();
    changeInput($inputId, $inputIdBlank);
  })

  $inputPassword.addEventListener('keyup', function(event) {
    event.preventDefault();
    changeInput($inputPassword,$inputPasswordBlank);
  })

  $buttonClose.addEventListener('onClick', function(event) {
    event.preventDefault();
    closeModal();
  })
});

