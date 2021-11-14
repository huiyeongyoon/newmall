
window.addEventListener('DOMContentLoaded', function(event) {
  const $listWrapper = document.querySelector('.list-wrapper');

  const $slides = document.querySelector('.slides');
  const slide = document.querySelectorAll('.slides li');
  let currentIndex = 0;
  const slideCount = slide.length;
  const slideWidth = 391;
  const slideMargin = 60;
  const $imgPrev = document.querySelector('.button-img-prev');
  const $imgNext = document.querySelector('.button-img-next');
  const $buttonCountLeft = document.querySelector('.button-count-left');
  const $buttonCountRight = document.querySelector('.button-count-right');
  const $counter = document.querySelector('.counter');
  const $priceTotal = document.querySelector('.price-total');
  $listWrapper.addEventListener('mouseover',function(event) {
    const $active = document.querySelector('#active');
    $active.removeAttribute('id');
  })

  $listWrapper.addEventListener('mouseout',function(event) {
    $listWrapper.childNodes[1].children[2].childNodes[0].setAttribute('id', 'active');
  })

  $buttonCountLeft.addEventListener('click' ,function(event) {
    const counterNumber = Number($counter.value);
    $counter.value = counterNumber + 1;
    const totalPrice = 20000 * $counter.value;
    $priceTotal.innerHTML = totalPrice.toLocaleString('ko-KR')+ '원';

  })
  $buttonCountRight.addEventListener('click' ,function(event) {
    const counterNumber = Number($counter.value);
    $counter.value = counterNumber - 1;
    if (counterNumber === 1) {
      $counter.value = 1;
    }
    const totalPrice = 20000 * $counter.value;
    $priceTotal.innerHTML = totalPrice.toLocaleString('ko-KR')+ '원';

  })
  makeClone();

  function makeClone() {
    for (let i = 0; i < slideCount; i++) {
      const cloneSlide = slide[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      $slides.appendChild(cloneSlide);
    }
    for (let i = slideCount - 1; i >= 0; i--) {
      const cloneSlide = slide[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      $slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPosition();
    setTimeout(function(){
      $slides.classList.add('animated');
    }, 100);

  }

  function updateWidth() {
    const currentSlides = document.querySelectorAll('.slides li');
    const newSlideCount = currentSlides.length;

    const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
    $slides.style.width = newWidth;

  }
  function setInitialPosition() {
    const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
    $slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
  }

  $imgNext.addEventListener('click', function() {
    moveSlide(currentIndex + 1);
  });
  $imgPrev.addEventListener('click', function() {
    moveSlide(currentIndex - 1);
  });

  function moveSlide(num) {
    $slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIndex = num;

    if(currentIndex === slideCount || currentIndex === -slideCount) {
      setTimeout(function() {
        $slides.classList.remove('animated');
        $slides.style.left = '0px';
        currentIndex = 0;
      }, 500);
    }
    setTimeout(function() {
      $slides.classList.add('animated');
    },600);

  }


});

