const $signUp = document.querySelector('.button-sign-up');
const $form = document.querySelector('.form-sign-in');
const $inputId = document.querySelector('.input-id');
const $inputIdBlank =document.querySelector('.input-id-blank');
const $inputPassword = document.querySelector('.input-password');
const $inputPasswordBlank = document.querySelector('.input-password-blank');
const emailErrorMessage = '존재하지 않는 이메일입니다.'
const passwordErrorMessage = '패스워드가 틀립니다'

function makeModal() {
  const $modal = `
  <div class="modal-content-wrapper">
    <header>
      <button type="button"">X</button>
    </header>
    <div class="modal-content">${'존재하지 않는 이메일 혹은 비밀번호가 다릅니다'}</div>
    <footer>
      <button type="button" style="width: 100%;height: 40px;border-radius: 4px;background: #1275ab;color: #fff;">확인</button>
    </footer>
  </div>`;
  return $modal;
}

function showModal() {
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
  $inputId.value = null;
  $inputIdBlank.textContent = emailErrorMessage;
}

function showPasswordErrorMessage() {
  $inputId.value = null;
  $inputPassword.value = null;
  $inputId.style.outlineColor = 'red';
  $inputPassword.style.outlineColor = 'red';
  $inputIdBlank.textContent = emailErrorMessage;
  $inputPasswordBlank.textContent = passwordErrorMessage;
}

function postProcessOfSignin(response) {
  if (!response.success) {
    showIdErrorMessage();
    showPasswordErrorMessage();
  } else {
    location.href='http://localhost:3000/home/';
  }
}

function changeInput(outline, blank) {
  outline.style.outlineColor = 'black';
  blank.textContent = '';
}

window.addEventListener('DOMContentLoaded', function(event) {

  $signUp.addEventListener('click', function(event) {
    event.preventDefault();
    signUp();
  })

  $form.addEventListener('submit', function(event) {
    event.preventDefault();

    const signInData = new FormData(event.target);
    const body = {
      id: signInData.get('input-id'),
      password: signInData.get('input-password'),
    }

    if (!validateUserId(body.id)) {
      showIdErrorMessage(emailErrorMessage);
      showModal();
      return;
    }

    if (!validateUserPassword(body.password)) {
      showPasswordErrorMessage(passwordErrorMessage);
      showModal();
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
      return response.json();
    }).then(data => {
      console.log('응답값 : ', data);
      postProcessOfSignin(data);
    });
  });

  $inputId.addEventListener('keyup', function(event) {
    event.preventDefault();
    changeInput($inputId, $inputIdBlank);
  })

  $inputPassword.addEventListener('keyup', function(event) {
    event.preventDefault();
    changeInput($inputPassword,$inputPasswordBlank);
  })

  function delegate(selector, eventName, eventListener) {
    document.querySelector('body').addEventListener(eventName, (event) => {
      event.stopPropagation();
      const { target } = event;

      const $selector = document.querySelector(selector);

      if (!$selector) {
        console.error(`${selector}에 해당하는 요소를 찾을 수 없습니다.`);
      } else {
        if ($selector.contains(target)) {
          typeof eventListener === 'function' && eventListener({ originalEvent: event, target: event.target, currentTarget: $selector });
        }
      }
    }, true);
  }

  delegate('.button-close', 'click', (event) => {
    console.log('hit', event);
  });
});