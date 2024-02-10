
{/*random color functions */}
export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

/*grouping of filtering result */
export const filterGroupSize = (data, size) => {
  const groups = [];
  for (let i = 0; i < data.length; i += size) {
    groups.push(data.slice(i, i + size));
  }

  return groups;
};

/*go back to top of list */
export const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
