export default class Notification {
    static createNotification(message, successful = true){
        const notificationWrapper = document.createElement("div");
        notificationWrapper.classList.add("notificationWrapper");

        const notificationCard = document.createElement("div");
        notificationCard.classList.add("notificationCard");
        (successful === false) ? notificationCard.classList.add("notificationCard--error") : notificationCard;

        const notificationImage = document.createElement("div");
        notificationImage.classList.add("notificationImage");
        (successful === false) ? notificationImage.classList.add("notificationImage--error") : notificationImage;

        const img = document.createElement("img");
        if(successful === false){
            img.src = "/src/assets/img/cross.png"; 
            img.alt = "Símbolo de check.";
        }
        else {
            img.src = "/src/assets/img/check.png";
            img.alt = "Símbolo de check.";
        }

        const notificationText = document.createElement("div");
        notificationText.classList.add("notificationText");

        const notificationTitle = document.createElement("h2");
        notificationTitle.classList.add("notificationText__title");
        (successful === false) ? notificationTitle.innerText = "Erro!" : notificationTitle.innerText = "Sucesso!";

        const notificationSubtitle = document.createElement("p");
        notificationSubtitle.classList.add("notificationText__subtitle");
        notificationSubtitle.innerText = message;

        notificationText.append(notificationTitle, notificationSubtitle);
        notificationImage.appendChild(img);
        notificationCard.append(notificationImage, notificationText);
        notificationWrapper.appendChild(notificationCard);

        return notificationWrapper;
    }

    static async showNotification(notification){
        const notificationExists = document.querySelector(".notificationWrapper");
        if(notificationExists){ notificationExists.remove() }

        const newNotification = document.querySelector("body").insertAdjacentElement("afterbegin", notification);
        
        setTimeout(() => {
            newNotification.remove();
        }, 5000);
    }
}