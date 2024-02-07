describe('Menu Page home', () => {
  beforeEach(() => {
    cy.visit('/auth')

    cy.get('input[id="email"]').type('teste@teste.com.br')

    cy.get('input[id="password"]').type('1234')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/')
  })

  it('should open the menu', () => {
    cy.get('button[aria-haspopup="dialog"]').should('be.visible')

    cy.get('button[aria-haspopup="dialog"]').click()

    cy.contains('Início').should('exist')
  })

  it('should go home', () => {
    cy.get('button[aria-haspopup="dialog"]').should('be.visible')

    cy.get('button[aria-haspopup="dialog"]').click()

    cy.contains('a', 'Início').should('be.visible')

    cy.contains('a', 'Início').click()

    cy.url().should('include', '/')
  })

  it('should go to product registration', () => {
    cy.get('button[aria-haspopup="dialog"]').should('be.visible')

    cy.get('button[aria-haspopup="dialog"]').click()

    cy.contains('a', 'Cadastro de Produtos').should('be.visible')

    cy.contains('a', 'Cadastro de Produtos').click()

    cy.url().should('include', '/product')
  })

  it('should go to client registration', () => {
    cy.get('button[aria-haspopup="dialog"]').should('be.visible')

    cy.get('button[aria-haspopup="dialog"]').click()

    cy.contains('a', 'Cadastro de Clientes').should('be.visible')

    cy.contains('a', 'Cadastro de Clientes').click()

    cy.url().should('include', '/client')
  })

  it('should go to assistant', () => {
    cy.get('button[aria-haspopup="dialog"]').should('be.visible')

    cy.get('button[aria-haspopup="dialog"]').click()

    cy.contains('a', 'Assistente de Pedido').should('be.visible')

    cy.contains('a', 'Assistente de Pedido').click()

    cy.url().should('include', '/assistant')
  })
})
