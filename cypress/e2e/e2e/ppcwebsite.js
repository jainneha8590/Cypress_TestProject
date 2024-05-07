import Page from "../pageObject/ppcPage";
const ppcData = require('../fixtures/ppc.json');

describe("Power Plus communication website", function () {
  const pageInstance = new Page();
  it("TestCase 1: Website HomePage", function () {
  
    cy.visit("https://www.ppc-ag.de/en/");
    cy.clickAcceptAll();  //custom command 
    cy.contains("Power Plus Communications");
    cy.get(".fusion-main-menu>ul>li").should("have.length", 9);
    cy.get(".fusion-main-menu>ul>li").eq(0).should("contain", "Company");
    cy.get(".fusion-main-menu>ul>li").eq(1).should("contain", "Products");
    cy.get(".fusion-main-menu>ul>li").eq(2).should("contain", "Solutions");
    cy.get(".fusion-main-menu>ul>li").eq(3).should("contain", "Services");
    cy.get(".fusion-main-menu>ul>li").eq(4).should("contain", "Innovation");
    cy.get(".fusion-main-menu>ul>li").eq(5).should("contain", "References");

    //cy.intercept('POST', 'https://www.google.com/recaptcha/*').as('recaptchaRequests');

    // Intercept the POST request to Google Analytics
    cy.intercept("POST", "https://www.google-analytics.com/j/collect*").as(
      "analyticsRequest"
    );

    // Click on the Careers link

    cy.get(".fusion-main-menu>ul>li")
      .eq(6)
      .should("contain", "Careers")
      .click();

    // Wait for the page to load after clicking on the Careers link

    cy.wait("@analyticsRequest");

    // Assert the new URL after the page load
    cy.url().should("eq", "https://www.ppc-ag.de/en/unternehmen/karriere/");

    // Assert the title of the page
    cy.title().should("contain", "Careers – Power Plus Communications AG");

    // Assert other elements or behavior on the page as needed
  });

  it(" TestCase 2 : Explore Career Page ", function () {
    cy.visit("https://www.ppc-ag.de/en/unternehmen/karriere/");
    cy.clickAcceptAll();

    cy.contains("Arbeiten bei PPC");
    cy.contains("Offene Stellen").click();
    cy.get(".qtranxs-available-language-link-de").click();
  });

  it("TestCase 3: check open position ", function () {
    cy.visit("https://www.ppc-ag.de/de/unternehmen/offene-stellen/");
    cy.url().should(
      "include",
      "https://www.ppc-ag.de/de/unternehmen/offene-stellen/"
    );
    cy.contains("Innovation braucht kluge & kreative Köpfe!");
  });
  it.only(" Test Case 4:Initiativbewerbung Form", function () {
    ppcData.forEach((testdata)=>{
    cy.visit("https://www.ppc-ag.de/de/unternehmen/offene-stellen/");
    cy.clickAcceptAll();
    cy.contains("Ihre Initiativbewerbung").click();
    cy.wait(200);

    cy.get(".modal-1 > .modal-dialog > .modal-content > .modal-body").contains(
      "WIR FREUEN UNS AUF SIE!"
    );
    cy.get(pageInstance.form)
      .find('input[name="vorname"]')
      .click()
      .type(testdata.name);
    cy.get(".modal-1 > .modal-dialog > .modal-content > .modal-body")
      .find('input[name="nachname"]')
      .click()
      .type(testdata.lastname);
    cy.get(".modal-1 > .modal-dialog > .modal-content > .modal-body")
      .find('input[name="your-email"]')
      .click()
      .type(testdata.email);
    cy.get(".modal-1 > .modal-dialog > .modal-content > .modal-body")
      .find('input[name="telefonnummer"]')
      .click()
      .type(testdata.phone);
    cy.get(".modal-1 > .modal-dialog > .modal-content > .modal-body")
      .find('input[name="eintritt"]')
      .click()
      .type(testdata.entrydate);
    cy.get(".modal-1 > .modal-dialog > .modal-content > .modal-body")
      .find('input[name="gehalt"]')
      .click()
      .type(testdata.gehalt);
    cy.get(
      ':nth-child(1) > [style="padding-right:7px;"] > label > .wpcf7-form-control-wrap > .codedropz-upload-wrapper > .codedropz-upload-handler > .codedropz-upload-container > .codedropz-upload-inner > .codedropz-btn-wrap > .cd-upload-btn'
    ).click();
    cy.get(
      ':nth-child(1) > [style="padding-right:7px;"] > label > .wpcf7-form-control-wrap > .codedropz-upload-wrapper > .wpcf7-form-control'
    )
      .click({ force: true })
      .selectFile("/Users/nehajain/Downloads/cv.pdf", { force: true });
    cy.wait(200);

    // Bewerbung abschicken
    //cy.get('.modal-1 > .modal-dialog > .modal-content > .modal-body').find('input[value="Bewerbung abschicken"]').click();
    });
  });

});
