import { ref, SetupContext } from 'vue';
import { useModelWrapper } from '@/composables/useModelWrapper';
type Prop = {
    modelValue: string;
}
export default {
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
    },
    emits: ['change'],
    setup(props: Prop, { emit }: SetupContext) {
        const useModelValue = useModelWrapper(props, emit, 'modelValue');
        const selectedText = ref<string>('');

        return {
            useModelValue,
            selectedText,
        };
    },
}