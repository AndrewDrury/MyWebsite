<template>
  <div class="experience hidden" id="Cyclica" name="Cyclica">
    <a class="experience-hover">
      <b-container fluid style="padding-right:0px;padding-left:0px">
        <div class="margin-wrap">
          <b-row class="experienceRow">
            <a
              class="company-link"
              href="https://www.cyclicarx.com/"
              target="_blank"
            >
              <b-col class="logo">
                <img src="@/assets/ExperiencePics/CyclicaLogo.jpg" />
              </b-col>
              <b-col class="company-info">
                <h3>Cyclica</h3>
                <div style="white-space:nowrap">
                  <h4>AI-Augmented Drug Discovery</h4>
                </div>
              </b-col>
            </a>
            <b-col class="position-info">
              <b-row>
                <b-col class="position">Software Developer</b-col>
              </b-row>
              <b-row>
                <b-col class="time">Jan -> Apr 2021</b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p>
                    I developed features for the AI-Augmented Drug Discovery
                    Platform. I overhauled the React UI for the primary platform
                    page and implemented python commands to ensure the integrity
                    of the ML protein rankings with the frontend results. I also
                    created default library &amp; molecule for all clients in
                    Django.
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </a>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";
</style>

<script lang="ts">
export default {
  name: "Cyclica",
  data() {
    return {};
  }
};
</script>
