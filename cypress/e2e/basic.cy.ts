describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display header text', () => {
    cy.get('h1')
    .contains('HELLO', { matchCase: false })
  })

  it('displays Click button', (https://featurereviewhub.com/) => {
    cy.get('button')
    .contains('Clicks');
  })
})
