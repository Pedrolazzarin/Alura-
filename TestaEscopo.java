package primeiroPrograma;

public class TestaEscopo {

	public static void main(String[] args) {
			int idade = 18;
			int quantidadePessoas = 3;
			
			boolean acompanhado ;
			
			if(quantidadePessoas >= 2) {
				acompanhado = true;
			}else {
				acompanhado = false;
			}
			System.out.println("Valor de acompanhado = " + acompanhado);			
			if(idade >= 18 && acompanhado) {
				System.out.println("Seja Bem-Vindo!!!");
			} else {
				System.out.println("Infelizmente voce nao pode entrar");		  
				 }		
		}
		}	
		
		 
		