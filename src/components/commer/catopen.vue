<template>
  <div class="title">
    <div class="title-left">
      <a
        ><img
          src="//p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png"
      /></a>
    </div>
    <div class="title-right">
      <a><span><slot name="opentext"></slot></span></a>
      <a><span>打开App</span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "catopen",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style>
a{
    text-decoration: none;
     color: #777;
}
.title {
  box-sizing: border-box;
  width: 100%;
  height: .6rem;
  display: flex;
  line-height: .6rem;
  padding: 0 .1rem;

}
.title-left {
  width: 1rem;
  height: .6rem;

}
.title-left img {
  display: inline-block;
  width: .94rem;
  height: .4rem;
  vertical-align: middle;
}
.title-left a {
  display: inline-block;
  width: .94rem;
  height: .4rem;
}
.title-right {
  width: 3.8rem;
  height: .6rem;
   overflow: hidden;
}
.title-right a:first-child > span {
  font-size: .14rem;
  font-weight: 600;
  color: #777;
  margin-left: .4rem;
   overflow: hidden;
}
.title-right a:last-child > span {
  font-size: .16rem;
  font-weight: 600;

  margin-left: .22rem;
  color: darkred;
}
</style>
