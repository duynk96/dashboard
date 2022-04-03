<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <slot />
        </div>
      </main>
      <Footer />
    </div>
    <PopupLoading />
    <PopupAdd />
    <PopupUpload />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import Sidebar from "@/components/common/Sidebar.vue";
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import PopupLoading from "@/components/common/Popup/Loading.vue";
import PopupAdd from "@/components/common/Popup/AddNew.vue";
import PopupUpload from "@/components/common/Popup/Upload.vue";

export default defineComponent({
  components: {
    Sidebar,
    Header,
    Footer,
    PopupLoading,
    PopupAdd,
    PopupUpload
  },
});
</script>

