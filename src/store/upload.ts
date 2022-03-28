// @ts-check
import { defineStore } from 'pinia'
export const upload = defineStore({
    id: 'upload',
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
