/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import styled from 'styled-components/native'

/**
 * @author TigerChain
 * 使用 styled-components 声明组件
 * @type {Object}
 */

 const StyledView  = styled.View`
   background-color: red;
   height: 40;
   justify-content:center;
   align-items: center;
 `

const StyleText = styled.Text`
  color: yellow;
  font-size: 18;
`

/**
 * 可传递 props
 * @type {[type]}
 */
const CustomButton = styled.View`
  background-color: ${props => props.red?'red':blue};
  border-radius: 8;
  margin-top: 10;
  justify-content: center;
  align-items: center;
  height: ${props => props.small?40:60};
  width:${props => props.small?100:180}
`


// 定义可被任意样式的组件
const CustomText = ({style,children}) =>(
  //这里可以是三方的组件
  <Text style={style}>
    {children}
  </Text>
)
// 给上面的组件添加样式
const StyledText2 = styled(CustomText)`
	color: palevioletred;
	font-weight: bold;
  font-size: 18;
`;

//定义可继承的组件
const MyCusTomText = styled.Text`
  color: red;
  margin-top: 8;
`
//扩展组件
const ExtendText = MyCusTomText.extend`
  font-size:25;
  font-weight:bold;
`


// 使用 .atrr 来添加额外的 props

const AtrrView = styled.View.attrs({

  height:props => props.height || 40,
  background:props => props.bgcolor || 'red',

})`

border-radius:5;
height:${props => props.height}
background-color:${props => props.background}
justify-content:center;
align-items:center;

`

const StyleComponent = (props)=>(
  <View>
    <StyledView>
      <StyleText>styled-components 声明的 Button</StyleText>
    </StyledView >

    <CustomButton small red>
        <StyleText >TigerChain</StyleText>
    </CustomButton>

    <CustomText>TigerChain</CustomText>
    <StyledText2>给 TigerChain 添加样式</StyledText2>


    <MyCusTomText>自定义文本</MyCusTomText>
    <ExtendText>扩展文本</ExtendText>


    <AtrrView bgcolor='orange' height='80'>
      <Text>
        我是 .attrs 属性
      </Text>
    </AtrrView>


  </View>
)

module.exports = StyleComponent
