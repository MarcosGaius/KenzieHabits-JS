export default class Habits {
  static baseUrl = "https://habits-kenzie.herokuapp.com/api";
  static headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem("@kenziehabits:token")}`
  };
  
  static async updateHabit(id, updateObj) {
    return await fetch(`${this.baseUrl}/habits/${id}`, {
      method: "PATCH",
<<<<<<< HEAD
      headers: this.headers,
=======
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("@kenziehabits:token")}`
      },
>>>>>>> 76eabcaaa68c9540d38e0082a033cbd7e32c1f92
      body: JSON.stringify(updateObj),
    })
      .then((res) => res.json())
      .then((res) => {
        return res
      })
      .catch((err) => {
        console.error(err);
        return err;
      });
  }

  static async setHabitDone(id) {
    return await fetch(this.baseUrl + `/habits/complete/${id}`, {
      method: 'PATCH',
      headers: this.headers
    })
    .then(async (res) => {
       return await res.json()
    })
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