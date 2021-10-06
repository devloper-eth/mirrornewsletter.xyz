import{r as e,a as s,b as t,c as l,d as r,o as i,e as c,f as n,w as o,T as a,g as u,v as d,h as m,i as f,j as h,k as p}from"./vendor.6eff1878.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?s.credentials="include":"anonymous"===e.crossorigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();const b={components:{ChevronRightIcon:e,CheckCircleIcon:s,ExclamationCircleIcon:t},props:{email:String},data:function(){return{success:null}},methods:{async subscribe(e){e.preventDefault(),this.success=null;try{await l.post("https://us-central1-devloper-eth.cloudfunctions.net/mailchimp-proxy",{email:this.email});this.success=!0}catch(s){console.error(s),this.success=!1}}}},g={class:"inline-flex items-center"},w=h(" Something went wrong! "),x={class:"flex flex-col inline-flex items-center sm:items-start sm:flex-row"},v=m("span",{class:"text-lg sm:text-xl"},"You successfully subscribed to the newsletter!",-1),y={class:"flex sm:flex-wrap"},k={class:"flex-grow border-b-2 border-white"},C={class:"flex-none border-b-2 border-white"},I={class:"inline-flex items-center"},L=h(" Subscribe");b.render=function(e,s,t,l,h,p){const b=r("ExclamationCircleIcon"),N=r("CheckCircleIcon"),S=r("ChevronRightIcon");return i(),c("div",null,[n(a,{name:"fade"},{default:o((()=>[u(m("div",g,[n(b,{class:"h-6 w-6 mr-1 inline-block"}),w],512),[[d,!1===e.success]])])),_:1}),n(a,{name:"fade"},{default:o((()=>[u(m("div",x,[n(N,{class:"h-16 w-16 mb-4 sm:h-8 sm:w-8 sm:mb-0 sm:mr-2"}),v],512),[[d,!0===e.success]])])),_:1}),u(m("div",y,[m("div",k,[u(m("input",{type:"email",name:"email","onUpdate:modelValue":s[0]||(s[0]=e=>t.email=e),class:"block w-full bg-black text-white h-12 pl-1 border-0 ring-0 focus:ring-0 focus:border-0",placeholder:"your@email.com"},null,512),[[f,t.email]])]),m("div",C,[m("div",I,[m("button",{class:"cursor-pointer h-12 pr-1",type:"button",onClick:s[1]||(s[1]=(...e)=>p.subscribe&&p.subscribe(...e))},[L,n(S,{class:"inline-block font-bold h-4 w-4 -mt-1 text-white"})])])])],512),[[d,!0!==e.success]])])};const N={class:"grid grid-cols-1 lg:grid-cols-2 h-full"},S={class:"bg-black"},_={class:"container p-12 xl:p-24 text-white"},A=m("img",{class:"h-12 w-12",src:"/mirrornewsletter.svg"},null,-1),E=m("h1",{class:"mt-16 text-3xl"},"mirror newsletter",-1),j=m("h2",{class:"mt-8 text-xl"}," mirrornewsletter.xyz is your weekly information source on all things NFT, web3 and DAO. All links curated by hand (with top secret ranking algo coming soon). ",-1),D=m("div",{class:"pl-12 xl:pl-24 mb-12 mt-12 text-white bg-black"},[h(" built by "),m("a",{href:"https://twitter.com/devloper_eth"},[h("@"),m("span",{class:"underline"},"devloper_eth")])],-1),O=m("div",{class:"hidden lg:block"},null,-1);p({setup:e=>(e,s)=>(i(),c("div",N,[m("div",S,[m("div",_,[A,E,j,n(b,{class:"mt-12"})]),D]),O]))}).mount("#app");
