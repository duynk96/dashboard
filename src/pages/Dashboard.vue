<template>
  <DashboardView
    :product="lsProduct"
    @createNew="onCreateNew"
    @uploadFile="onUpload"
    @deleteRow="onDeleteRow"
    @deleteAll="onDeleteAll"
    @updateRow="onUpdateRow"
  />
</template>
<script>
import DashboardView from "@/components/views/Dashboard.vue";
import { product } from "@/store/product";
import { upload } from "@/store/upload";
import { loading } from "@/store/loading";
import { getLs } from "@/service/Api/get";

export default {
  name: "dash-board",
  components: {
    DashboardView,
  },
  data() {
    return {
      lsProduct: [],
    };
  },

  methods: {
    onCreateNew: function () {
      product().setIsShowPopup(true);
      product().setProductInfo(null);
    },
    onUpload: function () {
      upload().setIsShowPopup(true);
    },
    onDeleteRow: function () {
      console.log("deleteRow");
    },
    onDeleteAll: function () {
      console.log("deleteAll");
    },
    onUpdateRow: function (data) {
      product().setIsShowPopup(true);
      product().setProductInfo(data);
    },
  },
  async mounted() {
    try {
      loading().setIsShowPopup(true);
      const result = await getLs();
      this.lsProduct = result.Data;
      loading().setIsShowPopup(false);
    } catch (error) {
      await this.$swal.fire({
        icon: "error",
        text: error,
      });
      loading().setIsShowPopup(false);
    }
  },
};
</script>
