import{j as f,n as a,r as p,R as F,a as v}from"./vendor.2017c09e.js";const w=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}};w();const r=f.exports.jsx,o=f.exports.jsxs,b=f.exports.Fragment,L=a.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;`,E=({children:n})=>r(L,{children:n}),I=a.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`,A=a.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    
`,S=(n,s)=>{const[c,i]=p.exports.useState("");return[c,()=>o(b,{children:[r(I,{children:n}),o(A,{value:c,onChange:e=>i(e.target.value),children:[r("option",{value:"",children:"Select"}),s.map(e=>r("option",{value:e.id,children:e.name},e.id))]})]})]},P=[{id:"USD",name:"United States Dollar"},{id:"MXN",name:"Mexican Peso"},{id:"EUR",name:"Euro"},{id:"GBP",name:"Pound Sterling"}],j=a.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    margin-top: 30px; 
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`,k=({setCryptoCurrency:n})=>{const[s,c]=p.exports.useState([]),[i,t]=p.exports.useState(!1),[e,l]=S("Select Currency",P),[d,y]=S("Select Crypto",s);return p.exports.useEffect(()=>{(async()=>{const C=(await(await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD")).json()).Data.map(x=>({id:x.CoinInfo.Name,name:x.CoinInfo.FullName}));c(C)})()},[]),o(b,{children:[i&&r(E,{children:"Todos los campos son obligatorios"}),o("form",{onSubmit:m=>{if(m.preventDefault(),[e,d].includes("")){t(!0);return}t(!1),n({crypto:d,currency:e})},children:[r(l,{}),r(y,{}),r(j,{type:"submit",value:"Value"})]})]})},D=a.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`,N=a.img`
    display: block;
    width: 120px;
`,u=a.p`
    font-size: 18px;
    span {
        font-weight: 700;
    } 
`,R=a.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`,O=({result:n})=>{const{PRICE:s,HIGHDAY:c,LOWDAY:i,CHANGEPCT24HOUR:t,IMAGEURL:e,LASTUPDATE:l}=n;return o(D,{children:[r(N,{src:`https://cryptocompare.com/${e}`,alt:"crypto image"}),o("div",{children:[o(R,{children:[" Price Now: ",r("span",{children:s})]}),o(u,{children:[" Highest today: ",r("span",{children:c})]}),o(u,{children:[" Lowest today: ",r("span",{children:i})]}),o(u,{children:["24 hour variation: ",r("span",{children:t})]}),o(u,{children:[" Last update: ",r("span",{children:l})]})]})]})};const z=()=>o("div",{className:"spinner",children:[r("div",{className:"double-bounce1"}),r("div",{className:"double-bounce2"})]});var U="/crypto-currency/assets/imagen-criptos.c0430b0f.png";const H=a.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`,M=a.img`
  max-width: 400px;
  width:80%;
  margin: 100px auto 0 auto;
  display: block;
`,T=a.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  font-weight: 700;
  font-size : 34px;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`;function $(){const[n,s]=p.exports.useState({}),[c,i]=p.exports.useState({}),[t,e]=p.exports.useState(!1);return p.exports.useEffect(()=>{if(Object.keys(n).length>0){const{crypto:l,currency:d}=n;(async()=>{e(!0),i({});const h=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${l}&tsyms=${d}`,g=await(await fetch(h)).json();i(g.DISPLAY[l][d]),e(!1)})()}},[n]),o(H,{children:[r(M,{src:U,alt:"crypto img"}),o("div",{children:[r(T,{children:" Cryptocurrency live prices  "}),r(k,{setCryptoCurrency:s}),t&&r(z,{}),c.PRICE&&r(O,{result:c})]})]})}F.render(r(v.StrictMode,{children:r($,{})}),document.getElementById("root"));
