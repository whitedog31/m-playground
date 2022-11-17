import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export default function BasicLayout() {
  // TODO : header, Footer,

  return (
    <Layout>
      <YennferHeader>Header</YennferHeader>
      <YennferMain>
        <Outlet />
      </YennferMain>
      <YennferFooter>Footer</YennferFooter>
    </Layout>
  );
}

const YennferHeader = styled(Header)`
  border: 1px solid red;
  height: 56px;
`;

const YennferFooter = styled(Footer)`
  border: 1px solid blue;
  height: 56px;
`;
const YennferMain = styled(Content)`
  min-height: calc(100vh - 112px);
`;
