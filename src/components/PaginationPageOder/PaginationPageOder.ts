import { ref, SetupContext } from 'vue';
import { useModelWrapper } from '@/composables/useModelWrapper';

type Prop = {
    modelValue: number;
}

export default {
    props: {
        modelValue: {
            type: Number,
            default: 5
        },
    },
    setup(props: Prop, { emit }: SetupContext) {
        const ex2PerPage = ref<number>(1);
        const ex2Rows = ref<number>(100);
        const useModelValue = useModelWrapper(props, emit, 'modelValue');

        return {
            ex2PerPage,
            ex2Rows,
            useModelValue,
        };
    }
}