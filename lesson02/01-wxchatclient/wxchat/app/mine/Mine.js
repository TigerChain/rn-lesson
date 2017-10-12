/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
/**
 * 我的界面
 * @author TigerChain
 * @type {Object}
 */
export default class Mine extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>我</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
