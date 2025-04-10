function ClearFormCep() {
    //Limpa os valores do Formulario
    document.getElementById('street').value = '';
    document.getElementById('city').value = '';
    document.getElementById('neighborhood').value = '';
    document.getElementById('uf').value = '';


}

function myCallback(content) {
    if (!("error" in content)) {
        document.getElementById('street').value = (content.logradouro);
        document.getElementById('city').value = (content.localidade);
        document.getElementById('neighborhood').value = (content.bairro);
        document.getElementById('uf').value = (content.uf)
    } else {
        ClearFormCep();
        alert('Cep não encontrado');
    }
}

const procuraCep = {


    searchCep: (value) => {
        const cep = value.replace(/\D/g, '');
        if (cep != '') {
            const validateCep = /^[0-9]{8}$/;
            if (validateCep.test(cep)) {
                document.getElementById('street').value = "...";
                document.getElementById('neighborhood').value = "...";
                document.getElementById('city').value = "...";
                document.getElementById('uf').value = "...";

                const script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=myCallback'

                window.myCallback = myCallback;
                document.body.appendChild(script);
            } else {
                ClearFormCep();

            }
        } else {
            ClearFormCep();
        }
    }
}

export default procuraCep;