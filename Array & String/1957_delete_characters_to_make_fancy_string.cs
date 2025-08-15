class Solution:
    def makeFancyString(self, s: str) -> str:
        counter = 0
        letter = ''
        new_s = ''
        for i in range(len(s)):
            if s[i] == letter and counter < 2:
                counter += 1
                new_s += s[i]

            if s[i] != letter:
                counter = 1
                letter = s[i]
                new_s += s[i]

        return new_s  