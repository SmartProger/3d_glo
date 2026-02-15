export const regExpForms = () => {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      if (input.type === "text") {
        input.oninput = () => {
          input.value = input.value.replace(/[^а-яё\-\s]/gi, "");
        };
      } else if (input.type === "email") {
        input.oninput = () => {
          input.value = input.value.replace(/[^a-z0-9@\-_.!~*']/gi, "");
        };
      } else if (input.type === "tel") {
        input.oninput = () => {
          input.value = input.value.replace(/[^0-9()\-]/gi, "");
        };
      }
    });
  });
};
