describe("app", function () {
    it('should load the app', function () {
        cy.visit('http://localhost:3000')

        cy.contains('My Note List')

        cy.contains('Create a New Note')
        cy.get('.addNoteButton').click()
        cy.get('.newNoteContainer')
        cy.get('.noteText input').type('Hello')

    });
});