// Aquí implementaremos los hooks y los grupos (describe) con una clase de pruebas.

const Person = require('./06-person');

describe('Test for Person', () => { // Se agrupan las pruebas de rango IMC
  let person; // Se instancia el objeto persona para automatizar.
  beforeEach(() => {
    person = new Person('Rigo', 45, 1.7); // Asignamos datos a la nueva persona.
  });
  test('should return down', () => {
    person.weight = 45; // Cambiamos los datos de la persona para este rango/caso.
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
