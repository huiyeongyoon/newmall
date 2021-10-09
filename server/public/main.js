function isValidId(id) {
  return true;
}

function isValidPassword(password) {
  return true;
}

function showError(message) {
  console.error(message);
}

window.addEventListener('DOMContentLoaded', (event) => {
  const $form = document.querySelector('.form-login');

  $form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const body = {
      id: formData.get('id1'),
      password: formData.get('password1')
    };

    if (!isValidId(body.id)) {
      showError('id가 적절하지 않습니다.');
      return;
    }

    if (!isValidPassword(body.password)) {
      showError('password가 적절하지 않습니다.');
      return;
    }

    console.log('request body : ', body);
  });
});
