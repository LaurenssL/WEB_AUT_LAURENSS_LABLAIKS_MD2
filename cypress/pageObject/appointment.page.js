import basePage from "./base.page";

class appointmentPage extends basePage{
    static get url(){
        return "/index.php#appointment";
    }

    static get facilityForm(){
        return cy.get("#combo_facility");
    }

    static get readmissionCheck(){
        return cy.get("#chk_hospotal_readmission");
    }

    static get medicaidCheck(){
        return cy.get("#radio_program_medicaid");
    }

    static get visitDateSelection(){
        return cy.get("#txt_visit_date");
    }

    static get dateButtons(){
        return cy.get(".day");
    }

    static get commentField(){
        return cy.get("#txt_comment");
    }

    static get appointmentArea(){
        return cy.get("#appointment");
    }

    static get bookAppointmentButton(){
        return cy.get("#btn-book-appointment");
    }
}

export default appointmentPage;