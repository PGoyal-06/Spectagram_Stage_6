import React, { Component } from "react";
import firebase from "firebase";
import { StyleSheet, Text, View } from "react-native";

export default class Logout extends Component {
  componentDidMount(){
    firebase.auth().signOut()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Logout</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
