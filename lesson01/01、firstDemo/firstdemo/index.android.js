/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

export default class firstdemo extends Component {

  componentWillMount () {
   this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
   this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
   this.keyboardDidShowListener.remove();
   this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
   alert('Keyboard Shown');
   keyBoardIsShow = true;
  }

  _keyboardDidHide () {
   alert('Keyboard Hidden');
   keyBoardIsShow = false;
  }

  render() {
    return (
      // 点击其它地方 键盘可以消失
      <TouchableWithoutFeedback
          onPress={()=>{
              //退出软件盘
              if (keyBoardIsShow) {
                 Keyboard.dismiss();
              }
            }
          }>
      <View style={styles.container}>
        <View style={styles.titleStyle}>
          <Text onPress = {
            ()=>{
              alert('左边')
            }
          }>
            左边
          </Text>
           <TextInput style={styles.titleInputStyle}
             placeholder="请输入搜索内容"
             underlineColorAndroid='transparent'
             keyboardType = {'default'} //弹出键盘类型
           />
          <Text onPress={
            ()=>{
              alert('右边')
            }
          }>
            右边
          </Text>
        </View>
        <Text style={styles.welcome}>
          这是我的第一个程序
        </Text>
        <Button
          title="我是按钮"
          onPress={()=>{
            alert('点我点我')
          }}
        />
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFEECC',
  },
  titleStyle:{
    flexDirection: 'row', //主轴的布局方式  水平布局
    justifyContent: 'space-between',  // 主轴的对齐方式，两端对齐
    alignItems:'center',
    padding:5,
    backgroundColor:'red'
  },
  titleInputStyle:{
   backgroundColor:'white',
   alignItems: 'center',
   justifyContent: 'center',
   height:38,
   borderRadius:30,
   marginRight:5,
   marginLeft:5,
   paddingLeft:10,
   paddingRight:10,
   flex:1,
  },
  welcome: {
    backgroundColor:'#00ff00',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('firstdemo', () => firstdemo);
