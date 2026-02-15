export const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const closeBtn = modal.querySelector(".popup-close");

  let count = 0;
  let idAnimate;
  modal.style.opacity = 0;

  const openModal = () => {
    if (document.documentElement.clientWidth > 768) {
      modal.style.display = "block";
      count += 0.05;
      idAnimate = requestAnimationFrame(openModal);
      if (count < 1) {
        modal.style.opacity = count;
      } else {
        cancelAnimationFrame(idAnimate);
        modal.style.opacity = 1;
      }
    } else {
      modal.style.display = "block";
      modal.style.opacity = 1;
    }
  };

  const closeModal = () => {
    if (document.documentElement.clientWidth > 768) {
      count -= 0.05;
      idAnimate = requestAnimationFrame(closeModal);
      if (count > 0) {
        modal.style.opacity = count;
      } else {
        cancelAnimationFrame(idAnimate);
        modal.style.opacity = 0;
        modal.style.display = "none";
      }
    } else {
      modal.style.display = "none";
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
      closeModal();
    }
  });
};
