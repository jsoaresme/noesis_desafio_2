/// <reference types="Cypress" />

import RequestMovie from '../actions/request.action';

const req = new RequestMovie();

describe('Tests API  - Status 200', async () => {
  let query = Cypress.env('ID_DO_FILME');

  it('Status = 200', async () => {
    await req.requestFull(query).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it('Contract Property Response', async () => {
    await req.requestFull(query).then((res) => {
      expect(res.body).to.have.property('Title');
      expect(res.body).to.have.property('Year');
      expect(res.body).to.have.property('Rated');
      expect(res.body).to.have.property('Released');
      expect(res.body).to.have.property('Runtime');
      expect(res.body).to.have.property('Genre');
      expect(res.body).to.have.property('Director');
      expect(res.body).to.have.property('Writer');
      expect(res.body).to.have.property('Actors');
      expect(res.body).to.have.property('Plot');
      expect(res.body).to.have.property('Language');
      expect(res.body).to.have.property('Country');
      expect(res.body).to.have.property('Awards');
      expect(res.body).to.have.property('Poster');
      expect(res.body).to.have.property('Ratings');
      expect(res.body).to.have.property('Metascore');
      expect(res.body).to.have.property('imdbRating');
      expect(res.body).to.have.property('imdbVotes');
      expect(res.body).to.have.property('imdbID');
      expect(res.body).to.have.property('Type');
      expect(res.body).to.have.property('DVD');
      expect(res.body).to.have.property('BoxOffice');
      expect(res.body).to.have.property('Production');
      expect(res.body).to.have.property('Website');
      expect(res.body).to.have.property('Response');
    });
  });

  it('Title movie', async () => {
    await req.requestFull(query).then((res) => {
      expect(res.body.Title).to.eq('The Social Network');
    });
  });

  it('Year movie', async () => {
    await req.requestFull(query).then((res) => {
      expect(res.body.Year).to.eq('2010');
    });
  });

  it('Language movie', async () => {
    await req.requestFull(query).then((res) => {
      expect(res.body.Language).to.eq('English, French');
    });
  });

  it('Incorrect IMDb ID', async () => {
    query = '165165';
    await req.requestFull(query).then((res) => {
      expect(res.body.Response).to.eq('False');
      expect(res.body.Error).to.eq('Incorrect IMDb ID.');
    });
  });

  it('Erro converting type', async () => {
    query = 'naoexiste';
    await req.requestFull(query).then((res) => {
      expect(res.body.Response).to.eq('False');
      expect(res.body.Error).to.eq('Error converting data type varchar to int.');
    });
  });
});
