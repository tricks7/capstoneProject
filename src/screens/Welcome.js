import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { FormattedWrapper, FormattedMessage } from 'react-native-globalize';

import { Button } from '../components';
import messages from '../Messages';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
  justifyContent: center;
  alignItems: center;
`;

const ButtonContainer = styled.View`
  top: 100;
`
class WelcomeScreen extends Component {
	render() {
    return (
      <FormattedWrapper locale={this.props.curState.Language.language} messages={messages}>
      <ContainerView>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1518208398353-f3cdc7e2b593?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f5a3808b6573504ba51b24239b8fbac&auto=format&fit=crop&w=682&q=80' }} style={{width: '100%', height: '100%'}}>
				<TitleText>
				  <FormattedMessage
            message="Welcome" 
          />
				  </TitleText>
        <ButtonContainer>
          <Button text="Enter" onPress={() => this.props.navigation.navigate('Main')} />
        </ButtonContainer>
        </ImageBackground>
      </ContainerView>
			</FormattedWrapper>
  );
  }
}


const mapStateToProps = (state) => ({
	curState:state
});

export default connect(mapStateToProps, {
})(WelcomeScreen);
