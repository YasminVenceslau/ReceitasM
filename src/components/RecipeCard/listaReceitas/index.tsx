import { RecipeCard } from "..";
import { receitas } from "../../../data/receitas";


export function ListaReceitas() {
    return (
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "16px"
        }}>
        {receitas.map(receita => (
            <RecipeCard key={receita.id} receita={receita} />
        ))}
        </div>
    );
}
