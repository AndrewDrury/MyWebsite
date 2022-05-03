<template>
  <div class="project" id="MLFakeNews" name="MLFakeNews">
    <b-container fluid>
      <b-row class="projectRow">
        <b-col class="project-pic mobile hidden" lg="4">
          <a href="https://github.com/AndrewDrury/FakeNewsML" target="_blank">
            <img
              srcset="
                @/assets/ProjectPics/truthWordCloud.png
              "
            />
          </a>
        </b-col>
        <b-col lg="8">
          <b-row class="top-content">
            <b-col class="title hidden" md="12">
              <a
                href="https://github.com/AndrewDrury/FakeNewsML"
                target="_blank"
              >
                <h1>Fake News Classifier</h1>
              </a>
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
                <i class="fa fa-tag"></i>&nbsp;MSCI 446 Term Project
              </h4></b-col
            >
          </b-row>
          <b-row>
            <b-col class="details hidden">
              <p>
                A Fake News ML classifier was created using the Naïves Bayes and Logistic Regression methods.
                The classifier was trained using 12,386 fact-checked statements made by political figures provided by
                <a
                  href="https://www.politifact.com/"
                  target="_blank"
                  style="color: black"
                  >PolitiFact.com</a
                >. Unsupervised learning was performed using Apriori's algorithm and Association Rule Mining to find trends in statements such as words or individuals associated with varying degrees of truthfulness.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="view-more hidden">
              <a
                href="https://github.com/AndrewDrury/FakeNewsML"
                target="_blank"
              >
                <p><i class="fa fa-github"></i>View More -></p>
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="project-pic desktop hidden" md="4">
          <a href="https://github.com/AndrewDrury/FakeNewsML" target="_blank">
            <img
              srcset="
                @/assets/ProjectPics/truthWordCloud.png
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
