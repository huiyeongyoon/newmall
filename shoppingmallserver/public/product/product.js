const $sort = document.querySelector('.sort');
const $image = document.querySelectorAll('.image');

window.onload = () => {
  $sort.addEventListener('click', function(event){
    event.preventDefault();
    if(event.target.classList.contains('sort-name')) {
      $sort.querySelector('.active').classList.remove('active');
      event.target.classList.add('active');
      let eventName = event.target.getAttribute('data-name');
      console.log(eventName);
    }
  })
}