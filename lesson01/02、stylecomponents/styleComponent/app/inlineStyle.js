/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,

} from 'react-native';

/**
 * @author TigerChain
 * 普通的内联样式的组件
 * @type {Object}
 */
export default class InlineStyle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inlineText}>I'm the InlineStyle button</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'red',
    height:40,
    justifyContent:'center',
    alignItems:'center'
  },
  inlineText:{
    color:'yellow',
    fontSize:18
  }
});
