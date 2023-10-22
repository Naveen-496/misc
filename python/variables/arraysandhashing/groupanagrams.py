
import collections
from typing import List


def grupu_anagams(strs: List[str]):
    hashMap = {}
    ans = collections.defaultdict( list)
    for s in strs:
        count = [0] * 26
        for c in s:
            count[ord(c) - ord('a')] += 1
        ans[tuple( count)].append(s)
    print( ans )    
    return ans.values()

print( grupu_anagams(["eat", "tea", "mat", "ate", "tam", "pam"]))