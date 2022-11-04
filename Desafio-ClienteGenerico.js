    function cliente(nome, cpf, email, saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
        this.depositar = function(valor){
            this.saldo += valor
        }
    }

    const pedro = new cliente("Pedro", "123456789009", "pedro@email", "100")

    console.log(pedro)