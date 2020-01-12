<template>
  <div class="project" id="grow" name="grow">
    <b-container fluid>
      <b-row class="projectRow">
        <b-col class="project-pic" md="4">
          <a href="https://github.com/AndrewDrury/grow" target="_blank">
            <img
              srcset="
                @/assets/ProjectPics/grow.jpg,
                @/assets/ProjectPics/grow@2x.jpg 2x
              "
            />
          </a>
        </b-col>
        <b-col m="8">
          <b-row class="top-content">
            <b-col class="title" md="12">
              <a href="https://github.com/AndrewDrury/grow" target="_blank">
                <h1>grow</h1>
              </a>
            </b-col>
            <b-col class="tech"><h3>ARKit, Core ML</h3></b-col>
            <hr />
          </b-row>
          <b-row class="bot-content">
            <b-col class="award" md="12" lg="6">
              <h4>1st Place</h4>
            </b-col>
            <b-col class="hackathon" md="12" lg="6"
              ><h4>Hack Lassonde, 2019</h4></b-col
            >
          </b-row>
          <b-row>
            <b-col class="details">
              <p>
                Grow recognizes company logos using a custom Core ML model and
                displays their eco-friendliness in AR with Apple’s ARKit.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="view-more">
              <a href="https://github.com/AndrewDrury/grow" target="_blank">
                <p><i class="fa fa-github"></i>&nbsp;View More -></p>
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
