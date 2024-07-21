import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color:#1e1e1e;
    
    & a{
        text-decoration: none;
        color:#ff0000;
        font-size: 20px;
    }
`;

export const Input = styled.form`
    & input{
        padding: 5px;
        outline:none;
    }

    & button{
        padding: 5px;
        background-color: #ff0000;
        margin-left: 5px;
        border:1px solid #ff0000;
        color:#fff;
        cursor:pointer;
    }
    
  
`;