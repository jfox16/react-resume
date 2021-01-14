// imports
import React from 'react';
import {
  Font,
  Image,
  Page,
  Text,
  View,
  Document,
  StyleSheet
} from '@react-pdf/renderer';

import notoSansLight from '../fonts/NotoSans-Light.ttf';
import notoSansRegular from '../fonts/NotoSans-Regular.ttf';
import ralewayLight from '../fonts/Raleway-Light.ttf';
import ralewayRegular from '../fonts/Raleway-Regular.ttf';
import ralewaySemiBold from '../fonts/Raleway-SemiBold.ttf';
import ralewayBold from '../fonts/Raleway-Bold.ttf';
import materialIcons from '../fonts/MaterialIcons-Regular.ttf';

import jfoxPicture from '../img/jonathanfox_square.jpg';
// import meJson from '../json/programmer.json';
// import meJson from '../json/programmer2.json';
import meJson from '../json/game-dev.json';

import Section from '../components/Section';

import Contact from '../sections/Contact';
import Education from '../sections/Education';
import Experience from '../sections/Experience';
import Title from '../sections/Title';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';

import { colors } from '../Global';


// Register fonts
Font.register({ family: 'Noto Sans', fonts: [
  { src: notoSansLight, fontStyle: 'light' },
  { src: notoSansRegular },
]});

Font.register({ family: 'Raleway', fonts: [
  { src: ralewayLight, fontStyle: 'light' },
  { src: ralewayRegular, fontStyle: 'normal' },
  { src: ralewaySemiBold, fontStyle: 'semibold' },
  { src: ralewayBold, fontStyle: 'bold' },
]});

Font.register({ family: 'Material Icons', fonts: [
  { src: materialIcons }
]});


// Create styles
const styles = StyleSheet.create({
  layoutLeft: {
    backgroundColor: colors.darkOrange,
    color: colors.offWhite,
    flex: 1.1,
    justifyContent: 'space-between',
    padding: 48,
    paddingRight: 24,
  },
  layoutRight: {
    backgroundColor: colors.offWhite,
    color: colors.textBlue,
    flex: 2,
    justifyContent: 'space-between',
    padding: 36,
    paddingLeft: 24,
    paddingRight: 48,
  },
  pageLayout: {
    flexDirection: 'row',
    fontFamily: 'Raleway',
    fontSize: 10,
    lineHeight: 1.5,
    letterSpacing: 0.1,
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});



const MyDocument = () => (
  <Document>
    <Page size="A4">
      <View style={styles.pageLayout}>

        {/* LEFT ============================================================================== */}
        <View style={styles.layoutLeft}>

          {/* PICTURE */}
          <Section>
            <Image src={jfoxPicture} style={{borderRadius: '50%', marginLeft: 12, marginRight: 16}} />
          </Section>

          <Contact json={meJson} />
          <Skills json={meJson} />
          <Education json={meJson} />

        </View>

        {/* RIGHT ============================================================================= */}
        <View style={styles.layoutRight}>
          <Title json={meJson} />
          <Experience json={meJson} />
          <Projects json={meJson} />
        </View>

      </View>
    </Page>
  </Document>
);

export default MyDocument;