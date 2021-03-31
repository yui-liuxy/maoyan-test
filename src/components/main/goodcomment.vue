<template>
  <div v-html="list">热映</div>
</template>

<script>
export default {
  name: "goodcomment",
  props:["list"],
  data(){
    return{
    }
  },
  mounted() {
    console.log(this.list)
  }
}
</script>

<style >
.top-rated {
  padding: .12rem 0 .12rem .15rem;
  background-color: #fff;
  margin-bottom: 10px;
}
.top-rated .title {
  margin: 0;
  font-size: .14rem;
  color: #333;

}
.top-rated-list {
  overflow: scroll;
  white-space: nowrap;
}
.top-rated-list::-webkit-scrollbar{
  display: none;
}
.top-rated-item {
  display: inline-block;
  width: .85rem;
  overflow: hidden;
  margin-right: .1rem;
}
.top-rated-item .poster {
  width: .85rem;
  height: 1.15rem;
  position: relative;
  margin-bottom: 0.06rem;
}
.top-rated-item .poster img {
  width: 100%;
  height: 1.12rem;
  display: block;
}
.top-rated-item .poster .wish-bg {
  display: inline-block;
  width: 100%;
  height: .35rem;
  position: absolute;
  bottom: 0;
  background-image: -webkit-linear-gradient(top, rgba(77, 77, 77, 0), #000);
  background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
}
.top-rated-item .poster .score,
.top-rated-item .poster .wish {
  position: absolute;
  left: .04rem;
  bottom: 0.02rem;
  color: #faaf00;
  font-size: .11rem;
  font-weight: 600;
}
.top-rated-item .name {
  font-size: .12rem;
  color: #222;
  /*margin-bottom: 0.2rem;*/
  height: .16rem;
  line-height: .16rem;
}
h5 {
  display: block;
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  font-weight: bold;
  overflow: scroll;
  white-space: nowrap;
}

</style>
