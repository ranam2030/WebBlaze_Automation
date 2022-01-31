describe('Open the URL', () =>{
    it('Go to the URL',() => {
        cy.visit('https://www.demoblaze.com/index.html')
    })
})

describe('Sign-Up', () =>{
    it('Create an account',() => {
        cy.get('#signin2').click()
        cy.get('#sign-username').type('ranam4076@gmail.com')
        cy.get('#sign-password').type('1234567890')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('This user already exist.')
        })
        
    })
})

describe('Close the signup popup', () =>{
    it('Clsoe window', () =>{
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    })
})

describe('Go to home page', () =>{
    it('Go to home', () =>{
        cy.get('.active > .nav-link').click()
    })
})
