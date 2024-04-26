// debut Modal variables(le Newsletter)
  const modal = document.querySelector('[data-modal-overlay]');
  const modalCloseBtn = document.querySelector('[data-modal-class]');
  const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

  // Modal function
  const modalCloseFunc = function () {
    modal.classList.add('closed');
  };



  // Modal event listeners
  modalCloseOverlay.addEventListener('click', modalCloseFunc);
  modalCloseBtn.addEventListener('click', modalCloseFunc);

// Fin Modal variables(le Newsletter)
//---------------------------------------------------------------------------------------

  // DEbut Notification toast variables
  const notificationToast = document.querySelector('[data-toast]');
  const toastCloseBtn = document.querySelector('[data-toast-close]');

  // Notification toast event listener
  toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
  });

  // Fin Notification toast variables
//---------------------------------------------------------------------------------------


  //Debut mobiles Variables(le menu e navigation mobile)
  const mobileMenuOpenBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
  const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
  const mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
  const overlay = document.querySelector('[data-overlay]');

  const mobileMenuCloseFunc = function () {
    for (let i = 0; i < mobileMenus.length; i++) {
      mobileMenus[i].classList.remove('active');
    }
    overlay.classList.remove('active');
  };

  for (let i = 0; i < mobileMenuOpenBtns.length; i++) {
    mobileMenuOpenBtns[i].addEventListener('click', function () {
      for (let j = 0; j < mobileMenus.length; j++) {
        mobileMenus[j].classList.remove('active');
      }
      mobileMenus[i].classList.add('active');
      overlay.classList.add('active');
    });

    mobileMenuCloseBtns[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc);
  }
  
    //Fin mobiles Variables(le menu e navigation mobile)

//------------------------------------------------------------------------------------------------------------------------------

  //DEbut  Accordion variables (les sous-menus)
  const accordionBtns = document.querySelectorAll('[data-accordion-btn]');
  const accordions = document.querySelectorAll('[data-accordion]');

  for (let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener('click', function () {
      const clickedBtn = this.nextElementSibling.classList.contains('active');

      for (let j = 0; j < accordions.length; j++) {
        if (clickedBtn) break;

        if (accordions[j].classList.contains('active')) {
          accordions[j].classList.remove('active');
          accordionBtns[j].classList.remove('active');
        }
      }

      this.nextElementSibling.classList.toggle('active');
      this.classList.toggle('active');
    });
  }

    //Fin  Accordion variables (les sous-menus)
//---------------------------------------------------------------------------------------