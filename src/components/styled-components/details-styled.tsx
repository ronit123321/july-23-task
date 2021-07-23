import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
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
  border-radius: 3.6rem;
  cursor: pointer;
  display: inline-block;
  font-size: 2rem;
  height: 3.6rem;
  line-height: 3.6rem;
  margin: 0;
  right: 1rem;
  position: absolute;
  text-align: center;
  width: 3.6rem;
`;

export const BackIconImg = styled.img`
  width: 100%;
`;
