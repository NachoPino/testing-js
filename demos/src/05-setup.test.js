// describe reune un conjunto de bruebas, mejora la lectura del código y la encapsulación.
describe('gruop 1', () => {
  // beforeAll es una sentencia [setup] que corre antes de todas las pruebas xej up db
  // este tipo de utilidad se puede llamar hook y respeta el alcance o scope del grupo (describe).
  beforeAll(() => {
    console.log('beforeAll');
    // up db
  });
  // afterAll es lo mismo pero después XD.
  afterAll(() => {
    console.log('afterAll');
    // down db
  });
  // beforeEach corre antes de cada caso de prueba hasta el último.
  beforeEach(() => {
    console.log(beforeEach);
  });
  // afterEach es lo mismo pero después XD.
  afterEach(() => {
    console.log(afterEach);
  });
  // eslint-disable-next-line no-trailing-spaces

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  // En pruebas estáticas en producción es mala práctica poner console.log.

  describe('group 2', () => {
    beforeAll(() => {
      console.log('beforeAll 2');
      // up db
    });
    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
