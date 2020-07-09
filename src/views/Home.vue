<template>
  <div class="home">
    <div>
      <ol>
        <li><router-link to="/nav">Nav</router-link></li>
        <li><router-link to="/dialog">Dialog</router-link></li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 20px;
  }
}
</style>
