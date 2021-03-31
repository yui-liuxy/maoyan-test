<template>
  <div>
    <cinemaTab></cinemaTab>
    <div v-html="value" class="cinema-allist"></div>
  </div>
</template>
<script>
import cinemaTab from "@/components/main/cinemaTab";
import axios from "axios";
export default {
  name: "cinema",
  data() {
    return {
      value:"",
    };
  },
  methods: {
    async getcinema(){
      var res= await axios.get(
          "/ajax/moreCinemas?day=2021-03-31&offset=10&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1617181814868&cityId=30&optimus_uuid=8052A5408D1D11EBABC15179DA3BD7ADC7AC1AB633484B11B233F0AB73C3FDAB&optimus_risk_level=71&optimus_code=10"
      )
       this.value=res.data
    }
  },
  components: {
    cinemaTab,
  },
  mounted() {
    this.getcinema()
  }
};
</script>
<style >
.cinema-allist{

  height:calc(100% - 2.05rem);
  overflow-y: auto;

}
.mb-line-b{
  padding: 13px 15px 13px 0;
  margin-left: 15px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #eeeeee;
}
.middle{
  display: block;
  -webkit-box-align: center;
  align-items: center;
}
.line-ellipsis{
  height: 23px;
  line-height: 23px;
  font-size: 16px;
  color: #000;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 10px;
}
.line-ellipsis span:first-child{
  height: 23px;
  line-height: 23px;
  font-size: 16px;
  color: #000;
}
.line-ellipsis  .price-block{
  font-size: 10px;

}
.line-ellipsis  .price-block   .price{
  color: #ff1221;
  font-size: 16px;
}

.title {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 0rem;
}
.location-block{
  display: flex;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 13px;
}
.line-ellipsis{
  font-size: 13px;
  margin: 0px   5px 5px  0px;
}
.distance{

}
.hallType{
  display: flex;
  margin-left: 10px;
  font-size: 12px;
}
.label-block{
  display: flex;
}
.allowRefund{
  display: inline-block;
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #589daf;
  border: 1px solid #589daf;
}
.endorse{
  display: inline-block;
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  margin-left: 5px;
  color: #589daf;
  border: 1px solid #589daf;
}
.vipTag{
  color: #f90;
  border: 1px solid #f90;
  position: relative;
  display: inline-block;
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  margin-left: 5px;
}
.snack{
  color: #f90;
  border: 1px solid #f90;
  position: relative;
  display: inline-block;
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  margin-left: 5px;
}
.discount-block>div{
  display: flex;
  margin-top: 5px;
}
.card>img{
  width: 15px;
  height: 14px;
  position: relative;
  top: 3px;
}
.discount-label-text{
  margin-left: 7px;
  font-size: 11px;
  line-height: 1.5;
  margin-top: 2px;
}
</style>
