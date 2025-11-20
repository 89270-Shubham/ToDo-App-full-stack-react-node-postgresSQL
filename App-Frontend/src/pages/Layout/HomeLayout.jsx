import React from "react";
import styled from "styled-components";
import { AnimeNavBar } from './../../navbar/AnimeNavBar';
import { Outlet } from "react-router-dom";


export const HomeLayout = () => {
  return (
    <Wrapper>
      <AnimeNavBar />
    <MainContent>
        <Outlet />
    </MainContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0a0d10;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 80px; /* space for navbar */
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;
