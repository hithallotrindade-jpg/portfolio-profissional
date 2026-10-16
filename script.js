// Atualiza automaticamente o ano do rodapé
const elementoAno = document.getElementById("ano");

if (elementoAno) {
  elementoAno.textContent = new Date().getFullYear();
}

// Confirma o carregamento durante o desenvolvimento
console.log("Portfólio carregado com sucesso!");
