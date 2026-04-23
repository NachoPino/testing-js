const { generateManyBook } = require('../fakes/book.fake');
const BooksService = require('./books.service');

//ya no necesito esto
//const fakeBooks = [
//  {
//    _id: 1,
//    name: 'Harry Potter',
//  },
//];

const mockGetAll = jest.fn();

//const MongoLibStub = {
  //getAll: () => [...fakeBooks],
  //sustituimos la línea anterior por esta
//  getAll: mockGetAll,
//  create: () => {},
//};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // eslint-disable-next-line no-console
      console.log(books);
      // Assert
      //expect(books.length).toEqual(1);
      //comentamos la línea anterior y añadimos esta
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book', async () => {
      //Arrange
      const fakeBooks = generateManyBook(4);
      //sustituimos el siguiente parrafo
      //mockGetAll.mockResolvedValue([{
      //  _id: 1,
      //  name: 'Harry Potter 2',
      //}]);
      //por esto otro
      mockGetAll.mockResolvedValue(fakeBooks);
      //Act
      const books = await service.getBooks({});
      // eslint-disable-next-line no-console
      console.log(books);
      // Assert
      //expect(books[0].name).toEqual('Harry Potter 2');
      //comentamos la línea anterior y añadimos esta
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
