import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import { useStore } from '@/pinia/store';
import { ProfileUser, Country, States } from '@/type/type';
import { TOKEN, ID_MEMBER, COUNTRY_ALL, STATES_ALL, CITIES_ALL } from '@/api/constans';
import { getProfileUser, editProfileUser, fetchSexData } from '@/api/login';
import InputFrom from '@/components/InputFrom/InputFrom.vue';

export default {
    components: {
        InputFrom
    },
    setup() {
          const dataCityVietName = ref<any[]>([]);
          const store = useStore();
          const chooSeeFile = ref<HTMLBodyElement>();
          const dataProFileUser = ref<ProfileUser | null>(null);
          const dataSex = ref<any[]>([]);
          const avatarMember = ref<string | undefined>('');
          const valueAddress = ref({
            country: '',
            city: '',
            district: '',
            address: ''
          });
          const dataCountries = ref<any[]>(['not select']);
          const dataStates = ref<any[]>(['not select']);
          const dataDistrict = ref<any[]>(['not select']);
          const dataPickSex = ref()
          const hasDoneProfile = computed(() =>  dataProFileUser.value !== null);

          const saveProfileUserEdit = async () => {
            if (dataProFileUser.value === null) {
                return;
            }
            const dateBirthday = new Date(dataProFileUser.value.Birthday);
            dataProFileUser.value.Birthday = dateBirthday.toISOString();
            if (valueAddress.value.country === 'not select') {
                valueAddress.value.address = null as any;
            }
            dataProFileUser.value.Address1 = valueAddress.value.address;
            dataProFileUser.value.Avatar = avatarMember.value as string;
            dataProFileUser.value.SexCode = dataPickSex.value.code;
            dataProFileUser.value.City = valueAddress.value.city;
            const param = {
                Member: {
                    Id: ID_MEMBER,
                    ...dataProFileUser.value
                }
            }
            const res = await editProfileUser(param);
          }

          const renderDataProfileToForm = async () => {
            const param = {
                'Member': {
                    'Id': ID_MEMBER,
                    'Token': TOKEN,
                }
            };
            if (store.infoUser === null) {
               const res = await getProfileUser(param);
                dataProFileUser.value = res.data.Data.Member;
                avatarMember.value = dataProFileUser.value?.Avatar;
                return; 
            }
            dataProFileUser.value = store.infoUser;
            avatarMember.value = dataProFileUser.value.Avatar;
          }

        const fetchCountry = async () => {
            await axios.get(COUNTRY_ALL).then((res) => {
                res.data.forEach((item: Country) => {
                    dataCountries.value.push(item.name);
                });
            });
        }

        const fetchStates = async () => {
          dataStates.value = [];
          const res =  await axios.get(STATES_ALL);
          const fillter =  res.data.filter((item: States) => item.country_name === valueAddress.value.country);
          fillter.forEach((item: States) => dataStates.value.push(item.name));
        }

        const fetchCities = async () => {
          dataDistrict.value = [];
          const res =  await axios.get(CITIES_ALL);
          const fillter = res.data.filter((item: any) => item.state_name === valueAddress.value.city);
          fillter.forEach((item: any) => dataDistrict.value.push(item.name));
        }


        const fecthSex = async () => {
            const param = {
                'keygroup': 'SEX',
                'Lang': localStorage.getItem('Lang'),
            };
            const res =  await fetchSexData(param);
            if (res.data.Data) {
                res.data.Data.forEach((item: any) => {
                    dataSex.value.push({ label: item.KeyValue, code: item.KeyCode });
                });
                dataSex.value.forEach((item: any) => {
                    if (item.code === dataProFileUser.value?.SexCode) {
                        dataPickSex.value = item;
                    }
                });
            }
        }

        const renderDataAddressSelect = () => {
            if(!dataProFileUser.value?.Address1) {
                valueAddress.value.country = 'not select';
                valueAddress.value.city = 'not select';
                valueAddress.value.district = 'not select';
                return
            }
            const arrayAddress = dataProFileUser.value.Address1.split(', ');
            valueAddress.value.country = arrayAddress[2];
            valueAddress.value.city = arrayAddress[1];
            valueAddress.value.district = arrayAddress[0];
        }

        const triggerClickChoofile = () => {
            chooSeeFile.value?.click();
        }

        const selecFileUploadAvatar = (e: any) => {
            let file = null;
            file = e.target.files[0];
            const reader = new FileReader()
            reader.onload = (e: any) => {
              const dataURI = e.target.result;
              if (dataURI) {
                avatarMember.value = dataURI.replace(/^data:image\/(png|jpg|gif|jpeg);base64,/, '')
              }
            }
            reader.readAsDataURL(file);
        }

        watch(() => valueAddress.value.country, async (value) => {
            if (value === 'not select') {
                valueAddress.value.city = 'not select';
                valueAddress.value.district = 'not select';
                dataStates.value = [];
                dataDistrict.value = [];
                return;
            }
            await fetchStates();
        })

        watch(() => valueAddress.value.city, async (value) => {
            if (dataProFileUser.value?.City) {
                dataProFileUser.value.City = value;
            }
            await fetchCities();
        })

        watch(() => valueAddress.value.district, (value) => {
            valueAddress.value.address = `${value}, ${valueAddress.value.city}, ${valueAddress.value.country}`;
        });

        onMounted(async () => {
            await renderDataProfileToForm();
            await axios.get('https://provinces.open-api.vn/api/p/').then((res) => {
                res.data.forEach((item: any, index: number) => {
                    dataCityVietName.value[index] = { label: item.name, code: item.code };
                });
            });
            await fetchCountry();
            await fecthSex();
            renderDataAddressSelect();
        });

        return {
            dataCityVietName,
            avatarMember,
            dataProFileUser,
            chooSeeFile,
            dataCountries,
            hasDoneProfile,
            dataStates,
            dataDistrict,
            valueAddress,
            dataPickSex,
            dataSex,
            
            
            saveProfileUserEdit,
            triggerClickChoofile,
            selecFileUploadAvatar,
        };
    }
}