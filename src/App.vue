<template>
  <div id="app" class="app">
    <!-- Scroll progress bar -->
    <VueScrollProgress></VueScrollProgress>

    <div class="mobile1 navbar-background"></div>

    <!-- Navbar -->
    <b-navbar toggleable="md" class="fixed-top navbar-dark" id="navbar">
      <div class="mobile">
        <b-navbar-brand
          class="nav-link draw meet"
          :to="{ name: 'home', hash: '' }"
        >
          <img src="@/assets/logo.png" style="width: 50px" />
        </b-navbar-brand>
      </div>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto top-nav">
          <b-nav-item class="tab" :to="{ name: 'home', hash: '#experiences' }"
            >Experiences</b-nav-item
          >
          <b-nav-item class="tab" :to="{ name: 'home', hash: '#projects' }"
            >Projects</b-nav-item
          >
          <b-nav-item
            class="tab desktop-router draw meet"
            :to="{ name: 'home', hash: '' }"
            ><img src="@/assets/logo.png" style="width: 50px"
          /></b-nav-item>
          <b-nav-item class="tab" :to="{ name: 'home', hash: '#about' }"
            >About</b-nav-item
          >
          <b-nav-item
            class="tab"
            href="https://www.dropbox.com/s/h76sf5be2366ikb/Resume_AndrewDrury.pdf?dl=0"
            target="_blank"
            >Resume</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div id="main">
      <!-- Dynamic Content -->
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

    <div>
      <Experiences />
      <Projects />
      <About />
      <!-- <div class="jarallax">
        <img
          class="jarallax-img"
          src="@/assets/ExperiencePics/TDLabPic.png"
        />
      </div> -->
    </div>

    <div class="desktop1" id="bottom-links">
      <ul class="list-unstyled social text-center">
        <li>
          <a href="https://www.dropbox.com/s/h76sf5be2366ikb/Resume_AndrewDrury.pdf?dl=0" target="_blank">
            <i class="fa fa-file-pdf-o"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andrew-drury" target="_blank">
            <i class="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="mailto:andrew.drury@uwaterloo.ca" target="_blank">
            <i class="fa fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/AndrewDrury" target="_blank">
            <i class="fa fa-github"></i>
          </a>
        </li>
      </ul>
      <div class="vertical-line"></div>
    </div>
    <!-- <div class="desktop1" id="bottom-right-line">
      <a href="mailto:andrew.drury@uwaterloo.ca" target="_blank" align='left'>
        <p class='rotate'>andrew.drury@uwaterloo.ca</p>
      </a>
      <div class="vertical-line"></div>
    </div> -->

    <!-- Footer -->
    <section id="footer">
      <div class="container">
        <b-row class="text-center" style="margin-bottom:24px">
          <b-col>
            <h3>Let's Get In Touch!</h3>
          </b-col>
        </b-row>
        <b-row style="margin-bottom: 10px">
          <b-col class="col-xs-12 col-sm-12 col-md-12">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/andrew-drury"
                  target="_blank"
                >
                  <i class="fa fa-linkedin"></i>
                  <!-- <img
                    srcset="
                    @/assets/homepage/linkedin-logo.png,
                    @/assets/homepage/linkedin-logo@2x.png 2x,
                    @/assets/homepage/linkedin-logo@3x.png 3x
                    "
                    style="width:1em"
                  /> -->
                </a>
              </li>
              <li class="list-inline-item">
                <a href="mailto:andrew.drury@uwaterloo.ca" target="_blank">
                  <i class="fa fa-envelope"></i>
                  <!-- <img
                    srcset="
                    @/assets/homepage/envelope.png,
                    @/assets/homepage/envelope@2x.png 2x,
                    @/assets/homepage/envelope@3x.png 3x
                    "
                    style="width:1.25em"
                  /> -->
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/AndrewDrury" target="_blank">
                  <i class="fa fa-github"></i>
                  <!-- <img
                    srcset="
                    @/assets/homepage/medium/Shape.png,
                    @/assets/homepage/medium/Shape@2x.png 2x,
                    @/assets/homepage/medium/Shape@3x.png 3x
                    "
                    style="width:1.25em"
                  /> -->
                </a>
              </li>
            </ul>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="endtag">
              Designed &amp; Built by Andrew Drury
            </p>
          </b-col>
        </b-row>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
// @import url("https://use.fontawesome.com/releases/v5.7.2/css/all.css");
@import "/assets/variables.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $grey;
  overflow-x: hidden;
}

#progress-container-el {
  /* background */
  background-color: transparent !important;
  top: 0px !important;

  // width: 68% !important;

  @media (max-width: $screen-md) {
    // width: 41% !important;
  }
}
#progress-el {
  /* progress bar */
  background-color: $primary !important;
}

.navbar-background {
  width: 100%;
  top: 0px;
  position: fixed;
  background-color: $grey;
  left: 0px;
  height: 65.653px;
  z-index: 1;
}

.btn {
  outline: none !important;
}
.btn.btn-primary {
  background-color: $primary;
  border-color: $primary;
  outline: none;
  &:hover {
    background-color: darken($primary, 10%);
    border-color: darken($primary, 10%);
  }
  &:active,
  &:focus {
    background-color: lighten($primary, 5%);
    border-color: lighten($primary, 5%);
  }
}
.btn.btn-default {
  &:hover {
    background-color: darken($primary, 10%);
    border-color: darken($primary, 10%);
    color: #fff;
  }
  &:active,
  &:focus {
    background-color: lighten($primary, 5%);
    border-color: lighten($primary, 5%);
    color: #fff;
  }
}

#bottom-links {
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  width: 9.86%;
  text-align: center;
  margin-bottom: -5px;
  animation: popup 5s;

  .fa-github {
    font-size: 21px !important;
  }

  ul {
    margin-bottom: 10px;
  }
  ul.social li a i {
    margin-top: 8px;
    font-size: 18px;
    -webkit-transition: 0.5s all ease;
    -moz-transition: 0.5s all ease;
    transition: 0.5s all ease;
    color: white;
  }
  ul.social li a img {
    margin-top: 8px;
    font-size: 18px;
    -webkit-transition: 0.5s all ease;
    -moz-transition: 0.5s all ease;
    transition: 0.5s all ease;
    color: white;
  }

  ul.social li:hover a i {
    font-size: 24px !important;
    margin-top: 5px;
    color: $primary;
  }
  ul.social li:hover a img {
    font-size: 24px !important;
    margin-top: 5px;
    color: $primary;
  }

  .vertical-line {
    width: 1px;
    height: 50px !important;
    background-color: $primary;
    height: 100%;
    display: inline-block;
  }
}

@keyframes popup {
  0% {
    transform: translateY(100%);
  }
  14% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0%);
  }
}

#bottom-right-line {
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 1;
  width: 9.86%;
  text-align: center;
  margin-bottom: -5px;

  .vertical-line {
    width: 1px;
    height: 50px !important;
    background-color: $primary;
    height: 100%;
    display: inline-block;
  }

  p {
    position: relative;
    bottom: 60px;
    right: 0px;
    margin-bottom: 0px;
    font-size: 16px !important;

    -webkit-transition: 0.5s all ease;
    -moz-transition: 0.5s all ease;
    transition: 0.5s all ease;
  }

  a:hover {
    p {
      color: $primary;
      font-size: 16.5px !important;
    }
  }
}

// Navbar
#navbar {
  background-color: $grey-opac;

  @media (min-width: $screen-md) {
    background-color: $grey;
    height: 80px;
  }

  /* change the link color */
  .navbar-nav .nav-link {
    color: white;
    // text-decoration: underline overline $primary;
    width: 140px;
  }
  /* change the color of active or hovered links */
  .nav-link:hover {
    // color: darken($primary, 17%);
    color: $primary;
    transform: translateY(-2px);
    -webkit-transform: translateY(-2px);

    img {
      transform: translateY(-2px);
      -webkit-transform: translateY(-2px);
    }
  }
  .nav-link:active {
    color: $primary;
  }

  .nav-link {
    -webkit-transition: 0.5s all ease;
    -moz-transition: 0.5s all ease;
    transition: 0.5s all ease;

    img {
      -webkit-transition: 0.5s all ease;
      -moz-transition: 0.5s all ease;
      transition: 0.5s all ease;
    }

    @media (max-width: $screen-sm) {
      margin: 0 auto;
    }
  }

  .nav-item.tab {
    @media (max-width: $screen-sm) {
      float: none;
      margin: 0 auto;
      display: block;
      text-align: center;
    }
  }

  .navbar-nav {
    float: none;
    margin: 0 auto;
    display: block;
    text-align: center;
  }

  .navbar-nav > li {
    display: inline-block;
    float: none;
  }

  .navbar-collapse {
    text-align: center;
  }
}

.navbar-dark .navbar-toggler {
  color: white !important;
  border-color: white !important;
}

// Footer
section {
  padding: 30px 0;
}
#footer {
  background: $dark-grey !important;
  z-index: 99;
  position: absolute;
  width: 100%;
}
#footer ul.social li a i {
  margin-right: 15px;
  margin-left: 15px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
  color: $primary;
}
#footer ul.social li:hover a i {
  font-size: 30px;
  margin-top: -10px;
  color: white;
}
#footer ul.social li a img {
  margin-right: 15px;
  margin-left: 15px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
  color: $primary;
}
#footer ul.social li:hover a img {
  font-size: 30px;
  margin-top: -10px;
  color: white;
}
#footer h3 {
  font-size: 24px;
  font-weight: 700;
}
#footer .endtag {
  margin-bottom: 0px;
}
// #footer .copyright {
//   color: $primary;
//   font-size: 22px;
// }

.desktop-router a {
  display: inline;
  @media (max-width: $screen-sm) {
    display: none;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Experiences from "./views/Experiences.vue";
import Projects from "./views/Projects.vue";
import About from "./views/About.vue";

// @ is an alias to /src

// add scr: src="jarallax/dist/jarallax.min.js"
// import { jarallax, jarallaxElement, jarallaxVideo } from "jarallax";
// jarallaxVideo();
// jarallaxElement();

// jarallax(document.querySelectorAll(".jarallax"), {
//   speed: 0.2
// });

export default Vue.extend({
  name: "home",
  components: {
    Experiences,
    Projects,
    About
    // parallax: require("vue-parallax")
  }
});
</script>
