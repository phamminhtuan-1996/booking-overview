import { ref, onMounted } from 'vue';
type Prop = {
    dataHeader: Array<any>,
    dataItem: Array<any>,
}
export default {

    props: {
        dataHeader: {
            type: Array,
            default: [],
        },
        dataItem: {
            type: Array,
            default: [],
        }
    },

    setup(props:Prop) {
        const dataDefaultHeader = ref<string[]>(['Date', 'Time', 'Golf course', 'Status', 'Action']);
        const dataTableDefault = ref<object[]>([
            {
                date: '20 februari 2022',
                time: '5:30 - 6:30',
                golfCourse: 'Queen',
                status: 'Can checkin !'
            },
            {
                date: '20 februari 2022',
                time: '5:30 - 6:30',
                golfCourse: 'Queen',
                status: 'Can checkin !'
            },
            {
                date: '20 februari 2022',
                time: '5:30 - 6:30',
                golfCourse: 'Queen',
                status: 'Can checkin !'
            },
            {
                date: '20 februari 2022',
                time: '5:30 - 6:30',
                golfCourse: 'Queen',
                status: 'Can checkin !'
            },
            {
                date: '20 februari 2022',
                time: '5:30 - 6:30',
                golfCourse: 'Queen',
                status: 'Can checkin !'
            },
            {
                date: '20 februari 2022',
                time: '5:30 - 6:30',
                golfCourse: 'Queen',
                status: 'Can checkin !'
            },
            {
                date: '20 februari 2022',
                time: '5:30 - 6:30',
                golfCourse: 'Queen',
                status: 'Can checkin !'
            },
            {
                date: '20 februari 2022',
                time: '5:30 - 6:30',
                golfCourse: 'Queen',
                status: 'Can checkin !'
            },
            {
                date: '20 februari 2022',
                time: '5:30 - 6:30',
                golfCourse: 'Queen',
                status: 'Can checkin !'
            },
            {
                date: '20 februari 2022',
                time: '5:30 - 6:30',
                golfCourse: 'Queen',
                status: 'Can checkin !'
            },
        ]);

        onMounted(() => {
            if(props.dataHeader.length > 0) {
                dataDefaultHeader.value = [];
                dataDefaultHeader.value = [...props.dataHeader];

            }

        });
        
        return {
            dataDefaultHeader,
            dataTableDefault,
        };
    }
}