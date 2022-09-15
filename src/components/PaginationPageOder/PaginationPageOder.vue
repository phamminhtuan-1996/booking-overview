<template>
    <section class="pagination mt-3 d-flex justify-content-center">
        <b-pagination
          v-model="useModelValue"
          :total-rows="ex2Rows"
          :per-page="ex2PerPage"
          first-number
          last-number
          class="my-auto"
          @page-click="checkPagination"
        ></b-pagination>
    </section>
</template>
<script lang="ts" src="./PaginationPageOder.ts"></script>
<style lang="scss" scoped>
@import './PaginationPageOder.scss'
</style>