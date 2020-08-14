export const getIdPokemon = (url) => {
  let urlFilter = url.split('/')
  return urlFilter[6]
}