import Taro, { Component } from '@tarojs/taro';
import {
  View, Button, Text,
} from '@tarojs/components';
import { connect } from '@tarojs/redux';

import { setUser } from '../../actions';

import './index.scss';


@connect(({ user }) => ({
  user,
}), (dispatch) => ({
  onSetUser(user) {
    dispatch(setUser(user));
  },
}))
class Index extends Component {
    config = {
      navigationBarTitleText: '首页',
    }

    componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }


    handleLogin = async () => {
      const user = await Taro.getUserInfo();
      this.props.onSetUser(user.userInfo);
    }

    handleRedirect = () => {
      Taro.navigateTo({ url: '/pages/user/index' });
    }


    get hasUser() {
      return Object.keys(this.props.user).length > 0;
    }


    render() {
      let hasUserEle;

      if (this.hasUser) {
        hasUserEle = <View>已授权</View>;
      } else {
        hasUserEle = <View>未授权</View>;
      }

      return (
        <View className='index'>
          {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
          <Button className='dec_btn' onClick={this.props.dec}>-</Button>
          <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
          <View><Text>{this.props.counter.num}</Text></View>
          <View><Text>Hello, World</Text></View> */}

          <Button onClick={this.handleRedirect}>用户中心</Button>
          <Button onClick={this.handleLogin}><Text>授权</Text></Button>
          {hasUserEle}


        </View>
      );
    }
}

export default Index;
