import "../css/main.scss"
import { formData } from "./data";


debugger;
var form = document.createElement("form");
document.getElementById("app").append(form);

for(var i = 0; i < formData.length; i++) {
  var formElement = document.createElement("input");
  debugger;
  formElement.id = formData[i].id;
  formElement.name = formData[i].name;
  formElement.placeholder = formData[i].placeholder;
  formElement.type = formData[i].type;
  form.appendChild(formElement);
}