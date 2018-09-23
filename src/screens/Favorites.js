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

class FavoritesScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04883a00fa778879ab6a81f628a5ff04&auto=format&fit=crop&w=634&q=80"
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ContainerView>
          <TitleText>Your Basket</TitleText>
        </ContainerView>
      </ImageBackground>
    );
  }
}

export default FavoritesScreen;
