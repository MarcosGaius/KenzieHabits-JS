export default class Redirect {
  static homeUrl = "/src/views/homepage.views.html"
  static loginUrl = "/index.html"
  
  static redirectToLoginPage() {
    window.location.href = this.loginUrl
  }
  static redirectToHomePag() {
    window.location.href = this.homeUrl
  }
}