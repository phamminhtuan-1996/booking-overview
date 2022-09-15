<template>
    <section  v-if="checkHasProfileUser" class="profile-user d-flex flex-column justify-content-center align-items-center">
        <b-avatar class="profile-user__avatar mx-auto overflow-hidden d-block" :src="'data:image/jpeg;base64,' + dataProFileUser.Avatar" size="8rem" ></b-avatar>
        <h3 class="fw-bold my-4">{{ dataProFileUser.FullName }}</h3>
        <div class="profile-user__code-bdc">
            <span class="profile-user__code-bdc--label fw-bold">Member code: </span>
            <span class="profile-user__code-bdc--value text-success fw-bold">{{ codeMember }}</span>
        </div>
        <b-row class="w-100">
            <b-col cols="12">
                <router-link to="/edit" class="text-decoration-none">
                    <b-card class="profile-user__block border-0">
                        <h3 class="fw-bold my-4 text-dark">Profile info</h3>
                        <b-badge variant="danger" class="px-3"><span class="text-white">Profile của {{ dataProFileUser.FirstName }}</span></b-badge>
                    </b-card>
                </router-link>
            </b-col>
            <b-col cols="12">
                <router-link to="/overview" class="text-decoration-none">
                    <b-card class="profile-user__block border-0">
                        <h3 class="fw-bold my-4 text-dark">Booking overview</h3>
                        <b-badge variant="success" class="px-3"><span class="text-white">Xem toàn bộ lịch đã đặt trước</span></b-badge>
                    </b-card>
                </router-link>
            </b-col>
        </b-row>
    </section>
</template>
<script lang="ts" src="./ProfileUser.ts"></script>
<style lang="scss" scoped>
@import './ProfileUser.scss';
</style>