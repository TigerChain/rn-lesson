/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { StackNavigator, TabNavigator  } from 'react-navigation';

/**导入封装的组件**/
import TabBarIcon from './component/TabBarIcon'

/**导入首页界面**/
import Home from './home/Home'
/**导入通讯录界面*/
import Contact from './contact/Contact'
/**导入发现界面**/
import Find from './find/Find'
/**导入我的界面**/
import Mine from './mine/Mine'

export default class Main extends Component {
  render() {
    return (
      <Tab />
    );
  }
}

// tab 选项卡以及关联的 界面
const Tab = TabNavigator(
{
  Home:{
    screen:Home,
    navigationOptions:((navigation) =>({
      tabBarLabel: '微信',
      tabBarIcon: ({focused, tintColor }) => (
        <TabBarIcon
          focused={focused}
          selectedImage={require('../imgs/ic_weixin_selected.png')}
          normalImage={require('../imgs/ic_weixin_normal.png')}
          badgenum={8}
        />
      ),
    }))
  },
  Contact:{
    screen:Contact,
    navigationOptions:((navigation) =>({
      tabBarLabel: '通讯录',
      tabBarIcon: ({focused, tintColor }) => (

        <TabBarIcon
          focused={focused}
          selectedImage={require('../imgs/ic_contacts_selected.png')}
          normalImage={require('../imgs/ic_contacts_normal.png')}
        />
      ),
    }))
  },
  Find:{
    screen:Find,
    navigationOptions:((navigation) =>({
      tabBarLabel: '发现',
      tabBarIcon: ({focused, tintColor }) => (
        <TabBarIcon
          focused={focused}
          selectedImage={require('../imgs/ic_find_selected.png')}
          normalImage={require('../imgs/ic_find_normal.png')}
        />

      ),
    }))
  },
  Me:{
    screen:Mine,
    navigationOptions:((navigation) =>({
      tabBarLabel: '我',
      tabBarIcon: ({ focused,tintColor }) => (
        <TabBarIcon
          focused={focused}
          selectedImage={require('../imgs/ic_me_selected.png')}
          normalImage={require('../imgs/ic_me_normal.png')}
        />
      ),
    }))
  }
},
{
  // tab 位于屏幕底部
  tabBarPosition: 'bottom',
  backBehavior:'none',

  // 对 tabbar 的配置
  tabBarOptions: {
    //文本和图片选中颜色
    activeTintColor: '#45C018',
    //文本和图片未选中颜色
    inactiveTintColor: '#999999',
    //显示图片
    showIcon:'true',
    //文字的样式
    labelStyle: {
      fontSize: 12,
      marginTop: 0,
      marginBottom: 0,
    },
    // tabbar 的样式
    style: {
      //这个也可以去掉下划线
      marginBottom: -2,
      backgroundColor: '#FCFCFC',
      // tabbar 顶部线条颜色
      borderTopColor:'#e3e3e3',
      // 线条颜色宽度
      borderTopWidth:1
    },
    //下划线的高度为0 也就可以去掉下划线
    indicatorStyle:{
      height:0
    }
  },
}
);

const Navigator = StackNavigator(
  // 只要是想要导航的界面都要在这里注册一下
  {
    Tab:{ screen: Tab },
  },

);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon:{
    width: 25,
    height: 25,
  }
});
