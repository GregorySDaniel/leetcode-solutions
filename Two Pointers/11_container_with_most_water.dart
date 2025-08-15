class Solution {
  int maxArea(List<int> height) {
    int lp = 0;
    int rp = height.length - 1;
    int max = 0;

    while (rp > lp) {
      int lower = height[lp] > height[rp] ? height[rp] : height[lp];
      int atualmax = lower * (rp - lp);

      if (atualmax > max) {
        max = atualmax;
      }

      if (height[lp] > height[rp]) {
        rp--;
      } else {
        lp++;
      }
    }

    return max;
  }
}
