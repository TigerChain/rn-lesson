/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

/**
 * 通讯录界面
 * @author TigerChain
 * @type {Object}
 */
export default class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>通讯录</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
