import * as types from '../../../src/actions'

describe('redux store', () => {
    it('has expected state on load', () => {
        cy.visit('http://localhost:3000')
        cy.window().its('store').invoke('getState').should('deep.equal', {
            notesReducer: {
                notes: []
            }
        })
    })

    it('is updated by the DOM actions', () => {
        cy.visit('http://localhost:3000')
        cy.get('.addNoteButton').click()
        cy.get('.newNoteContainer .noteText input').type('note1')
        cy.get('.newNoteContainer .noteText input').type('{enter}')
        cy.get('.allNotesContainer .noteText input').should('have.value', 'note1')
        cy.window().its('store').invoke('getState').should('deep.equal', {
            notesReducer: {
                notes: [
                    'note1'
                ]
            }
        })
        cy.get('.allNotesContainer .deleteNote').click()
        cy.window().its('store').invoke('getState').should('deep.equal', {
            notesReducer: {
                notes: []
            }
        })

    });
    it('dispatches actions', () => {
        cy.visit('http://localhost:3000')

        cy.window().its('store').invoke('dispatch', { type: 'NEW_NOTE', note: 'Justtt testing'})

        cy.get('.allNotesContainer .noteText input').should('have.length', 1).should('have.value', 'Justtt testing')
    });
})