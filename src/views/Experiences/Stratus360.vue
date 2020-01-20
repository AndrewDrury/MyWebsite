<template>
  <div class="experience" id="Stratus360" name="Stratus360">
    <a class="experience-hover">
      <b-container fluid style="padding-right:0px;padding-left:0px">
        <div class="margin-wrap">
          <b-row class="experienceRow">
            <a
              class="company-link"
              href="https://www.stratus360.com/"
              target="_blank"
            >
              <b-col class="logo">
                <img src="@/assets/ExperiencePics/Stratus360Logo.png" />
              </b-col>
              <b-col class="company-info">
                <h3>Stratus360</h3>
                <div style="white-space:nowrap">
                  <h4>A Platinum Salesforce Partner</h4>
                </div>
              </b-col>
            </a>
            <b-col class="position-info">
              <b-row>
                <b-col class="position">Full Stack Developer</b-col>
              </b-row>
              <b-row>
                <b-col class="time">Sep -> Dec 2019</b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p>
                    I developed CRM software within the Salesforce platform for
                    clients such as TMX (Toronto Stock Exchange), Cadillac
                    Fairview, Rogers, and Globe and Mail.
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
  name: "Stratus360",
  data() {
    return {};
  }
};
</script>
