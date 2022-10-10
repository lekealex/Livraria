<script>
import LivrosApi from "@/api/livros.js";
import AutoresApi from "@/api/autores.js";
import CategoriasApi from "@/api/categorias.js";
import EditorasApi from "@/api/editoras.js";
const livrosApi = new LivrosApi();
const autoresApi = new AutoresApi();
const categoriasApi = new CategoriasApi();
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      livro: {},
      livros: [],
      categorias: [],
      editoras: [],
      autores: [],
    };
  },
  async created() {
    this.livros = await livrosApi.buscarTodosOsLivros();
    this.autores = await autoresApi.buscarTodosOsAutores();
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.livro.id) {
        await livrosApi.atualizarLivro(this.livro);
      } else {
        await livrosApi.adicionarLivro(this.livro);
      }
      this.livros = await livrosApi.buscarTodosOsLivros();
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
      this.editoras = await editorasApi.buscarTodasAsEditoras();
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.livro = {};
    },
    async excluir(livro) {
      await livrosApi.excluirLivro(livro.id);
      this.livros = await livrosApi.buscarTodosOsLivros();
    },
    editar(livro) {
      Object.assign(this.livro, livro);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
      <h2>Cadastro de Livros</h2>
    </div>
      <div class="form-input">
        <input type="text" v-model="livro.titulo" placeholder="título" />
        <input type="text" v-model="livro.ISBN" placeholder="ISBN" />

        <select
          class="select-btn"
          name="autor"
          id="autor"
          placeholder="Autor"
          v-model="livro.autor"
        >
          <option value="" disabled selected>Autor</option>
          <option v-for="autor in autores" :key="autor.id" :value="autor.id">
            {{ autor.nome }}
          </option>
        </select>

        <select
          class="select-btn"
          placeholder="Categoria"
          name="categoria"
          id="categoria"
          v-model="livro.categoria"
        >
          <option class="disabled" value="" disabled selected>Categoria</option>
          <option
            v-for="categoria in categorias"
            :key="categoria.id"
            :value="categoria.id"
          >
            {{ categoria.nome }}
          </option>
        </select>

        <select
          class="select-btn"
          placeholder="Editora"
          name="editora"
          id="editora"
          v-model="livro.editora"
        >
          <option value="" disabled selected>Editora</option>
          <option
            v-for="editora in editoras"
            :key="editora.id"
            :value="editora.id"
          >
            {{ editora.nome }}
          </option>
        </select>
        <input
          type="number"
          id="quantidade"
          name="quantidade"
          placeholder="Quantidade"
          v-model="livro.quantidade"
        />
        <input
          type="number"
          id="dinheiro"
          name="dinheiro"
          placeholder="Preço em reais"
          v-model="livro.preco"
        />
        <button @click="salvar" id="save-btn">salvar</button>
      </div>
      <div class="list-books">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>ISBN</th>
              <th>Categoria</th>
              <th>Editora</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="livro in livros" :key="livro.id">
              <td>{{ livro.id }}</td>
              <td>{{ livro.titulo }}</td>
              <td>{{ livro.ISBN }}</td>
              <td>{{ livro.categoria }}</td>
              <td>{{ livro.editora }}</td>
              <td>{{ livro.quantidade }}</td>
              <td>{{ livro.preco }}</td>
              <td>
                <div>
                  <button class="edit-btn" @click="editar(livro)">
                    editar
                  </button>
                  <button class="edit-btn" @click="excluir(livro)">
                    excluir
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
