<template>
  <div class="project" id="TableStory" name="TableStory">
    <b-container fluid>
      <b-row class="projectRow">
        <b-col class="project-pic mobile" md="4">
          <a href="https://github.com/AndrewDrury/TableStory" target="_blank">
            <img
              srcset="
                @/assets/ProjectPics/TableStory.jpg,
                @/assets/ProjectPics/TableStory@2x.jpg 2x
              "
            />
          </a>
        </b-col>
        <b-col md="8">
          <b-row class="top-content">
            <b-col class="title" md="12">
              <a
                href="https://github.com/AndrewDrury/TableStory"
                target="_blank"
              >
                <h1>Table Story</h1>
              </a>
            </b-col>
            <b-col class="tech"><h3>Vue.js, Tensorflow</h3></b-col>
            <hr />
          </b-row>
          <b-row class="bot-content">
            <b-col class="award" md="12" lg="6">
              <h4><i class="fa fa-trophy"></i>&nbsp;&nbsp;Best UI/UX Hack</h4>
            </b-col>
            <b-col class="hackathon" md="12" lg="6"
              ><h4><i class="fa fa-location-arrow"></i>&nbsp;&nbsp;Hack the Valley lll, 2019</h4></b-col
            >
          </b-row>
          <b-row>
            <b-col class="details">
              <p>
                A web app that creates a social community of food enthusiasts. A
                Tensorflow model was trained to recognize food items in a
                picture in order to create a user’s food identity.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="view-more">
              <a
                href="https://github.com/AndrewDrury/TableStory"
                target="_blank"
              >
                <p><i class="fa fa-github"></i>&nbsp;&nbsp;View More -></p>
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="project-pic desktop" md="4">
          <a href="https://github.com/AndrewDrury/TableStory" target="_blank">
            <img
              srcset="
                @/assets/ProjectPics/TableStory.jpg,
                @/assets/ProjectPics/TableStory@2x.jpg 2x
              "
            />
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";
</style>
