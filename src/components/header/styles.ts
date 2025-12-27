import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 95px;
    padding: 0 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #fff;
    border-bottom: 1px solid #eee;

    position: sticky;
    top: 0;
    z-index: 1000;
`;

export const Title = styled.div`
    picture,
    img {
        display: block;
        height: 80px;
    }

    @media (max-width: 768px) {
        picture,
        img {
        height: 80px;
        }
    }
`;

export const Menu = styled.nav`
    ul {
        display: flex;
        gap: 24px;
        list-style: none;
        margin: 0;
        padding: 0;
        transition: color 0.5s ease;

        :hover{
            color: #D9772B;
        }
    }

    li {
        cursor: pointer;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
export const Search = styled.div`
  display: flex;
  gap: 8px;

  input {
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    outline: none;
  }

  button {
    padding: 8px 14px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background: #d35400;
    color: #fff;

    &:hover {
      opacity: 0.9;
    }
  }
  @media (max-width: 768px) {
    width: 100%;

    input {
      font-size: 1.05rem;
      padding: 12px 0;
    }
  }
`;