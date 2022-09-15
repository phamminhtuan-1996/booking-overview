<template>
    <section class="table-ezgolf overflow-auto">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="(item, index) in dataDefaultHeader" :key="index" class="text-start">
                        {{ item }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <slot name="data">
                    <tr v-for="(item, index) in dataTableDefault" :key="index">
                        <td class="text-start">{{ item.date }}</td>
                        <td class="text-start">{{ item.time }}</td>
                        <td class="text-start">{{ item.golfCourse }}</td>
                        <td class="text-start">{{ item.status }}</td>
                        <td class="text-start"> <router-link to="/home"> view details </router-link> </td>
                    </tr>
                </slot>
            </tbody>
        </table>
    </section>
</template>
<script lang="ts" src="./TableEzGolf.ts"></script>
<style lang="scss" scoped>
@import './TableEzGolf.scss';
</style>