/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, Button, ActivityIndicator, StyleSheet} from 'react-native';

import {Card, Image, ListItem} from 'react-native-elements';
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

  const {title, authors, description, imageLinks} = details;

  return (
    <Card>
      {/* <Image
        source={{uri: imageLinks.smallThumbnail}}
        style={{width: 200, height: 200}}
      /> */}
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>
            Author: {authors}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.descriptionTitle}>
            Description
          </ListItem.Title>
          <ListItem.Subtitle>{description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {},
  descriptionTitle: {},
});
