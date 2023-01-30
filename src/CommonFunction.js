export const compactNumberFormatter = new Intl.NumberFormat('ko', {
  notation: 'compact',
});

function compactNumber(number){
  return compactNumberFormatter.format(number);
}

export function lineBreak(text){
  return text.replace(/(?:\r\n|\r|\n)/g, '\n');
}


