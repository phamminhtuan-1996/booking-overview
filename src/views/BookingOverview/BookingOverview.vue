<template>
    <section class="booking-overview pt-5">
        <DatepickerPlugin
            v-model="dateRangePicker"
            :enableTimePicker="false"
            class="my-3"
            :range="true"
        ></DatepickerPlugin>
        <table-ez-golf>
            <template  v-slot:data>
                <tr v-for="(item, index) in dataBookingOverview" :key="index">
                        <td class="text-start">{{ item.BookingDate }}</td>
                        <td class="text-start">{{ item.OpenDate }}</td>
                        <template v-if="item.BookingDetailCourse.length > 0">
                            <td class="text-start border-none">
                                <span v-for="(itemCourse, index) in item.BookingDetailCourse" :key="index">
                                    {{ itemCourse.CourseName }}, 
                                </span>
                            </td>
                        </template>
                        <td class="text-start">{{ item.BookingDetailStatus }}</td>
                        <td class="text-start"> <router-link :to="`/details/${item.Id}`"> view details </router-link> </td>
                    </tr>
            </template>
        </table-ez-golf>
        <b-button variant="primary" :disabled="loadMoreLoading" class="w-100 my-4" @click="loadMoreListOverviewBooking">
            <span  v-if="loadMoreLoading">
                <b-spinner small></b-spinner>
                <span class="ms-3">Loading...</span>
            </span>
            <span v-else>Load more</span>
        </b-button>
    </section>
</template>
<script lang="ts" src="./BookingOverview.ts"></script>
<style lang="scss" scoped>
@import './BookingOverview.scss';
</style>