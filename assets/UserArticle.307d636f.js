import{_ as o,c as l,b as t,a as n,h as _,t as i,i as a,r as d,o as h}from"./index.7b4d0d51.js";const u={data(){return{article:{},id:""}},methods:{getArticle(){const c=`https://vue3-course-api.hexschool.io/v2//api/raychen/article/${this.id}`;this.isLoading=!0,this.$http.get(c).then(s=>{this.article=s.data.article,this.isLoading=!1}).catch(s=>{this.isLoading=!1,this.$httpMessageState(s.response,"\u932F\u8AA4\u8A0A\u606F")})}},created(){this.id=this.$route.params.articleId,this.getArticle()}},m={class:"container"},p={"aria-label":"breadcrumb"},f={class:"breadcrumb"},g={class:"breadcrumb-item"},b=a("\u90E8\u843D\u683C\u5217\u8868"),v={class:"breadcrumb-item active","aria-current":"page"},x={class:"row justify-content-center"},L={class:"col-8"},$={class:"text-muted"},k=a(" - "),y={class:"text-muted"},A=["src"],B=["innerHTML"];function M(c,s,N,T,e,V){const r=d("router-link");return h(),l("div",m,[t("nav",p,[t("ol",f,[t("li",g,[n(r,{to:"/user/articles"},{default:_(()=>[b]),_:1})]),t("li",v,i(e.article.title),1)])]),t("div",x,[t("article",L,[t("h2",null,i(e.article.title),1),t("p",null,[t("small",$,i(c.$filters.date(e.article.create_at)),1),k,t("small",y,"\u4F5C\u8005\uFF1A"+i(e.article.author),1)]),t("img",{src:e.article.imageUrl,alt:"",class:"img-fluid mb-3"},null,8,A),t("div",{innerHTML:e.article.content},null,8,B)])])])}const C=o(u,[["render",M]]);export{C as default};
