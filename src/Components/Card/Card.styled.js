import styled from 'styled-components';

export const MovieCard = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  background-color: #1e1e1e;
  width: 300px;
  text-align: start;
  gap:15px;
  
  a{
    text-decoration: none;
    border:1px solid #ff0000;
    padding: 5px;
    background-color: #ff0000;
    color:#fff;
    text-align: center;
  }
  img{
    height: 340px;
  }

  span{
    font-size:12px;
    color:#ffff00;
  }
  a,p,h3{
    margin-top:.1rem;
  }
`;