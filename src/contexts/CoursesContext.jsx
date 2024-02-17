import { createContext } from "react";

export const SelectedCoursesContext = createContext();

// export const SelectedCoursesContextProvider = ({ children }) => {
//   let InitializeCoursesObject = {};
//   for (let year = 0; year < 5; year++) {
//     for (let term = 0; term < 3; term++) {
//       const termKey = `${year}-${term}`;
//       InitializeCoursesObject[termKey] = [];
//     }
//   }
//   const [selectedCourses, setSelectedCourses] = useState(
//     JSON.parse(localStorage.getItem("selectedCourses")) ||
//       InitializeCoursesObject
//   );

//   useEffect(() => {
//     localStorage.setItem("selectedCourses", JSON.stringify(selectedCourses));
//   }, [selectedCourses]);

//   const contextValue = {
//     selectedCourses,
//     setSelectedCourses,
//   };

//   return (
//     <SelectedCoursesContext.Provider value={contextValue}>
//       {children}
//     </SelectedCoursesContext.Provider>
//   );
// };

// export default SelectedCoursesContext;
