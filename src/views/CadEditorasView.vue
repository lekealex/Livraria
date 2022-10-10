<script>
  import EditorasApi from "@/api/editoras.js";
  const editorasApi = new EditorasApi();
  export default {
    data() {
      return {
        editora: {},
        editoras: [],
      };
    },
    async created() {
      this.editoras = await editorasApi.buscarTodasAsEditoras();
    },
    methods: {
      async salvar() {
        if (this.editora.id) {
          await editorasApi.atualizarEditora(this.editora);
        } else {
          await editorasApi.adicionarEditora(this.editora);
        }
        this.editoras = await editorasApi.buscarTodasAsEditoras();
        this.editora = {};
      },
      async excluir(editora) {
        await editorasApi.excluirEditora(editora.id);
        this.editoras = await editorasApi.buscarTodasAsEditoras();
      },
      editar(editora) {
        Object.assign(this.editora, editora);
      },
    },
  };
  </script>
  
  <template>
    <main>
      <div class="container">
        <div class="title">
        <h2>Cadastro de Editoras</h2>
      </div>
        <div class="form-input">
          <input type="text" v-model="editora.nome" placeholder="Nome" />
          <input type="text" v-model="editora.site" placeholder="Site" />
          <button @click="salvar" id="save-btn">salvar</button>
        </div>
        <div class="list-livros">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Site</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="editora in editoras" :key="editora.id">
                <td>{{ editora.id }}</td>
                <td>{{ editora.nome }}</td>
                <td>{{ editora.site }}</td>
                <td>
                  <div>
                    <button class="edit-btn" @click="editar(editora)">editar</button>
                    <button class="edit-btn" @click="excluir(editora)">excluir</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main> 
  </template>