const $email = document.querySelector('.email');
const $password = document.querySelector('.password');
const $signInButton = document.querySelector('.sign-up-button');
const $modalSuccess = document.querySelector('.modal-overlay-success');
const $modalFail = document.querySelector('.modal-overlay-fail');
const $closeSuccessBtn = document.querySelector('.modal-overlay-success');
const $closeFailBtn = document.querySelector('.modal-overlay-fail');

validateEmail = () => {

  const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return reg.test($email.value);

}

validatePassword = () => {

  const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/; //  8 ~ 20자 영문, 숫자 조합

  return regExp.test($password.value);
}

validateEmailAndPassword = () => {
  const isValidEmail = validateEmail();
  const isValidPassword = validatePassword();

  if (isValidEmail && isValidPassword) {
    $modalSuccess.style.display = 'flex';
  } else {
    $modalFail.style.display = 'flex';
  }

}

modalOff = () => {
  $modalSuccess.style.display = "none"
  $modalFail.style.display = "none"
}

window.addEventListener('keyup', event => {
  if($modalSuccess.style.display === "flex" && event.key === "Escape") {
    modalOff();
  }

  if($modalFail.style.display === "flex" && event.key === "Escape") {
    modalOff();
  }
})

$closeSuccessBtn.addEventListener('click', (event) => {
  modalOff();
})

$closeFailBtn.addEventListener('click', (event) => {
  modalOff();
})

$signInButton.addEventListener('click', (event) => {
  event.preventDefault();
  validateEmailAndPassword();
})

