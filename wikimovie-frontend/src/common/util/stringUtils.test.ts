import { 
  isValidString, 
  convertToNumber,
  formatDate,
  limitLength,
} from './stringUtils';
import moment from 'moment';

test('when isValidString is called with a empty string, return false', () => {
  const result = isValidString('');
  expect(result).toEqual(false);
});

test('when isValidString is called with a string with one character, return true', () => {
  const result = isValidString('a');
  expect(result).toEqual(true);
});

test('when convertToNumber is called with a string, return true', () => {
  const result = convertToNumber('');
  expect(result).toEqual(0);
});

test('when convertToNumber is called with a number as string, return the number', () => {
  const result = convertToNumber('2');
  expect(result).toEqual(2);
});

test('when formatDate is called with a undefined, return empty string', () => {
  const result = formatDate(undefined);
  expect(result).toEqual('');
});

test('when formatDate is called with a date, return date as string', () => {
  const date = new Date();
  const result = formatDate(date);
  expect(result).toEqual(moment(date).format('MMMM Do YYYY'));
});

test('when limitLength is called with long string, return limited string', () => {  
  const result = limitLength('this a test to check the function is ok', 10);
  expect(result.length).toEqual(13);
  expect(result.substr(result.length - 3, 3)).toEqual('...');
});

test('when limitLength is called with short string, return the same string', () => { 
  const cad = 'this a test to check the function is ok'; 
  const result = limitLength(cad, 100);
  expect(result).toEqual(cad);  
});