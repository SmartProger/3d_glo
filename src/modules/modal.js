import {animate} from "./helpers";

export const modal = () => {
  const serviceBlock = document.getElementById("service-block");
  const modal = document.querySelector(".popup");

  const openModal = () => {
    if (document.documentElement.clientWidth > 768) {
      modal.style.opacity = 0;
      modal.style.display = "block";

      animate({
        duration: 400,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = progress;
        },
      });
    } else {
      modal.style.display = "block";
      modal.style.opacity = 1;
    }
  };

  const closeModal = () => {
    if (document.documentElement.clientWidth > 768) {
      animate({
        duration: 400,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = 1 - progress;
          if (progress === 1) {
            modal.style.display = "none";
          }
        },
      });
    } else {
      modal.style.display = "none";
    }
  };

  serviceBlock.addEventListener("click", (e) => {
    if (e.target.closest(".popup-btn")) {
      openModal();
    }
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      closeModal();
    }
  });
};
