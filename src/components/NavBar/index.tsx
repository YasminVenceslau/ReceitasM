import React, { useState, useCallback } from "react";
import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import tigela from "../../assets/imagen/tigela.png";

export const NavBar = () => {
  const navigate = useNavigate();
  // 1. Controle de estado para forçar o menu a abrir/fechar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu (usada em todos os cliques de navegação)
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Função para lidar com a mudança de estado (necessária para cliques fora)
  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsMenuOpen(state.isOpen);
  };

  // 2. Função de navegação que fecha o menu
  const navegarPorTag = (tag: string) => {
    navigate(`/${tag.toLowerCase()}`);
    closeMenu(); // CHAMA O FECHAMENTO
  };

  return (
    <S.MenuWrapper>
      <Menu
        // 3. Propriedades que controlam o estado
        isOpen={isMenuOpen}
        onStateChange={handleStateChange}
        
        // Propriedades opcionais que podem ajudar (descomente se precisar)
        // disableAutoFocus={true} // Pode impedir que o focus interfira
        // noOverlayClick={false} // Garante que clicar fora feche o menu
      >
        <h1>
          Receitas de <span>Mãe</span>
        </h1>

        {/* 4. Aplicando a navegação E o fechamento */}
        <a
          className="bm-item"
          onClick={() => {
            navigate("/");
            closeMenu(); // Fecha após a navegação para a home
          }}
        >
          Receitas
        </a>
        <a className="bm-item" onClick={() => navegarPorTag("doce")}>
          Doces
        </a>
        <a className="bm-item" onClick={() => navegarPorTag("salgado")}>
          Salgados
        </a>
        <a className="bm-item" onClick={() => navegarPorTag("especial")}>
          Especial de Hoje
        </a>

      </Menu>
    </S.MenuWrapper>
  );
};