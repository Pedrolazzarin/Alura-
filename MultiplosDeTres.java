package primeiroPrograma;

public class MultiplosDeTres {
	
	public static void main(String args[]) {
		/*Utilize um laço do tipo for para imprimir todos os múltiplos de 3, entre 1 e 100.*/
		for(int contador = 0; contador <= 100; contador++) {
			if(contador % 3 == 0) {
				System.out.println(contador);	
			}
		}
	}
}