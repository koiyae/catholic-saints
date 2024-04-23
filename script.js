function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const activeClass = "ativo";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("mouseover", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initSmoothScroll() {
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initSmoothScroll();

function initiScrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }    
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initiScrollAnimation();

function initScrollImage() {
  function scrollImage() {
    const imageList = document.querySelector('.santos-lista');
    let currentImage = 0;
  
    function showNextImage() {
      if (currentImage < imageList.children.length - 1) {
        imageList.children[currentImage].style.display = 'none';
        currentImage++;
        imageList.children[currentImage].style.display = 'block';
      }
    }
  
    function showPreviousImage() {
      if (currentImage > 0) {
        imageList.children[currentImage].style.display = 'none';
        currentImage--;
        imageList.children[currentImage].style.display = 'block';
      }
    }
  
    imageList.addEventListener('wheel', function(event) {
      event.preventDefault();
      if (event.deltaY > 0) {
        showNextImage();
      } else {
        showPreviousImage();
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', scrollImage);
}

initScrollImage();