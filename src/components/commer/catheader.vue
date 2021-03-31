<template>
  <div class="catheader">
    <div class="h-left"> <slot name="left"></slot> </div>
       <span> <slot name="text"></slot> </span>
    <div class="h-right"> <slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "catheader",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style>
.catheader {
  background-color: #ff0000;
  height: 0.5rem;
  display: flex;
  justify-content: space-around;
}
.catheader span {
  width: 3.1rem;
  height: 0.5rem;
  line-height: 0.5rem;
  color: #fff;
  text-align: center;
  font-size: 0.18rem;
}

.h-left {
  width: 50px;
  height: 50px;
}
</style>
