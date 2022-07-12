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
      body: JSON.stringify(logInData),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem(
          "@kenziehabits:userdata",
          JSON.stringify(res.response)
        );
        localStorage.setItem("@kenziehabits:token", res.token);

        //falta método de redirecionamento
        
        return res;
      })
      .catch((err) => {
        console.error(err);
        return err;
      });

    return response;
  }

}

// User.logUserIn(
//   "grupo5RafaelK@mail.com",
//   "aaa6cd662711478489f51cd12036a71a"
// ).then((res) => console.log(res));

// User.logUserOut()