export default class Habit {
  static urlBase = "https://habits-kenzie.herokuapp.com/api";
  static allHabits;

  static async getAllHabits() {
    return await fetch(`${this.urlBase}/habits`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": ``
      }
    })
  }
}