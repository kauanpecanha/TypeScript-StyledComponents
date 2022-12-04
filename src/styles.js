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