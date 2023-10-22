import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MinCoins {

    public static int minCoins( int amount, List<Integer> coins ) {
        return minCoins( amount, coins, new HashMap<>());
    }

    public static int minCoins(int amount, List<Integer> coins, Map<Integer, Integer> memo) {
        if( amount == 0 ) return 0;
        if( amount < 0 ) return -1;
        if( memo.containsKey( amount )) return memo.get( amount );
        int minSubCoins = -1;
        for ( int coin : coins ) {
            int subAmount = amount - coin;
            int subCoins = minCoins( subAmount, coins, memo );
            if( subCoins != -1 ) {
                int numCoins = subCoins + 1;
                if( numCoins < minSubCoins || minSubCoins == -1 ) {
                    minSubCoins = numCoins;
                    memo.put( amount, minSubCoins );
                }
            }
        }
        memo.put( amount, minSubCoins );
        return minSubCoins;
    }
    public static void main(String[] args) {
        System.out.println( minCoins( 4, List.of( 1, 2, 3)));
    }
}
