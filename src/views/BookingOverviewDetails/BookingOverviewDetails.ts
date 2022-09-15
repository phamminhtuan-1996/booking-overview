import { ref, onMounted, computed } from "vue";
import router from '@/router/index';
import { fetchBookingOverviewDetails } from '@/api/service';
import { convertDateToVN, convertTimeToVn, numberWithCommas } from '@/composables/helper/helper'
import { BookingDetail, BookingDetailCourse } from '@/type/type';
import QrcodeVue from 'qrcode.vue';

export default {
    components: {
        QrcodeVue
    },
    setup() {
        const bdcCode = ref<string>();
        const dataBookingOverView = ref<BookingDetail | null>(null);
        const bookingDetailCourse = ref<BookingDetailCourse>();
        const hasDataOverViewDetails = computed(() => dataBookingOverView.value !== null);

        const renderDataOverviewDetails = async () => {
            const param = {
                'BookingDetail': {
                    "Id": Number(router.currentRoute.value.params.id),
                }
            };
            const res = await fetchBookingOverviewDetails(param);
            if (res.data.Data !== null) {
                bdcCode.value = res.data.Data.Booking.BookingDetail.BDC;
                dataBookingOverView.value =  res.data.Data.Booking.BookingDetail;
                bookingDetailCourse.value = res.data.Data.Booking.BookingDetail.BookingDetailCourse[0];
            }
        };

        const changeEditDataOverView = () => {
            if (!dataBookingOverView.value) {
                return;
            }
            const openDate = String(dataBookingOverView.value.OpenDate);
            const convertDateTo = convertDateToVN(openDate);
            dataBookingOverView.value.OpenDate = convertDateTo;
            dataBookingOverView.value.StartTime = convertTimeToVn(dataBookingOverView.value.StartTime).all;
            const converNUmber = numberWithCommas(Number(dataBookingOverView.value.TotalPrice));
            dataBookingOverView.value.TotalPrice = converNUmber;
        };

        onMounted(async () => {
            await renderDataOverviewDetails();
            changeEditDataOverView();
        });
        return{
            bdcCode,
            dataBookingOverView,
            bookingDetailCourse,
            hasDataOverViewDetails,
        }
    }
}