import{r as e,a as s,b as t,c as l,d as n,o as r,e as i,f as o,w as c,T as a,g as d,v as u,h as m,i as p,n as h,j as f,k as b}from"./vendor.b76b5f80.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?s.credentials="include":"anonymous"===e.crossorigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();const g={components:{ChevronRightIcon:e,CheckCircleIcon:s,ExclamationCircleIcon:t},props:{email:String},data:function(){return{success:null,pending:!1}},methods:{async subscribe(e){e.preventDefault(),this.success=null,this.pending=!0;try{await l.post("https://us-central1-devloper-eth.cloudfunctions.net/mailchimp-proxy",{email:this.email});this.success=!0}catch(s){console.error(s),this.success=!1}this.pending=!1}}},w={class:"inline-flex items-center"},x=f(" Something went wrong! "),v={class:"flex flex-col inline-flex items-center sm:items-start sm:flex-row"},y=m("span",{class:"text-lg sm:text-xl"},"You successfully subscribed to the newsletter!",-1),k={class:"flex-grow border-b-2 border-white"},C={class:"flex-none border-b-2 border-white"},I={class:"inline-flex items-center"},L=["disabled"],N=f(" Subscribe");g.render=function(e,s,t,l,f,b){const g=n("ExclamationCircleIcon"),S=n("CheckCircleIcon"),A=n("ChevronRightIcon");return r(),i("div",null,[o(a,{name:"fade"},{default:c((()=>[d(m("div",w,[o(g,{class:"h-6 w-6 mr-1 inline-block"}),x],512),[[u,!1===e.success]])])),_:1}),o(a,{name:"fade"},{default:c((()=>[d(m("div",v,[o(S,{class:"h-16 w-16 mb-4 sm:h-8 sm:w-8 sm:mb-0 sm:mr-2"}),y],512),[[u,!0===e.success]])])),_:1}),d(m("div",{class:h(["flex sm:flex-wrap",{"animate-pulse":e.pending}])},[m("div",k,[d(m("input",{type:"email",name:"email","onUpdate:modelValue":s[0]||(s[0]=e=>t.email=e),class:"block w-full bg-black text-white h-12 pl-1 border-0 ring-0 focus:ring-0 focus:border-0",placeholder:"your@email.com"},null,512),[[p,t.email]])]),m("div",C,[m("div",I,[m("button",{class:"cursor-pointer h-12 pr-1",type:"button",onClick:s[1]||(s[1]=(...e)=>b.subscribe&&b.subscribe(...e)),disabled:e.pending},[N,o(A,{class:h(["inline-block font-bold h-4 w-4 -mt-1 text-white",{"animate-ping":e.pending}])},null,8,["class"])],8,L)])])],2),[[u,!0!==e.success]])])};const S={class:"grid grid-cols-1 lg:grid-cols-2 h-full"},A={class:"bg-black"},E={class:"container p-12 xl:p-24 text-white"},_=m("a",{href:"/"},[m("img",{class:"h-8 w-8",src:"/mirrornewsletter.svg"})],-1),j=m("h1",{class:"mt-16 text-4xl header-font"},"mirror newsletter",-1),D=m("h2",{class:"mt-8 text-l paragraph-font"}," mirrornewsletter.xyz is your weekly information source on all things NFT, web3 and DAO. All links curated by hand (with top secret ranking algo coming soon). ",-1),F=m("div",{class:"pl-12 xl:pl-24 mb-12 mt-12 text-white bg-black"},[f(" Follow us on "),m("a",{href:"https://twitter.com/devloper_eth"},[m("span",{class:"underline"},"twitter")])],-1),O=m("div",{class:"hidden lg:block"},null,-1);b({setup:e=>(e,s)=>(r(),i("div",S,[m("div",A,[m("div",E,[_,j,D,o(g,{class:"mt-12"})]),F]),O]))}).mount("#app");
