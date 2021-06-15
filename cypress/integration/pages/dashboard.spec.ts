describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  describe('test angular widget', () => {
    it('should render angular widget container', () => {
      cy.get('.mat-card-header').eq(0).contains('Angular');
    });

    it('should render widget items', () => {
      cy.get('.mat-list-item', { timeout: 10000 }).eq(0);
    });

    it('should render no data text', () => {
      cy.intercept('assets/data/stack-overflow.json', {
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
  });

  describe('test typescript widget', () => {
    it('should render angular widget container', () => {
      cy.get('.mat-card-header').eq(2).contains('TypeScript');
    });

    it('should render widget items', () => {
      cy.get('.mat-list-item', { timeout: 10000 }).eq(2);
    });

    it('should render no data text', () => {
      cy.intercept('assets/data/stack-overflow.json', {
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
  });

  describe('test weather widget', () => {
    it('should render angular widget container', () => {
      cy.get('.mat-card-header').eq(1).contains('Weather');
    });

    it('should render widget items', () => {
      cy.get('.mat-list-item', { timeout: 10000 }).eq(1);
    });

    it('should render stack and weather data one by one', () => {
      cy.get('.mat-list-item', { timeout: 10000 })
        .eq(1)
        .get('app-stack-overflow-content')
        .eq(0)
        .contains('Answerers');

      cy.get('.mat-list-item', { timeout: 10000 })
        .eq(1)
        .get('app-weather-content')
        .eq(1)
        .contains('Weather Forecast');

      cy.get('.mat-list-item', { timeout: 10000 })
        .eq(1)
        .get('app-stack-overflow-content')
        .eq(1)
        .contains('Answerers');
    });

    it('should render no data text', () => {
      cy.intercept('assets/data/weather.json', {
        body: [],
      }).as('weatherData');
      cy.intercept('assets/data/stack-overflow.json', {
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
  });
});
