export default class Login {
  static form = document.querySelector("form");

  static init() {
    this.form.addEventListener("submit", this.submitForm)
  }

  static submitForm(e) {
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

    //Adicionar requisção de login pegando o data

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

