import User from "../models/user.models.js";

export default class Login {
  static form = document.querySelector("form");

  static init() {
    this.form.addEventListener("submit", this.submitForm)
  }

  static async submitForm(e) {
    e.preventDefault();

    const formElements = Array.from(e.target.elements);
    const data = {};

    formElements.forEach((element) => {
      if (element.name !== "") {
        const { value, name } = element;

        if(Login.checkingFields(element)) {
          data[name] = value;
        } else {
          Login.fieldInvalid(name);
          return
        }

      }
    });

    await User.logUserIn(data);
    // adicionar notificação de erro caso o email e senha não existam

  }

  static checkingFields(field) {
    if (!field.validity.valid && field.value.trim() === "") return false;
    return true
  }

  static fieldInvalid(fieldName) {
    if(fieldName === "email") {
      //adicionar função para criar a notificação de erro
      return
    }
    
    if (fieldName === "password") {
      //adicionar função para criar a notificação de erro
      return
    }
  }
}

