<template>
    <section v-if="hasDoneProfile" class="profile-user-edit h-100 pt-4 d-flex flex-column">
        <b-avatar class="profile-user-edit__avatar mx-auto overflow-hidden d-block mb-3" :src="'data:image/jpeg;base64,' + avatarMember" size="8rem" ></b-avatar>
        <b-button variant="primary" @click="triggerClickChoofile">Upload avatar</b-button>
        <input type="file" ref="chooSeeFile" class="d-none" @change="selecFileUploadAvatar" placeholder="Upload avatar">
        <div class="profile-user-edit__wrap text-start my-2">
            <span class="profile-user-edit__label-from fw-bold">Full name</span>
            <input-from v-model:modelValue="dataProFileUser.FullName" placeholder="Full name"></input-from>
        </div>
        <div class="profile-user-edit__wrap text-start my-2">
            <span class="profile-user-edit__label-from fw-bold">Giới tính</span>
            <v-select v-model="dataPickSex" :options="dataSex">
            </v-select>
        </div>

        <div class="profile-user-edit__wrap text-start my-2">
            <span class="profile-user-edit__label-from fw-bold">Nghề Nghiệp</span>
            <input-from v-model:modelValue="dataProFileUser.Job" placeholder="example: software engineer"></input-from>
        </div>
        
        <div class="profile-user-edit__wrap text-start my-2">
            <span class="profile-user-edit__label-from fw-bold">Date of birth</span>
            <DatepickerPlugin
                v-model="dataProFileUser.Birthday"
                :enableTimePicker="false"
                :format="formatDatepickerPlugin"
            >
            </DatepickerPlugin>
        </div>

        
        <div class="profile-user-edit__wrap text-start my-2">
            <span class="profile-user-edit__label-from fw-bold">Phone number</span>
            <input-from v-model="dataProFileUser.PhoneNumber" placeholder="Example: 090xxxxx"></input-from>
        </div>
        <div class="profile-user-edit__wrap text-start my-2">
            <span class="profile-user-edit__label-from fw-bold">Email</span>
            <input-from v-model="dataProFileUser.Email" placeholder="Example: example@email.com"></input-from>
        </div>
        <div class="profile-user-edit__wrap text-start my-2">
            <span class="profile-user-edit__label-from fw-bold">Address</span>
            <input-from v-model="dataProFileUser.Address" placeholder="Example: 100 street"></input-from>
         </div>
        <b-row class="profile-user-edit__address-form">
            <b-col cols="12" class="d-flex flex-column text-start my-2">
                <span class="profile-user-edit__label-from fw-bold">Country</span>
                <v-select v-model="valueAddress.country" :options="dataCountries">
                </v-select>
            </b-col>
            <b-col cols="12" class="d-flex flex-column text-start my-2">
                <span class="profile-user-edit__label-from fw-bold">City</span>
                <v-select v-model="valueAddress.city" :options="dataStates">
                </v-select>
                
            </b-col>
            <b-col cols="12" class="d-flex flex-column text-start my-2">
                <span class="profile-user-edit__label-from fw-bold">Ward</span>
                <v-select v-model="valueAddress.district" :options="dataDistrict">
                </v-select>
            </b-col>
        </b-row>
        <b-button variant="primary" @click="saveProfileUserEdit">Save</b-button>
    </section>
</template>
<script lang="ts" src="./ProfileUserEdit"></script>
<style lang="scss" scoped>
@import './ProfileUserEdit.scss';
</style>