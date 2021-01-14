// imports
import React from 'react';
import {
  Image,
  Link,
  Text,
  View,
  StyleSheet
} from '@react-pdf/renderer';
import Bullet from '../components/Bullet';
import Section from '../components/Section';
import { colors } from '../Global';


// Create styles
const styles = StyleSheet.create({
  title: {
    fontSize: 13,
    fontStyle: 'bold'
  }
});



export default function Contact(props) {
  const skillCategories = props.json.skills;

  return (
    <Section
      title='Skills'
      color={colors.offWhite}
    >
      {skillCategories.map((skillCategory, i) => (
        <View id={"skillCategory" + i} style={{marginTop: (i === 0 ? 4 : 16)}}>
          <Text style={styles.title}>{'// ' + skillCategory.title}</Text>
          {skillCategory.items.map((skill, j) => (
            <Bullet id={"skill" + i + "-" + j}>
              <Text>{skill}</Text>
            </Bullet>
            // <Text id={"skill" + i + "-" + j}>
            //   {skill}
            // </Text>
          ))}
        </View>
      ))}
    </Section>
  );
}

