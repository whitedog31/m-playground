import React, { Suspense } from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
import fetchData from '../mock/MockFetchData';
import { User } from '../components';

export default function TestPage() {
  return (
    <>
      <h2>asdf</h2>
      <Suspense
        fallback={
          <SpinWrapper>
            <Spin />
          </SpinWrapper>
        }
      >
        <User resource={fetchData(1)} />
      </Suspense>
    </>
  );
}

export const SpinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 112px);
`;
