<template>
  <v-app>

    <!--
    <v-app-bar
      app
      color="primary"
      dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"></v-img>
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"></v-img>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    -->

    <div class="vl-l"></div>
    <div class="middle-block-left"></div>
    <div class="right-block-left"></div>

    <div class="vl-r"></div>
    <div class="middle-block-right"></div>
    <div class="right-block-right"></div>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<!--<style lang="sass">-->
<!--vertical line-->
<!--https://stackoverflow.com/questions/3148415/how-to-make-a-vertical-line-in-html-->
<style>

  .vl-l {
    border-left: 2px solid gray;
    margin-left: 38px;
    height: 90%;
    margin-top: 2%;
  }
  .middle-block-left {
    width: 20px;
    height: 2px;
    top: 100px;
    left: 30px;
    border: 1px solid gray;
    position: absolute;
  }
  .right-block-left {
    width: 20px;
    height: 6px;
    top: 98px;
    left: 70px;
    border: 3px solid gray;
    position: absolute;
  }
  .left-block {
    width: 100px;
    height: 20px;
    top: 10px;
    left: 10px;
    border:1px solid #777;
    position: absolute;
  }

  /* */
  .vl-r {
    border-right: 2px solid gray;
    right: 38px;
    height: 90%;
    top: 4%;
    position: absolute;
  }

  .middle-block-right {
    width: 20px;
    height: 2px;
    top: 100px;
    right: 30px;
    border: 1px solid gray;
    position: absolute;
  }
  .right-block-right {
    width: 20px;
    height: 6px;
    top: 98px;
    right: 70px;
    border: 3px solid gray;
    position: absolute;
  }




</style>
