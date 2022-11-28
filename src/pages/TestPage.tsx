import React, { Suspense } from 'react';
import { Spin, Row, Col, Switch } from 'antd';
import styled from 'styled-components';
import fetchData from '../mock/MockFetchData';
import { User, DataExplorer } from '../components';

export default function TestPage() {
  // TODO: 같은 계층에 모달을 실행하면, 리렌더링 됨 !
  return (
    <>
      <Row>
        <DataExplorer />
        <Col xs={12}>
          <h2>요기는 두번재 영역</h2>
        </Col>
      </Row>
      <Switch
        size="default"
        unCheckedChildren="asdf"
        // style={{
        //   width: '300px',
        //   height: '200px',
        // }}
      />

      {/* suspense 이용  */}
      <Suspense
        fallback={
          <SpinWrapper>
            <Spin size="large" />
          </SpinWrapper>
        }
      >
        <User resource={fetchData(1)} />
      </Suspense>
    </>
  );
}

export const SpinWrapper = styled.div`
  /* TODO: absolute  */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 224px);
`;
