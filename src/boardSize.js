export default function boardSize(size) {
  let latitude = [];
  let longitude = [];
  let latitudeLowerCase = [];

  const start = 'a';
  let i = start.charCodeAt(0);
  const j = i + (size - 1);

  for (; i <= j; i++) {
    latitudeLowerCase.push(String.fromCharCode(i));
  }

  latitude = latitudeLowerCase.map((element) => element.toUpperCase());

  for (i = 1; i <= size; i++) {
    longitude.push(i);
  }

  return { latitude, longitude };
}
