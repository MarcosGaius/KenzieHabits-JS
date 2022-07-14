import Habits from "../models/habit.models.js";

export default class HomePage {
  static dataUser = JSON.parse(localStorage.getItem("@kenziehabits:userdata"));

  static addDom() {
    const imgPerfil = document.querySelector(".imgPerfil");
    const imgUserInfo = document.querySelector(".imgUserInfo")
    const nameUserInfo = document.querySelector(".boxUserInfo > h2");

    imgPerfil.style.backgroundImage = `url(${this.dataUser.usr_image})`;
    imgUserInfo.style.backgroundImage = `url(${this.dataUser.usr_image})`;
    nameUserInfo.textContent = this.dataUser.usr_name;

    this.addItemsToList();
  }

  static addHomeEvents() {
    document.querySelector(".imgPerfil").addEventListener("click", e => {
      const hasDropMenu = document.querySelector(".dropMenuHeader");
      if (!!hasDropMenu) {
        hasDropMenu.parentNode.removeChild(hasDropMenu);
        return
      }
      this.dropMenuHeader()
    });
  }

  static async addItemsToList() {
    const arrayHabits = await Habits.getAllHabits();
    const listHabits = document.querySelector(".listHabits");

    listHabits.textContent = "";

    this.createItemHeader(listHabits);
    this.createItemsHabits(listHabits, arrayHabits);

  }

  static createItemHeader(listHabits) {

    const liHeader = document.createElement("li");
    const paragraphStatus = document.createElement("p");
    const paragraphTitle = document.createElement("p");
    const paragraphDescription = document.createElement("p");
    const paragraphCategory = document.createElement("p");
    const spanEdit = document.createElement("span");

    liHeader.classList.add("headerItem");

    paragraphStatus.textContent = "Status";
    paragraphTitle.textContent = "Titulo";
    paragraphDescription.textContent = "Descrição";
    paragraphCategory.textContent = "Categoria";
    spanEdit.textContent = "Editar";

    liHeader.append(paragraphStatus, paragraphTitle, paragraphDescription, paragraphCategory, spanEdit);
    listHabits.append(liHeader);
  }

  static createItemsHabits(listHabits, arrayHabits) {
    if (arrayHabits.length === 0) {
      const titleNoHabits = document.createElement("h1");
      titleNoHabits.classList.add("noHabits");
      titleNoHabits.textContent = "Você não possui habitos cadastrados";
      return
    }

    for (let i = 0; i < arrayHabits.length; i++) {
      const { habit_id, habit_title, habit_description, habit_category, habit_status } = arrayHabits[i];

      const itemHabit = document.createElement("li")
      const inputStatus = document.createElement("input");
      const label = document.createElement("label");
      const paragraphTitle = document.createElement("p");
      const paragraphDescription = document.createElement("p");
      const divCategoryHabit = document.createElement("div");
      const paragraphCategory = document.createElement("p");
      const spanEdit = document.createElement("span");

      itemHabit.classList.add("itemHabit");
      paragraphTitle.classList.add("titleHabit");
      paragraphDescription.classList.add("descriptionHabit");
      divCategoryHabit.classList.add("categoryHabit");
      spanEdit.classList.add("edit", "fa-solid", "fa-ellipsis");

      inputStatus.type = "checkbox";
      inputStatus.name = "checkbox";
      inputStatus.id = habit_id;
      if (habit_status === true) inputStatus.checked = habit_status
      label.htmlFor = habit_id;

      paragraphTitle.textContent = habit_title;
      paragraphDescription.textContent = habit_description;
      paragraphCategory.textContent = habit_category;

      divCategoryHabit.append(paragraphCategory);
      itemHabit.append(inputStatus, label, paragraphTitle, paragraphDescription, divCategoryHabit, spanEdit);
      listHabits.append(itemHabit);
    }
  }

  static dropMenuHeader() {
    const userHeader = document.querySelector(".userHeader");

    const ulDropMenuHeader = document.createElement("ul");
    const iconCaretUp = document.createElement("i");
    const liEditUser = document.createElement("li");
    const iconUser = document.createElement("i");
    const spanUser = document.createElement("span");
    const liLogoutUser = document.createElement("li");
    const iconLogoutUser = document.createElement("i");
    const spanLogoutUser = document.createElement("span");

    ulDropMenuHeader.classList.add("dropMenuHeader");
    iconCaretUp.classList.add("fa-solid", "fa-caret-up");
    liEditUser.classList.add("editUser");
    iconUser.classList.add("fa-solid", "fa-user");
    liLogoutUser.classList.add("logoutUser");
    iconLogoutUser.classList.add("fa-solid", "fa-arrow-left")

    spanUser.textContent = "Editar Perfil";
    spanLogoutUser.textContent = "Sair do app";

    liEditUser.append(iconUser, spanUser);
    liLogoutUser.append(iconLogoutUser, spanLogoutUser);
    ulDropMenuHeader.append(iconCaretUp, liEditUser, liLogoutUser);

    userHeader.append(ulDropMenuHeader)
  }
}