const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test('Фильтр all должен вернуть товары с ID 1 - 6', () => {
    expect(filterByCategory(products, 'all').map((product) => product.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test('Фильтр undefined должен вернуть товары с ID 1 - 6', () => {
    expect(filterByCategory(products, undefined).map((product) => product.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test("Фильтр '' должен вернуть товары с ID 1 - 6", () => {
    expect(filterByCategory(products, '').map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('Фильтр electronics должен вернуть товары с ID 1, 2', () => {
    expect(filterByCategory(products, 'electronics').map((product) => product.id)).toEqual([1, 2]);
  });

  test('Фильтр books должен вернуть товары с ID 3, 6', () => {
    expect(filterByCategory(products, 'books').map((product) => product.id)).toEqual([3, 6]);
  });

  test('Фильтр home должен вернуть товары с ID 4, 5', () => {
    expect(filterByCategory(products, 'home').map((product) => product.id)).toEqual([4, 5]);
  });

  test('Фильтр clothes должен вернуть []', () => {
    expect(filterByCategory(products, 'clothes').map((product) => product.id)).toHaveLength(0);
  });

  test('Фильтр toys должен вернуть []', () => {
    expect(filterByCategory(products, 'toys').map((product) => product.id)).toHaveLength(0);
  });

  test('Фильтр sports должен вернуть []', () => {
    expect(filterByCategory(products, 'sports').map((product) => product.id)).toHaveLength(0);
  });
});
