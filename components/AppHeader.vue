<template>
  <header>
    <NuxtLink to="/">
      <img src="~/assets/img/logo.png" alt="Logo da empresa">
    </NuxtLink>
    <nav>
      <NuxtLink to="/sobre-nos">Sobre nós</NuxtLink>
      <NuxtLink to="/contato">Contato</NuxtLink>
      <NuxtLink to="/servicos">Serviços</NuxtLink>
    </nav>
  </header>
</template>
<style scoped>
img {
  height: var(--size__3);
  margin: var(--size__1);
  margin-right: var(--size__2);
}

header {
  background-color: var(--color__secondary);
  display: flex;
  align-items: center;
}

nav {
  display: flex;
  align-items: center;
  font-family: var(--font__monospace);
  gap: var(--size__2);

  a {
    vertical-align: middle;
    text-decoration: none;
    line-height: var(--size__1);
    height: var(--size__1);
  }

  a:hover {
    text-decoration: underline 2px solid;
  }
}
</style>