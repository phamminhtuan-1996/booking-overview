<template>
    <section class="modal-box">
        <slot name="button">
            <b-button :variant="variant" :class="{ 'd-block w-100': block }"  :size="size" @click="CancleModal">{{ titleButton }}</b-button>
        </slot>
        <div class="modal" :class="{ 
            'fade show d-block': hasShowModal
         }">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ modalTitile }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="CancleModal"></button>
                </div>
                <div class="modal-body">
                    <slot name="modal-body">
                        <p>Modal body text goes here.</p>
                    </slot>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-primary" @click="$emit('accept')">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="CancleModal">Close</button>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" src="./ModalBox.ts"></script>
<style lang="scss" scoped>
@import './ModalBox.scss';
</style>