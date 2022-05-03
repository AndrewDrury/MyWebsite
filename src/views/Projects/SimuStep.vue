<template>
  <div class="project" id="SimuStep" name="SimuStep">
    <b-container fluid>
      <b-row class="projectRow">
        <b-col class="project-pic hidden" lg="4">
          <a href="https://simustep.com" target="_blank">
            <img
              srcset="
                @/assets/ProjectPics/SimuStep.png
              "
            />
          </a>
        </b-col>
        <b-col lg="8">
          <b-row class="top-content">
            <b-col class="title hidden" md="12">
              <a
                href="https://simustep.com"
                target="_blank"
              >
                <h1>SimuStep</h1>
              </a>
            </b-col>
            <b-col class="tech hidden"
              ><h3><i class="fa fa-tag"></i>&nbsp;Python</h3></b-col
            >
            <hr />
          </b-row>
          <b-row class="bot-content">
            <b-col class="award hidden" md="12" lg="6">
              <h4><i class="fa fa-map-marker"></i>&nbsp;University of Waterloo, ON</h4>
            </b-col>
            <b-col class="hackathon hidden" md="12" lg="6"
              ><h4>
                <i class="fa fa-tag"></i>&nbsp;Capstone Project
              </h4></b-col
            >
          </b-row>
          <b-row>
            <b-col class="details hidden">
              <p>
                SimuStep is a neuroprosthetic assistive walking device for people affected by foot drop.
                The device provides active electrical muscle stimulation to help patients walk by themselves
                and help rehabilitate the condition in the process.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="view-more hidden">
              <a
                href="https://simustep.com"
                target="_blank"
              >
                <p><i class="fa fa-github"></i>View More -></p>
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";
</style>
