import React, { useState, useCallback } from "react";
import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { getEspecialDeHoje } from "../../utils/especialHoje";


export const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsMenuOpen(state.isOpen);
  };

  const navegarPorTag = (tag: string) => {
    navigate(`/${tag.toLowerCase()}`);
    closeMenu();
  };

  const especialDeHoje = () => {
    const id = getEspecialDeHoje();
    navigate(`/receita/${id}`);
    closeMenu();
  };

  return (
    <S.MenuWrapper>
      <Menu isOpen={isMenuOpen} onStateChange={handleStateChange}>
        <h1>
          Receitas de <span>Mãe</span>
        </h1>

        <a className="bm-item" onClick={() => { navigate("/"); closeMenu(); }}>
          Receitas
        </a>

        <a className="bm-item" onClick={() => navegarPorTag("doce")}>
          Doces
        </a>

        <a className="bm-item" onClick={() => navegarPorTag("salgado")}>
          Salgados
        </a>

        <a className="bm-item" onClick={especialDeHoje}>
          Especial de Hoje
        </a>
      </Menu>
    </S.MenuWrapper>
  );
};
