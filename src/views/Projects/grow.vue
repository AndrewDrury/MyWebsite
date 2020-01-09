<template>
  <div class="project" id="grow" name="grow">
    <b-container fluid>
      <b-row class="projectRow">
        <b-col class='project-pic' md=4>
          <a href="https://github.com/AndrewDrury/grow" target="_blank">
            <img src="@/assets/iPhone.png" />
          </a>
        </b-col>
        <b-col m=8>
          <b-row class="top-content">
            <b-col class='title'>
              <a href="https://github.com/AndrewDrury/grow" target="_blank">
                <h1>grow</h1>
              </a>
            </b-col>
            <b-col class='tech'><h3>ARKit, Core ML</h3></b-col>
            <hr>
          </b-row>
          <b-row class='bot-content'>
            <b-col class='award'>
              <h4>1st Place</h4>
            </b-col>
            <b-col class='hackathon'><h4>Hack Lassonde, 2019</h4></b-col>
          </b-row>
          <b-row>
            <b-col class='details'>
              <p>Grow recognizes company logos using a custom Core ML model and displays their eco-friendliness in AR with Apple’s ARKit.</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class='view-more'>
              <a href="https://github.com/AndrewDrury/grow" target="_blank">
                <p>View More -></p>
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
