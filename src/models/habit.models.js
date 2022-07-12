export default class Habit {
  static urlBase = "https://habits-kenzie.herokuapp.com/api";
  static allHabits;

  static async getAllHabits() {
    return await fetch(`${this.urlBase}/habits`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc1NjUxNzcsImV4cCI6MTY1ODE2OTk3Nywic3ViIjoiMzkifQ.p2ol9UTDLjKcoewcIrwOk7vrgy2AP2EUt2EBcDRxQSA`
      }
    }).then(res => res.json())
      .then(res => res)
      .catch(e => console.error(e));
  }
}