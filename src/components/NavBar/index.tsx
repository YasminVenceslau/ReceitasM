import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import tigela from "../../assets/imagen/tigela.png";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <S.MenuWrapper>
      <Menu>
        <h1>
          Receitas de <span>Mãe</span>
        </h1>

        <a className="bm-item" onClick={() => navigate("/")}>
          Receitas
        </a>

        <a className="bm-item" onClick={() => navigate("/doces")}>
          Doces
        </a>

        <a className="bm-item" onClick={() => navigate("/salgados")}>
          Salgados
        </a>

        <a className="bm-item" onClick={() => navigate("/especial")}>
          Especial de Hoje
        </a>

        <img src={tigela} alt="Tigela decorativa" />
      </Menu>
    </S.MenuWrapper>
  );
};
