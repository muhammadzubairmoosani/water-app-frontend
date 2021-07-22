import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Spinner = () => <Spin className="spinner" indicator={<LoadingOutlined style={{ fontSize: 65 }} spin />} />
