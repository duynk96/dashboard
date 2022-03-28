<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700">LOGIN</span>
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          UserName
        </label>
        <input
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          id="js-id-username"
          type="text"
          placeholder="UserName"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Password
        </label>
        <input
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          id="js-id-password"
          type="text"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        v-on:click="login"
        class="
          w-full
          px-4
          py-2
          text-sm text-center text-white
          bg-indigo-600
          rounded-md
          focus:outline-none
          hover:bg-indigo-500
          mt-4
        "
      >
        ĐĂNG NHẬP
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { dataLogin } from "@/util/dataHelper/DataHelper";

export default defineComponent({
  name: "v-login",
  methods: {
    login: function () {
      this.$emit(
        "login",
        dataLogin(
          document.getElementById("js-id-username").value,
          document.getElementById("js-id-password").value
        )
      );
    },
  },
});
</script>

