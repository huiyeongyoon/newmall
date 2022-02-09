const $listWrapper = document.querySelector('.list-wrapper');
$listWrapper.addEventListener('mouseover',function(event) {
  const $active = document.querySelector('#active');
  $active.removeAttribute('id');
})

$listWrapper.addEventListener('mouseout',function(event) {
  $listWrapper.childNodes[1].children[3].childNodes[0].setAttribute('id', 'active');
})