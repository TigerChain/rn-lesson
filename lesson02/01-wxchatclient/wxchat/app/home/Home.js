/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

/**
 * 首页
 * @type {Object}
 */
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>微信</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
