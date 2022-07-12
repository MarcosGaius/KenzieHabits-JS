export default class User {
  static baseUrl = "https://habits-kenzie.herokuapp.com/api";

  static async editUserData(editObj) {
    return await fetch(`${this.baseUrl}/user/profile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@kenziehabits:token")
        )}`,
      },
      body: JSON.stringify({
        usr_img: editObj,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  }

  static logUserOut() {
    localStorage.removeItem("@kenziehabits:token");
    Redirect.loginPage();
  }
}
