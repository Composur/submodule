<template>
  <Dialog @on-close="closeDialog" :isShow="isShow">
    <div slot="header">header</div>
    <div slot="main">main</div>
  </Dialog>
</template>
<script>
import Dialog from "@/components/Dialog/Index";

export default {
  data() {
    return {
      isShow: true
    };
  },
  components: {
    Dialog
  },
  methods: {
    closeDialog() {
      console.log("9");
      this.isShow = false;
    }
  }
};
</script>
