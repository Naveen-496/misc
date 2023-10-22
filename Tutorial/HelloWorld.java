import java.util.Scanner;
import java.util.Arrays;
public class HelloWorld{

	public static void main(String[] args)
	{
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter first String");
		String str1 = scan.next();
		System.out.println("Enter the Second String");
		String str2 = scan.next();
		AnagramCheck anc = new AnagramCheck();
		System.out.println(anc.anaCheck(str1, str2));
                System.out.println(anc.anaCheck(str1, str2));


	}

}

class AnagramCheck{
	public boolean anaCheck(String str1 , String str2){
		if( str1.length() != str2.length())
			return false;

		char[] s1 = str1.toLowerCase().toCharArray();
		char[] s2 = str2.toLowerCase().toCharArray();
                Arrays.sort(s1);
		Arrays.sort(s2);

		for( int i = 0; i < str1.length(); i++){
			if( s1[i] != s2[i])
				return false;
		}
		return true;
	}
}

		
