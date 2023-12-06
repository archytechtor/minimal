/**
 * Получение заголовка в нужном падеже
 * @param {number} count - Количество элементов
 * @param {Array} titles - Массив заголовков в разных падежах
 * @returns {string} - один из заголовков массива в падеже соответствующем количеству элементов
 * @example
 * const titles = [
 *   'час', // Именительный падеж, единственное число
 *   'часа', // Именительный падеж, множественное число
 *   'часов'   // Родительный падеж, множественное число
 * ];
 * getPluralForm(1, titles); // 'квартира'
 * getPluralForm(2, titles); // 'квартиры'
 * getPluralForm(5, titles); // 'квартир'
 */
export const getPluralForm = (count, titles) => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return titles[0];
  }

  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return titles[1];
  }

  return titles[2];
};