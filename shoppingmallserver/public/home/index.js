const $signOut = document.querySelector('.sign-out');
if ($signOut) {
  $signOut.addEventListener('click', async () => {
    const response = await fetch(
        'http://localhost:3000/sign-in/sign-out',
        {
          method: 'GET',
        }).then(res => res.json());

    if (response.ok) {
      location.href = '/';
    } else {
      alert('로그아웃 실패');
    }
  });
}


const a = document.querySelector('.sign-in');
console.log(a);

const $listWrapper = document.querySelector('.list-wrapper');
$listWrapper.addEventListener('mouseover',function(event) {
  const $active = document.querySelector('#active');
  $active.removeAttribute('id');
})

$listWrapper.addEventListener('mouseout',function(event) {
  $listWrapper.childNodes[1].children[0].childNodes[0].setAttribute('id', 'active');
})
