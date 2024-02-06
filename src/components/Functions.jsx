export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};


export const filterGroupSize = (data, size)=>{
console.log("size0", size);
const groups = [];
for (let i = 0; i < data.length; i += size) {
  groups.push(data.slice(i, i + size));
}

return groups;


}
