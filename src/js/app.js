import "../css/main.scss"
import { formData } from "./data";

var form = document.createElement("form");
form.className = "customer-form"
document.getElementById("app").append(form);

for(var i = 0; i < formData.length; i++) {
  var formElement = document.createElement("div");
  switch(formData[i].type) {
    case "file":
      formElement.className = "form-file-input";
      createFormFileUpload(formElement, formData);
      break;
    case "submit":
      formElement.className = "form-element";
      createFormSubmit(formElement, formData);
      break;
    default:
      formElement.className = "form-element";
      createFormInput(formElement, formData);
      break;  
  }
}

function createFormInput(formElement, formData) {
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

function createFormSubmit(formElement, formData) {
  var formSubmit = document.createElement("button");
  form.appendChild(formElement);
  formSubmit.className = "form-submit";
  formSubmit.setAttribute("disabled", true);
  formSubmit.append(formData[i].placeholder);
  formElement.appendChild(formSubmit);
}

function createFormFileUpload(formElement, formData) {
  var imageUploadIcon = document.createElement("img");
  imageUploadIcon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ei-share-apple.svg/2000px-Ei-share-apple.svg.png";
  imageUploadIcon.style.width = "50px";
  imageUploadIcon.style.height = "50px";

  var formImageUpload = document.createElement("label");
  formImageUpload.htmlFor = formData[i].id;
  formImageUpload.className = "form-image-upload";
  formImageUpload.append(imageUploadIcon);


  var formInput = document.createElement("input");
  formInput.id = formData[i].id;
  formInput.name = formData[i].name;
  formInput.type = formData[i].type;
  formInput.style.display = "none";

  var formImageThumb = document.createElement("img");
  formImageThumb.src = "https://skinsjar.com/img/stats/profile.svg";
  formImageThumb.style.width = "100px";
  formImageThumb.style.height = "100px";

  form.appendChild(formElement);
  formElement.appendChild(formImageUpload);
  formElement.appendChild(formInput);
  formElement.appendChild(formImageThumb);
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
