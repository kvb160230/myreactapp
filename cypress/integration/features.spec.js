describe('Initial load, and feature functionality', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('successfully loads', () => {
        cy.get('.box')
        .should('have.length', 42)
      })
  
    it('accepts input and outputs right person', () => {
        const input = 'Krishna'
        cy.get('.searchbox')
          .type(input)
          .get('.box')
          .should('have.length', 1)
      })

      it('accepts input and outputs right people', () => {
        const input = 'jon'
        cy.get('.searchbox')
          .type(input)
          .get('.box')
          .should('have.length', 2)
      })
  })

describe('Initial load, and filtering functionality', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('selects CX filter and outputs CX team', () => {
        const input = 'Customer Experience'
        cy.get('select')
        .select(input)
        .get('.box')
        .should('have.length', 10)
      })
  
    it('selects Engineering filter and outputs Engineering team', () => {
        const input = 'Engineering'
        cy.get('select')
        .select(input)
        .get('.box')
        .should('have.length', 21)
      })

      it('selects Ops filter and outputs Ops team', () => {
        const input = 'Operations'
        cy.get('select')
        .select(input)
        .get('.box')
        .should('have.length', 11)
      })

      it('selects All filter and outputs everyone', () => {
        const input = 'All'
        cy.get('select')
        .select(input)
        .get('.box')
        .should('have.length', 42)
      })
  })

  describe('Initial load, searching and filtering functionality', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('selects CX filter, searches for someone in CX team, and outputs the right person', () => {
        const team = 'Customer Experience'
        const name = 'Sam'
        cy.get('select')
        .select(team)
        .get('.searchbox')
        .type(name)
        .get('.box')
        .should('have.length', 1)
      })
  
      it('selects Engineering filter, searches for someone in the Engineering team, and outputs the right person', () => {
        const team = 'Engineering'
        const name = 'Krishna'
        cy.get('select')
        .select(team)
        .get('.searchbox')
        .type(name)
        .get('.box')
        .should('have.length', 1)
      })

      it('selects Operation filter, searches for someone in Operations team, and outputs the right person', () => {
        const team = 'Operations'
        const name = 'Brad'
        cy.get('select')
        .select(team)
        .get('.searchbox')
        .type(name)
        .get('.box')
        .should('have.length', 1)
      })

      it('selects All filter and should output people from any team', () => {
        const team = 'All'
        const name = 'Jo'
        cy.get('select')
        .select(team)
        .get('.searchbox')
        .type(name)
        .get('.box')
        .should('have.length', 3)
      })
  })

