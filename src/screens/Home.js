import React, { Component } from "react";
import { Alert, View, Text, StyleSheet, ImageBackground } from "react-native";
import { ActionSheetCustom as ActionSheet } from "react-native-custom-actionsheet";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ListItem, Button } from "react-native-elements";

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;

const list = [
  {
    title: "Fruits",
    icon: "av-timer"
  },
  {
    title: "Vegetables",
    icon: "flight-takeoff"
  },
  {
    title: "Eggs",
    icon: "flight-takeoff"
  }
];

class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=70078feab235ec03658693bdd77f6d71&auto=format&fit=crop&w=1050&q=80"
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Button
          onPress={() => {
            Alert.alert("You added an item!");
          }}
          title="Press Me"
        />
        <View>
          {list.map((item, i) =>
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          )}
        </View>
        <ContainerView>
          <TitleText>Available Items</TitleText>
        </ContainerView>
      </ImageBackground>
    );
  }
}

export default HomeScreen;
