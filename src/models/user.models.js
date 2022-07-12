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

  static async logUserIn(email, password) {
    const logInData = {
      email: email,
      password: password,
    };

    const response = await fetch(this.baseUrl + "/userLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem(
          "@kenziehabits:userdata",
          JSON.stringify(res.response)
        );
        localStorage.setItem("@kenziehabits:token", res.token);

        //falta método de redirecionamento
        console.log(res)
        return res;
      })
      .catch((err) => {
        console.error(err);
        return err;
      });

    return response;
  }

}