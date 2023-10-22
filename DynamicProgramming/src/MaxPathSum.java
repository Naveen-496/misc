import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MaxPathSum {

    public static int maxPathSum(List<List<Integer>> grid) {
        return maxPathSum(0, 0, grid, new HashMap<>());
    }

    public static int maxPathSum(int r, int c, List<List<Integer>> grid, Map<List<Integer>, Integer> memo) {

        if (r == grid.size() || c == grid.get(r).size()) {
            return 0;
        }
        if (r == grid.size() - 1 && c == grid.get(0).size() - 1) {
            return grid.get(r).get(c);
        }

        List<Integer> pos = List.of( r, c);
        if( memo.containsKey( pos )) {
            return memo.get( pos );
        }

        int down = maxPathSum(r + 1, c, grid, memo);
        int right = maxPathSum(r, c + 1, grid, memo);

        int result = grid.get(r).get(c) + Math.max(down, right);
        memo.put( pos, result);
        return result;
    }

    public static void main(String[] args) {
        System.out.println( maxPathSum(
                List.of(
                        List.of(1, 3, 12),
                        List.of(5, 6, 2)
                )
        ));
    }
}
