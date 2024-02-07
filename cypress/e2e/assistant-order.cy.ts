describe('Assistant order', () => {
  beforeEach(() => {
    cy.visit('/auth')

    cy.get('input[id="email"]').type('teste@teste.com.br')

    cy.get('input[id="password"]').type('1234')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/')
  })

  it('should follow order flow', () => {
    cy.visit('/product')

    cy.get('input[id="name"]').type('PlayStation 5')
    cy.get('input[id="price"]').type('3600')
    cy.get('input[id="stock"]').type('5')
    cy.get('#description').type('PlayStation 5 melhor console')

    cy.get('button[type="submit"]').click()

    cy.get('li')
      .contains('Produto cadastrado com sucesso!')
      .should('be.visible')

    cy.visit('/client')

    cy.get('input[id="code"]').type('123987')
    cy.get('input[id="name"]').type('Jonatán Paes')
    cy.get('input[id="cpfOrCnpj"]').type('58632014758')
    cy.get('input[id="email"]').type('jonatanpaes182@gmail.com')

    cy.get('button[type="submit"]').click()

    cy.get('li')
      .contains('Cliente cadastrado com sucesso!')
      .should('be.visible')

    cy.visit('/assistant')

    cy.get(':nth-child(5) > .inline-flex').click()

    cy.get('.relative > .rounded-2xl').click()

    cy.contains('button', 'Continuar').click()

    cy.get('input[id="cep"]').type('185420000')
    cy.get('input[id="address"]').type('Rua fulano de tal')
    cy.get('input[id="residenceNumber"]').type('777')
    cy.get('input[id="neighborhood"]').type('Vila dev')
    cy.get('input[id="city"]').type('São Paulo')
    cy.get('input[id="state"]').type('São Paulo')

    cy.contains('button', 'Resumo da Compra').click()
    cy.contains('button', 'Finalizar Compra').click()

    cy.contains('a', 'Home').click()
  })
})
