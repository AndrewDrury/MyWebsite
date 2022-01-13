<template>
  <div class="project" id="TableStory" name="TableStory">
    <b-container fluid>
      <b-row class="projectRow">
        <b-col class="project-pic mobile hidden" lg="4">
          <a href="https://github.com/AndrewDrury/TableStory" target="_blank">
            <img
              srcset="
                @/assets/ProjectPics/TableStory.jpg,
                @/assets/ProjectPics/TableStory@2x.jpg 2x
              "
            />
          </a>
        </b-col>
        <b-col lg="8">
          <b-row class="top-content">
            <b-col class="title hidden" md="12">
              <a
                href="https://github.com/AndrewDrury/TableStory"
                target="_blank"
              >
                <h1>Table Story</h1>
              </a>
            </b-col>
            <b-col class="tech hidden"
              ><h3><i class="fa fa-tag"></i>&nbsp;Vue.js, Tensorflow</h3></b-col
            >
            <hr />
          </b-row>
          <b-row class="bot-content">
            <b-col class="award hidden" md="12" lg="6">
              <h4><i class="fa fa-trophy"></i>&nbsp;Best UI/UX Hack</h4>
            </b-col>
            <b-col class="hackathon hidden" md="12" lg="6"
              ><h4>
                <i class="fa fa-location-arrow"></i>&nbsp;Hack the Valley lll
              </h4></b-col
            >
          </b-row>
          <b-row>
            <b-col class="details hidden">
              <p>
                Table Story is a social community of foodies sharing their
                favourite dishes. Restaurant and food recommendations are
                generated based off the food recognized in pictures using a
                Tensorflow model.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="view-more hidden">
              <a
                href="https://github.com/AndrewDrury/TableStory"
                target="_blank"
              >
                <p><i class="fa fa-github"></i>View More -></p>
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="project-pic desktop hidden" md="4">
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
