<template>
  <div class="amazon-bidding-pop-up screen">
    <amazon-bidding
      :frame100="amazonBiddingProps.frame100"
      :rectangle1111="amazonBiddingProps.rectangle1111"
      :rectangle1112="amazonBiddingProps.rectangle1112"
      :rectangle1113="amazonBiddingProps.rectangle1113"
      :dropDownMinor_SvgrepoCom="amazonBiddingProps.dropDownMinor_SvgrepoCom"
    />
  </div>
</template>

<script>
import AmazonBidding from "./AmazonBidding";
export default {
  name: "AmazonBiddingPopUp",
  components: {
    AmazonBidding,
  },
  props: ["amazonBiddingProps"],
};
</script>

<style>
.amazon-bidding-pop-up {
  -webkit-backdrop-filter: blur(20px) brightness(100%);
  backdrop-filter: blur(20px) brightness(100%);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 45.9%,
    rgba(73.5, 73.5, 73.5, 0.43) 84.9%,
    rgba(0, 0, 0, 0.21) 100%
  );
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  min-height: 549px;
  min-width: 999px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
</style>
