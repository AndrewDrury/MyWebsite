<template>
  <div class="experience" id="TDLab" name="TDLab">
    <b-container fluid>
      <b-row class="experienceRow">
        <b-col class="logo mobile1" align="center">
          <a href="https://tdlab.io/" target="_blank">
            <img src="@/assets/ExperiencePics/TDLabLogo.jpg" />
          </a>
        </b-col>

        <b-col lg="6" align="left">
          <a href="https://tdlab.io/" target="_blank">
            <img
              class="square-pic"
              src="@/assets/ExperiencePics/TDLabPic.png"
              v-parallax="0.2"
            />
          </a>
        </b-col>

        <b-col class="content-right" lg="6" align="left">
          <b-row>
            <b-col class="logo desktop1" align="center">
              <a href="https://tdlab.io/" target="_blank">
                <img src="@/assets/ExperiencePics/TDLabLogo.jpg" />
              </a>
            </b-col>
          </b-row>
          <b-row>
            <b-col col="6">
              <a href="https://tdlab.io/" target="_blank">
                <h3>TD Lab</h3>
              </a>
            </b-col>
            <b-col col="6" align="right">
              <h3>Kitchener, ON</h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="position">
              <h4>Software Developer</h4>
            </b-col>
            <b-col class="time" align="right">
              <h4>Jan – Apr 2019</h4>
            </b-col>
          </b-row>
          <p class="description">
            Lorem ipsum dolor amet readymade direct trade biodiesel vinyl
            try-hard hell of pok pok, hexagon shaman jianbing franzen. Literally
            art party hot chicken try-hard 8-bit, bicycle rights kombucha seitan
            cornhole pour-over.
          </p>
          <!-- <h6 class="skill-title">Stuff</h6>
          <b-row align="left">
            <b-col>
              <div class="skill">Stuff</div>
              <div class="skill">Stuff</div>
              <div class="skill">Stuff</div>
              <div class="skill">Stuff</div>
            </b-col>
          </b-row> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";
</style>
