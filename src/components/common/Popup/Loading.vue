<template>
  <div v-if="loading" class="splash-screen">
    <div class="loader">
      <div class="outer"></div>
      <div class="middle"></div>
      <div class="inner"></div>
    </div>
  </div>
</template>
<script>
export default {
  name:"p-loading",
  data: () => ({
    loading: true,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>
<style scoped>
.splash-screen {
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.8);
}
.loader {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: relative;
}
.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-top-color: red;
  border-right-color: red;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}
.outer {
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
}

.middle {
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
}

.inner {
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}


@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>