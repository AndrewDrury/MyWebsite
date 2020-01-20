<template>
  <div class="project" id="FlySafe" name="FlySafe">
    <b-container fluid>
      <b-row class="projectRow">
        <b-col class="project-pic" md="4">
          <a
            href="https://github.com/AndrewDrury/FlySafe-BlockchainEndpoint"
            target="_blank"
          >
            <img
              srcset="
                @/assets/ProjectPics/FlySafe.jpg,
                @/assets/ProjectPics/FlySafe@2x.jpg 2x
              "
            />
          </a>
        </b-col>
        <b-col m="8">
          <b-row class="top-content">
            <b-col class="title" md="12">
              <a
                href="https://github.com/AndrewDrury/FlySafe-BlockchainEndpoint"
                target="_blank"
              >
                <h1>FlySafe</h1>
              </a>
            </b-col>
            <b-col class="tech"><h3>Azure, Blockchain</h3></b-col>
            <hr />
          </b-row>
          <b-row class="bot-content">
            <b-col class="award" md="12" lg="6">
              <!-- <h4>1st Place</h4> -->
            </b-col>
            <b-col class="hackathon" md="12" lg="6"
              ><h4>
                <i class="fa fa-location-arrow"></i>&nbsp;&nbsp;Hack the North,
                2019
              </h4></b-col
            >
          </b-row>
          <b-row>
            <b-col class="details">
              <p>
                FlySafe scans and secures important data such as IDs, cards
                andtickets with Blockmason LINK, a blockchain microservice. Data
                is accessible via Face ID using Microsoft Azure.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="view-more">
              <a
                href="https://github.com/AndrewDrury/FlySafe-BlockchainEndpoint"
                target="_blank"
              >
                <p><i class="fa fa-github"></i>&nbsp;&nbsp;View More -></p>
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
