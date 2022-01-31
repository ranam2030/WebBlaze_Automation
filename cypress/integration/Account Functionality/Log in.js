describe('Open the URL', () =>{
    it('Go to the URL',() => {
        cy.visit('https://www.demoblaze.com/index.html')
    })
})

describe('Login', () =>{
    it('Login with Invalid info',() => {
        cy.get('#login2').click()
        cy.get('#loginusername').type('raaafdafa')
        cy.get('#loginpassword').type('dfafafasdfasd')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('User does not exist.')
        })
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    })
})

describe('Login', () =>{
    it('Login with Valid info',() => {
        cy.get('#login2').click()
        cy.get('#loginusername').clear()
        cy.get('#loginusername').type('ranam4076@gmail.com')
        cy.get('#loginpassword').clear()
        cy.get('#loginpassword').type('1234567890')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(10000)
        cy.get('#nameofuser').should('have.text','Welcome ranam4076@gmail.com')
       
    })
})

