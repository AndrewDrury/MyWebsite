<template>
  <div class="experience hidden" id="Tucows" name="Tucows">
    <a class="experience-hover">
      <b-container fluid style="padding-right:0px;padding-left:0px">
        <div class="margin-wrap">
          <b-row class="experienceRow">
            <a
              class="company-link"
              href="https://www.tucows.com/"
              target="_blank"
            >
              <b-col class="logo">
                <img src="@/assets/ExperiencePics/TucowsLogo.png" />
              </b-col>
              <b-col class="company-info">
                <h3>Tucows</h3>
                <div style="white-space:nowrap">
                  <h4>Making the Internet better</h4>
                </div>
              </b-col>
            </a>
            <b-col class="position-info">
              <b-row>
                <b-col class="position">Jr. Software Engineer</b-col>
              </b-row>
              <b-row>
                <b-col class="time">May 2020 -> Aug 2020</b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p>
                    I created an end-to-end testing framework with python. The
                    framework models systems such as
                    <a href="https://opensrs.com/" target="_blank"
                      >OpenSRS.com</a
                    >, a domain name reseller, using graphs. I sped up the
                    runtime of tests by 4x by generating efficient test paths
                    with the
                    <a href="https://graphwalker.github.io/" target="_blank"
                      >GraphWalker</a
                    >
                    framework.
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
  name: "Tucows",
  data() {
    return {};
  }
};
</script>
