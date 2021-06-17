<template>
  <v-app>
    <v-main style="
    background-image: url(https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  background-attachment: fixed;
">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
html {

background-image:url(https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

html, body {
  font-family: 'Cairo', sans-serif;
}

#app {
  font-family: 'Cairo', sans-serif;
}
.v-card__title {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    line-height: 2rem;
    word-break: break-all;
    background-color: #ff7642;
    /* height: 46px; */
}
.v-application a {
    color: #0a0a0a;
}
.container {
    width: 100%;
    padding: 0px !important;
    margin-right: auto;
    margin-left: auto;
}
.v-card__actions {
    align-items: center;
    display: flex;
    padding: 5px;
}
</style>
