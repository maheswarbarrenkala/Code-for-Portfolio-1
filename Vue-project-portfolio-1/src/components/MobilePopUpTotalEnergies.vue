<template>
  <div :class="[`mobile-pop-up-total-energies`, className || ``]">
    <frame182 :children="frame182Props.children" />
    <div class="overlap-group-3">
      <img
        class="right-arrow"
        src="https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/6758904031e13985e3d9ebdf/img/right-arrow@2x.png"
        alt="right arrow"
      />
      <div class="frame-183-1" :style="{ 'background-image': 'url(' + frame183 + ')' }">
        <img class="total-1" :src="total1" alt="total 1" /><img class="total-_1-1" :src="total_11" alt="total _1 1" />
      </div>
    </div>
  </div>
</template>

<script>
import Frame182 from "./Frame182";
export default {
  name: "MobilePopUpTotalEnergies",
  components: {
    Frame182,
  },
  props: ["frame183", "total1", "total_11", "className", "frame182Props"],
};
</script>

<style>
.mobile-pop-up-total-energies {
  height: 458px;
  left: 0;
  position: absolute;
  top: 0;
  width: 350px;
}

.overlap-group-3 {
  height: 240px;
  left: 50px;
  position: absolute;
  top: 32px;
  width: 300px;
}

.right-arrow {
  height: 58px;
  left: 242px;
  position: absolute;
  top: 182px;
  width: 58px;
}

.frame-183-1 {
  background-size: 100% 100%;
  border-radius: 5px;
  display: flex;
  gap: 20px;
  height: 190px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 250px;
}

.total-1 {
  height: 190.48px;
  margin-left: 270px;
  object-fit: cover;
  width: 250px;
}

.total-_1-1 {
  height: 190.48px;
  object-fit: cover;
  width: 250px;
}

.mobile-pop-up-total-energies.mobile-chatbot .frame-183-1 {
  background-position: 50% 50%;
  background-size: cover;
}

.mobile-pop-up-total-energies.mobile-chatbot .total-1,
.mobile-pop-up-total-energies.mobile-chatbot .total-_1-1 {
  height: 190px;
}
</style>
