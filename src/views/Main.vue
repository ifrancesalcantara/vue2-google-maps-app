<template>
  <div class="wrapper">
    <GmapAutocomplete  @place_changed="goToPlace" />
    <GmapMap
      :center="currentPlace || initialCoords"
      :zoom="15"
      style="width: -webkit-fill-available; height: -webkit-fill-available"
      :options="{
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false
      }"
    >    
    </GmapMap>
  </div>
</template>

<script>
export default {
  data: () => ({
    initialCoords: { lat: 0, lng: 0 },
    currentPlace: null
  }),
  methods: {
    goToPlace (place) {
      this.currentPlace = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }
    }
  },
  created () {
    if (sessionStorage.getItem('initialCoords')) {
      this.initialCoords = JSON.parse(sessionStorage.getItem('initialCoords'))
    } else {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        console.log(coords)
        this.initialCoords = { lat: parseFloat(coords.latitude), lng: parseFloat(coords.longitude) }
      })
    }
  },
  watch: {
    initialCoords (v) {
      sessionStorage.setItem('initialCoords', JSON.stringify(v))
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  position: relative;
}
.pac-target-input {
  position: absolute;
  top: 5%;
  z-index: 1;
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.10) 0px 5px 15px;
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%);
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
}
</style>