export function generateZoiId() {
  const number = Math.floor(100000 + Math.random() * 900000);
  return `ZOI${number}`;
}