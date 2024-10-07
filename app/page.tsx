
"use client"
import React from 'react';
import { Layout, Menu } from 'antd';
import Image from 'next/image'
import type { MenuProps } from 'antd';
import { MyHeader } from './(header)/page';

type MenuItem = Required<MenuProps>['items'][number];
const { Header, Content, Footer } = Layout;

const items: MenuItem[] = [

  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  }

];


const App: React.FC = () => {
  return (
    <Layout className='bg-color-white'>
      <Header style={{ position: 'fixed',display:'flex',background:'#ffff',  justifyContent:'space-between', alignItems:'center',
        zIndex: 1, width: '100%' }}>
        <Image src={'/fe-logo.png'} width={550} height={250} alt='FE-Logo'/>
        <MyHeader/>
      </Header>
      <Content style={{ padding: '0 48px'
 }}>

        <div>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
