/// <reference types="cypress" />

describe("Users actions in home Move IT", () => {
  it("should start countdown", () => {
    cy.server();
    cy.visit("http://localhost:3000/");

    cy.get(".Countdown_countdownButton__2cSHU").click();

    cy.get("main > strong").contains("Novo desafio");
  });

  it("should stop countdown", () => {
    cy.server();
    cy.visit("http://localhost:3000/");

    cy.get(".Countdown_countdownButton__2cSHU").click();

    cy.wait(2000);

    cy.get(".Countdown_countdownButton__2cSHU").click();

    cy.get(".ChallengeBox_challengeNotActive__35ixK > strong").contains(
      "Finalize um ciclo para receber um desafio"
    );
  });

  it("should click that failed exercise", () => {
    cy.server();
    cy.visit("http://localhost:3000/");

    cy.get(".Countdown_countdownButton__2cSHU").click();

    cy.wait(5000);

    cy.get(".ChallengeBox_challengeFailedButton__u8aFS").click();

    cy.get(".ChallengeBox_challengeNotActive__35ixK > strong").contains(
      "Finalize um ciclo para receber um desafio"
    );
  });

  it("should click that completed exercise", () => {
    cy.server();
    cy.visit("http://localhost:3000/");

    cy.get(".Countdown_countdownButton__2cSHU").click();

    cy.wait(5000);

    cy.get(".ChallengeBox_challengeSucceededButton__18bu2").click();

    cy.wait(2000);

    cy.get(
      ".CompletedChallenges_completedChallengesContainer__T9k4b > :nth-child(2"
    )
      .invoke("text")
      .then(($value1) => {
        expect($value1).not.be.eq("0");
      });
  });
});
