<template>
  <div class="home" id="home" name="home">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col>
          <b-row class="top-space">
            <b-col>
              <h1>Andrew Drury</h1>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";
.home {
  //Apply bottom margin to all columns in mobile
  @media all and (max-width: 767px) {
    [class^="col-sm-"] {
      margin-bottom: 20px;
    }
  }

  .top-space {
    margin-top: 275px;
    @media (max-width: $screen-sm) {
      margin-top: 100px;
    }
    margin-bottom:500px;
  }

  .desktop {
    display: inline;
    @media (max-width: $screen-sm) {
      display: none;
    }
  }

  .mobile {
    display: none;
    @media (max-width: $screen-sm) {
      display: inline;
    }
  }
}

</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
