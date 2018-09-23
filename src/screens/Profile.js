import React, { Component } from "react";
import styled from "styled-components/native";
import { ImageBackground } from "react-native";


const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;

class ProfileScreen extends Component {
  render() {
    return (
      <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2ada65afad21680de848bef4727acf5&auto=format&fit=crop&w=634&q=80' }} style={{width: '100%', height: '100%'}}>
        <ContainerView>
          <TitleText>Profile</TitleText>
        </ContainerView>
      </ImageBackground>
    );
  }
}

export default ProfileScreen;
