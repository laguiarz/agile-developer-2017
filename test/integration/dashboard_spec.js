import { exists } from "fs";

describe('Dashboard', function() {
    it('should show open issue count', function() {
        cy.resetDB();

        cy.fixture({status:'open'});
        cy.fixture({status:'open'});
        cy.fixture({status:'closed'});

        cy.visit('/dashboard');
    
        cy.get('[data-test-open-issue-count]').should('contain','2 open issues');
      });
});
