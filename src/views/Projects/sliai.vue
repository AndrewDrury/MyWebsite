<template>
  <div class="project" id="sliai" name="sliai">
    <b-container fluid>
      <b-row class="projectRow">
        <b-col class="project-pic mobile" md="6">
          <a href="https://github.com/AndrewDrury/sli.ai" class="webscreen" target="_blank">
            <img src="@/assets/ProjectPics/sliai.gif"/>
          </a>
        </b-col>
        <b-col md="6">
          <b-row class="top-content">
            <b-col class="title" md="12">
              <a
                href="https://github.com/AndrewDrury/sli.ai"
                target="_blank"
              >
                <h1>sli.ai</h1>
              </a>
            </b-col>
            <b-col class="tech"><h3>Vue.js, Azure</h3></b-col>
            <hr />
          </b-row>
          <b-row class="bot-content">
            <b-col class="award" md="12" lg="6">
              <!-- <h4>Award</h4> -->
            </b-col>
            <b-col class="hackathon" md="12" lg="6"
              ><h4><i class="fa fa-location-arrow"></i>&nbsp;&nbsp;MakeUofT, 2019</h4></b-col
            >
          </b-row>
          <b-row>
            <b-col class="details">
              <p>
                A web app that can translate sign language to text live using a custom Microsoft Azure Vision model. The speech of a talking user is converted to text using Chrome's Web Speech API.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="view-more">
              <a
                href="https://github.com/AndrewDrury/sli.ai"
                target="_blank"
              >
                <p><i class="fa fa-github"></i>&nbsp;&nbsp;View More -></p>
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="project-pic desktop" md="6">
          <a href="https://github.com/AndrewDrury/sli.ai" target="_blank">
            <img src="@/assets/ProjectPics/sliai.gif"/>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";

</style>
