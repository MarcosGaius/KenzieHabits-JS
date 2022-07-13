import Notification from "./notification.controller.js";
import User from "../models/user.models.js";

export default class Login {
  static form = document.querySelector("form");

  static setFormListener() {
    this.form.addEventListener("submit", this.tryToLogin)
  }

  static async tryToLogin(e) {
    e.preventDefault();

    const formElements = Array.from(e.target.elements);
    const data = {};
    
    for(let i = 0; i < formElements.length; i++){
      const currentElement = formElements[i];
      
      if(currentElement.name !== ""){
        const { value, name } = currentElement;

        if(Login.checkFieldValidity(currentElement)){
          data[name] = value;
        }
        else {
          Login.alertFieldInvalid(currentElement.name);
          return;
        }
      }
    }

    try {
      const loginResponse = await User.logUserIn(data.email, data.password);

      if(typeof loginResponse.message === "undefined") {
        // adicionar redirecionamento

        return
      }

      const unauthorizedLogin = Notification.createNotification(loginResponse.message, false);
      Notification.showNotification(unauthorizedLogin);

    }
    catch(error){
      console.log(error);
    }
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
    
    if (fieldName === "password") {
      const invalidPasswordNot = Notification.createNotification("Senha inválida.", false);
      Notification.showNotification(invalidPasswordNot);
      return
    }
  }
}

