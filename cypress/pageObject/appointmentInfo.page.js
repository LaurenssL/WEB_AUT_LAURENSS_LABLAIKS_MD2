import BasePage from "./base.page";

class appointmentInfoPage extends BasePage{
    static get url(){
        return "/appointment.php#summary";
    }

    static get facility(){
        return cy.get("#facility");
    }

    static get readmission(){
        return cy.get("#hospital_readmission");
    }

    static get healthcareProgram(){
        return cy.get("#program");
    }

    static get visitDate(){
        return cy.get("#visit_date");
    }

    static get comment(){
        return cy.get("#comment");
    }
}

export default appointmentInfoPage;