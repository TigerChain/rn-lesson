/* @flow weak */

import React, { Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';

import styled from 'styled-components/native'
import 'react-native-console-time-polyfill'

import data from './Data'


const ListItemView = styled.View`
  padding-top: 5;
  padding-bottom: 5;
  border-bottom-width: 1;
  border-bottom-color: red;
`;

const ListItemText = styled.Text`
  color:red;
  font-size: 18;
`;

const ScrollViewStyled = styled.ScrollView`
`;

const ListViewStyled = styled.ListView`
`;

/**
 * 样式组件性能测试
 * @type {ListView}
 */
export default class StyleComponentPerformance extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  componentWillMount() {
    console.log(`ListView - 渲染 ${data.length} 个组件`);
    console.time('styled-components');
  }

  componentDidMount() {
    console.timeEnd('styled-components');
  }

  renderRow = (row) =>(
    <ListItemView><ListItemText>{row.name}</ListItemText></ListItemView>
  )

  renderListView() {
    return (
      <ListViewStyled
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        enableEmptySections={true}
      />
    );
  }

  renderScrollView() {
    return (
      <ScrollViewStyled>
        {data.map((row, index) => <ListItemView key={index}><ListItemText>{row.name}</ListItemText></ListItemView>)}
      </ScrollViewStyled>
    );
  }

  render() {
    return this.renderListView();
    // return this.renderScrollView();
  }
}
