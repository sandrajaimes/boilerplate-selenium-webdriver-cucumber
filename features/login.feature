Feature: Login

  Scenario: Login exitoso
    Given el usuario navega a la página de login
    When ingresa usuario y contraseña
    Then debería ver el dashboard