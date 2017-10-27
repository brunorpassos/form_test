import "../css/main.scss"
import { formData } from "./data";
import { FormCreator } from "./form";

let formId = "sign-in-form"

// Basta passar o Id do elemento onde o formulário será inserido e o Id do Formulário.

let formCreate = new FormCreator("app", formId);

formData.map(function(currentItem, i, formData) {
  switch(currentItem.type) {
    case "file":
      formCreate.inputFileField(currentItem, formId);
      break;
    case "submit":
      formCreate.submitBtnBuild(currentItem, formId);
      break;
    default:
      formCreate.inputTextField(currentItem, formId);
      formCreate.setFocusEventListener(currentItem.id);
  }
})  