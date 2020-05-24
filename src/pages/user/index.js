import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View, Text, Image } from '@tarojs/components';

@connect(({ user }) => ({ user }))
export default class Index extends Component {
  get hasUser() {
    return Object.keys(this.props.user).length > 0;
  }

  render() {
    let nickname = null;
    if (this.hasUser) {
      nickname = (
        <View>
          <Text>
            你好
            {this.props.user.nickName}
          </Text>
          <Image src={this.props.user.avatarUrl} />
        </View>
      );
    } else {
      nickname = <Text>未授权</Text>;
    }

    return (
      <View>
        {nickname}
      </View>
    );
  }
}
