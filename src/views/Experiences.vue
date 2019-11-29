<template>
  <div class="experiences section" id="experiences" name="experiences">
    <b-container fluid>
      <b-row>
        <b-col>
          <b-row>
            <b-col>
              <h2>Experiences</h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h5>
                I am currently seeking a developer internship for Summer 2020.
              </h5>
            </b-col>
          </b-row>

          <!-- EXPERIENCES -->
          <Stratus360 />
          <TDLab />
          <!-- <ZurApps /> -->
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
import Stratus360 from "./Experiences/Stratus360.vue";
import TDLab from "./Experiences/TDLab.vue";
import ZurApps from "./Experiences/ZurApps.vue";

export default Vue.extend({
  name: "experiences",
  components: {
    Stratus360,
    TDLab,
    ZurApps
  }
});
</script>
