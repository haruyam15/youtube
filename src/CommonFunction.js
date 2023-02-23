export const compactNumberFormatter = new Intl.NumberFormat('ko', {
  notation: 'compact',
});

export function lineBreak(text){
  return text.replace(/(?:\r\n|\r|\n)/g, '\n');
}


