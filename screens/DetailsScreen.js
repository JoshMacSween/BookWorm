/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {Card, ListItem, Image} from 'react-native-elements';
import axios from 'axios';

export default function DetailsScreen({route}) {
  const [details, setDetails] = useState([]);
  const [volumeId, setVolumeId] = useState(route.params.bookId);

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

  return (
    <Card>
      {/* <Card.Image
        source={{
          uri: smallThumbnail,
        }}
        style={{width: 200, height: 200}}
      /> */}

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
      <Text style={styles.description}>{description}</Text>
    </Card>
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
    color: 'darkslateblue',
  },
});
