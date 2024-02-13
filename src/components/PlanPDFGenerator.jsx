import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
export default function PlanPDFGenerator(props) {
  console.log("plan pdf generator", props.selectedCourses);

  let selectedCourses = props.selectedCourses;
  let views = [];
  for (let year = 0; year < 5; year++) {
    for (let term = 0; term < 3; term++) {
      let currentSemester = selectedCourses[`${year}-${term}`];
      let currentSemesterTexts = [];
      let currentView;
      let headerText = <Text>{`${year}-${term}`}</Text>;
      currentSemesterTexts.push(headerText);
      for (let i = 0; i < currentSemester.length; i++) {
        let currentText = (
          <Text>
            {currentSemester[i].name} {currentSemester[i].credits}
          </Text>
        );
        currentSemesterTexts.push(currentText);
      }
      currentView = <View>{...currentSemesterTexts}</View>;
      views.push(currentView);
    }
  }
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* <View style={styles.section}>
          <Text>term {props.selectedCourses["0-0"][0].name}</Text>
        </View> */}
        {...views}
      </Page>
    </Document>
  );
}
