<template>
  <div class="project" id="ePaid" name="ePaid">
    <b-container fluid>
      <b-row class="projectRow">
        <b-col class="project-pic" md="4">
          <a href="https://tdlab.io/project/ePaid" target="_blank">
            <img
              srcset="
                @/assets/ProjectPics/ePaid.jpg,
                @/assets/ProjectPics/ePaid@2x.jpg 2x
              "
            />
          </a>
        </b-col>
        <b-col m="8">
          <b-row class="top-content">
            <b-col class="title" md="12">
              <a href="https://tdlab.io/project/ePaid" target="_blank">
                <h1>ePaid</h1>
              </a>
            </b-col>
            <b-col class="tech"><h3>Interact e-Transfer API</h3></b-col>
            <hr />
          </b-row>
          <b-row class="bot-content">
            <b-col class="award" md="12" lg="6">
              <h4><i class="fa fa-trophy"></i>&nbsp;&nbsp;1st Place</h4>
            </b-col>
            <b-col class="hackathon" md="12" lg="6"
              ><h4>
                <i class="fa fa-location-arrow"></i>&nbsp;&nbsp;TD Midterm Hack,
                2019
              </h4></b-col
            >
          </b-row>
          <b-row>
            <b-col class="details">
              <p>
                ePaid is a freelance invoicing solution that tracks and
                automates payments using Interact's e-Transfer API.
                <!-- I pitched the prototype to the VPs of technology at Toronto-Dominion Bank. -->
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="view-more">
              <a href="https://tdlab.io/project/ePaid" target="_blank">
                <p>
                  <i class="fa fa-external-link"></i>&nbsp;&nbsp;View More ->
                </p>
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
