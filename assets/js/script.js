'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}



// theme toggle functionality
const themeToggleBtn = document.querySelector("[data-theme-toggle]");

// Load saved theme from localStorage (default to light theme)
const currentTheme = localStorage.getItem("theme");
if (currentTheme !== "dark") {
  document.body.classList.add("light-theme");
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    
    // Save theme preference to localStorage
    if (document.body.classList.contains("light-theme")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
}



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

if (modalContainer && modalCloseBtn && overlay) {
  // add click event to all modal items
  for (let i = 0; i < testimonialsItem.length; i++) {

    testimonialsItem[i].addEventListener("click", function () {

      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

      testimonialsModalFunc();

    });

  }

  // add click event to modal close button
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}



// ARISE trainings modal variables
const ariseModalOpen = document.querySelector("[data-arise-modal-open]");
const ariseModalContainer = document.querySelector("[data-arise-modal-container]");
const ariseModalClose = document.querySelectorAll("[data-arise-modal-close]");

const ariseModalFunc = function () {
  ariseModalContainer.classList.toggle("active");
}

if (ariseModalOpen && ariseModalContainer) {
  ariseModalOpen.addEventListener("click", ariseModalFunc);

  for (let i = 0; i < ariseModalClose.length; i++) {
    ariseModalClose[i].addEventListener("click", ariseModalFunc);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && ariseModalContainer.classList.contains("active")) {
      ariseModalFunc();
    }
  });
}



// Data Mining modal variables
const dataminingModalOpen = document.querySelector("[data-datamining-modal-open]");
const dataminingModalContainer = document.querySelector("[data-datamining-modal-container]");
const dataminingModalClose = document.querySelectorAll("[data-datamining-modal-close]");

const dataminingModalFunc = function () {
  dataminingModalContainer.classList.toggle("active");
}

if (dataminingModalOpen && dataminingModalContainer) {
  dataminingModalOpen.addEventListener("click", dataminingModalFunc);

  for (let i = 0; i < dataminingModalClose.length; i++) {
    dataminingModalClose[i].addEventListener("click", dataminingModalFunc);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && dataminingModalContainer.classList.contains("active")) {
      dataminingModalFunc();
    }
  });
}



// Licenciatura modal variables
const licenciaturaModalOpen = document.querySelector("[data-licenciatura-modal-open]");
const licenciaturaModalContainer = document.querySelector("[data-licenciatura-modal-container]");
const licenciaturaModalClose = document.querySelectorAll("[data-licenciatura-modal-close]");

const licenciaturaModalFunc = function () {
  licenciaturaModalContainer.classList.toggle("active");
}

if (licenciaturaModalOpen && licenciaturaModalContainer) {
  licenciaturaModalOpen.addEventListener("click", licenciaturaModalFunc);

  for (let i = 0; i < licenciaturaModalClose.length; i++) {
    licenciaturaModalClose[i].addEventListener("click", licenciaturaModalFunc);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && licenciaturaModalContainer.classList.contains("active")) {
      licenciaturaModalFunc();
    }
  });
}



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]") || document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

if (select && selectValue) {
  select.addEventListener("click", function () { elementToggleFunc(this); });

  // add event in all select items
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);

    });
  }
}

// add event in all filter button items for large screen
if (filterBtn.length && selectValue) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;

    });

  }
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });
  }
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
