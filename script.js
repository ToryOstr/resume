let listHeaders = document.querySelectorAll('.sidebar-title');

listHeaders.forEach(elem => {
  elem.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active');
  });
});

let listSectionTitles = document.querySelectorAll('.section-title');

listSectionTitles.forEach(elem => {
  elem.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active');
  });
});
let projectLinksArrows = document.querySelectorAll('.arrow');

projectLinksArrows.forEach(elem => {
  elem.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('arrow-rotate');
  });
});
