<template>
  <div class="cc">
  <div>
    <div class="top-rated">
      <p class="title">近期最受期待</p>
      <div class="top-rated-list" >
        <div class="top-rated-item"  v-for="item in reList " :key="item.id">
          <div class="poster default-img-bg">
            <img   :src="item.img"  onerror="this.style.visibility='hidden'">
            <span class="wish-bg"></span>
            <span class="score">{{item.wish}}&nbsp;&nbsp;<span class="rated-score">想看</span></span>
          </div>
          <h5 class="name line-ellipsis">{{item.nm}}</h5>
          <p>{{item.comingTitle}}</p>
        </div>
      </div>


      <div class="catconent">
        <div>
          <ul>
            <li v-for="item in redetail" :key="item.id">
              <router-link :to="'/Item/' + item.id" class="linkA">
                <div class="c-left">
                  <a><img :src="item.img" /></a>
                </div>
                <div class="c-content">
                  <p>{{ item.nm }}</p>
                  <div class="watch">
                    <span>{{ item.wish }}<i>想看</i></span>
                  </div>
                  <div class="actor">{{ item.star }}</div>
                  <div class="data">{{ item.showInfo }}</div>
                </div>
                <div class="c-right">
                  <button  class="buy">预售</button>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "reshow",
  data() {
    return {
      reList:[],
      redetail:[]
    };
  },
  methods: {


  },
  mounted() {
    axios
        .get(
            "/ajax/mostExpected?ci=30&limit=10&offset=0&token=&optimus_uuid=8052A5408D1D11EBABC15179DA3BD7ADC7AC1AB633484B11B233F0AB73C3FDAB&optimus_risk_level=71&optimus_code=10"
        ).then((res) => {
      console.log(res)
      this.reList = res.data.coming;
      this.reList.forEach((element) => {
        element.img = element.img.replace("w.h", "64.90");
      });
    });

    axios
        .get(
            "/ajax/comingList?ci=30&token=&limit=10&optimus_uuid=8052A5408D1D11EBABC15179DA3BD7ADC7AC1AB633484B11B233F0AB73C3FDAB&optimus_risk_level=71&optimus_code=10"
        ).then((res) => {
      console.log(res)
      this. redetail = res.data.coming;
      this.redetail.forEach((element) => {
        element.img = element.img.replace("w.h", "64.90");
      });
    });



  },
  components: {}
};
</script>
<style scoped>
.cc{
  height:calc(100% - 2.05rem);
  overflow-y: auto;
}

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
