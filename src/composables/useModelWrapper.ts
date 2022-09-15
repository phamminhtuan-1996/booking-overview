import { computed } from 'vue';
// eslint-disable-next-line 
export function useModelWrapper(props: any, emit: any, name = 'modelValue') {
  return computed({
    get: () => props[name],
    set: (value) => emit(`update:${name}`, value),
  });
}
