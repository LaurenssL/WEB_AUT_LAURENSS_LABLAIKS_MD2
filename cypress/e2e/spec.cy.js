import basePage from "../pageObject/base.page";
import homePage from "../pageObject/home.page";
import loginPage from "../pageObject/login.page";
import historyPage from "../pageObject/history.page";
import appointmentPage from "../pageObject/appointment.page";
import appointmentInfoPage from "../pageObject/appointmentInfo.page";

describe("CuraHealthcare spec", () => {
  context("Make an Appointment", () => {
    beforeEach(() => {
      basePage.visit();
    });

    it("Scenario 1 - Make an Appointment", () =>{
      homePage.appointmentButton.click();
      loginPage.username.type("John Doe");
      loginPage.password.type("ThisIsNotAPassword");
      loginPage.loginButton.click();
      appointmentPage.facilityForm.select("Seoul CURA Healthcare Center");
      appointmentPage.readmissionCheck.click();
      appointmentPage.medicaidCheck.click();
      appointmentPage.visitDateSelection.click();
      appointmentPage.dateButtons.contains("30").click();
      appointmentPage.appointmentArea.click("right");
      appointmentPage.commentField.type("CURA Healthcare Service");
      appointmentPage.bookAppointmentButton.click();
      appointmentInfoPage.facility.should("have.text", "Seoul CURA Healthcare Center");
      appointmentInfoPage.readmission.should("have.text", "Yes");
      appointmentInfoPage.healthcareProgram.should("have.text", "Medicaid");
      appointmentInfoPage.visitDate.should("have.text", "30/05/2023");
      appointmentInfoPage.comment.should("have.text", "CURA Healthcare Service");
    });
  });
  
  context("Appointment history empty", () => {
    beforeEach(() => {
      basePage.visit();
    });

    it("Scenario 2 - Appointment history empty", () =>{
      homePage.appointmentButton.click();
      loginPage.username.type("John Doe"); 
      loginPage.password.type("ThisIsNotAPassword");
      loginPage.loginButton.click();
      basePage.menuButton.click();
      basePage.menuSideBar.should("have.class", "active");
      basePage.historyButton.click();
      historyPage.historyField.should("have.text", "No appointment.");
      historyPage.menuButton.click();
      historyPage.menuSideBar.should("have.class", "active");
      historyPage.menuLogout.click(); 
    });
  });
});