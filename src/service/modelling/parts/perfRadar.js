export default function perfRadar(data) {
  const treatedData = [];
  const frenchKinds = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };
  for (let type of data.data) {
    treatedData.push({ value: type.value, kind: frenchKinds[type.kind] });
  }
  return treatedData;
}
