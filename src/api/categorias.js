import axios from 'axios';
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const response = await axios.get('https://biblioinfo-backend1.herokuapp.com/categorias/');
    return response.data;
  }

  async buscarCategorias(id) {
    const response = await axios.get(`https://biblioinfo-backend1.herokuapp.com/categorias/${id}`);
    return response.data;
  }

  async adicionarCategorias(categorias) {
    const response = await axios.post('https://biblioinfo-backend1.herokuapp.com/categorias', categorias);
    return response.data;
  }

  async excluirCategoria(id) {
    const response = await axios.delete(`https://biblioinfo-backend1.herokuapp.com/categorias/${id}`);
    return response.data;
  }

  async atualizarAutores(autores) {
    const response = await axios.put(
      `https://biblioinfo-backend1.herokuapp.com/autores/${autores.id}`,
      autores,
    );
    return response.data;
  }
}