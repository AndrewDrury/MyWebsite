<template>
  <div class="home" id="home" name="home">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col>
          <b-row class="top-space">
            <b-col align="left">
              <h1>Hi!</h1>
              <h1>I am Andrew Drury.</h1>
              <h6>Full Stack Developer</h6>
              <h6>based in Toronto</h6>


              <p>planning sections: Home, Experience, Projects, About, Contact, Resume</p>
              <p>Option B: Experience, Projects, Home(logo), Resume, Contact</p>
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
    margin-bottom:150px;
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
