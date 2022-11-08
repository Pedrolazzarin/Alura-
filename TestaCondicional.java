package primeiroPrograma;

public class TestaCondicional {

	public static void main(String[] args) {

			int idade = 16;
			int quantidadePessoas = 3;
			if(idade >= 18) {
				System.out.println("Voce eh maior de 18 anos");
				System.out.println("Seja Bem-Vindo!!!");
			}else{
				if(quantidadePessoas >= 2) {
					System.out.println("Voce nao tem 18, mas pode entrar, "+"pois esta acompanhando.");
				}else {
					System.out.println("Infelizmente voce nao pode entrar");
					  }
				 }		
	 	}
	}
