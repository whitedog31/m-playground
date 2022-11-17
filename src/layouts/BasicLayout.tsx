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
      {/* TODO: subheader */}
      <YennferMain>
        <Outlet />
      </YennferMain>
      <YennferFooter>Footer</YennferFooter>
    </Layout>
  );
}

const YennferHeader = styled(Header)`
  height: 56px;
  background-color: #001529;
`;

const YennferFooter = styled(Footer)`
  height: 56px;
  background-color: #dbdfe7;
`;
const YennferMain = styled(Content)`
  min-height: calc(100vh - 112px);
`;
