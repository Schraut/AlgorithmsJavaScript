// Compare the Triplets

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  // Write your code here
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length && b.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (b[i] > a[i]) {
      bob++;
    }
  }

  console.log(alice, bob);
  return [alice, bob];
}
compareTriplets([1, 2, 3], [3, 2, 1]);
