

def valid_anagrams_opt(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    countS, countT = {}, {}
    for i in range(len(s)):
        countS[s[i]] = 1 + countS.get(s[i], 0)
        countT[t[i]] = 1 + countT.get(t[i], 0)

    return countT == countS


def valid_anagrams(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    freqMap = {}
    for c in s:
        freq = freqMap.get(c, 0)
        freqMap[c] = freq + 1

    for c in t:
        freq = freqMap.get(c, 1)
        freqMap[c] = freq - 1
    print(freqMap)

    for key, value in freqMap.items():
        if value != 0:
            return False

    return True


print(valid_anagrams_opt("anagram", "nagaram"))
