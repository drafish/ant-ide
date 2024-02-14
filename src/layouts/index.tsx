import { Outlet } from '@umijs/max';
import { Layout } from 'antd';
import React from 'react';
import styles from './index.less';

const { Header, Footer, Sider, Content } = Layout;

const GlobalLayout: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <Sider width={50} className={styles.icon}>
        Icon
      </Sider>
      <Sider width={320} className={styles.sider}>
        <Outlet />
      </Sider>
      <Layout>
        <Header className={styles.header}>Header</Header>
        <Content className={styles.content}>Content</Content>
        <Footer className={styles.footer}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default GlobalLayout;
