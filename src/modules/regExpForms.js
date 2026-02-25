export const regExpForms = () => {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      if (input.name === "user_name") {
        input.oninput = () => {
          input.value = input.value.replace(/[^а-яё\s]/gi, "");
        };
      } else if (input.type === "email") {
        input.oninput = () => {
          input.value = input.value.replace(/[^a-z\d@\-_.!~*']/gi, "");
        };
      } else if (input.name === "user_phone") {
        input.oninput = () => {
          input.value = input.value.replace(/[^\d+()\-]/gi, "");
        };
      } else if (input.name === "user_message") {
        input.oninput = () => {
          input.value = input.value.replace(/[^а-яё\d\s().,!?:;\-"']/gi, "");
        };
      }
    });
  });
};
