import basePage from "./base.page";

class homePage extends basePage{
    static get url(){
        return "/";
    }

    static get appointmentButton(){
        return cy.get("#btn-make-appointment");
    }
}

export default homePage;