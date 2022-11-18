import React, {useState} from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import MyCard from './Card';
import { FcTreeStructure } from "react-icons/fc";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['Home', 'LogIn', 'Search'].map(key => ({
  key,
  label: ` ${key}`,
}));
function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit"  href="">
          Project Social App
        </Link>{' '}
        {new Date().getFullYear()}
        {'By Jaskaran Singh'}
        {'&'}
        {'Charmy Patel'}
      </Typography>
    );
  }


export default function Home(){
const profileList=[
    {title:"Jaskaran Singh",
    image:"",
    content:"Drama",

}
]
    return(
       
        <div>
        
        <Layout>
    <Header className="header">
     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
    <MyCard />
   
        </Content>
    
  </Layout>
  <Copyright sx={{ mt: 8, mb: 4 }} />
        
    
        </div>
        
    )

}

