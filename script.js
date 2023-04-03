let listHeaders = document.querySelectorAll('.sidebar-title');

function toggleClassList() {
  this.nextElementSibling.classList.toggle('active');
  this.classList.toggle('click');
}

listHeaders.forEach(elem => {
  elem.addEventListener('click', toggleClassList);
});

let listSectionTitles = document.querySelectorAll('.section-title');

listSectionTitles.forEach(elem => {
  elem.addEventListener('click', toggleClassList);
});
let projectLinksArrows = document.querySelectorAll('.arrow');

projectLinksArrows.forEach(elem => {
  elem.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('arrow-rotate');
  });
});

let printBtn = document.querySelector('.print');

printBtn.addEventListener('click', function () {
  window.print();
});