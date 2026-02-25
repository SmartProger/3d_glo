import "./css/bootstrap.min.css";
import "./css/style.min.css";

import {timer} from "./modules/timer";
import {menu} from "./modules/menu";
import {modal} from "./modules/modal";
import {regExpCalc} from "./modules/regExpCalc";
import {regExpForms} from "./modules/regExpForms";
import {tabs} from "./modules/tabs";
import {slider} from "./modules/slider";
import {calc} from "./modules/calc";
import {sendForm} from "./modules/sendForm";

timer("19 february 2026");
menu();
modal();
regExpCalc();
regExpForms();
tabs();
slider();
calc(100);
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
