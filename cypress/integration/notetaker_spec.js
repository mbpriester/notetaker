describe("app", function () {
    it('should load the app', function () {
        cy.visit('http://localhost:3000')

        cy.contains('Note Taker')

        cy.get('.addNoteButton').trigger('mouseover')
        cy.contains('Create a New Note')
        cy.get('.addNoteButton').click({ force: true })
        cy.get('.newNoteContainer .noteText input').type('Hello')
        cy.get('.newNoteContainer .noteText input').should('have.value', 'Hello')
        cy.get('.newNoteContainer .noteText input').type('{enter}')
        cy.get('.allNotesContainer .noteText input').should('have.value', 'Hello')
        cy.get('.newNoteContainer .noteText input').should('not.exist')
        cy.get('.allNotesContainer .deleteNote').click()
        cy.get('.allNotesContainer .noteText input').should('not.have.value', 'Hello')
    });
});