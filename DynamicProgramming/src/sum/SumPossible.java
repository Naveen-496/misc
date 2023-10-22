package sum;

import java.util.HashMap;
import java.util.Map;

public class SumPossible {

    public static boolean sumPossible(int amount, int[] nums) {
        return sumPossible(amount, nums, new HashMap<>());
    }

    public static boolean sumPossible(int amount, int[] nums, Map<Integer, Boolean> memo) {

        if (amount == 0) return true;
        if (amount < 0) return false;

        if (memo.containsKey(amount)) return memo.get(amount);

        for (int i = 0; i < nums.length; i++) {
            boolean result = sumPossible(amount - nums[i], nums, memo);
            if (result) {
                memo.put(amount, true);
                return true;
            }
        }
        memo.put(amount, false);
        return false;
    }

    public static void main(String[] args) {
        System.out.println(sumPossible(15, new int[]{6, 4, 10}));
    }
}
