/* eslint-disable jest/expect-expect */
/* eslint-disable no-undef */
describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:3000')
    cy.contains('Anecdotes')
    cy.contains('If it hurts, do it more often')
  })
})
