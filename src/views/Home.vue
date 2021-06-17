<template>
<div>
      <v-container>
      <br>
        <v-row>
          <v-col cols="12">
          <Main/>
          </v-col>
           <v-col cols="12">
            <v-card flat style="background-color: #ffffff87;     border-radius: 10px;
    border: 1px solid #f5f5f5;">
            <v-row class="mx-2 mt-3 mb-3">
             <v-col cols="3">
           <v-card
    class="mx-auto rounded-xl"
  >
  <v-card-title class="justify-center text-h6" style="color:#ffff">{{$t('WATCHES') }}</v-card-title>
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80"
    >
    </v-img>
    <v-card-actions class="justify-center">
      <v-btn
        color="#ffff"
        text
      >
       {{ $t('Show_more') }}
      </v-btn>
    </v-card-actions>
  </v-card>
            </v-col>
             <v-col cols="3">
              <v-card
    class="mx-auto rounded-xl"
  >
  <v-card-title class="justify-center text-h6" style="color:#ffff">{{ $t('PLATES') }}</v-card-title>
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://images.zawya.com/images/cia/zXlarge/180807210337ACUF.jpg"
    >
    </v-img>
    <v-card-actions class="justify-center">
      <v-btn
        color="#ffff"
        text
      >
        {{ $t('Show_more')}}
      </v-btn>
    </v-card-actions>
  </v-card>
            </v-col>
             <v-col cols="3">
             <v-card
    class="mx-auto rounded-xl"
  >
  <v-card-title class="justify-center text-h6" style="color:#ffff">{{ $t('YACHTS') }}</v-card-title>
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2253&q=80"
    >
    </v-img>
    <v-card-actions class="justify-center">
      <v-btn
        color="#ffff"
        text
      >
        {{ $t('Show_more') }}
      </v-btn>
    </v-card-actions>
  </v-card>
            </v-col>
             <v-col cols="3">
              <v-card
    class="mx-auto rounded-xl"
  >
  <v-card-title class="justify-center  text-h6" style="color:#ffff">{{ $t('CARS') }}</v-card-title>
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    >
    </v-img>
    <v-card-actions class="justify-center">
      <v-btn
        color="#ffff"
        text
      >
       {{ $t('Show_more')}}
      </v-btn>
    </v-card-actions>
  </v-card>
            </v-col>
            </v-row>
            </v-card>
          </v-col>
           <v-col cols="12">
           <Footer/>
           </v-col>
        </v-row>
      </v-container>
    <login v-if="login.show" @closeLogin="login.show = false"/>
</div>
</template>

<script>
import Login from '../components/login.vue';
import moment from 'moment'
import Footer from '../components/layout/Footer.vue';
import Main from '@/components/layout/Main.vue';
export default {
  name: 'Home',
  components: {
    Login,
    Footer,
    Main,
  },
  data() {
    return {
      /* eslint-disable global-require */
      img: require('../assets/deal.png'),
      time: '',
      login: {
        show: false,
      },
    };
  },
  computed: {
    
     currentDateTime() {
      return moment().format('MMMM Do YYYY, h:mm:ss a')
    }
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
};
</script>

<style scoped>


.v-card__title {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    line-height: 2rem;
    word-break: break-all;
    background-color: #ff7642;
    /* height: 46px; */
}

.v-card__actions {
    align-items: center;
    display: flex;
    padding: 5px;
    background-color: #374151;
}
.theme--light.v-list {
    background: #ffffff00;
    color: #f5f5f5;
    color: #ffff;
}
</style>
