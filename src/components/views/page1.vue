<template>
  <div class="flex justify-between flex-wrap">
    <table
      class="text-sm text-left text-gray-500 dark:text-gray-400 min-w-max w-96 m-10 min-w-max"
      id="js-id-table"
      v-for="(value, index) in 3"
      :key="index"
    >
      <thead
        class="
          px-6
          py-3
          text-xs
          font-medium
          leading-4
          tracking-wider
          text-left text-gray-500
          uppercase
          bg-gray-100
          border-b border-gray-200
        "
      >
        <tr>
          <th scope="col" class="px-6 py-3">key</th>
          <th scope="col" class="px-6 py-3">vlaue</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="
            bg-white
            border-b
            dark:bg-gray-800 dark:border-gray-700
            hover:bg-gray-50
            dark:hover:bg-gray-600
          "
          v-for="(value, index) in 5"
          :key="index"
        >
          <th
            scope="row"
            class="
              px-6
              py-4
              font-medium
              text-gray-900
              dark:text-white
              whitespace-nowrap
            "
          >
            {{ product.product_code }}{{ index }}
          </th>
          <td class="px-6 py-4">{{ product.product_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "v-clan",
  data() {
    return {
      product: {
        product_code: "00",
        product_name: "Apple MacBook Pro",
      },
    };
  },
});
</script>

<style>
.swal2-select {
  width: 600px;
}
</style>
