export const regExpCalc = () => {
  const form = document.querySelector(".calc-block");
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) =>
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/, "");
    }),
  );
};
