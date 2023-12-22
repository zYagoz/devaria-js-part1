// dsadsa

class Usuario {
    constructor(login,senha){
        this.login= login;
        this.senha = senha;
    }

    validarLogin(){
        return this.login.includes('@')
        && this.login.toString().includes('.')
            ? 'Login Válido'
            : 'Login inválido';
    }
}

const Usuario1 = new Usuario ('yago@domain.com' , '12345');
console.log(Usuario1.login , Usuario1.validarLogin());

const Usuario2 = new Usuario ('marques' , '31221');
console.log(Usuario2.login , Usuario2.validarLogin());

class Adminstrador extends Usuario{
    constructor(login, senha, profissional){
        super(login, senha);
        this.profissional = profissional
    }
}

const adm1 = new Adminstrador ('adm@adm.com' , '31221', 'Dev');
console.log(adm1.login , adm1.validarLogin());
console.log(Usuario2.profissional , adm1.profissional);