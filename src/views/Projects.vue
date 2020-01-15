<template>
  <div class="projects section" id="projects" name="projects">
    <b-container fluid>
      <b-row>
        <b-col>
          <b-row class="margin-wrap">
            <b-col>
              <h2>Projects</h2>
            </b-col>

            <!-- PROJECTS -->
            <grow />
            <TableStory />
            <FlySafe />
            <sliai />
            <ePaid />
          </b-row>
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
import grow from "./Projects/grow.vue";
import TableStory from "./Projects/TableStory.vue";
import FlySafe from "./Projects/FlySafe.vue";
import sliai from "./Projects/sliai.vue";
import ePaid from "./Projects/ePaid.vue";

export default Vue.extend({
  name: "projects",
  components: {
    grow,
    TableStory,
    FlySafe,
    sliai,
    ePaid
  }
});
</script>
