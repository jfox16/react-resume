
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from '@react-pdf/renderer';

import { colors } from '../Global';

// Create styles
const styles = StyleSheet.create({
  bulletItem: {
    flexDirection: 'row',
  },
  bulletPoint: {
    fontSize: 20,
    left: -1,
    lineHeight: 0.1,
    top: -6.5,
    paddingRight: 2,
  }
});

function Bullet(props) {
  return (
    <View style={styles.bulletItem}>
      <Text style={styles.bulletPoint}>•</Text>
      {props.children}
    </View>
  );
}

export default Bullet;