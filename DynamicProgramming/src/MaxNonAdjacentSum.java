import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MaxNonAdjacentSum {

    public static int nonAdjSum(List<Integer> nums ) {
        return nonAdjSum(0, nums, new HashMap<>());
    }

    public static int nonAdjSum(int i, List<Integer> nums, Map<Integer, Integer> memo) {
        if( i >= nums.size() ) {
            return 0;
        }
        if( memo.containsKey( i )) return memo.get( i );

        int takeThisNum = nums.get( i ) + nonAdjSum( i + 2, nums, memo);
        int doNotTakeThisNum = nonAdjSum( i + 1, nums, memo);
        int result = Math.max( takeThisNum, doNotTakeThisNum );
        memo.put( i, result);
        return result;
    }

    public static void main(String[] args) {
        System.out.println(
                nonAdjSum(
                        List.of( 2, 4, 9, 10)
                )
        );
    }
}
