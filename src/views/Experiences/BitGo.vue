<template>
  <div class="experience hidden" id="BitGo" name="BitGo">
    <a class="experience-hover">
      <b-container fluid style="padding-right:0px;padding-left:0px">
        <div class="margin-wrap">
          <b-row class="experienceRow">
            <a
              class="company-link"
              href="https://www.bitgo.com/"
              target="_blank"
            >
              <b-col class="logo">
                <img src="@/assets/ExperiencePics/BitGoLogo.png" />
              </b-col>
              <b-col class="company-info">
                <h3>BitGo</h3>
                <div style="white-space:nowrap">
                  <h4>Institutional-Grade<br />Cryptocurrency</h4>
                </div>
              </b-col>
            </a>
            <b-col class="position-info">
              <b-row>
                <b-col class="position">Software Engineering Intern</b-col>
              </b-row>
              <b-row>
                <b-col class="team"
                  ><i class="fa fa-users" aria-hidden="true"></i>Blockchain Team
                  &amp; DeFi Subteam</b-col
                >
              </b-row>
              <b-row>
                <b-col class="location"
                  ><i class="fa fa-map-marker" aria-hidden="true"></i>Remote -
                  Palo Alto, CA</b-col
                >
              </b-row>
              <b-row>
                <b-col class="time"
                  ><i class="fa fa-calendar" aria-hidden="true"></i>May -> Aug
                  2021</b-col
                >
              </b-row>
              <b-row>
                <b-col>
                  <p>
                    I architected and lead the DeFi Integration project. I also
                    created scripts to assemble relevant audit information and
                    conduct audit transactions for WBTC (Wrapped Bitcoin). I
                    reallocated $6 billion CAD in crypto capital from UTXO
                    (unspent transaction outputs) across 34 custodial wallets.
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </a>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";
</style>

<script lang="ts">
export default {
  name: "BitGo",
  data() {
    return {};
  }
};
</script>
