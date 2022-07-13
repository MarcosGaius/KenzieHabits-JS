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
    this.createModalTemplate("Editar perfil");

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
    nameInput.value = userData.usr_name;
    urlImageLabel.innerText = "URL da imagem do perfil";
    urlImageInput.value = userData.usr_image;
    saveChangesBtn.innerText = "Salvar alterações";

    nameDiv.append(nameLabel, nameInput);
    urlImageDiv.append(urlImageLabel, urlImageInput);
    modalForm.append(nameDiv, urlImageDiv);
    modalDivButtons.append(saveChangesBtn);
  }

  static showNewHabitModal() {
    this.createModalTemplate("Criar hábito");

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

    modalForm.append(titleDiv, descriptionDiv, categoryDiv)
    modalDivButtons.append(insertBtn)
  }
}