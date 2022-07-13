import Habits from "../models/habit.models.js";
import User from "../models/user.models.js";
import Access from "./access.controllers.js";
import Form from "./form.controllers.js";

export default class Modal {
  static createModalTemplate(modalH2 = "placeholder - título") {
    const body = document.querySelector("body");
    const modalWrapper = document.createElement("div");
    const modal = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("h2");
    const modalCloseBtn = document.createElement("button");
    const modalForm = document.createElement("form");
    const modalDivButtons = document.createElement("div");

    modalWrapper.classList.add("modalWrapper");
    modal.classList.add("modal");
    modalHeader.classList.add("modal__header");
    modalForm.classList.add("modal__form");
    modalDivButtons.classList.add("modal__buttons");

    modalTitle.innerText = `${modalH2}`;
    modalCloseBtn.innerText = "X";

    modalHeader.append(modalTitle, modalCloseBtn);
    modal.append(modalHeader, modalForm, modalDivButtons);
    modalWrapper.append(modal);

    body.append(modalWrapper);
  }
  
  static showUserEditModal() {
    Modal.createModalTemplate("Editar perfil");

    const userData = JSON.parse(localStorage.getItem("@kenziehabits:userdata"));

    const modalForm = document.querySelector(".modal__form");
    const modalDivButtons = document.querySelector(".modal__buttons");

    const nameDiv = document.createElement("div");
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    const urlImageDiv = document.createElement("div");
    const urlImageLabel = document.createElement("label");
    const urlImageInput = document.createElement("input");
    const saveChangesBtn = document.createElement("button");

    nameDiv.classList.add("form__inputContainer");
    urlImageDiv.classList.add("form__inputContainer");
    saveChangesBtn.classList.add("mainButton", "mainButton--saveChanges");

    nameLabel.innerText = "Nome";
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.setAttribute("required", "true")
    nameInput.value = userData.usr_name;
    urlImageLabel.innerText = "URL da imagem do perfil";
    urlImageInput.type = "url";
    urlImageInput.name = "urlImage";
    urlImageInput.setAttribute("required", "true");
    urlImageInput.value = userData.usr_image;
    saveChangesBtn.innerText = "Salvar alterações";

    nameDiv.append(nameLabel, nameInput);
    urlImageDiv.append(urlImageLabel, urlImageInput);
    modalForm.append(nameDiv, urlImageDiv);
    modalDivButtons.append(saveChangesBtn);

    saveChangesBtn.onclick = (e) => {
      e.preventDefault()
      const formData = Form.isFormValid(e)
      
      if(typeof formData == "object") {
        User.editUserData({
          usr_name: formData.name,
          usr_image: formData.urlImage
        })
        .then((res) => {
          Access.redirectToHomePage()
        })
        .catch((err) => console.error(err))
      } else {
        Form.alertFieldInvalid(formData)
      }
    }
  }

  static showNewHabitModal() {
    Modal.createModalTemplate("Criar hábito");

    const modalForm = document.querySelector(".modal__form");
    const modalDivButtons = document.querySelector(".modal__buttons");

    const titleDiv = document.createElement("div");
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const descriptionDiv = document.createElement("div");
    const descriptionLabel = document.createElement("label");
    const descriptionTextarea = document.createElement("textarea");
    const categoryDiv = document.createElement("div");
    const categoryLabel = document.createElement("label");
    const categorySelect = document.createElement("select");
    const saudeOption = document.createElement("option");
    const estudosOption = document.createElement("option");
    const casaOption = document.createElement("option");
    const trabalhoOption = document.createElement("option");
    const lazerOption = document.createElement("option");
    const placeholderOption = document.createElement("option");
    const insertBtn = document.createElement("button");

    titleDiv.classList.add("form__inputContainer");
    descriptionDiv.classList.add("form__inputContainer");
    categoryDiv.classList.add("form__inputContainer");
    insertBtn.classList.add("mainButton", "mainButton--insert");

    titleInput.type = "text"
    titleInput.name = "title"
    titleInput.id = "title"
    titleInput.setAttribute("required", "true")
    descriptionTextarea.name = "description"
    descriptionTextarea.id = "description"
    descriptionTextarea.setAttribute("required", "true")
    categorySelect.name = "category"
    categorySelect.id = "category"
    categorySelect.setAttribute("required", "true")

    titleLabel.innerText = "Título";
    titleInput.placeholder = "Digitar título";
    descriptionLabel.innerText = "Descrição";
    descriptionTextarea.placeholder = "Digitar descrição";
    categoryLabel.innerText = "Categoria";
    placeholderOption.value = "";
    placeholderOption.setAttribute("selected", "true");
    placeholderOption.setAttribute("hidden", "true");
    placeholderOption.setAttribute("disabled", "true");
    placeholderOption.innerText = "Selecionar categoria"
    saudeOption.value = "saude";
    saudeOption.innerText = "Saúde";
    estudosOption.value = "estudos";
    estudosOption.innerText = "Estudos";
    trabalhoOption.value = "trabalho";
    trabalhoOption.innerText = "Trabalho";
    casaOption.value = "casa";
    casaOption.innerText = "Casa";
    lazerOption.value = "lazer";
    lazerOption.innerText = "Lazer";
    insertBtn.innerText = "Inserir"

    categorySelect.append(
      placeholderOption,
      saudeOption,
      estudosOption,
      trabalhoOption,
      casaOption,
      lazerOption
    );

    titleDiv.append(titleLabel, titleInput);
    descriptionDiv.append(descriptionLabel, descriptionTextarea);
    categoryDiv.append(categoryLabel, categorySelect);

    modalDivButtons.append(insertBtn)
    modalForm.append(titleDiv, descriptionDiv, categoryDiv, modalDivButtons)

    insertBtn.onclick = (e) => {
      e.preventDefault()
      const formData = Form.isFormValid(e)
      console.log(formData)

      if (typeof formData == "object") {
        Habits.createNewHabit({
          habit_title: formData.title,
          habit_description: formData.description,
          habit_category: formData.category
        })
        .then((res) => {
          Access.redirectToHomePage()
        })
        .catch((err) => console.error(err))
      } else {
        Form.alertFieldInvalid(formData)
      }
    }
  }

  static showEditHabitModal() {
    Modal.createModalTemplate("Editar hábito");

    const smallTitle = document.createElement("label");
    const inputTitle = document.createElement("input");
    const smallDescription = document.createElement("label");
    const inputDescription = document.createElement("textarea");
    const smallCategory = document.createElement("label");
    const inputCategory = document.createElement("select");
    const status = document.createElement("h4");
    const inputCheck = document.createElement("input");

    const deleteHabit = document.createElement("button");
    const saveHabit = document.createElement("button");

    const optionOne = document.createElement("option");
    const optionTwo = document.createElement("option");
    const optionThree = document.createElement("option");
    const optionFour = document.createElement("option");

    const divStatus = document.createElement("div");
    const divTitle = document.createElement("div");
    const divDescription = document.createElement("div");
    const divCategory = document.createElement("div");

    divTitle.classList.add("form__inputContainer");
    divDescription.classList.add("form__inputContainer");
    divCategory.classList.add("form__inputContainer");
    divStatus.classList.add("form__statusContainer");
    deleteHabit.className = "deleteHabit mainButton";
    saveHabit.className = "saveHabit mainButton";

    smallTitle.innerText = "Título";
    inputTitle.placeholder = "Insira o título aqui";
    smallDescription.innerText = "Descrição";
    inputDescription.placeholder = "Insira a descrição aqui";
    smallCategory.innerText = "Categoria";
    status.innerText = "Status";
    inputCheck.type = "checkbox";
    deleteHabit.innerText = "Excluir";
    saveHabit.innerText = "Salvar alterações";

    optionOne.innerText = "Saúde";
    optionTwo.innerText = "Trabalho";
    optionThree.innerText = "Lazer";
    optionFour.innerText = "Casa";

    const modalForm = document.querySelector(".modal__form");
    const modalButtons = document.querySelector(".modal__buttons");

    modalForm.append(divTitle, divDescription, divCategory, divStatus);
    inputCategory.append(optionOne, optionTwo, optionThree, optionFour);
    divStatus.append(status, inputCheck);
    divTitle.append(smallTitle, inputTitle);
    divDescription.append(smallDescription, inputDescription);
    divCategory.append(smallCategory, inputCategory);
    modalButtons.append(deleteHabit, saveHabit);
  }

  static showDeleteHabitModal() {
    Modal.createModalTemplate("Excluir hábito");

    const divTitle = document.createElement("div");
    const title = document.createElement("h1");
    const titleDescription = document.createElement("h3");

    const cancelDeletion = document.createElement("button");
    const confirmDeletion = document.createElement("button");

    title.innerText = "Certeza que deseja excluir este hábito?";
    titleDescription.innerText =
      "Após executar essa ação não será possível desfazer";
    cancelDeletion.innerText = "Cancelar";
    confirmDeletion.innerText = "Sim, excluir este hábito";

    divTitle.classList.add("title__container");
    cancelDeletion.className = "cancel__deletion mainButton";
    confirmDeletion.className = "confirm__deletion mainButton";

    const modalForm = document.querySelector(".modal__form");
    const modalButtons = document.querySelector(".modal__buttons");

    modalForm.append(divTitle);
    modalButtons.append(cancelDeletion, confirmDeletion);
    divTitle.append(title, titleDescription);
  }

  static showLoading(){
    const loadingContainer = document.querySelector(".loadingContainer");
    loadingContainer.style = "display: flex;"
    return;
  }

  static hideLoading(){
    const loadingContainer = document.querySelector(".loadingContainer");
    loadingContainer.style = "display: none;"
    return;
  }
}

// Modal.showNewHabitModal()