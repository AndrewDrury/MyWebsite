<template>
  <div class="project" id="FlySafe" name="FlySafe">
    <b-container fluid>
      <b-row class="projectRow hidden">
        <b-col class="project-pic" lg="4">
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
        <b-col lg="8">
          <b-row class="top-content">
            <b-col class="title hidden" md="12">
              <a
                href="https://github.com/AndrewDrury/FlySafe-BlockchainEndpoint"
                target="_blank"
              >
                <h1>FlySafe</h1>
              </a>
            </b-col>
            <b-col class="tech hidden"
              ><h3><i class="fa fa-tag"></i>&nbsp;Azure, Blockchain</h3></b-col
            >
            <hr />
          </b-row>
          <b-row class="bot-content">
            <b-col class="award hidden" md="12" lg="6">
              <h4><i class="fa fa-map-marker"></i>&nbsp;Waterloo, ON</h4>
            </b-col>
            <b-col class="hackathon hidden" md="12" lg="6"
              ><h4>
                <i class="fa fa-location-arrow"></i>&nbsp;Hack the North, 2019
              </h4></b-col
            >
          </b-row>
          <b-row>
            <b-col class="details hidden">
              <p>
                FlySafe scans and secures important data such as IDs, payment
                cards and plane tickets with Blockmason LINK, a blockchain
                microservice. All cards and documents can be accessed with a
                facial recognition scan using Microsoft Azure.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="view-more hidden">
              <a
                href="https://github.com/AndrewDrury/FlySafe-BlockchainEndpoint"
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
