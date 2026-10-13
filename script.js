"use strict";
const formulario = document.getElementById("meuForm");
const registros = document.getElementById("dados-exibidos");
const status = document.getElementById("status");
const limpar = document.getElementById("limpar");
let total = 0;
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const campos = ["email", "telefone", "nacionalidade"].map(id => document.getElementById(id));
  campos.forEach(campo => { campo.value = campo.value.trim(); });
  if (!formulario.reportValidity()) return;
  const card = document.createElement("article");
  const titulo = document.createElement("h3");
  titulo.textContent = `Registro ${++total}`;
  card.append(titulo);
  const lista = document.createElement("dl");
  ["E-mail", "Telefone", "Nacionalidade"].forEach((label, index) => {
    const termo = document.createElement("dt");
    const valor = document.createElement("dd");
    termo.textContent = label;
    valor.textContent = campos[index].value;
    lista.append(termo, valor);
  });
  card.append(lista);
  registros.prepend(card);
  status.textContent = `${total} registro(s) nesta sessão.`;
  limpar.disabled = false;
  formulario.reset();
  campos[0].focus();
});
limpar.addEventListener("click", () => {
  registros.replaceChildren();
  total = 0;
  status.textContent = "Registros removidos desta página.";
  limpar.disabled = true;
  document.getElementById("email").focus();
});
