import { ref, watchEffect, onMounted } from 'vue';
import router from '@/router/index';
import { useStore } from '@/pinia/store';
import { TOKEN, ID_MEMBER } from '@/api/constans';
import { getProfileUser, fetchListMember } from '@/api/login';
import { ValueMemberID } from '@/type/type';
import ModalBox from '../ModalBox/ModalBox.vue';

export default {
    components: {
        ModalBox
    },
    setup () {
        const isShowMenuList = ref<boolean>(false);
        const dataProfile = ref<any>({
            FirstName:'',
            Avatar: ''
        })
        const dataListUser = ref<any[]>([]);
        const valueMeberId = ref({
            label: '',
            code: 1
        });

        const store = useStore();

        const showMenuList = () => {
            isShowMenuList.value = true;
        };

        const hideMenuList = () => {
            isShowMenuList.value = false;
        };

        const logOut = () => {
            const localStorageData = ['TOKEN_RAT01', 'SiteId', 'AccessToken', 'UserID', 'CaddyId', 'IdMember'];
            localStorageData.forEach((item) => localStorage.removeItem(item));
            store.setStatesLogin(false);
            router.push('/');
        }   

        const checkNullDataProfile = async () => {
            if (!store.$state.infoUser && localStorage.getItem('AccessToken')) {
                const param = {
                    'Member': {
                        'Id': ID_MEMBER,
                        'Token': TOKEN,
                    }
                };
                const res = await getProfileUser(param);
                if (res.data.Data) {
                    dataProfile.value = {
                        FirstName: res.data.Data.Member.FirstName,
                        Avatar: res.data.Data.Member.Avatar
                    }
                }
                
                return;
            }
            dataProfile.value = {
                FirstName: store.$state.infoUser?.FirstName,
                Avatar: store.$state.infoUser?.Avatar
            };
        };

        const getListMemberLogin = async () => {
            const res = await fetchListMember();
            if (res.data.Data) {
                res.data.Data.Member.forEach((item: any) => {
                    dataListUser.value.push({ label: item.MemberName, code: item.Id});
                })
                dataListUser.value.forEach((item: ValueMemberID) => {
                    if(item.code === ID_MEMBER) {
                        valueMeberId.value = item;
                    }
                });
            }
        };

        const acceptIdMember = async () => {
            localStorage.setItem('IdMember', String(valueMeberId.value.code));
            await checkNullDataProfile();
            router.push({name: 'profile'});
            location.reload();
        }


        onMounted(async () => {
           await getListMemberLogin();
        })


        watchEffect( () => {
          checkNullDataProfile();
        })

        return {
            isShowMenuList,
            dataProfile,
            valueMeberId,
            dataListUser,

            showMenuList,
            hideMenuList,
            logOut,
            acceptIdMember,
        };
    },
}