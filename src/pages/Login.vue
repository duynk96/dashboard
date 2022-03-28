<template>
  <LoginView @login="login" />
</template>

<script>
import LoginView from "@/components/views/Login.vue";

export default {
  name: "c-login",
  components: {
    LoginView,
  },
  methods: {
    login(data) {
      console.log(data);
      this.$router.push({ path: "/dashboard"});
    },
  },
};
</script>
