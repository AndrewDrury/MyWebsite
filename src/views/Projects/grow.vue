<template>
  <div class="project" id="grow" name="grow">
    <b-container fluid>
      <b-row class="projectRow">
        <b-col class="project-pic hidden" lg="4">
          <a href="https://github.com/AndrewDrury/grow" target="_blank">
            <img
              srcset="
                @/assets/ProjectPics/grow.jpg,
                @/assets/ProjectPics/grow@2x.jpg 2x
              "
            />
          </a>
        </b-col>
        <b-col lg="8">
          <b-row class="top-content">
            <b-col class="title hidden" md="12">
              <a href="https://github.com/AndrewDrury/grow" target="_blank">
                <h1>grow</h1>
              </a>
            </b-col>
            <b-col class="tech hidden"
              ><h3><i class="fa fa-tag"></i>&nbsp;ARKit, Core ML</h3></b-col
            >
            <hr />
          </b-row>
          <b-row class="bot-content">
            <b-col class="award hidden" md="12" lg="6">
              <h4><i class="fa fa-trophy"></i>&nbsp;1st Place</h4>
            </b-col>
            <b-col class="hackathon hidden" md="12" lg="6"
              ><h4>
                <i class="fa fa-location-arrow"></i>&nbsp;Hack Lassonde, 2019
              </h4></b-col
            >
          </b-row>
          <b-row>
            <b-col class="details hidden">
              <p>
                Grow displays the eco-friendliness of brands in augmented
                reality. It can recognise brand logos using a Core ML model.
                Users can improve their environmental footprint by discovering
                more sustainable products.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="view-more hidden">
              <a href="https://github.com/AndrewDrury/grow" target="_blank">
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
