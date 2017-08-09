import React, { Component } from 'react';
import { 
  Container,
  Content, 
  Form,
  List,
  ListItem,
  Picker,
  Item,
  Label,
  Input,
  Button, 
  Text,
  Title
} from 'native-base';
import { View, StyleSheet, Alert, Image, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../components/Header';
import styles from './styles';

class Ticket extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      firstName: 'John',
      lastName: 'Doe',
    }
  }

  render(){
    return (
      <Container>
        <Header
            title="TICKET"
            type='one'
        >
            <View style={styles.section1}>
              <Image 
                source={{ uri: "http://lorempixel.com/450/450/cats/" }} 
                style={styles.profileImage}
                resizeMode="cover"
              />
            </View>
        </Header>
        <Content>
          <View style={styles.section3}>
            <Text style={styles.username}>Username</Text>
          </View>
          <View style={styles.section2}>
            <Form>
              <Item floatingLabel error={ this.state.firstName == '' ? true : false} >
                <Label>First Name</Label>
                <Input 
                  value={this.state.firstName}
                  onChangeText={(text) => {this.setState({firstName: text})}}
                  onSubmitEditing={()=>{ this.input.focus()} }
                />
              </Item>
              <Item floatingLabel >
                <Label>Last Name</Label>
                <Input
                  value={this.state.lastName}
                  onChangeText={(text) => {this.setState({lastName: text})}} 
                  ref={(input)=>this.input = input}
                />
              </Item>
              <Button block light style={styles.button}><Text>Change Password</Text></Button>
              <Button 
                block 
                disabled={ this.state.firstName == '' ? true : false }
                style={styles.button}
              >
                <Text>Save changes</Text>
              </Button>
            </Form>
          </View>
        </Content>
      </Container>
    )
  }
}

export default Ticket;