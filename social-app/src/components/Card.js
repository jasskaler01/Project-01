import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import {Space } from 'antd';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import {MdThumbUpOffAlt } from "react-icons/md";


export default function MyCard(props){
    return(
        <div>
    <Card   sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            J
          </Avatar>
        }>
        <h3>Jaskaran Singh</h3>

        </CardHeader>
        
        
        
    
      <CardMedia 
      component="img"
       height="194"
       image="https://www.bing.com/th?id=OIP.QVMM2UDR8RNepSaTM1a8fQHaIa&w=150&h=171&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
       /> 
       

      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.content}
        </Typography>
      </CardContent>
      <MdThumbUpOffAlt />
          </Card>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          
          <Card   sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            C
          </Avatar>
        }>
        

        </CardHeader>
        
        
        
    
      <CardMedia 
      component="img"
       height="194"
       image="https://www.bing.com/th?id=OIP.QVMM2UDR8RNepSaTM1a8fQHaIa&w=150&h=171&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
       /> 
       

      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.content}
        </Typography>
      </CardContent>
      <MdThumbUpOffAlt />
          </Card></Space>
          


          
    
          </div>
  );
  

}

