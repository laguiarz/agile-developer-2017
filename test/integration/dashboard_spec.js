import { exists } from "fs";

describe('Dashboard', function() {
    it('should show open issue count', function() {
        cy.resetDB();

        cy.fixture({status:'open'});
        cy.fixture({status:'open'});
        cy.fixture({status:'closed'});

        cy.visit('/dashboard');
        cy.get('[data-test-open-issue-count]').should('contain','2 open issues');

        //add new issue
        cy.dataTest('add-issue').click();
        cy.field('title').type('New Issue');
        cy.field('severity').select('High');
        cy.field('description').type('New issue description');
        cy.field('estimation').select('8');
        cy.get('[type=submit]').click();

        //check the new issue impacts the count
        cy.visit('/dashboard');
        cy.get('[data-test-open-issue-count]').should('contain','3 open issues');
    });

    it('should show severity gauge', function() {
        cy.resetDB();
        
        cy.fixture({status:'open', severity:'High'});
        cy.fixture({status:'open',severity:'High'});
        cy.fixture({status:'open',severity:'Medium'});

        cy.visit('/dashboard');
        cy.dataTest('high-gauge').should('contain','67');

        //add new issue
        cy.dataTest('add-issue').click();
        cy.field('title').type('New Issue');
        cy.field('severity').select('High');
        cy.field('description').type('New issue description');
        cy.field('estimation').select('8');
        cy.get('[type=submit]').click();
     
        cy.visit('/dashboard');
        cy.dataTest('high-gauge').should('contain','75');

    });
});