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

    <!--
    <div class="vl-r"></div>
    <div class="middle-block-right"></div>
    <div class="right-block-right"></div>
    -->

    <div class="middle-block-right"></div>
    <div class="small-right-square"></div>
    <div class="bigger-right-square"></div>
    <div class="vl-right"></div>
    <div class="right-square"></div>
    <div class="small-square-1"></div>
    <div class="small-square-2"></div>
    <div class="small-square-3"></div>
    <div class="hl-right"></div>
    <div class="vl-stop"></div>
    <div class="text-up">Current text is UP</div>
    <div class="text-dn">This is DN</div>
    <div class="rectangle-end"></div>

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
    border-left: 2px solid darkgray;
    margin-left: 38px;
    height: 90%;
    margin-top: 2%;
  }
  .middle-block-left {
    width: 20px;
    height: 6px;
    top: 100px;
    left: 30px;
    border: 1px solid darkgray;
    position: absolute;
  }
  .right-block-left {
    width: 20px;
    height: 6px;
    top: 98px;
    left: 70px;
    border: 3px solid darkgray;
    position: absolute;
  }
  .left-block {
    width: 100px;
    height: 20px;
    top: 10px;
    left: 10px;
    border:1px solid darkgray;
    position: absolute;
  }

  .vl-r {
    border-right: 2px solid #616161;
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
    border: 1px solid #616161;
    position: absolute;
  }
  .right-block-right {
    width: 20px;
    height: 6px;
    top: 98px;
    right: 70px;
    border: 3px solid #616161;
    position: absolute;
  }



  .middle-block-right {
    width: 25px;
    height: 45px;
    top: 20px;
    right: 60px;
    border: 1px solid darkgray;
    position: absolute;
  }
  .small-right-square {
    width: 25px;
    height: 18px;
    top: 70px;
    right: 60px;
    background-color: #555;
    border: 1px solid darkgray;
    position: absolute;
  }
  .bigger-right-square {
    width: 30px;
    height: 6px;
    top: 95px;
    right: 57px;
    background-color: #BDBDBD;
    border: 1px solid darkgray;
    position: absolute;
  }
  .vl-right {
    border-right: 2px solid #616161;
    right: 71px;
    height: 19.5%;
    top: 10.7%;
    position: absolute;
  }
  .right-square {
    top: 30%;
    right: 60px;
    height: 25px;
    width: 25px;
    border: 1px solid darkgray;
    position: absolute;
  }
  .small-square-1 {
    top: 30.7%;
    right: 90px;
    height: 12px;
    width: 12px;
    background-color: #555;
    position: absolute;
  }
  .small-square-2 {
    top: 30.7%;
    right: 106px;
    height: 12px;
    width: 12px;
    background-color: #555;
    position: absolute;
  }
  .small-square-3 {
    top: 30.7%;
    right: 122px;
    height: 12px;
    width: 12px;
    background-color: #555;
    /*border: 1px solid darkgray;*/
    position: absolute;
  }
  .hl-right {
    top: 31.3%;
    right: 140px;
    position: absolute;
    border: 1px solid #555;
    width: 240px;
  }
  .vl-stop {
    border-right: 2px solid #616161;
    right: 380px;
    height: 5%;
    top: 29%;
    position: absolute;
  }
  .text-up {
    right: 280px;
    height: 3%;
    top: 29%;
    position: absolute;
    font-size: 12px;
    color: #616161;
  }
  .text-dn {
    right: 320px;
    height: 3%;
    top: 32%;
    position: absolute;
    font-size: 12px;
    color: #616161;
  }
  .rectangle-end {
    top: 29.6%;
    right: 400px;
    height: 33px;
    width: 33px;
    border: 1px solid darkgray;
    position: absolute;
  }


</style>
