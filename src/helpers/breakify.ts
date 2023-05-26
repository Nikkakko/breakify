import elements from '../config/elements';

//BREAKING

export const breakify = (str: string) => {
  const strlength = str.length;
  let result: string[] = [];

  for (let i = 0; i < strlength; i++) {
    const oneChar = str[i].toUpperCase();
    const twoChar = `${oneChar}${str[i + 1]}`;

    if (elements.includes(twoChar)) {
      result = [str.slice(0, i), twoChar, str.slice(i + 2, strlength)];
      break;
    }

    if (elements.includes(oneChar)) {
      result = [str.slice(0, i), oneChar, str.slice(i + 1, strlength)];
      break;
    }

    if (!result.length) {
      result = [str, '', ''];
    }
  }

  return result;
};
