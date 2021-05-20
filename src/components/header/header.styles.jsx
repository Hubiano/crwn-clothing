import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Avatar } from "@material-ui/core"

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
    
  &:hover {
    border-bottom: 1px solid gray;
    transition: 0.3s;
  }
`

export const HeaderAvatar = styled(Avatar)`
   cursor: pointer;
   margin-left:20px;
   font-size:10px;

   :hover {
      opacity:0.8;
   }
`

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 60%;
  width: 60px;
  padding: 10px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`

