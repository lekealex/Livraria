<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">BiblioInfo</RouterLink>
      <RouterLink to="/cadlivros">Cadastro de Livros</RouterLink>
      <RouterLink to="/cadautores">Cadastro de Autores</RouterLink>
      <RouterLink to="/cadeditoras">Cadastro de Editoras</RouterLink>
      <RouterLink to="/cadcategorias">Cadastro de Categorias</RouterLink>
      
    </nav> 
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

header {
  line-height: 5.5;
  max-height: 100vh;
  margin-bottom: 5vh;
  padding: 1vh;
  box-shadow: 1px 1px 400px rgb(25, 0, 255);
  font-family: 'Gill Sans', 'sans-serif';
}

a, .green {
  text-decoration: none;
  color: rgb(19, 17, 184);
  transition: 0.5s;
}

@media (hover: hover) {
  a:hover {
    background-color: rgb(78, 76, 146);
  }
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: rgb(78, 76, 146);
}

nav a {
  display: inline-block;
  padding: 0 6rem;
  border-left: 1px solid var(--color-border);
}

</style>
