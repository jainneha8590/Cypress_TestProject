const jsonData = require('../fixtures/cure.json');
describe("Cura appointment webapp", function () {
  

  beforeEach(() => {
    cy.visit("https://cura.com/"); // Ensure the correct starting point for each test
  });
  it("open cura website", function () {
    cy.visit("https://cura.com/");
    cy.contains("Cura");
    cy.wait(500);
  });

  it("Header validation ", function () {
    cy.get("#top-menu >li").should("have.length", 6);
    cy.get("#top-menu > li").eq(0).should("contain", "Solutions"); // Example assertion for the first item
    cy.get("#top-menu > li").eq(1).should("contain", "Products");
    cy.get("#top-menu > li").eq(5).should("contain", "Login");
  });

  it("Form fill ", function () {
    cy.visit("https://consults.cura.com/");
    cy.get("#input_1_4_3").type("neha");
    cy.get("#input_1_4_6").type("jain");
    cy.get("#choice_1_7_1").check();
    cy.get("#input_1_8").type("6789765");
    cy.get("#input_1_11").type("viernheim");
    cy.get("#input_1_12").type("Ich habe Zahnschmerzen.");
    cy.get("#input_1_18").type("MusterMan");
    cy.get("#input_1_16").type("017631730785");
    cy.get("#input_1_19").type("0049");
    cy.get("#input_1_22").type("0123456789").click({ force: true });
    cy.get("#choice_1_21_1").check();
    cy.get("#input_1_20").type("John");
    //Calander
    cy.get(".ui-datepicker-trigger").click();
    cy.get(".ui-datepicker-year").select("1990");
    cy.get(".ui-datepicker-month").select("May");
    cy.get("tbody").contains("8").click();

    //upload file
    cy.get('input[type="file"]').selectFile(
      "/Users/nehajain/Downloads/neha.jpeg",
      { force: true }
    );
    //confirm message
    cy.get(".elementor-widget-container").contains("neha.jpeg19 kb100%");
  });

  it("Form fill with Json  ", function () {
    jsonData.forEach((testdata)=>{
    cy.visit("https://consults.cura.com/");
    cy.get("#input_1_4_3").type(testdata.name);
    cy.get("#input_1_4_6").type(testdata.lastname);
    cy.get("#choice_1_7_1").check();
    cy.get("#input_1_8").type(testdata.mrn);
    cy.get("#input_1_11").type(testdata.location);
    cy.get("#input_1_12").type(testdata.reason);
    cy.get("#input_1_18").type(testdata.requester_name);
    cy.get("#input_1_16").type(testdata.phone);
    cy.get("#input_1_19").type(testdata.nurse_ex);
    cy.get("#input_1_22").type(testdata.nursing_phone).click({ force: true });
    cy.get("#choice_1_21_1").check();
    cy.get("#input_1_20").type(testdata.clinical_contact_name);
    //Calander
    cy.get(".ui-datepicker-trigger").click();
    cy.get(".ui-datepicker-year").select(testdata.year);
    cy.get(".ui-datepicker-month").select(testdata.month);
    cy.get("tbody").contains(testdata.date).click();
    //select file
    cy.get('input[type="file"]').selectFile(
      "/Users/nehajain/Downloads/neha.jpeg",
      { force: true }
    );
    //confirm message
    cy.get(".elementor-widget-container").contains("neha.jpeg19 kb100%");
    //})
  });
});
});
