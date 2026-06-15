const API_URL = "https://rickandmortyapi.com/api/character";

export const obtenerPersonajes = async () => {
  const respuesta = await fetch(API_URL);

  if (!respuesta.ok) {
    throw new Error("No se pudo obtener la información de los personajes");
  }

  const datos = await respuesta.json();
  return datos.results;
};
