export const vClass = (selectedClass, { classes }) =>
  selectedClass === "" || classes.includes(selectedClass);

export const vName = (searchValue, { name }) =>
  searchValue === "" ||
  name.toLowerCase().search(searchValue.toLowerCase()) !== -1;

export const vLevel = (selectedLevel, { level }) =>
  selectedLevel === "" || selectedLevel == level;

export const vSchool = (selectedSchool, { school }) =>
  selectedSchool === "" || selectedSchool == school;
