function isInclude(email, passwordConditions) {
  // 이 코드를 다른 사람이 쓴다면 난 어떤 내용을 전달해줘야 하나?
  if (!Array.isArray(target)) {
    console.error('target에 배열이 아닌 값이 전달되었습니다.');
    return false;
  }

  if (typeof email !== 'string') {
    console.error('emailValue에 문자열이 아닌 값이 전달되었습니다.');
    return false;
  }

  return target.filter((value) => email.includes(value)).length > 0;
}

function isNotInclude(emailValue) {

  const at = '@';
  const com = '.';

  if (emailValue !== at) {
    alert('이메일 형식이 아닙니다');
  }

  if (emailValue !== com) {
    alert('이메일 형식이 아닙니다');
  }
}

const $signInButton = document.querySelector('.sign-in-button');
const $signIn = document.querySelector('.sign-in');
const $signInPassword = document.querySelector('.sign-in-password');

function signIn() {

  const alphabet = ['a', 'b', 'c', 'd', ...]'abcdefghijklmnopqrstuvwxyz';
  const number = '0123456789';
  const at = '@';
  const com = '.'; // passwordConditions

  console.log($signIn.value)

  // side effect
  if(!isInclude($signIn.value, alphabet)) {
    showErrorMessage('1영문 숫자 합쳐서 이메일 형식으로')
    return false;
  }
  if(!isInclude($signIn.value, number)) {
    showErrorMessage('2영문 숫자 합쳐서 이메일 형식으로')
    return false;
  }

  if(!isValidEmail($signIn.value, at)) {
    showErrorMessage('3영문 숫자 합쳐서 이메일 형식으로')
    return false;
  }

  if(!isInclude($signIn.value, com)) {
    showErrorMessage('4영문 숫자 합쳐서 이메일 형식으로')
    return false;
  }

  if($signInPassword.value.length < 8) {
    showErrorMessage('비밀번호는 8글자 이상 가능');
    return false;
  }

  showErrorMessage('성공');
  return true;
}

$signInButton.addEventListener('click', (event) => {
  event.preventDefault();
  signIn();
})


function validateEmailAndPassword() {
  // check email
  // check password
}

const isValidEmail = validateEmail();
const isValidPassword = validatePassword();

if (isValidEmail && isValidPassword) {
  signIn();
}


