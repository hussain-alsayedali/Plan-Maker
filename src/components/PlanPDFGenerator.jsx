import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useContext, useState } from "react";
import { SelectedCoursesContext } from "../contexts/CoursesContext";
import "./output.css";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    height: 100,
    textAlign: "center",
    marginLeft: 5,
    padding: 5,
    flexGrow: 1,
  },
  courseContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  courseName: {
    marginRight: 5,
  },
});

// Create Document Component
export default function PlanPDFGenerator(props) {
  let selectedCourses = useContext(SelectedCoursesContext);

  let views = [];
  for (let year = 0; year < 5; year++) {
    let currentYearViews = [];
    for (let term = 0; term < 3; term++) {
      let currentSemester = selectedCourses[`${year}-${term}`];
      let currentSemesterTexts = [];

      let currentView;
      let headerText = <Text>{`${year}-${term}`}</Text>;
      currentSemesterTexts.push(headerText);
      let sumOfHoursCurrentTerm = 0;

      for (let i = 0; i < currentSemester.length; i++) {
        let currentText = (
          <Text>
            {currentSemester[i].name} {currentSemester[i].credits}
          </Text>
        );
        sumOfHoursCurrentTerm += currentSemester[i].credits;
        currentSemesterTexts.push(currentText);
      }
      currentSemesterTexts.push(<Text>Sum : {sumOfHoursCurrentTerm}</Text>);
      currentView = (
        <View style={styles.section}>{...currentSemesterTexts}</View>
      );
      currentYearViews.push(currentView);
    }
    views.push(currentYearViews);
  }
  const currentDocument = (
    <Document>
      <Page size="A4" style={styles.page} className="">
        <div className="flex justify-center flex-row bg-blue-500">
          {...views[0]}
        </div>
        <div className="flex justify-between">{...views[1]}</div>
        <div className="flex justify-between">{...views[2]}</div>
        <div className="flex justify-between">{...views[3]}</div>
        <div className="flex justify-between">{...views[4]}</div>
      </Page>
    </Document>
  );
  console.log("meow", useContext(SelectedCoursesContext));
  return (
    <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded duration-300">
      <PDFDownloadLink document={currentDocument} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF!"
        }
      </PDFDownloadLink>
    </button>
  );
}
