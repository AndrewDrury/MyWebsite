<template>
  <div class="home" id="home" name="home">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col>
          <b-row class="top-space">
            <b-col class="container" align="center">
              <!-- https://vue-particles.netlify.com/ to customize -->
              <vue-particles
                color="#31e0ff"
                :particleOpacity="1"
                :particlesNumber="150"
                shapeType="circle"
                :particleSize="4"
                linesColor="#FFFFFF"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="120"
                :moveSpeed="6"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="repulse"
              >
              </vue-particles>

              <div class="intro">
                <!-- <div class="deconstructed" style='margin-top: 14vh'>
                  Hi!
                  <div>Hi!</div>
                  <div>Hi!</div>
                  <div>Hi!</div>
                  <div>Hi!</div>
                </div> -->
                <div class="deconstructed">
                  I am Andrew Drury.
                  <div>I am Andrew Drury.</div>
                  <div>I am Andrew Drury.</div>
                  <div>I am Andrew Drury.</div>
                  <div>I am Andrew Drury.</div>
                </div>
                <h5 style="margin-top:60px">
                  I am a Full Stack Developer.
                  <!-- <div class="slidingHorizontal">
                      <span>&nbsp;creative thinker.</span>
                      <span>n engineering student.</span>
                      <span>&nbsp;passionate creator.</span>
                      <span>n excited innovator.</span>
                  </div>
                  <div class="lastSlide">
                      <span>&nbsp;Full Stack Developer.</span>
                  </div> -->
                </h5>
                <div class="view-more">
                  <!-- <router-link :to="{ name: 'home', hash: '#experiences' }"><span></span><h6>View My Experiences</h6></router-link> -->
                  <router-link :to="{ name: 'home', hash: '#experiences' }"
                    ><span></span
                  ></router-link>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";
.home {
  .top-space {
    // margin-top: 80px;
    // @media (max-width: $screen-sm) {
    //   margin-top: 80px;
    // }
    margin-bottom: 30px;
  }
  .container {
    position: relative;
    padding-left: 0px;
    padding-right: 0px;

    .particles-js-canvas-el {
      border-bottom: 1px solid $primary;
    }
  }
  .intro {
    margin-top: 10vh;
    width: 100vw;
    top: 0px;
    position: absolute;
    text-align: center;
    pointer-events: none;
  }
  .view-more {
    color: #fff;
    margin-top: 70px;
    pointer-events: auto;
  }

  h5 {
    font-size: 30px !important;

    span {
      font-size: 30px !important;
    }
  }
}

// DECONSTRUCTED TEXT
.deconstructed {
  position: relative;
  margin-top: 180px;
  color: transparent;
  font-size: 54px;
  letter-spacing: -0.02em;
  line-height: 1.3em;
}

.deconstructed > div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  pointer-events: none;
  font-size: 54px;
  padding-top: 20px;
  // text-shadow: 3px 3px 2px $blue;
}

.deconstructed > div:nth-child(1) {
  -webkit-mask-image: linear-gradient(black 25%, transparent 25%);
  mask-image: linear-gradient(black 25%, transparent 25%);
  animation: deconstructed1 5s 1;
}

.deconstructed > div:nth-child(2) {
  -webkit-mask-image: linear-gradient(
    transparent 25%,
    black 25%,
    black 50%,
    transparent 50%
  );
  mask-image: linear-gradient(
    transparent 25%,
    black 25%,
    black 50%,
    transparent 50%
  );
  animation: deconstructed2 5s 1;
}

.deconstructed > div:nth-child(3) {
  -webkit-mask-image: linear-gradient(
    transparent 50%,
    black 50%,
    black 75%,
    transparent 75%
  );
  mask-image: linear-gradient(
    transparent 50%,
    black 50%,
    black 75%,
    transparent 75%
  );
  animation: deconstructed3 5s 1;
}

.deconstructed > div:nth-child(4) {
  -webkit-mask-image: linear-gradient(transparent 75%, black 75%);
  mask-image: linear-gradient(transparent 75%, black 75%);
  animation: deconstructed4 5s 1;
}

@keyframes deconstructed1 {
  0% {
    transform: translateX(100%);
  }
  32% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes deconstructed2 {
  0% {
    transform: translateX(100%);
  }
  28% {
    transform: translateX(0.5%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes deconstructed3 {
  0% {
    transform: translateX(100%);
  }
  24% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes deconstructed4 {
  0% {
    transform: translateX(100%);
  }
  10% {
    transform: translateX(0%);
  }
  90% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-135%);
  }
}

// VIEW EXPERIENCES
.view-more a {
  position: relative;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.3s;

  span {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 46px;
    height: 46px;
    margin-left: -23px;
    border: 1px solid $primary;
    border-radius: 100%;
    box-sizing: border-box;
    -webkit-animation: sdb03 4s infinite;
    animation: sdb03 4s infinite;
    background-color: rgba(255, 255, 255, 0.1);
  }
  span::after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: "";
    width: 16px;
    height: 16px;
    margin: -12px 0 0 -8px;
    border-left: 1px solid $primary;
    border-bottom: 1px solid $primary;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    box-sizing: border-box;
  }
  span::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: "";
    width: 44px;
    height: 44px;
    // box-shadow: 0 0 0 0 rgba(255,255,255,.1);
    border-radius: 100%;
    opacity: 0;
    // -webkit-animation: sdb03 3s infinite;
    // animation: sdb03 3s infinite;
    box-sizing: border-box;
  }
}
.view-more a:hover {
  opacity: 0.5;
}
@-webkit-keyframes sdb03 {
  0% {
    box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.05);
  }
  23% {
    box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.1);
  }
  100% {
    box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.05);
  }
}
@keyframes sdb03 {
  0% {
    box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.05);
  }
  23% {
    box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.1);
  }
  100% {
    box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.05);
  }
}

// RGB EFFECT
h6 {
  animation: text-shadow 3s ease-in-out infinite;
  animation-delay: 4s;
  font-size: 5em;
  font-weight: 900;
  line-height: 1;
}

h6:hover {
  animation-play-state: paused;
}

a:hover {
  text-decoration: none;
}

@keyframes text-shadow {
  0% {
    transform: translateY(0);
    text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
  }

  10% {
    transform: translateY(-1em);
    text-shadow: 0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd, 0 -0.125em 0 #fb203b,
      0 -0.25em 0 #fefc4b;
  }

  20% {
    transform: translateY(0.5em);
    text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd,
      0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b;
  }

  30% {
    transform: translateY(-0.25em);
    text-shadow: 0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd,
      0 -0.03125em 0 #fb203b, 0 -0.0625em 0 #fefc4b;
  }

  40% {
    transform: translateY(0);
    text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
  }
}

/*Horizontal Sliding*/
.slidingHorizontal {
  display: inline;
}

.slidingHorizontal span {
  animation: rightToLeft 4.88s linear 0s;
  -ms-animation: rightToLeft 4.88s linear 0s;
  -webkit-animation: rightToLeft 4.88s linear 0s;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  padding-top: 5px;
  height: 1em;
  index: 99 !important;
}
.slidingHorizontal span:hover {
  animation-play-state: running;
}

.slidingHorizontal span:nth-child(2) {
  animation-delay: 1.22s;
  -ms-animation-delay: 1.22s;
  -webkit-animation-delay: 1.22s;
}
.slidingHorizontal span:nth-child(3) {
  animation-delay: 2.44s;
  -ms-animation-delay: 2.44s;
  -webkit-animation-delay: 2.44s;
}
.slidingHorizontal span:nth-child(4) {
  animation-delay: 3.66s;
  -ms-animation-delay: 3.66s;
  -webkit-animation-delay: 3.66s;
}

/*rightToLeft Animation*/
@-moz-keyframes rightToLeft {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -moz-transform: translateX(50px);
  }
  10% {
    opacity: 1;
    -moz-transform: translateX(0px);
  }
  25% {
    opacity: 1;
    -moz-transform: translateX(0px);
  }
  30% {
    opacity: 0;
    -moz-transform: translateX(-50px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes rightToLeft {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -webkit-transform: translateX(50px);
  }
  10% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  25% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  30% {
    opacity: 0;
    -webkit-transform: translateX(-50px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes rightToLeft {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -ms-transform: translateX(50px);
  }
  10% {
    opacity: 1;
    -ms-transform: translateX(0px);
  }
  25% {
    opacity: 1;
    -ms-transform: translateX(0px);
  }
  30% {
    opacity: 0;
    -ms-transform: translateX(-50px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

// Last slide in text (stays on screen)
.lastSlide {
  display: inline;
}
.lastSlide span {
  animation: rightToLeftLast 5s linear 0s;
  -ms-animation: rightToLeftLast 5s linear 0s;
  -webkit-animation: rightToLeftLast 5s linear 0s;
  opacity: 1;
  overflow: hidden;
  position: absolute;
  padding-top: 5px;
  height: 1em;
  index: 99 !important;
}

.lastSlide span:hover {
  animation-play-state: running;
}

/*rightToLeftLast Animation*/
@-moz-keyframes rightToLeftLast {
  0% {
    opacity: 0;
  }
  96% {
    opacity: 0;
  }
  98% {
    opacity: 0;
    -moz-transform: translateX(50px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0px);
  }
}
@-webkit-keyframes rightToLeftLast {
  0% {
    opacity: 0;
  }
  96% {
    opacity: 0;
  }
  98% {
    opacity: 0;
    -moz-transform: translateX(50px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0px);
  }
}
@-ms-keyframes rightToLeftLast {
  0% {
    opacity: 0;
  }
  96% {
    opacity: 0;
  }
  98% {
    opacity: 0;
    -moz-transform: translateX(50px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0px);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import {ParallaxContainer, ParallaxElement} from "vue-mouse-parallax";
// const ParallaxContainer = require("vue-mouse-parallax");
// const ParallaxElement = require("vue-mouse-parallax");

// Vue.component("parallax-container", ParallaxContainer);
// Vue.component("parallax-element", ParallaxElement);

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
