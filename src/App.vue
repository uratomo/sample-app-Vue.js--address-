<template>
  <v-app>
    <v-app-bar app>
      <v-icon @click="toggleSideMenu">fas fa-pen</v-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
    </v-app-bar>
     <v-spacer></v-spacer>
      <SideNav></SideNav>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {mapActions} from "vuex"
import '@fortawesome/fontawesome-free/css/all.css'
import SideNav  from "./components/SideNav"
export default {
  name: 'App',
  components: {
    SideNav
  },
  data () {
    return {

    }
  },
  methods:{
    openSideMenu(){
      this.$store.dispatch("toggleSideMenu")
    },
    ...mapActions(["toggleSideMenu"])
  }
};
</script>
