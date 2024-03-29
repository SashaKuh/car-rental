import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const Thumb = styled.div`
  width: 274px;
  height: 446px;
  position: relative;
`;

export const FavoriteSVG = styled(ReactSVG)`
  position: absolute;
  top: 14px;
  right: 14px;
  border: transparent;
  background: transparent;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.5);
  }
`;

export const Button = styled.button`
        box-sizing: border-box;
    padding: 12px 99px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    color: rgb(255, 255, 255);
    border-radius: 12px;
    max-width: 274px;
    display: flex;
    height: 44px;
    align-items: center;
    justify-content: center;
    background-color: rgb(52, 112, 255);
    transition: box-shadow 0.3s ease 0s;
    cursor: pointer;
`;

export const ItemWrapper = styled.div`
    flex-basis: calc((100% - 3 * 29px) / 4);

    & img {
        width: 100%;
        height: 268px; 
        border-radius: 14px;
        background: var(--secondaryGrey);
    }
`;

export const InfoWrapper = styled.p`
    padding: 14px 0 28px 0;
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    max-width: 277px;
    font-weight: 400;
    line-height: 1.5;
`;

export const ImageContainer = styled.div`
    height: 268px;
    overflow: hidden;
    position: relative;
    border-radius: 14px;
    border-color: transparent;
    margin-bottom: 14px;
    background: linear-gradient(
        180deg,
        rgba(18, 20, 23, 0.5) 2.5%,
        rgba(18, 20, 23, 0) 41.07%
        ),
        #f3f3f2;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;


export const CarType = styled.h3`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
`;

export const CarPrice = styled.h3`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
`;