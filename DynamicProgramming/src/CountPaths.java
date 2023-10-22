import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public class CountPaths {

    public static int countPaths( List<List<String >> grid ) {
        return countPaths( 0, 0, grid, new HashMap<>());
    }
    public static int countPaths(int r, int c, List<List<String>> grid, Map<List<Integer>, Integer> memo ) {

        if( r == grid.size() || c == grid.get(r).size() ) {
            return 0;
        }
        if(Objects.equals(grid.get(r).get(c), "X")) {
            return 0;
        }
        if( r == grid.size() - 1 && c == grid.get(r).size() - 1) {
            return 1;
        }
        List<Integer> pos = List.of( r, c);
        if( memo.containsKey( pos )) {
            return memo.get( pos );
        }
        int result = countPaths( r + 1, c, grid, memo) + countPaths( r, c + 1, grid, memo);
        memo.put( pos, result);
        return result;
    }

    public static void main(String[] args) {

        System.out.println( countPaths(
                List.of(
                        List.of("", "", "X"),
                        List.of("", "", ""),
                        List.of( "X", "", "")
                )
        ));
    }
}
