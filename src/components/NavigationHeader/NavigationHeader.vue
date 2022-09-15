<template>
    <b-nav class="nav-header w-100 bg-primary d-flex py-3" :vertical="true" pills>
        <b-row class="w-100">
            <b-col :cols="4" class="ps-4">
                <b-button
                    class="nav-header__button-menu d-flex align-items-center"
                    variant="outline-light"
                    @click="showMenuList"
                >
                    <i class="ezGolf-icon-menu"></i>
                </b-button>
            </b-col>
            <b-col :cols="4" class="p-0">
                <img src="../../assets/logo.png" alt="Ezgolf logo" />
            </b-col>
        </b-row>
        <template v-if="isShowMenuList">
            <div class="nav-header__menu-list w-50 h-100 bg-white fixed-top">
                <b-nav-item class="nav-header__menu-list--profile-item">
                    <b-avatar :src="'data:image/jpeg;base64,' + dataProfile.Avatar" class="overflow-hidden d-block" size="4rem" ></b-avatar>
                    <router-link to="/profile" class="text-dark ms-2 text-decoration-none">{{ dataProfile.FirstName }}</router-link>
                </b-nav-item>
                <b-nav-item active>
                    <router-link class="text-decoration-none" to="/home">
                        <i class="ezGolf-icon-home"></i>
                        <span class="ms-2 text-dark">Home</span>
                    </router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link class="text-decoration-none" to="/profile">
                        <i class="ezGolf-icon-user"></i>
                        <span class="ms-2 text-dark">Profile</span>
                    </router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link class="text-decoration-none" to="/overview">
                        <i class="ezGolf-icon-note"></i>
                        <span class="ms-2 text-dark">Booking overview</span>
                    </router-link>
                </b-nav-item>
                <b-nav-item @click="logOut">
                    <i class="ezGolf-icon-log-out"></i>
                    <span class="ms-2 text-dark">Log out</span>
                </b-nav-item>
                <b-nav-item >
                    <ModalBox class="w-100" :block="true" @accept="acceptIdMember" :titleButton="`ID Member: ${valueMeberId.code}`">
                        <template v-slot:modal-body>
                            <v-select v-model="valueMeberId" :options="dataListUser">
                            </v-select>
                        </template>
                    </ModalBox>
                </b-nav-item>
                <div class="nav-header__overlay w-50 h-100 bg-light fixed-top" @click="hideMenuList"></div>
            </div>
        </template>
    </b-nav>
</template>
<script src="./NavigationHeader.ts"></script>
<style lang="scss" scoped>
@import './NavigationHeader.scss';
</style>