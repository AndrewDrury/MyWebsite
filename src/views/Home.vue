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

              <p>
                planning sections: Home, Experience, Projects, About, Contact,
                Resume
              </p>
              <p>Option B: Experience, Projects, Home(logo), Resume, Contact</p>

              <!-- 
                Sections:
                  1. Home
                  2. Experience
                  3. Projects
                  4. Contact(and about)
                  5. Resume
               -->

               <!--
    Website ideas



    Establish vision and message
    Pick colours (accents: yellow, orange, red, blue)
    Pick fonts
    Design logo


    Vision

    Full-stack or backend at a medium to large company in Cali
    Min pay: 
    Get more specific with position
    Looking to learn more and be able to contribute to the company, not just do 'coop' projects




    Sections:

    Home
    Experience
    Projects
    Contact(and about)
    Resume




    Ideas:

    have github, LinkedIn, email, and resume (PDF symbol) at bottom left at all times



    Home page or about have Toronto pic of me



    Home page:

    Large text in background
    Graph line mountains
    Trace logo
    Write out 'Hi! I am Andrew Drury" really coolly


    Experience

    company name
    Position
    Location
    Date
    Languages and tools, keywords
    Summary of company
    Summary of what I did


    Project section

    Project name
    Date
    Location
    Awards
    Languages and technologies
    One sentence description
    Some way to hide and show more details, like bullet point list of things done or my contributions
    Github link or project submission link






    Content scroll fast,

    Pic Scroll Slow -->
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
    margin-bottom: 150px;
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
