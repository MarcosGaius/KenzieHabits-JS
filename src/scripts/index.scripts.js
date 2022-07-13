import Form from "../controller/form.controllers.js";
import Access from "../controller/access.controllers.js";
import User from "../models/user.models.js"
import Notification from "../controller/notification.controller.js";
import Habits from "../models/habit.models.js";

(
    async () => {
        const habitos = await Habits.getAllHabits();
        console.log("~ habitos", habitos)

        const token = localStorage.getItem("@kenziehabits:token");
        
        if(token != null){
            if(Access.isTokenExpired(token)){
                const tokenExpiredNot = Notification.createNotification("Sessão expirada, logue-se novamente.", false);
                Notification.showNotification(tokenExpiredNot);
                return;
            }
        }
    }
)();

document.getElementById("loginFormButton").onclick = async (e) => {
    e.preventDefault();

    const formData = Form.isFormValid(e);

    if(formData.email === undefined || formData.password === undefined){
        Form.alertFieldInvalid(formData);
        return;
    }

    try {
        const loginResponse = await User.logUserIn(formData.email, formData.password);
        if(loginResponse.status){
            throw loginResponse.message;
        }
        else {
            const loginNotification = Notification.createNotification("Login bem sucedido!", true);
            Notification.showNotification(loginNotification);
            setTimeout(()=> {
                Access.redirectToHomePage();
            }, 1000)
        }
    }
    catch(error){ 
        const errorNotification = Notification.createNotification(error, false);
        Notification.showNotification(errorNotification);
    }
}
