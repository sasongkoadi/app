import React, { Component } from 'react';
import { Container, Content, Button, Text, Form, Input, Label, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, View, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

// import redux components
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import * as actions from './actions';
import * as selectors from './selectors'

class Main extends Component {
  
  constructor(props) {
    super(props);
  }

  handleInputChange = (field, value) => {
    this.props.updateFields(field, value);
  }

  onLogin = () => {
    this.props.login();
  }

  render() {
    const { fields, isLoggedIn } = this.props;
    const { username, password } = fields || '';
    if(isLoggedIn) {
      Alert.alert('success', 'User logged in!');
    }
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.headerSection}>
              <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
              <Text style={styles.titleText}>DevSummit</Text>
          </View>
          <View style={styles.formSection}>
            <Form>
              <Item>
                  <Input placeholder="Username" onChangeText={(username) => this.handleInputChange('username',username)}/>
              </Item>
              <Item>
                  <Input placeholder="Password" secureTextEntry={true} onChangeText={(password) => this.handleInputChange('password', password)}/>
              </Item>
            </Form>
          </View>
          <View style={styles.buttonSection}>
            {(username=='' || password=='') ?
              <Button disabled block style={[styles.button, {elevation: 0}]}>
                  <Text style={styles.buttomText}>Log In</Text>
              </Button>
            :
            <Button primary block style={styles.button} onPress={() => (username=='' || password=='') ? null : this.onLogin()}>
                <Text style={styles.buttonText}>Log In</Text>
            </Button>
            }
            <View style={styles.lineSection}>
              <View style={styles.lineTextOne}></View>
              <Text style={styles.lineTextTwo}> or </Text>
              <View style={styles.lineTextOne}></View>
            </View>
            <Button primary style={styles.button}>
              <Icon name="facebook" color="white" style={styles.icon} />
              <Text style={styles.buttonText}>Facebook</Text>
            </Button>
            <Button danger style={styles.button}>
              <Icon name="google-plus" color="white" style={styles.icon} />
              <Text style={styles.buttonText}>Google</Text>
            </Button>
            <Button info style={styles.button}>
              <Icon name="twitter" color="white" style={styles.icon} />
              <Text style={styles.buttonText}>Twitter</Text>
            </Button>
          </View>
          <View style={styles.registerSection}>
            <Text style={styles.registerText} onPress={() => Actions.change_password()}>Don't have an account? <Text style={styles.registerTextBold}>Register</Text></Text>
          </View>
        </Content>
      </Container>
    );
  }
}


/**
 *  Map redux state to component props
 */
const mapStateToProps = createStructuredSelector({
  fields: selectors.getFields(),
  isLoggedIn: selectors.isLoggedIn()
});

export default connect(mapStateToProps, actions)(Main);