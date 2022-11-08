package primeiroPrograma;

public class FatorialAte10 {
	/*Agora crie uma nova classe, escreva um for que inicie uma variável n (número atual) como 1 
	e fatorial (resultado total) como 1. Faça seu laço entre 1 a 10 e calcule o resultado!*/
	
	public static void main(String args[]) {
		for(int i = 0; i <= 10; i++) {
			int fatorial = (i*i)+1;
			System.out.println("O fatorial de "+i+ " eh: "+fatorial);
		}
	}
}
