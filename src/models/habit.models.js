export default class Habits {
  static baseUrl = "https://habits-kenzie.herokuapp.com/api";
  static async updateHabit(id, updateObj) {
    return await fetch(`${this.baseUrl}/habits/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@kenziehabits:token")
        )}`,
      },
      body: JSON.stringify(updateObj),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));
  }

  static async setHabitDone(id) {
    return await fetch(this.baseUrl + `/habits/complete/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("@kenziehabits:token")}`
      }
    })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err)
      return err
    })

    //falta realizar testes
  }
}
