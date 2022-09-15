import { ref, SetupContext } from 'vue';
export default {

    props: {
        modalTitile: {
            type: String,
            default: 'Modal title'
        },
        titleButton: {
            type: String,
            default: 'Click me'
        },
        variant: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: ''
        },
        block: {
            type: Boolean,
            default: false
        }
    },
    emits: ['cancle', 'accept'],
    setup(_:any, { emit }: SetupContext) {
        const hasShowModal = ref<boolean>(false);
        const CancleModal = () => {
            console.log('CancleModal');
            hasShowModal.value = !hasShowModal.value;
            emit('cancle');

        };
        return{
            hasShowModal,

            CancleModal
        };
    }
}