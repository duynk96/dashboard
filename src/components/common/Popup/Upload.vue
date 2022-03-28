<template>
  <div class="background-blur" v-if="isShowPopup">
    <div class="content">
      <div>
        <form
          class="
            bg-white
            shadow-md
            rounded
            pb-8
            mb-4
            flex-wrap
            gap-20;
            space-x-4
            rounded-xl
          "
        >
          <div
            class="
              flex
              justify-between
              bg-blue-500
              pl-6
              mb-6
              rounded-tr-xl rounded-tl-xl
            "
          >
            <div
              class="block text-gray-700 text-sm font-bold mb-2 mb-8 pt-6"
              style="font-size: 18px; color: white"
            >
              THÔNG TIN
            </div>
            <button
              v-on:click="onClosePopup"
              type="button"
              class="
                rounded-t-lg rounded-md
                pr-2
                inline-flex
                items-center
                justify-center
                text-white
                focus:outline-none
              "
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="pl-6 pr-6">
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Upload
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  mb-3
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="js-id-upload"
                type="file"
              />
            </div>
            <div class="flex gap-10 justify-end">
              <a
                v-on:click="onUpload"
                class="
                  bg-blue-500
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                  mt-8
                "
              >
                Upload
              </a>
              <a
                v-on:click="onClosePopup"
                class="
                  bg-gray-500
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                  mt-8
                "
              >
                Cancel
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { upload } from "@/store/upload";
export default defineComponent({
  name: "add-new",
  computed: {
    isShowPopup() {
      return upload().getIsPopup;
    },
  },
  methods: {
    onClosePopup: function () {
      return upload().setIsShowPopup(false);
    },
    onUpload: function () {
        console.log(document.getElementById("js-id-upload").files[0])
    },
  },
});
</script>

<style scoped>
.background-blur {
  width: 100%;
  height: 100%;
  top: 0px;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 1000;
  animation: showHeight;
  animation-duration: 0.5s;
  display: block;
  background: rgba(0, 0, 0, 0.5);
}
.content {
  min-width: max-content;
  width: 30%;
  padding-top: 20px;
  margin: auto;
  align-items: center;
  position: relative;
  top: 30%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>