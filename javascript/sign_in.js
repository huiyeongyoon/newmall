

function isInclude(emailValue, target) {

  for (let i = 0; i < target.length; i++) {
    if( emailValue.includes(target[i])) {
      return true;
    }
  }
  return false;
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


  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const number = '0123456789';
  const at = '@';
  const com = '.';


  if(!isInclude($signIn.value, alphabet)) {
    alert('영문 숫자 합쳐서 이메일 형식으로')
    return false;
  }
  if(!isInclude($signIn.value, number)) {
    alert('영문 숫자 합쳐서 이메일 형식으로')
    return false;
  }

  if(!isInclude($signIn.value, at)) {
    alert('영문 숫자 합쳐서 이메일 형식으로')
    return false;
  }

  if(!isInclude($signIn.value, com)) {
    alert('영문 숫자 합쳐서 이메일 형식으로')
    return false;
  }

  if($signInPassword.value.length < 8) {
    alert('비밀번호는 8글자 이상 가능');
    return false;
  }

  alert('1성공1');
  return true;
}

$signInButton.addEventListener('click', (event) => {
  event.preventDefault();
  signIn();
})

