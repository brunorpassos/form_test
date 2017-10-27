export class FormCreator {
  constructor(elementId, formId) {
    const form = document.createElement("form");
    form.className = "customer-form";
    form.id = formId;
    document.getElementById(elementId).append(form);
  }

  inputTextField(currentItem, formId) {
    let formElement = document.createElement("div");
    formElement.className = "form-element"
    
    let formLabel = document.createElement("label");
    formLabel.htmlFor = currentItem.id;
    formLabel.append(currentItem.placeholder);
    formLabel.className = "form-label";

    let formInput = document.createElement("input");
    formInput.className = "form-input";
    formInput.id = currentItem.id;
    formInput.name = currentItem.name;
    formInput.type = currentItem.type;

    document.getElementById(formId).appendChild(formElement);
    formElement.appendChild(formLabel);
    formElement.appendChild(formInput);
  }

  inputFileField(currentItem, formId) {
    let formElement = document.createElement("div");
    formElement.className = "form-file-input";

    let imageUploadIcon = document.createElement("img");
    imageUploadIcon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ei-share-apple.svg/2000px-Ei-share-apple.svg.png";
    imageUploadIcon.style.width = "50px";
    imageUploadIcon.style.height = "50px";

    let formImageUpload = document.createElement("label");
    formImageUpload.htmlFor = currentItem.id;

    formImageUpload.className = "form-image-upload";
    formImageUpload.append(imageUploadIcon);
    formImageUpload.append(currentItem.placeholder);

    let formInput = document.createElement("input");
    formInput.id = currentItem.id;
    formInput.name = currentItem.name;
    formInput.type = currentItem.type;
    formInput.style.display = "none";

    let imageBox = document.createElement("div");
    imageBox.className = "image-box";

    let formImageThumb = document.createElement("img");
    formImageThumb.src = "https://skinsjar.com/img/stats/profile.svg";
    formImageThumb.style.width = "60px";
    formImageThumb.style.height = "60px";

    document.getElementById(formId).appendChild(formElement);
    formElement.appendChild(formImageUpload);
    formElement.appendChild(formInput);
    formElement.appendChild(imageBox);
    imageBox.appendChild(formImageThumb);
   }

  submitBtnBuild(currentItem, formId) {
    let formElement = document.createElement("div");
    formElement.className = "form-element"
    document.getElementById(formId).appendChild(formElement);

    let formSubmit = document.createElement("button");
    formSubmit.className = "form-submit";
    formSubmit.setAttribute("disabled", true);
    formSubmit.append(currentItem.placeholder);
    
    formElement.appendChild(formSubmit);
  }

  setFocusEventListener(inputId) {
    document.getElementById(inputId).addEventListener("focus", function() {
      this.previousSibling.classList.add("active-label")
    });

    document.getElementById(inputId).addEventListener("focusout", function() {
      if (!this.value.trim()) {
        this.previousSibling.classList.remove("active-label");
      } 
    });
  }
}
