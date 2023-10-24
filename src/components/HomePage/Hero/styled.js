import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  border-radius: 25px;
  width: 100%;
  height: 382px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;
export const TextWrapper = styled.section`
  padding-left: 123px;
`;
export const PlayButton = styled.section`
  background: none;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.pink};
  padding: 18px 35px;
  margin-top: 52px;
  border-radius: 20px;
  display: flex;
  gap: 14px;
  align-items: center;
  width: 50%;
  &:hover {
    opacity: 0.8;
  }
`;
