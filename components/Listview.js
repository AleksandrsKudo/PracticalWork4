import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,Button,TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';



export default function App  ({navigation})  {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

 
  const getnews = async () => {
     try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=API_KEY');
      const json = await response.json();
      setData(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getnews();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() => navigation.navigate('NewsInfo', item)  } >
            
            <View style={{marginTop: 5, backgroundColor: "#87ceeb", padding: 14}}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}, </Text>
            <Text>{item.description}</Text>
            </View>
          </TouchableOpacity>  
          )}
        />
      )}
    </View>
  );
};
