import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  max-height: 40vh;
  overflow: auto;
`;

export const SidebarWrapper = styled.aside`
  grid-column: 1;
  padding: 10px;
  background-color: #5899ed;
`;

export const ContentWrapper = styled.article`
  grid-column: 2;
  padding: 10px;
`;

export const ImageWrapper = styled.img`
  width: 100%;
  max-height: 40vh;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  margin: 8px 0px;
`;

export const InfoContent = styled.span``;

export const BackIcon = styled.a`
  background-color: white;
  border-radius: 2.6rem;
  border: 0.2rem solid white;
  cursor: pointer;
  display: inline-block;
  font-size: 2rem;
  height: 2.6rem;
  line-height: 2.6rem;
  margin: 0;
  right: 1.5rem;
  position: absolute;
  text-align: center;
  width: 2.6rem;
`;

export const BackIconImg = styled.img`
  width: 100%;
`;
