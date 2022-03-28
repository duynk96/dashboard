// @ts-check
import { defineStore } from 'pinia'
export const product = defineStore({
    id: 'product',
    state: () => ({
        productInfo: null as any,
        isShowPopup: false,
    }),
    getters: {
        getIsPopup(state) {
            return state.isShowPopup;
        },
        getProductInfo(state) {
            return state.productInfo;
        },
    },

    actions: {
        setIsShowPopup(show: boolean) {
            this.isShowPopup = show;
        },
        setProductInfo(data: any) {
            this.productInfo = data;
        }
    },
})
