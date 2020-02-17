import moment from 'moment';

export const isValidString = (s: string): boolean => (
  s !== undefined &&
  s !== null &&
  typeof s === 'string' &&
  s.trim().length > 0
);

export const convertToNumber = (stringValue: string | undefined): number => {
  const floatValue = stringValue !== undefined ?
    parseFloat(stringValue) :
    0;
  return !isNaN(floatValue) ?
    floatValue :
    0;
};

export const formatDate = (date: Date | undefined, format?: string): string => {
  return date ?
    moment(date).format(format ? format : 'MMMM Do YYYY') :
    '';
};

export const limitLength = (s: string, maxLength: number): string => (
  s.length > maxLength ?
    s.substr(0, maxLength) + '...' :
    s
);
