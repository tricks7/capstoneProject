import React, { Component } from "react";
import { ImageBackground, View, TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { FormattedWrapper, FormattedMessage } from "react-native-globalize";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

import { Button } from "../components";
import messages from "../Messages";

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 40;
  color: ${props => props.theme.WHITE};
  justifyContent: center;
  alignItems: center;
  textAlign: center;
  paddingTop: 200;
  color: black
`;

const ButtonContainer = styled.View`
  top: 100;
  justifyContent: center;
  alignItems: center;
`;

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin:15,
     height: 40,
     borderColor: 'white',
     borderWidth: 2
  }
})

class WelcomeScreen extends Component {
  /* constructor(props) {
    super(props); */
    state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   
  render() {
    return (
      <FormattedWrapper
        locale={this.props.curState.Language.language}
        messages={messages}>
        <ContainerView>
          <ImageBackground
            source={{
              uri:
                "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4bd9521eccad603a813e51c0cde9d826&auto=format&fit=crop&w=675&q=80"
            }}
            style={{ width: "100%", height: "100%" }}>
            <TitleText>
              <FormattedMessage message="Welcome"/>
            </TitleText>
            <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Email"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               secureTextEntry = {true}
               onChangeText = {this.handlePassword}/>
               
         </View>
            <ButtonContainer>
              <Button
                text="Enter"
                onPress={() => this.props.navigation.navigate("Main")}
              />
            </ButtonContainer>
          </ImageBackground>
        </ContainerView>
      </FormattedWrapper>
    );
  }
}

const mapStateToProps = state => ({
  curState: state
});

export default connect(mapStateToProps, {})(WelcomeScreen);
