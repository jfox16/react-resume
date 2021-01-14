// imports
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from '@react-pdf/renderer';
import Section from '../components/Section';
import Bullet from '../components/Bullet';
import { colors } from '../Global';



// Create styles
const styles = StyleSheet.create({
  title: {
    fontSize: 13,
    fontStyle: 'bold',
  },
});



function Education(props) {
  const educationList = props.json.education;

  return (
    <Section
      title='Education'
      color={colors.offWhite}
    >
      {educationList.map((education, i) => (
        <View id={"education" + i} style={{marginTop: (i === 0 ? 4 : 16)}}>
          {education.degree &&
            <Text style={styles.title}>{education.degree}</Text>
          }
          {education.institution &&
            <Text>{education.institution}</Text>
          }
          {education.startDate && education.endDate &&
            <Text>{`${education.startDate} - ${education.endDate}`}</Text>
          }
        </View>
      ))}
    </Section>
  );
}

export default Education;