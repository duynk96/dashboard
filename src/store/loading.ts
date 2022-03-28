// @ts-check
import { defineStore } from 'pinia'
export const loading = defineStore({
    id: 'loading',
    state: () => ({
        isShowPopup: false,
    }),
    getters: {
        getIsPopup(state) {
            return state.isShowPopup;
        },
    },

    actions: {
        setIsShowPopup(show: boolean) {
            this.isShowPopup = show;
        }
    },
})
