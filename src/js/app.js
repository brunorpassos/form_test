import "../css/main.scss"
import { formData } from "./data";

var form = document.createElement("form");
form.className = "customer-form"
document.getElementById("app").append(form);

for(var i = 0; i < formData.length; i++) {
  var formElement = document.createElement("div");
  formElement.className = "form-element";

  var formLabel = document.createElement("label");
  formLabel.htmlFor = formData[i].id;
  formLabel.append(formData[i].placeholder);
  formLabel.className = "form-label";

  var formInput = document.createElement("input");
  formInput.className = "form-input";
  formInput.id = formData[i].id;
  formInput.name = formData[i].name;
  formInput.type = formData[i].type;

  form.appendChild(formElement);
  formElement.appendChild(formLabel);
  formElement.appendChild(formInput);
  setFocusEventListener(formInput.id);
}

function setFocusEventListener(inputId) {
  document.getElementById(inputId).addEventListener("focus", function() {
    this.previousSibling.classList.add("active-label")
  });

  document.getElementById(inputId).addEventListener("focusout", function() {
    if (!this.value.trim()) {
      this.previousSibling.classList.remove("active-label");
    } 
  });
}
