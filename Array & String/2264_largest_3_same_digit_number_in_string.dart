class Solution {
  String largestGoodInteger(String num) {
    int counter = 1;
    String lastNumber = '';
    String? substring;

    for (int i = 0; i < num.length; i++) {
      if (num[i] == lastNumber) {
        counter++;
      } else {
        counter = 1;
      }

      if (counter == 3) {
        if (substring != null) {
          if (int.parse(num[i]) > int.parse(substring[0])) {
            substring = '${num[i] * 3}';
          }
        } else {
          substring = '${num[i] * 3}';
        }
      }

      lastNumber = num[i];
    }

    return substring ?? '';
  }
}
