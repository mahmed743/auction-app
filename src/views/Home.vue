<template>
<div>
    <v-main>
      <v-container>
      <br>
        <v-row>
          <v-col cols="12">
          <v-card flat style="background-color: #ffffff87;     border-radius: 10px;
    border: 1px solid #f5f5f5;" height="200">
            <v-row class="mx-auto">
                <v-col class="mt-2" cols="3"><div>
                 <v-avatar tile  class="profile"
            size="164">
                 <v-img  style="background-color: #fff;
    border-radius: 15px;"   height="100%" :src="img"></v-img>
    </v-avatar>
                </div>
                </v-col>
                <v-col class="mt-2">
                 <v-btn dark  color="#ff7642" elevation="0" rounded class="mx-2">About Us</v-btn>
                <v-btn dark color="#ff7642" elevation="0" rounded class="mx-2">Contect Us</v-btn>
                <v-row>
                <v-col cols="12"></v-col>
                <v-col class="mt-10"></v-col>
                </v-row>
                </v-col>
                <v-col class="mt-2">
                <a class="mx-2" @click="showLogin">login</a>
                 <a class="mx-2">Sing Up</a>
                <a class="mx-2">Arabic</a>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
           <v-col cols="12">
            <v-card flat style="background-color: #ffffff87;     border-radius: 10px;
    border: 1px solid #f5f5f5;">
            <v-row class="mx-2 mt-3 mb-3">
             <v-col cols="3">
           <v-card
    class="mx-auto rounded-xl"
  >
  <v-card-title class="justify-center text-h6" style="color:#ffff">WATCHES</v-card-title>
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
        Show more
      </v-btn>
    </v-card-actions>
  </v-card>
            </v-col>
             <v-col cols="3">
              <v-card
    class="mx-auto rounded-xl"
  >
  <v-card-title class="justify-center text-h6" style="color:#ffff">PLATES</v-card-title>
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
        Show more
      </v-btn>
    </v-card-actions>
  </v-card>
            </v-col>
             <v-col cols="3">
             <v-card
    class="mx-auto rounded-xl"
  >
  <v-card-title class="justify-center text-h6" style="color:#ffff">YACHTS</v-card-title>
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
        Show more
      </v-btn>
    </v-card-actions>
  </v-card>
            </v-col>
             <v-col cols="3">
              <v-card
    class="mx-auto rounded-xl"
  >
  <v-card-title class="justify-center  text-h6" style="color:#ffff">CARS</v-card-title>
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
        Show more
      </v-btn>
    </v-card-actions>
  </v-card>
            </v-col>
            </v-row>
            </v-card>
          </v-col>
           <v-col cols="12">
      <v-card style="   color: #fff; background-color: #374151ba; border-radius: 10px;
    border: 1px solid #f5f5f5;">
    <v-row>
    <v-col class="mx-3 mt-3">
      <v-avatar tile  class="profile"
            size="164">
                 <v-img  style="background-color: #fff;
    border-radius: 15px;"   height="100%" :src="img"></v-img>
    </v-avatar>
<div>Deal Auction is a leading UAE - based auction company in the Middle East</div>
    </v-col>
    <v-col cols="4">
    <v-list dark color="#ffffff00" flat>
    <v-subheader>CREATE AUCTION</v-subheader>
    <v-list-item color="#ffff">
      <v-list-item-icon>
             <v-icon>mdi-arrow-right</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Add Car</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item color="#ffff">
      <v-list-item-icon>
            <v-icon>mdi-arrow-right</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Add Watch</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item color="#ffff">
      <v-list-item-icon>
             <v-icon>mdi-arrow-right</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Add Plate</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item color="#ffff">
      <v-list-item-icon>
             <v-icon>mdi-arrow-right</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Add Yachts</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    </v-list>
    </v-col>
    <v-col cols="4">
      <v-list dark color="#ffffff00" flat>
    <v-subheader>DEAL AUCTION</v-subheader>
    <v-list-item color="#ffff">
      <v-list-item-icon>
             <v-icon>mdi-arrow-right</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>About us</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item color="#ffff">
      <v-list-item-icon>
            <v-icon>mdi-arrow-right</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Contact us</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item color="#ffff">
      <v-list-item-icon>
             <v-icon>mdi-arrow-right</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Sign up</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    </v-list>
    </v-col>
    </v-row>
    </v-card>
           </v-col>
        </v-row>
      </v-container>
    </v-main>
    <login v-if="login.show" @closeLogin="login.show = false"/>
</div>
</template>

<script>
import Login from '../components/login.vue';

export default {
  name: 'Home',
  components: {
    Login,
  },
  data() {
    return {
      /* eslint-disable global-require */
      img: require('../assets/deal.png'),
      login: {
        show: false,
      },
    };
  },
  methods: {
    showLogin() {
      this.login.show = true;
    },
  },
};
</script>

<style scoped>
.v-application a {
    color: #0a0a0a;
}

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
