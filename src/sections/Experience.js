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
    fontSize: 14,
  },
});



export default function Contact(props) {
  const workList = props.json.work;

  return (
    <Section
      title='Work Experience'
      color={colors.textBlue}
    >
      {workList.map((work, i) => (
        <View id={"work" + i} style={{marginTop: (i === 0 ? 2 : 4)}}>
          {work.company && work.position && 
            <Text style={styles.title}>
              <span style={{fontStyle: 'bold'}}>{work.company}</span> / {work.position}
            </Text>
          }
          {work.startDate && work.endDate &&
            <Text style={{marginTop: 2}}>{`${work.startDate} to ${work.endDate}`}</Text>
          }
          {work.summary && 
            <Text style={{marginTop: 4}}>{work.summary}</Text>
          }
          {work.highlights && 
            <View style={{marginTop: 4}}>
              {work.highlights.map((highlight, i) => (
                <Bullet id={'highlight' + i}>
                  <Text>
                    {highlight}
                  </Text>
                </Bullet>
              ))}
            </View>
          }
        </View>
      ))}
    </Section>
  );
}

