export default function boardSize(size) {
  let latitude = [];
  let longitude = [];

  const start = 'a';
  let i = start.charCodeAt(0);
  const j = i + (size - 1);

  for (; i <= j; i++) {
    latitude.push(String.fromCharCode(i));
  }

  for (i = 1; i <= size; i++) {
    longitude.push(i);
  }

  return { latitude, longitude };
}
