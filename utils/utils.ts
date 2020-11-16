export const getHomeMapaImgUrl = (lat: string, long: string) => {
  const mapaImgUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=1000x1000&maptype=roadmap&scale=2&markers=${lat},${long}&key=AIzaSyAeEmKzkgtVZRQy5_9ZRD4cJCrT472ASYA`
  return mapaImgUrl
}