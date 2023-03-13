<template lang="">
  <div>
      <div class="Cards">
      <div data-aos="fade-up"
            data-aos-duration="800"  class="Card">
      <img  class="Card_img" src="../../assets/images/Retro Telephone.G01 1.png" alt="">
        <div class="Card_Divtext">
        <h1 class="Card_title">{{ $store.state.translations[`main.howWeWork_banner_title1`] }}</h1>
        <p class="Card_text">{{ $store.state.translations[`main.howWeWork_banner_text1`] }}</p>
        </div>
      </div>
      <div data-aos="fade-up"
            data-aos-duration="800"  class="Card">
      <img style="max-height: 250px" width="100%"  class="Card_img" src="../../assets/images/image 1.png" alt="">
        <div class="Card_Divtext">
        <h1 class="Card_title">{{ $store.state.translations[`main.howWeWork_banner_title2`] }}</h1>
        <p class="Card_text">{{ $store.state.translations[`main.howWeWork_banner_text2`] }}</p>
        </div>
      </div>
      <div data-aos="fade-up"
            data-aos-duration="800"  class="Card">
      <img style="max-height: 250px" width="100%"  class="Card_img" src="../../assets/images/Car Flip Key.G15 1.png" alt="">
        <div class="Card_Divtext">
        <h1 class="Card_title">{{ $store.state.translations[`main.howWeWork_banner_title3`] }}</h1>
        <p class="Card_text">{{ $store.state.translations[`main.howWeWork_banner_text3`] }}</p>
        </div>
      </div>
      <div data-aos="fade-up"
            data-aos-duration="800"  class="Card">
      <img style="max-height: 250px" width="100%"  class="Card_img" src="../../assets/images/Car Blue.H15 1.png" alt="">
        <div class="Card_Divtext">
        <h1 class="Card_title">{{ $store.state.translations[`main.howWeWork_banner_title4`] }}</h1>
        <p class="Card_text">{{ $store.state.translations[`main.howWeWork_banner_text4`] }}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["img"],
};
</script>
<style lang="scss">
.Cards{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 10px;
}
@media(max-width:882px){
  .Cards{
    justify-content: space-around;
  }
}
.Card{
width: 270px;
height: 350px;
margin-right: 10px;
margin-top: 20px;
background-color: white;
border-radius: 10px;
padding: 10px 15px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
&_title{
  font-family: 'Mulish' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 16px;
  color: #024e90;
  line-height: 30px;
  margin-bottom: 0;
}
&_text{
  font-family: 'Mulish' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  margin-top: 10px;
  color: #96adc1;
  line-height: 20px;
}
&_img{
  width:100%;
  height: 180px;
}
}
</style>
