class Habits {
  static baseUrl = "https://habits-kenzie.herokuapp.com/api";

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

  static async getDoneHabits() {
    const getDone = await fetch(`${this.baseUrl}/habits`, {
      method: "GET",
      headers: this.headers,
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => {
        console.error(err);
        return err;
      });

    let newData = getDone.filter((elem) => {
      return elem.habit_status == true;
    });

    return newData;
  }
}
