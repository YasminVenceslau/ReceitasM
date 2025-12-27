import * as S from "./styles";
import logoDesk from '../../assets/imagen/maeRece.png';
import logoMob from '../../assets/imagen/ReceitasdeMae.png';
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  // Função para navegar por tag, sem #
  const navegarPorTag = (tag: string) => {
    navigate(`/${tag.toLowerCase()}`);
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
          <li onClick={() => navegarPorTag("especial")}>Especial de Hoje</li>
        </ul>
      </S.Menu>
    </S.Header>
  );
};
