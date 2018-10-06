/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import a library to help create a component
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList/AlbumList';

//create a Component


//create a Component
const Main = () => //{
    //return(
        (
          <View style={{flex:1}}>
              <Header headerText={'Albums!'}/>
              <AlbumList />
          </View>
        
    );    
//} 

//Render it to the Service
export default Main;


/*
export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>         
          React Native I'am Come Back time  
        </Text>        
      </View>
    );
  }
}*/
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/