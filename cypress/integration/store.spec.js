import { people } from "../../src/people.js";

describe('The redux store is updated for search and filter', () => {
    beforeEach(() => {
        cy.visit('/')
      })
      
    it('successfully loads', () => {
      cy.get('.box')
      .should('have.length', 42)
    })

    it('has expected state on load', () => {
      cy.window().its('store').invoke('getState').should('deep.equal', {
        getPeople: {
            searchField: '',
            filterField: '',
            people: people,
          },
      })
    })

    it('searches a name, and the store is updated', () => {
      const input = 'Krishna'
      cy.get('.searchbox')
      .type(input)
      cy.window().its('store').invoke('getState').should('deep.equal', {
        getPeople: {
          searchField: 'Krishna',
          filterField: '',
          people: [{
            id: 10,
            name: 'Krishna Boreda',
            nickname: '‎‎‎',
            title: 'Software Engineer Intern ',
            email: 'krishna@call-em-all.com',
            team: 'Engineering',
            default: 'all'
          }],
        },
      })
    })

    it('filters by team and searches a name, and the store is updated', () => {
      const team = 'Engineering'
      const name = 'Jon'
      cy.get('select')
      .select(team)
      .get('.searchbox')
      .type(name)
      cy.window().its('store').invoke('getState').should('deep.equal', {
        getPeople: {
          searchField: 'Jon',
          filterField: 'Engineering',
          people: [{
            id: 5,
            name: 'Jon Miller',
            nickname: 'TBD',
            title: 'Software Engineer Web Apps ‎',
            email: 'jon.miller@call-em-all.com',
            team: 'Engineering',
            default: 'all'
          }],
        },
      })
    })
})