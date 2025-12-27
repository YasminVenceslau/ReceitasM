import { receitas } from "../data/receitas";

export function getEspecialDeHoje() {
  const hoje = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  const salvo = localStorage.getItem("especialDeHoje");

  if (salvo) {
    const { data, id } = JSON.parse(salvo);

    if (data === hoje) {
      return id; // 👈 mantém o mesmo do dia
    }
  }

  // Sorteia uma nova receita
  const index = Math.floor(Math.random() * receitas.length);
  const receita = receitas[index];

  localStorage.setItem(
    "especialDeHoje",
    JSON.stringify({
      data: hoje,
      id: receita.id,
    })
  );

  return receita.id;
}
