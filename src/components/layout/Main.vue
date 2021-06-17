<template>
<div>
 <v-card flat style="background-color: #ffffff87; border-radius: 10px;border: 1px solid #f5f5f5;" height="200">
            <v-row class="mx-auto">
                <v-col class="mt-2" cols="2"><div>
                 <v-avatar tile  class="profile" size="164">
                 <v-img  style="background-color: #fff; border-radius: 15px;"   height="100%" :src="img"></v-img>
                  </v-avatar>
                </div>
                </v-col>
                <v-col class="mt-2">
                <v-row>
                <v-col cols="12">
                {{ time }}
                </v-col>
                <v-col>
                 <v-btn dark small color="#ff7642" elevation="0" rounded class="mx-2">{{ $t('aboutUs')}}</v-btn>
                <v-btn dark  small color="#ff7642" elevation="0" rounded class="mx-2">{{ $t('ContectUs') }}</v-btn>
                </v-col>
                </v-row>
                <div class="mt-16">
                <v-btn dark  small color="#ff7642" elevation="0" rounded class="mx-1">{{ $t('Add_Car')}}</v-btn>
                 <v-btn dark  small color="#ff7642" elevation="0" rounded class="mx-1">{{ $t('Add_Watch')}}</v-btn>
                  <v-btn dark  small color="#ff7642" elevation="0" rounded class="mx-1">{{ $t('Add_Yachts')}}</v-btn>
                   <v-btn dark small  color="#ff7642" elevation="0" rounded class="mx-1">{{ $t('Add_Plate')}}</v-btn>
                </div>
                </v-col>
                <v-col class="mt-2">
                <a class="mx-2" @click="showLogin">{{ $t("login") }}</a>
                 <a class="mx-2">{{$t('SingUp')}}</a>
                <a class="mx-2" @click="changeRTL">{{ $t("lang") }}</a>
                </v-col>
              </v-row>
            </v-card>
</div>
    
</template>

<script>
import moment from 'moment'
export default {
   name: 'Headers',
   data() {
        return {
            img: require('../../assets/deal.png'),
            time: '',
            login: {
                show: false,
            },   
       }
   },
   computed: {
       
   },
   methods: {
        showLogin() {
            this.login.show = true;
        },
        changeRTL () {
            this.$vuetify.rtl = !this.$vuetify.rtl;
        
            this.$vuetify.rtl ? this.$i18n.locale = "ar" : this.$i18n.locale = "en";
        },
      
   },
   created() {
    this.interval=setInterval(() => {
      this.time = moment().format('MMMM Do YYYY, h:mm:ss a');
    }, 1)
  }
}
</script>

<style>
.v-application a {
    color: #0a0a0a;
}
</style>