class Page {
    dialogBox() {
        return cy.get('.cc-accept-all');
    }
    searchicon(){
        return cy.get('.fusion-main-menu-icon');

    }
    companyButton (){
       return cy.get('[data-item-id="4134"]');
    }
    header() {
        return cy.get('.fusion-main-menu>ul>li');
    }
    job_link(){
        return cy.get ('.qtranxs-available-language-link-de')
    }
   
}

export default Page;