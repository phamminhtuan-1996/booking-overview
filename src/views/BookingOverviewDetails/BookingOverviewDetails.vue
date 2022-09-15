<template>
    <section class="booking-details" v-if="hasDataOverViewDetails">
        <qrcode-vue class="mt-5" :size="200" :value="bdcCode" level="M"></qrcode-vue>
        <h1 class="booking-details__bdc-code mt-3">
            {{ bdcCode }}
        </h1>
        <h1 
            class="booking-details__bdc-code mt-3"
            :class="{
                'text-success': dataBookingOverView.BookingDetailStatus === 'CHECK_IN', 
                'text-info': dataBookingOverView.BookingDetailStatus === 'BOOKED', 
            }"
        >
            {{ dataBookingOverView.BookingDetailStatus }}
        </h1>
        <div class="booking-details__info mt-3">
            <b-row class="booking-details__info--row w-100 my-3">
                <b-col class="row-item" cols="6">
                    <span class="row-item__label  fw-bold">Date:</span>
                </b-col>
                <b-col class="row-item text-end" cols="6">
                    <span class="row-item__value">{{ dataBookingOverView.OpenDate }}</span>
                </b-col>
            </b-row>
            <b-row class="booking-details__info--row w-100 my-3">
                <b-col class="row-item" cols="6">
                    <span class="row-item__label  fw-bold">Time:</span>
                </b-col>
                <b-col class="row-item text-end" cols="6">
                    <span class="row-item__value">{{ dataBookingOverView.StartTime }}</span>
                </b-col>
            </b-row>
            <b-row class="booking-details__info--row w-100 my-3">
                <b-col class="row-item" cols="6">
                    <span class="row-item__label  fw-bold">Golf course:</span>
                </b-col>
                <b-col class="row-item text-end" cols="6">
                    <span class="row-item__value">{{ dataBookingOverView.CourseName }}</span>
                </b-col>
            </b-row>
            <b-row class="booking-details__info--row w-100 my-3">
                <b-col class="row-item" cols="6">
                    <span class="row-item__label  fw-bold">Holes:</span>
                </b-col>
                <b-col class="row-item text-end" cols="6">
                    <span class="row-item__value">{{ bookingDetailCourse.Course.NumberOfHoles }}</span>
                </b-col>
            </b-row>
            <b-row class="booking-details__info--row w-100 my-3">
                <b-col class="row-item" cols="6">
                    <span class="row-item__label  fw-bold">Caddy:</span>
                </b-col>
                <b-col class="row-item text-end" cols="6">
                    <span class="row-item__value" v-for="(item, index) in dataBookingOverView.BookingDetailCaddy" :key="index">
                        {{ item.CaddyName }}, 
                    </span>
                </b-col>
            </b-row>
            <b-row class="booking-details__info--row w-100 my-3">
                <b-col class="row-item  d-flex align-items-center justify-content-end" cols="6">
                    <span class="row-item__label fw-bold">Note:</span>
                </b-col>
                <b-col class="row-item text-start" cols="6">
                    <span class="row-item__value ">{{ dataBookingOverView.Note }}</span>
                </b-col>
            </b-row>
            <b-row class="booking-details__info--row w-100 my-3">
                <b-col class="row-item" cols="6">
                    <span class="row-item__label  fw-bold">Booking source:</span>
                </b-col>
                <b-col class="row-item text-end" cols="6">
                    <span class="row-item__value">{{ dataBookingOverView.SourceName }}</span>
                </b-col>
            </b-row>
            <b-row class="booking-details__info--row w-100 my-3">
                <b-col class="row-item" cols="6">
                    <span class="row-item__label  fw-bold">Price:</span>
                </b-col>
                <b-col class="row-item text-end" cols="6">
                    <span class="row-item__value text-primary fw-bold">{{ dataBookingOverView.TotalPrice }} ₫</span>
                </b-col>
            </b-row>
        </div>
    </section>
</template>
<script lang="ts" src="./BookingOverviewDetails.ts"></script>
<style lang="scss" scoped>
@import './BookingOverviewDetails.scss';
</style>