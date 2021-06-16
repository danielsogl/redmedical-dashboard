describe('Dashboard Page', () => {
  beforeEach(() => {
    // mock stack overflow data
    cy.intercept('https://api.stackexchange.com/2.2/*', {
      fixture: 'stack-overflow.json',
    }).as('fetchStackData');

    // mock weather data
    cy.intercept('assets/data/weather.json', {
      fixture: 'weather.json',
    }).as('weatherData');

    cy.visit('/dashboard');

    // wait until requests finished
    cy.wait('@fetchStackData');
    cy.wait('@weatherData');
  });

  describe('test angular widget', () => {
    it('should render widget header', () => {
      cy.get('mat-card').eq(0).children('.mat-card-header').contains('Angular');
    });

    it('should render widget items', () => {
      cy.get('mat-card')
        .eq(0)
        .find('.mat-list-item', { timeout: 2000 })
        .should('have.length', 30);
    });

    it('should render no data text', () => {
      cy.intercept('https://api.stackexchange.com/2.2/*', {
        body: {
          has_more: true,
          quota_max: 10000,
          quota_remaining: 9690,
          items: [],
        },
      }).as('fetchAngularData');
      cy.visit('/dashboard');
      cy.wait('@fetchAngularData');
      cy.get('.mat-card-content').eq(0).contains('No Data Available');
    });

    it('should handle api errors', () => {
      cy.intercept('https://api.stackexchange.com/2.2/*', {
        forceNetworkError: true,
      }).as('fetchAngularData');
      cy.visit('/dashboard');
      cy.wait('@fetchAngularData');
      cy.get('.mat-card-content').eq(0).contains('No Data Available');
    });
  });

  describe('test typescript widget', () => {
    it('should render widget header', () => {
      cy.get('mat-card')
        .eq(2)
        .children('.mat-card-header')
        .contains('TypeScript');
    });

    it('should render widget items', () => {
      cy.get('mat-card')
        .eq(2)
        .find('.mat-list-item', { timeout: 2000 })
        .should('have.length', 30);
    });

    it('should render no data text', () => {
      cy.intercept('https://api.stackexchange.com/2.2/*', {
        body: {
          has_more: true,
          quota_max: 10000,
          quota_remaining: 9690,
          items: [],
        },
      }).as('fetchTypeScript');
      cy.visit('/dashboard');
      cy.wait('@fetchTypeScript');
      cy.get('.mat-card-content').eq(2).contains('No Data Available');
    });

    it('should handle api errors', () => {
      cy.intercept('https://api.stackexchange.com/2.2/*', {
        forceNetworkError: true,
      }).as('fetchAngularData');
      cy.visit('/dashboard');
      cy.wait('@fetchAngularData');
      cy.get('.mat-card-content').eq(2).contains('No Data Available');
    });
  });

  describe('test weather widget', () => {
    it('should render widget header', () => {
      cy.get('mat-card').eq(1).children('.mat-card-header').contains('Weather');
    });

    it('should render widget items', () => {
      cy.get('mat-card')
        .eq(1)
        .find('app-stack-overflow-content', { timeout: 2000 })
        .should('have.length', 5);
      cy.get('mat-card')
        .eq(1)
        .find('app-weather-content', { timeout: 2000 })
        .should('have.length', 5);
    });

    it('should render no data text', () => {
      cy.intercept('assets/data/weather.json', {
        body: [],
      }).as('weatherData');
      cy.intercept('https://api.stackexchange.com/2.2/*', {
        body: {
          has_more: true,
          quota_max: 10000,
          quota_remaining: 9690,
          items: [],
        },
      }).as('fetchStackWeather');

      cy.visit('/dashboard');
      cy.wait('@weatherData');
      cy.wait('@fetchStackWeather');
      cy.get('.mat-card-content').eq(1).contains('No Data Available');
    });

    it('should handle api errors', () => {
      cy.intercept('https://api.stackexchange.com/2.2/*', {
        forceNetworkError: true,
      }).as('fetchAngularData');
      cy.visit('/dashboard');
      cy.wait('@fetchAngularData');
      cy.get('.mat-card-content').eq(1).contains('No Data Available');
    });
  });
});
