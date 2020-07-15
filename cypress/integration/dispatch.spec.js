import { onSearchChange, onFilterChange, onRequestPeople} from "../../src/actions.js";

describe('Dispatches actions to test', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('can drive app by dispatching request people action', () => {
      // dispatch Redux action
      cy
      .window()
      .its('store')
      .invoke('dispatch', onRequestPeople('Jon','Engineering'))
      // check if the app has updated its UI
      cy.get('.box').should('have.length', 42)
    })

    it('can drive app by dispatching search action', () => {
        // dispatch Redux action
        cy
        .window()
        .its('store')
        .invoke('dispatch', onSearchChange('Krishna'))
        // check if the app has updated its UI
        cy.get('.box').should('have.length', 1).contains('Krishna')
      })

      it('can drive app by dispatching filter action', () => {
        // dispatch Redux action
        cy
        .window()
        .its('store')
        .invoke('dispatch', onFilterChange('Engineering'))
        // check if the app has updated its UI
        cy.get('.box').should('have.length', 21).contains('Krishna')
      })

      it('can drive app by dispatching search and filter action', () => {
        // dispatch Redux action
        cy
        .window()
        .its('store')
        .invoke('dispatch', onSearchChange('Krishna'))
        .window()
        .its('store')
        .invoke('dispatch', onFilterChange('Engineering'))
        // check if the app has updated its UI
        cy.get('.box').should('have.length', 1).contains('Krishna')
      })

      it('can drive app by dispatching search and filter action 2', () => {
        // dispatch Redux action
        cy
        .window()
        .its('store')
        .invoke('dispatch', onSearchChange('Jon'))
        .window()
        .its('store')
        .invoke('dispatch', onFilterChange('All'))
        // check if the app has updated its UI
        cy.get('.box').should('have.length', 2).contains('Jon')
      })
    
  })