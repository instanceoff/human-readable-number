module.exports = function toReadable (number) {
  let one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let two = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let num = String(number).split('');

  if (number === 0)
    return 'zero';
  else if (number < 20)
    return one[number];
  else if (number < 100)
    return (two[num[0]] + ' ' + one[num[1]]).trim();
  else if (number < num[0]+20)
    return (one[num[0]] + ' hundred ' + one[Number(num[1] + num[2])]).trim();
  else if (number < 1000)
    return (one[num[0]] + ' hundred ' + two[num[1]] + ' ' + one[num[2]]).trim();


}
