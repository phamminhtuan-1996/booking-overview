import { ref, onMounted, watch } from 'vue';
import { ID_MEMBER } from '@/api/constans';
import { fetchBookingOverviewList } from '@/api/service';
import { convertDateToVN, convertTimeToVn } from '@/composables/helper/helper';
import TableEzGolf from "@/components/TableEzGolf/TableEzGolf.vue";
import PaginationPageOder from "@/components/PaginationPageOder/PaginationPageOder.vue";

export default {
    components: {
        TableEzGolf,
        PaginationPageOder,
    },
    setup() {
        const pagePagination = ref<number>(1);
        const dataBookingOverview = ref<any[]>([]);
        const numberLoadmore = ref<number>(5);
        const loadMoreLoading = ref<boolean>(false);
        const dateRangePicker = ref<Date[]>([new Date(), new Date()]);

        const renderDataBookingOverview = async () => {
            dateRangePicker.value[0].setDate(dateRangePicker.value[0].getDate() - numberLoadmore.value);
            const param = {
                'StartDate': dateRangePicker.value[0].toISOString(),
                'Endate': dateRangePicker.value[1].toISOString(),
                "Member": {
                    "Id": ID_MEMBER
                }
            }
            const res = await fetchBookingOverviewList(param);
            if(res.data.Data !== null) {
                loadMoreLoading.value = false;
                dataBookingOverview.value = [...res.data.Data.BookingDetail];
                dataBookingOverview.value.forEach((item: any) => {
                    item.BookingDate = convertDateToVN(item.BookingDate);
                    item.OpenDate = convertTimeToVn(item.OpenDate).all;
                });
                dataBookingOverview.value.reverse();
                return;
            }
        };

        const formatDatepickerPlugin = (date: any) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }

        const loadMoreListOverviewBooking = () => {
            loadMoreLoading.value = true;
            numberLoadmore.value = numberLoadmore.value * 2;
            renderDataBookingOverview();
        };

        watch(() => dateRangePicker.value, async () => {
            loadMoreLoading.value = true;
            await renderDataBookingOverview();
        })

        onMounted(async () => {
             await renderDataBookingOverview();
        });
        return { 
            dataBookingOverview,
            pagePagination,
            loadMoreLoading,
            dateRangePicker,

            loadMoreListOverviewBooking,
            formatDatepickerPlugin,
         };
    }
}