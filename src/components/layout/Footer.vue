<template>
<div> <v-card style="   color: #fff; background-color: #374151ba; border-radius: 10px;
    border: 1px solid #f5f5f5;">
    <v-row>
    <v-col class="mx-3 mt-3">
      <!-- <v-avatar tile  class="profile"
            size="164">
                 <v-img  style="background-color: #fff;
    border-radius: 15px;"   height="100%" :src="img"></v-img>
    </v-avatar> -->
<div class="mt-2 mx-2">
<h2>{{ $t('titel_info') }}</h2>
<b>{{ $t('info_header') }}</b>
<h4>{{ $t('best_info')}}</h4>
<div class="mx-2 mb-2">
<b>
<ul>
  <li>{{ $t('beadt_1') }}</li>
  <li>{{ $t('best_2') }}</li>
  <li>{{ $t('best_3') }}</li> 
  <li>{{ $t('best_4') }}</li>
   <li>{{ $t('best_5') }}</li>
   <li>{{ $t('best_6') }}</li>
</ul>
</b>
</div>
<!-- {{ $t('info') }} -->
</div>
    </v-col>
    <v-col cols="3">
    <v-list dark color="#ffffff00" flat>
    <v-subheader>{{ $t('CREATE_AUCTION') }}</v-subheader>
    <v-list-item color="#ffff">
      <v-list-item-icon>
             <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ $t('Add_Car') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item color="#ffff">
      <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ $t('Add_Watch')}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item color="#ffff">
      <v-list-item-icon>
             <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ $t('Add_Plate') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item color="#ffff">
      <v-list-item-icon>
             <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ $t('Add_Yachts')}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    </v-list>
    </v-col>
    <!-- <v-col cols="4">
      <v-list dark color="#ffffff00" flat>
    <v-subheader>{{ $t('DEAL_AUCTION') }}</v-subheader>
    <v-list-item color="#ffff">
      <v-list-item-icon>
             <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ $t('aboutUs')}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item color="#ffff">
      <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ $t('ContectUs') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item color="#ffff">
      <v-list-item-icon>
             <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ $t('SingUp') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    </v-list>
    </v-col> -->
    </v-row>
    </v-card></div>
    
</template>

<script>
export default {
   name: 'Footer',
   data() {
       return {
            img: require('../../assets/deal.png'),
       }
   },
   computed: {
      icon() {
      return this.$vuetify.rtl ?  "mdi-arrow-left" : 'mdi-arrow-right' 
    },
   },
}
</script>