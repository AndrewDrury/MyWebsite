<template>
  <div class="project" id="SearchEngine" name="SearchEngine">
    <b-container fluid>
      <b-row class="projectRow">
        <b-col class="project-pic mobile hidden" lg="4">
          <img src="@/assets/ProjectPics/SearchEngine.png" />
        </b-col>
        <b-col lg="8">
          <b-row class="top-content">
            <b-col class="title hidden" md="12">
              <h1>Search Engine</h1>
            </b-col>
            <b-col class="tech hidden"
              ><h3><i class="fa fa-tag"></i>&nbsp;Python</h3></b-col
            >
            <hr />
          </b-row>
          <b-row class="bot-content">
            <b-col class="award hidden" md="12" lg="6">
              <h4><i class="fa fa-map-marker"></i>&nbsp;University of Waterloo, ON</h4>
            </b-col>
            <b-col class="hackathon hidden" md="12" lg="6"
              ><h4>
                <i class="fa fa-tag"></i>&nbsp;MSCI 541 Term Project
              </h4></b-col
            >
          </b-row>
          <b-row>
            <b-col class="details hidden">
              <p>
                The search engine tokenizes, indexes, and stems 132,652 articles
                in the LATimes collection for rapid query-biased article
                retrieval.
              </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="project-pic desktop hidden" md="4">
          <img src="@/assets/ProjectPics/SearchEngine.png" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";
</style>
