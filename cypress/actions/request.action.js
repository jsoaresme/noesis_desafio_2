class RequestMovie {
  requestFull(query) {
    return cy.request({
      method: 'GET',
      url: `?i=${query}&apikey=${Cypress.env('API_KEY')}`
    });
  }
}

export default RequestMovie;
