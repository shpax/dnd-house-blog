export const vQuality = (selectedQuality, { quality }) => {
  return selectedQuality === "" || quality.includes(selectedQuality);
};

export const vName = (searchValue, { name }) => {
  return (
    searchValue === "" ||
    name.toLowerCase().search(searchValue.toLowerCase()) !== -1
  );
};
