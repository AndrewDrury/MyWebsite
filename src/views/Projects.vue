<template>
  <div class="projects section" id="projects" name="projects">
    <b-container fluid>
      <b-row>
        <b-col>
          <b-row class="margin-wrap hidden">
            <b-col>
              <h2>Projects</h2>
            </b-col>

            <!-- PROJECTS -->
            <SearchEngine />
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
import ePaid from "./Projects/ePaid.vue";
import FlySafe from "./Projects/FlySafe.vue";
import grow from "./Projects/grow.vue";
import SearchEngine from "./Projects/SearchEngine.vue";
import sliai from "./Projects/sliai.vue";
import TableStory from "./Projects/TableStory.vue";

export default Vue.extend({
  name: "projects",
  components: {
    ePaid,
    FlySafe,
    grow,
    SearchEngine,
    sliai,
    TableStory,
  },
});
</script>
