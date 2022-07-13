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
}
