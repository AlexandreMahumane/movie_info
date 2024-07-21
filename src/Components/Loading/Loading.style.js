import styled, {keyframes} from 'styled-components';
import { BiLoaderAlt } from 'react-icons/bi';


const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Spinner = styled(BiLoaderAlt)`
  font-size:3rem;
  margin:200px auto 0;
  text-align:center;
  color: #808080;
  animation: ${spinAnimation} 1s linear infinite; 
`;