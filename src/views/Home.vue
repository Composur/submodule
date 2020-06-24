<template>
  <div class="home">
    <div>
      <router-link to="/nav">导航条</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Nav from "@/components/Nav.vue";

export default {
  name: "Home"
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
    margin: 20px;
  }
}
</style>
