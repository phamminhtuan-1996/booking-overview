<template>
    <section class="login-authen d-flex flex-column justify-content-center">
        <img src="../../assets/logo_ezgolf-12.png" class="login-authen__logo d-block mx-auto" alt="Ezgolf logo">
        <h3 class="login-authen__title my-5">SIGN IN</h3>
        <b class="text-danger">{{ messageError }}</b>
        <input-from v-model="text.UserName" placeholder="Username" class="my-3"></input-from>
        <input-from v-model="text.PassWord" type="password" placeholder="Password" class="my-3"></input-from>
        <b-button variant="primary" class="w-100 mt-4" @click="login">Sign In</b-button>
        <div class="login-authen__signup mt-5">
            <span class="login-authen__signup--label">Haven’t Account ?</span>
            <div class="login-authen__signup--link">
                <router-link to="/home" class="text-uppercase font-weight-bold">SIGN UP</router-link>
            </div>
        </div>
    </section>
</template>
<script lang="ts" src="./LoginAuthenTication.ts"></script>
<style lang="scss" scoped>
@import './LoginAuthenTication.scss';
</style>