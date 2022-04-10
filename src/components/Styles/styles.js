import styled from 'styled-components'

export const Title = styled.h1`
    font-family: sans-serif;
    color: #0A2472;

     span {
         color: #0E6BA8;
         display: block;
     }
`;

export const Btn = styled.button`
    border: 0;
    border-radius: 5px;
    background-color: #00f;
    color: #fff;
    margin: 10px auto;
    display: block;
    padding: 10px;
    font-size: ${props => `${props.font}px`};
    :before {
        content: "${props => `${props.name}`}"
    }
`;

export const BtnNew = styled(Btn)`
    background-color: #090;
`;

export const Subtitle = styled(Title)`
 color: #FF7D00;
    font-size: 15px;
`;

export const Item = styled.h4`
   font-size: 14px;
   font-family: Arial, Helvetica, sans-serif;
`;