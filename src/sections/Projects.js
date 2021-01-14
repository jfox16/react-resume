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
    fontSize: 14,
  },
});



function Projects(props) {
  const projectList = props.json.projects;

  return (
    <Section
      title='Projects'
      color={colors.textBlue}
    >
      {projectList.map((project, i) => (
        <View id={"project" + i} style={{marginTop: (i === 0 ? 2 : 4)}}>
          {project.name && project.role &&
            <Text style={styles.title}>
            <span style={{fontStyle: 'bold'}}>{project.name}</span> / {project.role}
            </Text>
          }
          {project.startDate && project.endDate &&
            <Text style={{marginTop: 2}}>{`${project.startDate} to ${project.endDate}`}</Text>
          }
          {project.summary && 
            <Text style={{marginTop: 4}}>{project.summary}</Text>
          }
          {project.highlights && 
            <View style={{marginTop: 4}}>
              {project.highlights.map((highlight, i) => (
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

export default Projects;