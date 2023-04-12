/**
 * @param {number} page
 * @returns {Promise<object>}
 */
export async function getCharacters(page = 1) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/character/?page=${page}`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error("Error al traer los personajes");
  } catch (error) {
    // hacemos lo que creemos necesario dependiendo del error
    // en este caso solo rechazamos:

    return Promise.reject(error.message);
  }
}
