// src/components/RecipeCard/listaReceitas/index.tsx

import { type Receita, RecipeCard } from "..";
import { receitas } from "../../../data/receitas";


export function ListaReceitas() {
    // Aplica o Type Assertion para forçar o TypeScript a aceitar os dados como o tipo Receita
    // Isso é necessário porque a inferência dos dados é mais estrita que o tipo final desejado.
    const receitasTyped = receitas as unknown as Receita[]; 

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px"
        }}>
            {/* Usa o array com o tipo assertado */}
            {receitasTyped.map(receita => ( 
                <RecipeCard key={receita.id} receita={receita} />
            ))}
        </div>
    );
}