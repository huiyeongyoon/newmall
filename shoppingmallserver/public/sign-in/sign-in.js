const $main = document.querySelector('#main');
const $signUp = document.querySelector('.button-sign-up');
const $form = document.querySelector('.form-sign-in');
const $inputId = document.querySelector('.input-id');
const $inputPassword = document.querySelector('.input-password');
let flag = false;

function makeModal() {
  const $modal = `
  <div class='modal-content-wrapper'>
    <header>
      <button class='button-modal-close' type='button'><h1></h1></button>
    </header>
    <div class='modal-content'>${'존재하지 않는 이메일 혹은 비밀번호가 다릅니다'}</div>
    <footer>
      <button class='button-bottom-modal-close' type='button'>확인</button>
    </footer>
  </div>`;
  return $modal;
}

function showModal() {
  const $tempContainer = document.createElement('div');
  $tempContainer.classList.add('modal-wrapper');
  $tempContainer.classList.add('modal-wrapper-active');
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

function showErrorMessage($wrapper) {
  $wrapper.classList.add('show-error');
}
function removeErrorMessage($wrapper) {
  $wrapper.classList.remove('show-error');
}

function postProcessOfSignIn(response) {
  if (!response.success) {
    showErrorMessage(document.querySelector('.input-id-wrapper'));
    showErrorMessage(document.querySelector('.input-password-wrapper'))
  } else {
    location.href='http://localhost:3000/';
  }
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
      showErrorMessage(document.querySelector('.input-id-wrapper'))
      showErrorMessage(document.querySelector('.input-password-wrapper'))
      showModal();
      return;
    }

    if (!validateUserPassword(body.password)) {
      showErrorMessage(document.querySelector('.input-id-wrapper'))
      showErrorMessage(document.querySelector('.input-password-wrapper'))
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
      console.log(response);
      return response.json();
    }).then(data => {
      console.log('응답값 : ', data);
      postProcessOfSignIn(data);
    });

  });

  $inputId.addEventListener('keyup', function(event) {
    event.preventDefault();
    removeErrorMessage(document.querySelector('.show-error'));
  })

  $inputPassword.addEventListener('keyup', function(event) {
    event.preventDefault();
    removeErrorMessage(document.querySelector('.show-error'));
  })

  function delegate(selector, eventName, eventListener) {
    document.querySelector('body').addEventListener(eventName, (event) => {
      event.stopPropagation();
      const { target } = event;
      const $selector = document.querySelector(selector);

      if (!$selector) {
        //console.error(`${selector}에 해당하는 요소를 찾을 수 없습니다.`);
      } else {
        if ($selector.contains(target)) {
          flag = true;
          typeof eventListener === 'function' && eventListener({ originalEvent: event, target: event.target, currentTarget: $selector });
        }
      }
    }, true);
  }

  delegate('#main', 'click', (event) => {
    if (event.currentTarget) {
      $main.removeChild($main.childNodes[2]);
      $inputId.value = '';
      $inputPassword.value = '';
    }
  });

  window.addEventListener('keyup', (event) => {
    if (flag && event.key === 'Escape') {
      $main.removeChild($main.childNodes[2]);
      $inputId.value = '';
      $inputPassword.value = '';
      flag = false;
    }
  })
});