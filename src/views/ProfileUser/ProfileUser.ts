import { ref, computed, onMounted } from 'vue';
import { testImage } from '@/composables/helper/helper';
import { TOKEN, ID_MEMBER } from '@/api/constans';
import { useStore } from '@/pinia/store';
import { getProfileUser, fetchCodeNameUser } from '@/api/login';
import { ProfileUser } from '@/type/type'

export default {
    setup() {
        const dataProFileUser = ref<ProfileUser | null>(null);
        const codeMember = ref<string>('');
        const store = useStore();
        const checkHasProfileUser = computed(() => dataProFileUser.value !== null);
        const getDataProfileUser = async () => {
            const param = {
                'Member': {
                    'Id': ID_MEMBER,
                    'Token': TOKEN,
                }
            };
            console.log('ID_MEMBER', ID_MEMBER);
            const res = await getProfileUser(param);
            if (res.data.Data.Member) {
                dataProFileUser.value = res.data.Data.Member as ProfileUser;
                store.addInfoUser(dataProFileUser.value);
            }
        }

        const getCodeMemberUser = async () => {
            const param = {
                'Member': {
                    'Id': ID_MEMBER,
                }
            }
            const res = await fetchCodeNameUser(param);
            if (res.data.Data) {
                codeMember.value = res.data.Data.MemberSubscription[0].CardCode;
            }
        }
        onMounted(async () => {
            await getDataProfileUser();
            await getCodeMemberUser();
        })
        return {
            dataProFileUser,
            checkHasProfileUser,
            codeMember,
        };
    }
}