import styled from 'styled-components';

export const StyledCard = styled.li`
  background-color: ${props => (props.primary ? `ghostwhite` : 'transparent')};
  max-width: 350px;
  min-height: 300px;
  padding: 15px;
  transition: 200ms;
  position: relative;
  z-index: 0;
  &:hover {
    z-index: 1;
    transform: ${props => (props.primary ? `rotate(2.5deg) scale(1.2)` : 'rotate(0deg) scale(1)')};
  }
  div.image-container {
    min-height: inherit;
    background-color: rgb(240, 240, 240);
  }
  div.content {
    padding-top: 10px;
  }
  div.link {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      border: none;
      background: ghostwhite;
      box-shadow: 3px 3px 0 0 black;
      padding: 25px 50px;
      transition: 200ms;
      position: relative;
      &:hover {
        cursor: pointer;
        transform: rotate(2.5deg) scale(1.2);
        box-shadow: 3px 3px 5px 2px black;
      }
    }
  }
  h3 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.2rem;
  }
`;
