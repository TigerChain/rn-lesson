/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  ScrollView
} from 'react-native';

import 'react-native-console-time-polyfill'
import data from './Data'

/**
 * inLine style 性能测试
 * @type {ListView}
 */
export default class InlineStylePerformance extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
        dataSource: ds.cloneWithRows(data),
      };
    }

    componentWillMount() {
      console.log(`ListView - 渲染 ${data.length} 个组件`);
      console.time('inline-style');
    }

    componentDidMount() {
      console.timeEnd('inline-style');
    }

    renderRow = (row) =>(
      <View style={styles.ListItemView}><Text style={styles.textStyle}>{row.name}</Text></View>
    )

    renderListView() {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections={true}
        />
      );
    }

    renderScrollView() {
      return (
        <ScrollView>
          {data.map((row, index) => (
            <View style={styles.ListItemView} key={index}><Text style={styles.textStyle}>{row.name}</Text></View>
          ))}
        </ScrollView>
      );
    }

    render() {
      return this.renderListView();
      // return this.renderScrollView();
    }
}

const styles = StyleSheet.create({
  ListItemView: {
  paddingTop: 5,
  paddingBottom: 5,
  borderBottomWidth: 1,
  borderBottomColor: 'red',
},
textStyle:{
  fontSize:18,
  color:'red',
}

});
