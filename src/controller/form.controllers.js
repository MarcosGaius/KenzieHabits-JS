import Notification from "./notification.controller.js";

export default class Form {

  static isFormValid(e) {
    const formElements = Array.from(e.target.form.elements);
    const data = {};

    for(let i = 0; i < formElements.length; i++){
      const currentElement = formElements[i];
      
      if(currentElement.name !== ""){
        const { value, name } = currentElement;

        if(Form.checkFieldValidity(currentElement)){
          data[name] = value;
        }
        else {
          return currentElement.name;
        }
      }
    }

    return data;
  }

  static checkFieldValidity(field) {
    if (!field.validity.valid || field.value.trim() === "") return false;
    return true
  }

  static alertFieldInvalid(fieldName) {
    if(fieldName === "email") {
      const invalidEmailNot = Notification.createNotification("Email inválido.", false);
      Notification.showNotification(invalidEmailNot);
      return
    }
    else if (fieldName === "password") {
      const invalidPasswordNot = Notification.createNotification("Senha inválida.", false);
      Notification.showNotification(invalidPasswordNot);
      return
    }

    //adicionar mais nomes de form.

    // else if(fieldName === "") {

    // }
  }
}

