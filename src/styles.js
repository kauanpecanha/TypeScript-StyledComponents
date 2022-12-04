import styled from 'styled-components'

export const Title = styled.h1`
    // como deseja-se que Title tenha as características de um h1, então chama-se a instância do método styled.h1
    color: #f00;

    font-size: ${props => `${props.fontSize}px`};
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span{
        // como span está dentro de title, pode-se atribuir características a ele, o chamando dentro das strings literais(´´).
        font-size: 12px;
    }
`;

export const TitleSmall = styled(Title)` 
    // TitleSmall herda todas as características de Title
    color: #00f;
    font-size: 16px;
`;

export const Paragraph = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Botao = styled.button`
    position: relative;
    border: none;
    transition: .4s ease-in;
    z-index: 1;

    margin: 5px;
    border-radius: 5px;

    ::before, after{
        position: absolute;
        content: "";
        z-index: -1;
    }
`;

export const Botao1 = styled(Botao)`
    :hover{
        background: #ff96ad;
        box-shadow: 0 0 5px #ff96ad, 0 0 25px #ff96ad, 0 0 200px #ff96ad;
    }
`;

export const Botao2 = styled(Botao)`
    :hover{
        box-shadow: inset -10.5em 0 0 0 #ff96ad, inset 10.5em 0 0 0 #ff96ad;
    }
`;

export const Botao3 = styled(Botao)`
    ::after{
        height: 0;
        left: 0;
        top: 0;
        transition-duration: 0.6s;
        width: 100%;
    }
    :hover::after{
        height: 100%;
    }
`;

export const Botao4 = styled(Botao)`
    :hover{
        box-shadow: 5px 5px 0px #ff96ad;
        top: -5px;
        left: -5px;
    }
`;

export const Botao5 = styled(Botao)`
    ::after{
        height: 100%;
        left: -35%;
        top: 0;
        transform: skew(50deg);
        transition-duration: 0.6s;
        transform-origin: top left;
        width: 0;
    }
    :hover::after{
        height: 100%;
        width: 135%;
    }
`;

export const Botao6 = styled(Botao)`
    :hover{
        border: 2px solid #ff96ad;
        color: #ff96ad;
        background-color: #17181c;
    }
`;

export const Testing = styled.h1`
    background-color: dodgerblue;
    width: 100%;
    height: 300px;
    margin: 0;
    padding: 0;
    /* nota: o styled components pode estilizar divs!!! */
`;