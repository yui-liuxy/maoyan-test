<template>
  <div class="catconent">
    <div>
      <ul>
        <li v-for="item in hotshowList" :key="item.id">
          <router-link :to="'/Item/' + item.id" class="linkA">
            <div class="c-left">
              <a><img :src="item.img" /></a>
            </div>
            <div class="c-content">
              <p>{{ item.nm }}</p>
              <div class="watch">
                <span v-if="!item.globalReleased"
                >{{ item.wish }}<i>想看</i></span
                ><span v-else><i>观众评分:</i>{{ item.sc }}</span>
              </div>
              <div class="actor">{{ item.star }}</div>
              <div class="data">{{ item.showInfo }}</div>
            </div>
            <div class="c-right">
              <button v-if="!item.globalReleased" class="buy">预售</button
              ><button v-else class="prev">购票</button>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "hot",
  props:['hotshowList']
}
</script>

<style >
.catconent {
  padding: .1rem;
}
.catconent ul {
  display: flex;
  flex-wrap: wrap;
}
.catconent ul li {
  display: flex;
  margin-top: .2rem;
  font-size: .12rem;
  color: #666;
}
.catconent ul li .c-content {
  width: 2rem;
  padding-left: .1rem;
}
.actor {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: .26rem;
  line-height: .26rem;
}
.data {
  height: .2rem;
}

.c-right {
  width: .6rem;
  text-align: center;
  vertical-align: middle;
  line-height: 1rem;
}
.c-right .prev {
  width: .46rem;
  height: .26rem;
  line-height: .28rem;
  text-align: center;
  box-sizing: border-box;
  background-color: #f03d37;
  color: #fff;
  border-radius: .04rem;
  white-space: nowrap;
  font-size: .12rem;
  border: none;
}
.buy {
  width: .46rem;
  height: .26rem;
  line-height: .28rem;
  text-align: center;
  box-sizing: border-box;
  background-color: skyblue;
  color: #fff;
  border-radius: 0.04rem;
  white-space: nowrap;
  font-size: .12rem;
  border: none;
}
.c-content{
  line-height: .24rem;
  width: 0px;
}
.c-content p {
  font-size: .18rem;
  color: #333;
  font-weight: 700;
  padding-right: 0.05rem;
  flex-shrink: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: .24rem;
}
.watch span {
  font-weight: 700;
  color: #faaf00;
  font-size: 0.16rem;
}
.watch i {
  font-size: 0.12rem;
  color: #666;
  font-style: normal;
}
.linkA{
  display: block;
  display: flex;
  flex-wrap: wrap;
}
</style>
