describe('Product registration', () => {
  beforeEach(() => {
    cy.visit('/auth')

    cy.get('input[id="email"]').type('teste@teste.com.br')

    cy.get('input[id="password"]').type('1234')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/')
  })

  it('should register product', () => {
    cy.visit('/product')

    cy.get('input[id="name"]').type('PlayStation 5')
    cy.get('input[id="price"]').type('3600')
    cy.get('input[id="stock"]').type('5')
    cy.get('#description').type('PlayStation 5 melhor console')

    cy.get('button[type="submit"]').click()

    cy.get('li')
      .contains('Produto cadastrado com sucesso!')
      .should('be.visible')
  })
})
