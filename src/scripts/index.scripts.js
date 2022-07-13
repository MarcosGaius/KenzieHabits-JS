import Form from "../controller/form.controllers.js";
import Access from "../controller/access.controllers.js";

document.getElementById("loginFormButton").onclick = (e) => {
    e.preventDefault();

    const formData = Form.isFormValid(e);

    if(formData.email === undefined || formData.password === undefined){
        Form.alertFieldInvalid(formData);
        return;
    }

    try {

    }
    catch(error){

    }
}
