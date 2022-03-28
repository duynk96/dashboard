<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
    <div class="p-4">
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative mt-1 flex justify-between">
        <div
          class="
            absolute
            inset-y-0
            left-0
            flex
            items-center
            pl-3
            pointer-events-none
          "
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-80
            pl-10
            p-2.5
            focus:outline-none focus:shadow-outline
          "
          placeholder="Search"
        />
        <div class="flex justify-end ml-5">
          <select
            class="
              shadow
              appearance-none
              rounded
              py-2
              px-4
              rounded
              focus:outline-none focus:shadow-outline
              mr-5
              bg-blue-500
              text-white
            "
            v-on:change="onChageRow"
            name="js-id-selected-row"
            id="js-id-selected-row"
          >
            <option value="5">Show 5</option>
            <option value="10">Show 10</option>
            <option value="15">Show 15</option>
          </select>
          <button
            v-on:click="onUploadFile"
            class="
              bg-yellow-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              mr-5
            "
          >
            UPLOAD
          </button>
          <button
            v-on:click="onCreateNew"
            class="
              bg-green-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              mr-5
            "
          >
            THÊM MỚI
          </button>
          <button
            v-on:click="onDeleteAll"
            class="
              bg-red-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
          >
            DELETE ALL
          </button>
        </div>
      </div>
    </div>
    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
      id="js-id-table"
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
          <th scope="col" class="p-4"></th>
          <th scope="col" class="px-6 py-3">Product name</th>
          <th scope="col" class="px-6 py-3">Color</th>
          <th scope="col" class="px-6 py-3">Category</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3"></th>
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
          v-for="(value, index) in getRow"
          :key="index"
        >
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="
                  w-4
                  h-4
                  text-blue-600
                  bg-gray-100
                  border-gray-300
                  rounded
                  focus:ring-blue-500
                  dark:focus:ring-blue-600 dark:ring-offset-gray-800
                  focus:ring-2
                  dark:bg-gray-700 dark:border-gray-600
                "
              />
              <label for="checkbox-table-search-1" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>
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
            {{product.product_name}} {{ index }}
          </th>
          <td class="px-6 py-4">{{product.product_color}}</td>
          <td class="px-6 py-4">{{product.product_category}}</td>
          <td class="px-6 py-4">{{product.product_price}}</td>

          <td class="px-6 py-4 text-right">
            <div class="flex justify-end">
              <span class="text-yellow-500 flex justify-center">
                <button href="#" class="mx-2 px-2 rounded-md" v-on:click="onUpdate(product)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-green-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <form>
                  <a
                    class="mx-2 px-2 rounded-md cursor-pointer"
                    v-on:click="onDeleteRow"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-red-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </form>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <VueTailwindPagination
      :current="currentPage"
      :total="total"
      :per-page="perPage"
      @page-changed="currentPage = $event"
    />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

export default defineComponent({
  name: "dash-board",
  computed: {
    getRow() {
      return this.row;
    },
  },
  methods: {
    onChageRow: function () {
      this.row = parseInt(document.getElementById("js-id-selected-row").value);
    },
    onUploadFile: function () {
      this.$emit("uploadFile");
    },
    onCreateNew: function () {
      this.$emit("createNew");
    },
    onDeleteRow() {
      this.$emit("deleteRow");
    },
    onDeleteAll() {
      this.$emit("deleteAll");
    },
    onUpdate(data) {
      this.$emit("updateRow", data);
    }
  },
  components: {
    VueTailwindPagination,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      total: 20,
      row: 5,
      product: {
        product_name: "Apple MacBook Pro",
        product_color: "Sliver",
        product_category: "Laptop",
        product_price: 2999
      }
    };
  },
});
</script>

<style>
.swal2-select {
  width: 600px;
}
</style>

