/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Text, StyleSheet, ScrollView, useWindowDimensions} from 'react-native';

import {Card, ListItem, Image} from 'react-native-elements';
import axios from 'axios';
import HTML from 'react-native-render-html';

export default function DetailsScreen({route}) {
  const [details, setDetails] = useState([]);
  const [volumeId, setVolumeId] = useState(route.params.bookId);
  const [thumbnail, setThumbnail] = useState(route.params.thumbnail);

  useEffect(() => {
    const fetchDetails = async () => {
      const result = await axios
        .get(`https://www.googleapis.com/books/v1/volumes/${volumeId}`)
        .then((response) => {
          setDetails(response.data.volumeInfo);
        });
    };
    fetchDetails();
  }, []);

  const {
    title,
    authors,
    description,
    averageRating,
    // imageLinks: {smallThumbnail},
  } = details;

  // console.log(smallThumbnail);
  const contentWidth = useWindowDimensions().width;
  const htmlContent = description;

  return (
    <ScrollView style={{flex: 1}}>
      {/* <Text>{thumbnail}</Text> */}
      <Card>
        <Card.Image
          source={{
            uri: thumbnail,
          }}
          style={{
            width: 300,
            height: 300,
            marginHorizontal: 30,
            borderRadius: 10,
            marginBottom: 15,
          }}
        />

        <Card.Title style={styles.title}>{title}</Card.Title>
        <Card.Divider />
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.content}>
              Author: {authors}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.content}>
              Rating: {averageRating}/5
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <Text style={styles.descriptionHeader}>Description</Text>
        <HTML
          source={{html: htmlContent}}
          contentWidth={contentWidth}
          baseFontStyle={{
            fontSize: 18,
          }}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 24, color: 'darkslateblue'},
  content: {fontSize: 20},
  description: {fontSize: 18, paddingTop: 5},
  descriptionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 15,
    marginBottom: 15,
    color: 'darkslateblue',
  },
});
