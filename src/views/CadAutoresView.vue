<script>
import AutoresApi from "@/api/autores.js";
const autoresApi = new AutoresApi();
export default {
  data() {
    return {
      autor: {},
      autores: [],
    };
  },
  async created() {
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async salvar() {
      if (this.autor.id) {
        await autoresApi.atualizarAutores(this.autor);
      } else {
        await autoresApi.adicionarAutores(this.autor);
      }
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.autor = {};
    },
    async excluir(autor) {
      await autoresApi.excluirAutor(autor.id);
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Cadastro de autores</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Autor:" v-model="autor.nome"/>
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-autores">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
              <td>{{ autor.id }}</td>
              <td>{{ autor.nome }}</td>
              <td>
                <div>
                  <button class="edit-btn" @click="editar(autor)">editar</button>
                  <button class="edit-btn" @click="excluir(autor)">excluir</button>
                </div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
</style>
