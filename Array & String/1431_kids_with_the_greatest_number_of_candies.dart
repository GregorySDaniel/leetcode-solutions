class Solution {
  List<bool> kidsWithCandies(List<int> candies, int extraCandies) {
    int maxCandy = 0;
    List<bool> result = <bool>[];

    for (int candyNumber in candies) {
      if (candyNumber > maxCandy) maxCandy = candyNumber;
    }

    for (int candyNumber in candies) {
      if (candyNumber + extraCandies < maxCandy) {
        result.add(false);
      } else {
        result.add(true);
      }
    }

    return result;
  }
}
