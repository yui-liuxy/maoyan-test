<template>
  <div class="cc" ref="cc">
   <goodcomment :list="list"></goodcomment>
   <hot :hotshowList="hotshowList"></hot>
  </div>
</template>

<script>


import axios from "axios";
import Goodcomment from "@/components/main/goodcomment";
import goodcomment from "@/components/main/goodcomment";
import hot from "@/components/main/hot";
export default {
  name: "hotshow",
  data() {
    return {
      list: "",
      haoping: "",
      hotshowList: [],
      movieIds:[]  , //将来要获取数据的id号的字符串
      page:0      //当前页标
    };
  },

  components: {
    Goodcomment,
    goodcomment,
    hot


  },
  mounted() {
    this.getgoodcomment();
    this.gethot();
    this.$refs.cc.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
      window.removeEventListener("scroll", this.onScroll);
  },
  methods:{
    onScroll(){
      var scrollTop=this.$refs.cc.scrollTop;
      console.log(scrollTop)
      let ccHeight=this.$refs.cc.offsetHeight;
      var  documentHeight=this.$refs.cc.scrollHeight;
      if (documentHeight-scrollTop<=ccHeight){
        this.page++;
        if (this.page <= this.movieIds.length+10) {
          //调用获取数据的函数
          this.getComingData();
          console.log("fsdfdsfdsfds")
        }

      }
    },

    //获取下一页数据
    async getComingData(){
      var res=await axios.get(
          "/ajax/moreComingList?token=&movieIds=" +
          this.movieIds[this.page - 1] +
          "&optimus_uuid=990F03B0913E11EB8B176F441197A4934ED876560E76422DB0EF502F64777F98&optimus_risk_level=71&optimus_code=10"
    );
      //将新数据的img的地址进行转换
      var comingList = res.data.coming;
      console.log(res)
      comingList.forEach((i) => {
        i.img = i.img.replace("w.h", "64.90");
      });
      //需要将新数据追加到list数组的后面
      this.hotshowList = this.hotshowList.concat(comingList);
    },
    async getgoodcomment(){
        var res= await axios.get(
              "/ajax/topRatedMovies?token=&optimus_uuid=8052A5408D1D11EBABC15179DA3BD7ADC7AC1AB633484B11B233F0AB73C3FDAB&optimus_risk_level=71&optimus_code=10"
          )
            this.list = res.data;
    },
    async gethot(){
        var res  =await  axios.get(
              "/ajax/movieOnInfoList?token=&optimus_uuid=D40533108E3A11EB8BB437CBCBB9CA3333CFD43D6D314F6F849B7EFC0AD07620&optimus_risk_level=71&optimus_code=10"
          )
            this.hotshowList = res.data.movieList;
            this.hotshowList.forEach((element) => {
              element.img = element.img.replace("w.h", "64.90");
            });
      //重组 movieIds
      var idsArr = res.data.movieIds;
      for (var i = 12; i < idsArr.length; i += 10) {
        //console.log(idsArr.slice(i, i + 10).join(","));
        //将 数据id10个一组重新保存到movieIds
        this.movieIds.push(idsArr.slice(i, i + 10).join(","));
      }
    }

  }
};

</script>
<style>
.cc{
  height:calc(100% - 2.05rem);
  overflow-y: auto;
}
.cc::-webkit-scrollbar{
  display: none;
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
.top-rated-list::-webkit-scrollbar{
  display: none;
}



</style>
