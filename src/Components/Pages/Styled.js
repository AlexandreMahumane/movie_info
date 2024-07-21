import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin:0 auto 0 auto;
    text-align:center;
    
    margin-top: 1rem;

    & .subContainer{
        justify-items: center;
        width:100%;
        display:grid;
        margin-top: 2rem;
        grid-template-columns: repeat(3, 1fr);
        gap:20px;
    }

    & .info{
        padding:5px;
        color:#fff;
        text-align:start;
    }
    span{
        font-size:12px;
        color:#ffff00;
      }

`;

