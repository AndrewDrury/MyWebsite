<template>
  <div class="project" id="sliai" name="sliai">
    <b-container fluid>
      <b-row class="projectRow">
        <b-col class="project-pic webscreen mobile hidden" lg="6">
          <a
            href="https://github.com/AndrewDrury/sli.ai"
            class="webscreen"
            target="_blank"
          >
            <img src="@/assets/ProjectPics/sliai.gif" />
          </a>
        </b-col>
        <b-col lg="6">
          <b-row class="top-content">
            <b-col class="title hidden" md="12">
              <a href="https://github.com/AndrewDrury/sli.ai" target="_blank">
                <h1>sli.ai</h1>
              </a>
            </b-col>
            <b-col class="tech hidden"
              ><h3><i class="fa fa-tag"></i>&nbsp;Vue.js, Azure</h3></b-col
            >
            <hr />
          </b-row>
          <b-row class="bot-content">
            <b-col class="award hidden" md="12" lg="6">
              <h4><i class="fa fa-map-marker"></i>&nbsp;Toronto, ON</h4>
            </b-col>
            <b-col class="hackathon hidden" md="12" lg="6"
              ><h4>
                <i class="fa fa-location-arrow"></i>&nbsp;MakeUofT
              </h4></b-col
            >
          </b-row>
          <b-row>
            <b-col class="details hidden">
              <p>
                This web app can translate sign language to text live using a
                custom Microsoft Azure Vision model. The speech of a talking
                user is converted to text using Chrome's Web Speech API.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="view-more hidden">
              <a href="https://github.com/AndrewDrury/sli.ai" target="_blank">
                <p><i class="fa fa-github"></i>View More -></p>
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="project-pic desktop hidden" md="6">
          <a href="https://github.com/AndrewDrury/sli.ai" target="_blank">
            <img src="@/assets/ProjectPics/sliai.gif" />
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";
</style>
