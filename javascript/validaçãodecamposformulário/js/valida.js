function validaFormulario() {
    if (document.frmcadastro.nome.value == "") {
        alert("Preencha o campo nome!");
        document.frmcadastro.txtnome.focus();
        return false;

    } else if (document.frmcadastro.txtfone.value == "") {
        alert("Preencha o campo telefone!");
        document.frmcadastro.txtfone.focus();
        return false;

    } else if (document.frmcadastro.email.value == "") {
        alert("Preencha o campo e-mail!");
        document.frmcadastro.txtemail.focus();
        return false;

    } else {
        alert("Cadastro efetuado com sucesso!");
        document.frmcadastro.submit();
        return true;
    }
}
