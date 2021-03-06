import styled from 'styled-components';

export const CardWrapper = styled.div`
  margin: 4px;
`;

export const CardContent = styled.div`
  display: grid;
  justify-content: center;
`;

export const CardPoster = styled.img`
    width: 100%;
    max-height: 30vh;
    vertical-align: middle;
    cursor: pointer;
    min-width: 200px;
    min-height: 200px;
`;

export const CardInfoWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

export const CardInfoLink = styled.a`
  color: white;
  cursor: pointer;
`;
