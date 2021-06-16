<template>
<v-dialog width="500" persistent v-model="display">
<v-card><v-card-title class="justify-center text-h6" style="color:#ffff">Login</v-card-title>
    <v-card-text>
    <v-form>
    <v-row class="mx-3 mt-3">
    <v-col cols="6">
    <v-text-field label="Email" outlined dense></v-text-field>
    </v-col>
    <v-col cols="6">
    <v-text-field label="Password" outlined dense></v-text-field>
    </v-col>
    </v-row>
    <v-checkbox label="I forgot the password">I forgot the password</v-checkbox>
    </v-form>
    </v-card-text>
    <v-card-actions class="justify-center">
    <v-btn
    color="#ff7642"
  block
  elevation="1"
  @click="login"
>Login
</v-btn>
    </v-card-actions>
    </v-card>
    </v-dialog>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      display: true,
    };
  },

  methods: {
    login() {
      this.$emit('closeLogin');
    },
  },
};
</script>
