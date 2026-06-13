describe('template spec', () => {
  it('displays the full readme creation process with static skills', () => {
    cy.visit('http://localhost:5173/Dev-ToolKit_aide_aux_dev_junior/readme')
    cy.get('#title')
        .type('Mon titre')

    cy.get('#description')
        .type('Ma description')

    cy.get('#inProgress').click()

    cy.get('#1').click()

//ReadmeMarkdown.vue
    cy.contains('Markdown').click()
        .should('have.class', 'active')

    cy.get('pre')
        .should('contain.text', '# Mon titre')
        .should('contain.text', 'Ma description')
        .should('contain.text', 'https://img.shields.io/badge/Statut-En%20Cours-orange')
        .should('contain.text', '![HTML5]')
        .should('not.contain.text', '# Guide d\'installation')

// ReadmeResult.vue
    cy.contains('Aperçu').click()
        .should('have.class', 'active')

    cy.get('output')
        .should('contain.text', 'Mon titre')
        .should('contain.text', 'Ma description')
        .should('not.contain.text', '# Guide d\'installation')

    cy.get('img[alt="HTML5"]')
        .should('exist')

//reset
    cy.get('button.reset').click()
    cy.get('output')
        .should('not.exist')

    cy.get('p')
        .should('contain.text', 'Aucun aperçu')

// ReadmeMarkdown.vue
    cy.contains('Markdown').click()
    cy.get('pre')
        .should('have.value', '')

    cy.get('p')
        .should('contain.text', 'Aucun aperçu')

//ReadmeForm.vue
    cy.contains("Formulaire").click()

    cy.get('#title')
        .should('have.value', '')
        .type('Mon nouveau titre')

    cy.get('#description')
        .should('not.contain.text', 'Ma description')
        .type('Ma nouvelle description')

    cy.get('#finished').click()

    cy.get('#1').click()
    cy.get('#4').click()

// ReadmeMarkdown.vue
    cy.contains('Markdown').click()
        .should('have.class', 'active')

    cy.get('pre')
        .should('contain.text', '# Mon nouveau titre')
        .should('contain.text', 'Ma nouvelle description')
        .should('contain.text', 'https://img.shields.io/badge/Statut-Termin%C3%A9-green')
        .should('contain.text', '![HTML5]')
        .should('contain.text', '![Python]')
        .should('contain.text', '# Guide')
        .should('contain.text', 'sudo apt install python3')
        .should('contain.text', 'choco install python')
        .should('contain.text', 'python main.py')

//ReadmeResult.vue
    cy.contains('Aperçu').click()
        .should('have.class', 'active')

    cy.get('output')
        .should('contain.text', 'Mon nouveau titre')
        .should('contain.text', 'Ma nouvelle description')
        .should('contain.text', 'Guide')
        .should('contain.text', 'sudo apt install python3 python3-pip')
        .should('contain.text', 'choco install python')
        .should('contain.text', 'python main.py')

    cy.get('img[alt="HTML5"]')
        .should('exist')
    cy.get('img[alt="Python"]')
        .should('exist')

    cy.contains('Formulaire').click()
    cy.get('#title')
        .should('have.value', 'Mon nouveau titre')

  })
  it("should sanitize XSS injection in README preview", () => {
    cy.visit('http://localhost:5173/Dev-ToolKit_aide_aux_dev_junior/readme')
    cy.get("#title").type("<script>alert('XSS')</script>");
    cy.contains("Aperçu").click();
    cy.get("output").should("not.contain.html", "<script>");
  });
})