import { ref } from 'vue';
import { getTokenLogin, fetchSiteName, switchSiteName } from '@/api/login';
import { DataLogin } from '@/type/type';
import  router  from '@/router/index';
import { useStore } from '@/pinia/store';
import InputFrom from '@/components/InputFrom/InputFrom.vue';

export default {
    components: {
        InputFrom,
    },
    setup() {
        const store = useStore();
        const text = ref<DataLogin>({
            UserName: '',
            PassWord: '',
        });
        const listSiteName = ref<any[]>([]);
        const tokenAccess = ref<string>('');
        const siteNameLocal = ref<string>(localStorage.getItem('SiteId') || '');
        const numberSite = ref<number>(1);
        const messageError = ref<string>('');

        const fetchAccessToken = async () => {
            const res = await getTokenLogin(text.value);
            if (res.data.Status === '200' || res.data.Status !== '400') {
                messageError.value = '';
                localStorage.setItem('AccessToken', res.data.Data.access_token);
                localStorage.setItem('TOKEN_RAT01', JSON.stringify({ token: res.data.Data.access_token, username: res.data.Data.UserName }));
                localStorage.setItem('UserID', res.data.Data.UserId);
            } else {
                messageError.value = res.data.Messages[0].MessageText;
            }

        };

        const chooseSiteName = async () => {
            const param = {
                'UserName': text.value.UserName,
            }
            const res = await fetchSiteName(param);

            if (res.data.Status === '200') {
                tokenAccess.value = res.data.Data.AccessToken;
                localStorage.setItem('AccessToken', res.data.Data.AccessToken);
                listSiteName.value = [...res.data.Data.Site];
            }
        };

        const pickSite = async () => {
            const idSite = siteNameLocal.value = siteNameLocal.value === '' ? listSiteName.value[numberSite.value].SiteId : siteNameLocal.value;
            const param = {
                'SiteId': idSite
            };
            const res = await switchSiteName(param);
            if (res.data.Data.AccessToken) {
                localStorage.setItem('AccessToken', res.data.Data.AccessToken);
                store.setStatesLogin(true);
                router.push({name: 'profile'});
            }
        }

        const login = async () => {
           await fetchAccessToken();
           if (messageError.value !== '') {
            return;
           }
           await chooseSiteName();
           await pickSite();
        }

        return {
            text,
            messageError,

            login,
        };
    }
}