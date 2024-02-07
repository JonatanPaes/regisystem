describe('login to the application', () => {
  it('should login', () => {
    cy.visit('http://localhost:3000/auth')

    cy.get('input[id="email"]').type('teste@teste.com.br')

    cy.get('input[id="password"]').type('1234')

    cy.get('button[type="submit"]').click()
  })

  it('should show an error message when trying to log in without filling in the email and password correctly', () => {
    cy.visit('http://localhost:3000/auth')

    cy.get('input[id="email"]').clear()

    cy.get('input[id="password"]').clear()

    cy.get('button[type="submit"]').click()

    cy.contains('Preencha com um e-mail valido.').should('be.visible')
    cy.contains('Esse campo é obrigatário.').should('be.visible')
  })

  it('should give an error when entering invalid credentials', () => {
    cy.visit('http://localhost:3000/auth')

    cy.get('input[id="email"]').type('testeerro@teste.com')

    cy.get('input[id="password"]').type('4321')

    cy.get('button[type="submit"]').click()

    cy.get('li').contains('Credenciais inválidas.').should('be.visible')
  })
})
