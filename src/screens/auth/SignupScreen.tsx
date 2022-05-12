import React, {Component} from 'react';
import {Text} from 'react-native-paper';
import styled from 'styled-components';

const StiledText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: red;
  text-align: center;
  margin-top: 20px;
`;

export class SignupScreen extends Component {
  render() {
    return <StiledText>SignupScreen</StiledText>;
  }
}

export default SignupScreen;
