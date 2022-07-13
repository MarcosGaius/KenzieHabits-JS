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
}