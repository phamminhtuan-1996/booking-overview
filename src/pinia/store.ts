import { ref } from 'vue';
import { defineStore } from "pinia";
import { ProfileUser } from '@/type/type'

const item = ref<string[]>([]);
const infoUser = ref<ProfileUser | null>(null);
const hasLogin = ref<boolean>(false);
export const useStore = defineStore({
    id: 'store',
    state: () =>({
        item,
        infoUser,
        hasLogin
    }),
    actions: {
        addItem(val: string) {
            item.value.push(val);
        },
        addInfoUser(val: ProfileUser) {
            infoUser.value = val;
        },
        setStatesLogin(val: boolean) {
            hasLogin.value = val;
        }
    }
});