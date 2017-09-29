/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import InlineStyle from './inlineStyle'
import StyleComponent from './styleComponent'


import StyleComponentPerformance from './StyledComponentsPerformance'
import InlineStylePerformance from './InlineStylePerformance'

/**
 * 声明一个无状态的组件
 * @author TigerChain
 * @param {[type]} props [description]
 */
const Main = (props)=>(
  <View style={styles.container}>
      {/* <Text style={styles.normalText}>普通内联样式的组件</Text>
      <InlineStyle />
      <Text style={styles.normalText}>styled-components 组件</Text>
      <StyleComponent /> */}

      {/* <StyleComponentPerformance /> */}
      <InlineStylePerformance />
  </View>

)


const styles = StyleSheet.create({
  container: {

  },
  normalText:{
    color:'orange',
    fontSize:18,
    marginBottom:5
  }
});

module.exports = Main
