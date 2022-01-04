import * as React from 'react';
import { Text, View, StyleSheet,Button,Image } from 'react-native';
import Constants from 'expo-constants';




export default function HomeScreen({navigation, route}) {
  return (
    <View style={styles.container}>
   <Image source ={{
    width:'100%',
    height: 200,
    uri: route.params.urlToImage
   }} />
    <Text style={styles.paragraph}>Title:  </Text>
    <Text style={styles.none}> {route.params.title}</Text>
    <Text style={styles.paragraph}>Content:  </Text>
    <Text style={styles.none}> {route.params.content}</Text>
    <Text style={styles.published}> Published at: {route.params.publishedAt}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    
    
  },
  paragraph: {
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  published: {
    
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  none: {
    
    padding: 10,
    fontSize: 18,
    textAlign: 'left',
  },
  
});