package primeiroPrograma;

public class TestaLaços {
	
	public static void main(String[] args) {
		for(int contador = 0; contador <= 10; contador++) {
		for(int multiplicador = 1; multiplicador <= 10; multiplicador++) {
	
				System.out.print(multiplicador * contador);	
				System.out.print(" ");
			}
			System.out.println(" TABUADA DO: "+ contador);
		}
	}
}
