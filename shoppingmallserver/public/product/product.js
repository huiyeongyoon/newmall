const $listWrapper = document.querySelector('.list-wrapper');
const $sort = document.querySelector('.sort');
const $sortName = document.querySelectorAll('.sort-name');
$listWrapper.addEventListener('mouseover', function(event) {
  const $active = document.querySelector('#active');
  $active.removeAttribute('id');
});

$listWrapper.addEventListener('mouseout', function(event) {
  $listWrapper.childNodes[1].children[1].childNodes[0].setAttribute('id', 'active');
});

window.onload = () => {
  $sort.addEventListener('click', function(event) {
    event.preventDefault();


    if(event.target.classList.contains('sort-name')) {
      $sort.querySelector('.active').classList.remove('active');
      event.target.parentElement.classList.add('active');
    }

  });
}
