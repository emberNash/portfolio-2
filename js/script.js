// -----------------slider----------------
const gallarySwiper = document.querySelector('.swiper-gallery');
if (gallarySwiper) {
  const swiper = new Swiper('.swiper-gallery', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      768: {
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
      },
      992: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
// ------------------табы-------------------
const [...tabItems] = document.querySelectorAll('.tabs-services__item');
const [...tabBlocks] = document.querySelectorAll('.block-services');

tabItems.forEach((el) => {
  el.addEventListener('click', (e) => {
    let activeBtn = el;
    let tabId = activeBtn.getAttribute('data-tab');
    let activeTab = document.querySelector(tabId);
    if (!activeBtn.classList.contains('_show')) {
      tabItems.forEach((el) => {
        el.classList.remove('_active');
      });
      tabBlocks.forEach((el) => {
        el.classList.remove('_show');
      });
      activeBtn.classList.add('_active');
      activeTab.classList.add('_show');
    }
  });
});
// ----------------------------------------

//------------- проверка формы и сохранение-----------------------
class Order {
  constructor(name, email, number) {
    this.name = name;
    this.email = email;
    this.number = number;
  }
}
let [...allInputs] = document.querySelectorAll('.form-visit__item > input');

let inputsRez = allInputs
  .map(function (element) {
    return element;
  })
  .filter((element) => {
    return element.type != 'button';
  });

const validate = (target) => {
  switch (target.id) {
    case 'name':
      return /^[A-zА-я_ ]{2,}$/i.test(target.value);
    case 'phone':
      return /^\+7\d{10}$/.test(target.value);
    case 'email':
      return /^[a-z.\d]+@[a-z._]+\.[a-z._]{1,4}$/i.test(target.value);
    default:
      throw new Error('невырный вызов регулярного выражения');
  }
};
// -----------------------
let saveButton = document.querySelector('.form-visit__item > [type=button]');
// -----------------------
// -----------------------
saveButton.addEventListener('click', () => {
  //Функция валидации после нажатия кнопки
  let validateRez = inputsRez.map(function (element) {
    return validate(element);
  });
  //проверка ошибок в инпутах
  if (!validateRez.includes(false)) {
    //если нет ошибок, записываем в localStorage
    let order = new Order(
      inputsRez[0].value,
      inputsRez[1].value,
      inputsRez[2].value
    );
    localStorage.setItem('order', JSON.stringify(order));
    inputsRez.forEach((e) => {
      e.value = '';
    });
    alert('Заяка отправлена');
  } else {
    alert('Проверьте данные заявки');
  }
});
// -----плавная прокрутка--------
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((el) => {
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    const blockId = el.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
