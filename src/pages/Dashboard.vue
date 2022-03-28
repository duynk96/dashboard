<template>
  <DashboardView
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

export default {
  name: "dash-board",
  components: {
    DashboardView,
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
};
</script>
