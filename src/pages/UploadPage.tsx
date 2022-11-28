/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Button, Modal, message, Row, Col } from 'antd';
import { useModal, useHandleUpload } from '../hooks';

export default function UploadPage() {
  const { isModalOpen, showModal, handleCancel, handleOk } = useModal();
  const {
    currentFile,
    inputDirRef,
    inputRef,
    handleChangeFile,
    handleUploadClick,
    handleDirUploadClick,
  } = useHandleUpload();

  return (
    <>
      <Row>
        <Col span={24}>
          <Row justify="center">
            <Button onClick={showModal}> 업로드 모달</Button>
          </Row>
        </Col>
      </Row>
      <Modal
        title="Basic Modal"
        centered
        destroyOnClose
        width="850px"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row>
          <Col span={24}>
            <input
              ref={inputRef}
              type="file"
              name="fileList"
              multiple
              hidden
              onChange={handleChangeFile}
            />
            <input
              ref={inputDirRef}
              type="file"
              name="fileList"
              multiple
              hidden
              onChange={handleChangeFile}
            />
            <Button onClick={handleUploadClick}> 파일 업로드 </Button>
            <Button onClick={handleDirUploadClick}> 폴더 업로드 </Button>
          </Col>
        </Row>

        <Row>
          <Col span={24}>{currentFile || ''}</Col>
        </Row>
      </Modal>
    </>
  );
}
