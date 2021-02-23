<template>
  <div class="experiences section" id="experiences" name="experiences">
    <b-container fluid>
      <b-row>
        <b-col style="padding-right:0px;padding-left:0px">
          <b-row class="margin-wrap">
            <b-col>
              <h2 class="hidden">Experiences</h2>
              <h5>
                I am currently seeking full-time software engineering
                opportunities starting May 2022.
              </h5>
            </b-col>
          </b-row>

          <!-- EXPERIENCES -->
          <BitGo />
          <Cyclica />
          <Tucows />
          <Stratus360 />
          <TDLab />
          <ZurApps />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";
</style>

<script lang="ts">
import Vue from "vue";
import BitGo from "./Experiences/BitGo.vue";
import Cyclica from "./Experiences/Cyclica.vue";
import Tucows from "./Experiences/Tucows.vue";
import Stratus360 from "./Experiences/Stratus360.vue";
import TDLab from "./Experiences/TDLab.vue";
import ZurApps from "./Experiences/ZurApps.vue";

export default Vue.extend({
  name: "experiences",
  components: {
    BitGo,
    Cyclica,
    Tucows,
    Stratus360,
    TDLab,
    ZurApps
  }
});
</script>
