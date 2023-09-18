const multiples = [];
function findMultiples(integer, limit) {
  //your code here
  let integer2 = integer;
  for (let times = 0; ;times++) {
    do {
    multiples[times] = integer;
      integer = integer + integer2;
      } while (integer <= limit);
      break;
    }
    console.log(multiples[1]);
}
findMultiples(2, 6);