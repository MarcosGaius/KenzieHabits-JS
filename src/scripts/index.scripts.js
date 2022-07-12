import Notification from "../controller/notification.controller.js";

const teste = Notification.createNotification("Login bem sucedido.", true);
Notification.showNotification(teste);