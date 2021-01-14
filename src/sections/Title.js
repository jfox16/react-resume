// imports
import React from 'react';
import {
  Image,
  Link,
  Text,
  View,
  StyleSheet
} from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({
  subtitle: {
    fontFamily: 'Raleway',
    fontSize: 14,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'Raleway',
    fontSize: 36,
    fontStyle: 'bold',
    letterSpacing: 1.2,
    lineHeight: 1.25,
    textTransform: 'uppercase',
  },
});



export default function Contact(props) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>JONATHAN<span style={{fontStyle:'light'}}> FOX</span></Text>
      <Text style={styles.subtitle}>{props.json.basics.label}</Text>
      <Text style={{marginTop: 6}}>
        {props.json.basics.description}
      </Text>
    </View>
  );
}

