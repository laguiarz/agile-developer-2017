describe('issues list', function() {
    it('shows all issues', function() {
        cy.resetDB();
        cy.fixture({
            title: 'lorem ipsum'
        });
        cy.fixture({
            title: 'foo bar'
        });

        cy.visit('/issues');

        cy.contains('lorem ipsum').should('exist');
        cy.contains('foo bar').should('exist');
    });


    it('filters issues by open status',function()    {
        cy.resetDB();
        cy.fixture({title:'issue 1',status:'open'});
        cy.fixture({title:'issue 2',status:'open'});
        cy.fixture({title:'issue 3',status:'closed'});

        cy.visit('/issues');

        cy.contains('issue 1').should('exist');
        cy.contains('issue 2').should('exist');
        cy.contains('issue 3').should('exist');

        cy.get('[data-test-open-fiter]')
        .click();

        cy.contains('issue 1').should('exist');
        cy.contains('issue 2').should('exist');
        cy.contains('issue 3').should('not.exist');

    });

    it('filters issues by closed status',function()    {
        cy.resetDB();
        cy.fixture({title:'issue 1',status:'open'});
        cy.fixture({title:'issue 2',status:'open'});
        cy.fixture({title:'issue 3',status:'closed'});

        cy.visit('/issues');

        cy.contains('issue 1').should('exist');
        cy.contains('issue 2').should('exist');
        cy.contains('issue 3').should('exist');

        cy.get('[data-test-closed-fiter]')
        .click();

        cy.contains('issue 1').should('not.exist');
        cy.contains('issue 2').should('not.exist');
        cy.contains('issue 3').should('exist');

    });

    it('filters issues by all status',function()    {
        cy.resetDB();
        cy.fixture({title:'issue 1',status:'open'});
        cy.fixture({title:'issue 2',status:'open'});
        cy.fixture({title:'issue 3',status:'closed'});

        cy.visit('/issues');

        cy.contains('issue 1').should('exist');
        cy.contains('issue 2').should('exist');
        cy.contains('issue 3').should('exist');

        cy.get('[data-test-all-fiter]')
        .click();

        cy.contains('issue 1').should('exist');
        cy.contains('issue 2').should('exist');
        cy.contains('issue 3').should('exist');

    });
});
