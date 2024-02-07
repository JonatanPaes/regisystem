describe('Client registration', () => {
  beforeEach(() => {
    cy.visit('/auth')

    cy.get('input[id="email"]').type('teste@teste.com.br')

    cy.get('input[id="password"]').type('1234')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/')
  })

  it('should register client', () => {
    cy.visit('/client')

    cy.get('input[id="code"]').type('123987')
    cy.get('input[id="name"]').type('Jonatán Paes')
    cy.get('input[id="cpfOrCnpj"]').type('58632014758')
    cy.get('input[id="email"]').type('jonatanpaes182@gmail.com')

    cy.get('button[type="submit"]').click()

    cy.get('li')
      .contains('Cliente cadastrado com sucesso!')
      .should('be.visible')
  })
})
