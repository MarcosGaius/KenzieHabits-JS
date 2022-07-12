export default class Habits {
  static baseUrl = "https://habits-kenzie.herokuapp.com/api";
  static headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem("@kenziehabits:token")}`
  };
  
  static async updateHabit(id, updateObj) {
    return await fetch(`${this.baseUrl}/habits/${id}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(updateObj),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));
  }

  static async setHabitDone(id) {
    return await fetch(this.baseUrl + `/habits/complete/${id}`, {
      method: 'PATCH',
      headers: this.headers
    })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err)
      return err
    })
  }

  static async createNewHabit(habitObj) {
    return await fetch(this.baseUrl + "/habits", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(habitObj)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err)
      return err
    })
  }
}
