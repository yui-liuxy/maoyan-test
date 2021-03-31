<template>
<div class="cinemaTab">
  <ul>
    <li> <span>全城</span> </li>|
    <li> <span>品牌</span></li>|
    <li> <span>特色</span></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "cinemaTab"
}
</script>

<style scoped>

.cinemaTab{
  width: 100%;
  height: .4rem;
  line-height: .4rem;
}
.cinemaTab ul{
  list-style: none;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eeeeee;
}
.cinemaTab ul li{
  width: 33%;
  list-style: none;
  font-size: .14rem;
  text-align: center;
  color: #666666;
}

</style>
