import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  section: {
  },
  sectionHeader: {
    borderBottom: '1px solid white',
    marginBottom: 6,
    paddingBottom: 6,
  },
  sectionTitle: {
    fontFamily: 'Raleway',
    fontSize: 16,
    fontStyle: 'bold',
    letterSpacing: 1.8,
    lineHeight: 1,
    textTransform: 'uppercase',
  },
});

export default function Section(props) {
  return (
    <View style={[styles.section, {color: props.color}]}>
      {props.title &&
        <View style={[styles.sectionHeader, {borderColor: props.color}]}>
          <Text style={styles.sectionTitle}>{props.title}</Text>
        </View>
      }
      <View style={styles.sectionBody}>
        {props.children}
      </View>
    </View>
  );
}