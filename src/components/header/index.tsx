import * as S from "./styles";
import logoDesk from '../../assets/imagen/maeRece.png';
import logoMob from '../../assets/imagen/ReceitasdeMae.png';
import { useNavigate } from "react-router-dom";

import { getEspecialDeHoje } from "../../utils/especialHoje";

export const Header = () => {
  const navigate = useNavigate();

  // Função para navegar por tag, sem #
  const navegarPorTag = (tag: string) => {
    navigate(`/${tag.toLowerCase()}`);
  };

  const especialDeHoje = () => {
  const id = getEspecialDeHoje();
  navigate(`/receita/${id}`);
};


  return (
    <S.Header>
      <S.Title>
        <picture>
          <source srcSet={logoMob} media="(max-width: 768px)" />
          <img src={logoDesk} alt="Receitas de Mãe" />
        </picture>
      </S.Title>

      <S.Menu>
        <ul>
          <li onClick={() => navigate("/")}>Receitas</li>
          <li onClick={() => navegarPorTag("doce")}>Doces</li>
          <li onClick={() => navegarPorTag("salgado")}>Salgados</li>
          <li onClick={especialDeHoje}>Especial de Hoje</li>
        </ul>
      </S.Menu>
    </S.Header>
  );
};
