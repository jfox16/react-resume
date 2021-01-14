// imports
import React from 'react';
import {
  Image,
  Link,
  Text,
  View,
  StyleSheet
} from '@react-pdf/renderer';
import Section from '../components/Section';
import { colors } from '../Global';
import personIcon from '../img/icons/person.png';
import phoneIcon from '../img/icons/phone.png';
import mailIcon from '../img/icons/mail.png';
import githubIcon from '../img/icons/github.png';
import linkedinIcon from '../img/icons/linkedin2.png';


// Create styles
const styles = StyleSheet.create({
  icon: {
    borderRadius: '50%',
    height: 18,
  },
  iconText: {
    color: colors.offWhite,
    fontSize: 10,
    marginLeft: 4,
    paddingTop: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
});



export default function Contact(props) {
  return (
    <Section
      title='Contact'
      color={colors.offWhite}
    >
      {/* phone */}
      <View style={styles.row}>
        <Image src={phoneIcon} style={styles.icon} />
        <Link
          style={[styles.iconText, {fontFamily: 'Noto Sans', fontStyle: 'light'}]}
          src='tel:415-963-2378'
        >
          (415) 963-2378
        </Link>
      </View>

      {/* email */}
      <View style={styles.row}>
        <Image src={mailIcon} style={styles.icon} />
        <Link
          style={styles.iconText}
          src='mailto:FoxJonathanP@gmail.com'
        >
          FoxJonathanP@gmail.com
        </Link>
      </View>

      {/* personal website */}
      <View style={styles.row}>
        <Image src={personIcon} style={styles.icon} />
        <Link
          style={styles.iconText}
          src='https://jfox16.github.io/portfolio'
        >
          jfox16.github.io/portfolio
        </Link>
      </View>

      {/* github */}
      {/* <View style={styles.row}>
        <Image src={githubIcon} style={styles.icon} />
        <Link
          style={styles.iconText}
          src='https://www.github.com/jfox16'
        >
          github.com/jfox16
        </Link>
      </View> */}

      {/* linkedin */}
      <View style={styles.row}>
        <Image src={linkedinIcon} style={styles.icon} />
        <Link
          style={styles.iconText}
          src='https://www.linkedin.com/in/jonathan-fox-cs/'
        >
          linkedin.com/in/jonathan-fox-cs
        </Link>
      </View>
    </Section>
  );
}

