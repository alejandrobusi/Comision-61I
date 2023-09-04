export const alumnos = ['jose', 'dario', 'marcos'];

export const saludar = (nombre) => alert(`Hola ${nombre}`);

export const obtenerPost = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/5'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('ejecutando el finally');
  }
};
