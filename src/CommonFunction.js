export const compactNumberFormatter = new Intl.NumberFormat('ko', {
  notation: 'compact',
});

function compactNumber(number){
  return compactNumberFormatter.format(number);
}

