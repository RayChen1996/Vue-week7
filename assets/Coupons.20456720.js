import{m as g,D as y}from"./modalMixin.d96dfcfa.js";import{_ as b,o as l,c as i,b as e,w as u,v as r,k as $,t as h,a as m,F as x,f as k,r as _}from"./index.7b4d0d51.js";const w={props:{coupon:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=s},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[g]},L={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},D={class:"modal-dialog",role:"document"},N={class:"modal-content"},S={class:"modal-header"},U={class:"modal-title",id:"exampleModalLabel"},V={key:0},B={key:1},T=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),I={class:"modal-body"},O={class:"mb-3"},j=e("label",{for:"title"},"\u6A19\u984C",-1),F={class:"mb-3"},z=e("label",{for:"coupon_code"},"\u512A\u60E0\u78BC",-1),A={class:"mb-3"},E=e("label",{for:"due_date"},"\u5230\u671F\u65E5",-1),P={class:"mb-3"},q=e("label",{for:"price"},"\u6298\u6263\u767E\u5206\u6BD4",-1),G={class:"mb-3"},H={class:"form-check"},J=e("label",{class:"form-check-label",for:"is_enabled"}," \u662F\u5426\u555F\u7528 ",-1),K={class:"modal-footer"},Q=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function R(s,o,d,c,t,p){return l(),i("div",L,[e("div",D,[e("div",N,[e("div",S,[e("h5",U,[d.isNew?(l(),i("span",V,"\u65B0\u589E\u512A\u60E0\u5377")):(l(),i("span",B,"\u7DE8\u8F2F\u512A\u60E0\u5377"))]),T]),e("div",I,[e("div",O,[j,u(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[0]||(o[0]=n=>t.tempCoupon.title=n),placeholder:"\u8ACB\u8F38\u5165\u6A19\u984C"},null,512),[[r,t.tempCoupon.title]])]),e("div",F,[z,u(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":o[1]||(o[1]=n=>t.tempCoupon.code=n),placeholder:"\u8ACB\u8F38\u5165\u512A\u60E0\u78BC"},null,512),[[r,t.tempCoupon.code]])]),e("div",A,[E,u(e("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":o[2]||(o[2]=n=>t.due_date=n)},null,512),[[r,t.due_date]])]),e("div",P,[q,u(e("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":o[3]||(o[3]=n=>t.tempCoupon.percent=n),placeholder:"\u8ACB\u8F38\u5165\u6298\u6263\u767E\u5206\u6BD4"},null,512),[[r,t.tempCoupon.percent,void 0,{number:!0}]])]),e("div",G,[e("div",H,[u(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[4]||(o[4]=n=>t.tempCoupon.is_enabled=n),id:"is_enabled"},null,512),[[$,t.tempCoupon.is_enabled]]),J])])]),e("div",K,[Q,e("button",{type:"button",class:"btn btn-primary",onClick:o[5]||(o[5]=n=>s.$emit("update-coupon",t.tempCoupon))},h(d.isNew?"\u65B0\u589E\u512A\u60E0\u5377":"\u66F4\u65B0\u512A\u60E0\u5238"),1)])])])],512)}const W=b(w,[["render",R]]),X={components:{CouponModal:W,DelModal:y},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{openCouponModal(s,o){this.isNew=s,this.isNew?this.tempCoupon={due_date:new Date().getTime()/1e3}:this.tempCoupon={...o},this.$refs.couponModal.openModal()},openDelCouponModal(s){this.tempCoupon={...s},this.$refs.delModal.openModal()},getCoupons(){this.isLoading=!0;const s="https://vue3-course-api.hexschool.io/v2//api/raychen/admin/coupons";this.$http.get(s,this.tempProduct).then(o=>{this.coupons=o.data.coupons,this.isLoading=!1}).catch(o=>{this.isLoading=!1,this.$httpMessageState(o.response,"\u932F\u8AA4\u8A0A\u606F")})},updateCoupon(s){this.isLoading=!0;let o="https://vue3-course-api.hexschool.io/v2//api/raychen/admin/coupon",d="post",c=s;this.isNew||(o=`https://vue3-course-api.hexschool.io/v2//api/raychen/admin/coupon/${this.tempCoupon.id}`,d="put",c=this.tempCoupon),this.$http[d](o,{data:c}).then(t=>{this.isLoading=!1,this.$httpMessageState(t,"\u65B0\u589E\u512A\u60E0\u5238"),this.getCoupons(),this.$refs.couponModal.hideModal()}).catch(t=>{this.isLoading=!1,this.$httpMessageState(t.response,"\u932F\u8AA4\u8A0A\u606F")})},delCoupon(){const s=`https://vue3-course-api.hexschool.io/v2//api/raychen/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(s).then(o=>{this.isLoading=!1,this.$httpMessageState(o,"\u522A\u9664\u512A\u60E0\u5238"),this.$refs.delModal.hideModal(),this.getCoupons()}).catch(o=>{this.isLoading=!1,this.$httpMessageState(o.response,"\u522A\u9664\u512A\u60E0\u5238")})}},created(){this.getCoupons()}},Y={class:"text-end mt-4"},Z={class:"table mt-4"},ee=e("thead",null,[e("tr",null,[e("th",null,"\u540D\u7A31"),e("th",null,"\u6298\u6263\u767E\u5206\u6BD4"),e("th",null,"\u5230\u671F\u65E5"),e("th",null,"\u662F\u5426\u555F\u7528"),e("th",null,"\u7DE8\u8F2F")])],-1),oe={key:0,class:"text-success"},te={key:1,class:"text-muted"},se={class:"btn-group"},ne=["onClick"],le=["onClick"];function ie(s,o,d,c,t,p){const n=_("Loading"),C=_("CouponModal"),f=_("DelModal");return l(),i("div",null,[m(n,{active:t.isLoading,"z-index":1060},null,8,["active"]),e("div",Y,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=a=>p.openCouponModal(!0))}," \u5EFA\u7ACB\u65B0\u7684\u512A\u60E0\u5238 ")]),e("table",Z,[ee,e("tbody",null,[(l(!0),i(x,null,k(t.coupons,(a,v)=>(l(),i("tr",{key:v},[e("td",null,h(a.title),1),e("td",null,h(a.percent)+"%",1),e("td",null,h(s.$filters.date(a.due_date)),1),e("td",null,[a.is_enabled===1?(l(),i("span",oe,"\u555F\u7528")):(l(),i("span",te,"\u672A\u555F\u7528"))]),e("td",null,[e("div",se,[e("button",{class:"btn btn-outline-primary btn-sm",onClick:M=>p.openCouponModal(!1,a)},"\u7DE8\u8F2F",8,ne),e("button",{class:"btn btn-outline-danger btn-sm",onClick:M=>p.openDelCouponModal(a)},"\u522A\u9664",8,le)])])]))),128))])]),m(C,{coupon:t.tempCoupon,"is-new":t.isNew,ref:"couponModal",onUpdateCoupon:p.updateCoupon},null,8,["coupon","is-new","onUpdateCoupon"]),m(f,{item:t.tempCoupon,ref:"delModal",onDelItem:p.delCoupon},null,8,["item","onDelItem"])])}const pe=b(X,[["render",ie]]);export{pe as default};
