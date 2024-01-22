"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[870],{870:(n,e,r)=>{r.r(e),r.d(e,{default:()=>En});var o,t,i,a,s,c,p,l,d,x,h,g,u,f,m,b,j=r(791),Z=r(420),A=r(168),v=r(87),w=r(978);const y=w.ZP.div(o||(o=(0,A.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n"]))),k=w.ZP.div(t||(t=(0,A.Z)(["\n  position: relative;\n  box-sizing: border-box;\n  width: 541px;\n\n  padding: 15px 35px;\n  border-radius: 24px;\n  background: #fff;\n"]))),P=w.ZP.div(i||(i=(0,A.Z)(["\n  width: 469px;\n  height: 314px;\n  overflow: hidden;\n  position: relative;\n  border-radius: 14px;\n  border-color: transparent;\n  margin-bottom: 14px;\n  margin-top: 25px;\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    #f3f3f2;\n"]))),C=w.ZP.p(a||(a=(0,A.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  max-width: 277px;\n  font-weight: 400;\n  line-height: 1.5;\n  margin-bottom: 14px;\n"]))),z=w.ZP.h3(s||(s=(0,A.Z)(["\n  margin-bottom: 8px;\n  color: #121417;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.33;\n"]))),B=w.ZP.span(c||(c=(0,A.Z)(["\n  color: #3470ff;\n"]))),F=w.ZP.p(p||(p=(0,A.Z)(["\n  font-size: 14px;\n  line-height: 1.42;\n  width: 461px;\n  margin-bottom: 24px;\n"]))),L=w.ZP.p(l||(l=(0,A.Z)(["\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.42;\n  margin-bottom: 8px;\n"]))),M=w.ZP.div(d||(d=(0,A.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  max-width: 461px;\n  font-weight: 400;\n  line-height: 1.5;\n  margin-bottom: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n"]))),R=w.ZP.p(x||(x=(0,A.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.42;\n  margin-bottom: 8px;\n"]))),I=w.ZP.img(h||(h=(0,A.Z)(["\nmax-width: 100%;\n height: 100%; \n object-fit: cover\n"]))),S=w.ZP.p(g||(g=(0,A.Z)(["\n  font-family: Montserrat;\n  color: #363535;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 35px;\n  background: #f9f9f9;\n  display: flex;\n  padding: 7px 14px;\n  justify-content: center;\n  align-items: center;\n"]))),U=w.ZP.div(u||(u=(0,A.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),E=w.ZP.span(f||(f=(0,A.Z)(["\n  color: #3470ff;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.24px;\n"]))),Q=(0,w.ZP)(v.OL)(m||(m=(0,A.Z)(["\n  box-sizing: border-box;\n  padding: 12px 50px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.4;\n  white-space: nowrap;\n  text-decoration: none;\n  color: #fff;\n  border-radius: 12px;\n  width: 168px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 44px;\n  margin-top: 24px;\n  margin-bottom: 40px;\n  background-color: #3470ff;\n  transition: box-shadow 0.3s ease;\n  cursor: pointer;\n  &:hover {\n    background-color: #0b44cd;\n  }\n"]))),T=w.ZP.button(b||(b=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  background-color: transparent;\n  position: absolute;\n  top: 16px;\n  right: 16px;\n"])));var O=r(184);const G=n=>{let{isOpen:e,onClose:r,car:o}=n;(0,j.useEffect)((()=>{const n=n=>{r()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}}),[r]),(0,j.useEffect)((()=>{const n=document.body;return n.style.overflow=e?"hidden":"auto",()=>{n.style.overflow="auto"}}),[e]);return(0,O.jsx)(y,{onClick:r,children:(0,O.jsxs)(k,{onClick:n=>n.stopPropagation(),children:[(0,O.jsx)(P,{children:(0,O.jsx)(I,{src:o.img,alt:o.make,style:{maxWidth:"100%",height:"100%",objectFit:"cover"}})}),(0,O.jsxs)(z,{children:["".concat(o.make),(0,O.jsxs)(B,{children:[" ","".concat(o.model),", "]}),"".concat(o.year)]}),(0,O.jsx)(C,{children:"".concat(o.address.split(",").slice(-2).join(", ")," | ").concat(o.rentalCompany," | ").concat(o.type," | ").concat(o.id," | ").concat(o.accessories[0])}),(0,O.jsx)(F,{children:"".concat(o.description)}),(0,O.jsx)(L,{children:"Accessories and functionalities:"}),(0,O.jsx)(M,{children:o.accessories.map(((n,e)=>(0,O.jsxs)("p",{children:[n," | "]},e)))}),(0,O.jsx)(R,{children:"Rental Conditions: "}),(0,O.jsxs)(U,{children:[(()=>{var n;return((null===(n=o.rentalConditions)||void 0===n?void 0:n.split("\n"))||[]).map(((n,e)=>{n.toLowerCase().includes("minimum age");const[r,o]=n.split(":").map((n=>n.trim()));return(0,O.jsx)(S,{children:(0,O.jsxs)(O.Fragment,{children:[r,":\xa0",(0,O.jsx)(E,{children:o})]})},e)}))})(),(0,O.jsxs)(S,{children:[" ","Millage:\xa0"," ",(0,O.jsx)(E,{children:o.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})," "]}),(0,O.jsxs)(S,{children:["Price:\xa0 ",(0,O.jsxs)(E,{children:[" ","".concat(o.rentalPrice)," "]})]})]}),(0,O.jsx)(Q,{to:"tel:+380730000000",children:"Rental Car"}),(0,O.jsx)(T,{onClick:r,width:12,height:12,children:"X"})]})})};var W,N,D,H,Y,K,V,X,J,q=r(215);const $=w.ZP.div(W||(W=(0,A.Z)(["\n  width: 274px;\n  height: 446px;\n  position: relative;\n"]))),_=((0,w.ZP)(q.Q)(N||(N=(0,A.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  border: transparent;\n  background: transparent;\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.5);\n  }\n"]))),w.ZP.button(D||(D=(0,A.Z)(["\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 99px;\n    background-color: var(--primaryBlue);\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43; \n    border: none; \n    border-radius: 12px;\n    color: var(--primaryWhite);\n    cursor: pointer;\n    transition: box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);\n\n    &:hover,\n    &:focus {\n        background-color: var(--secondaryBlue);\n    }\n"])))),nn=w.ZP.li(H||(H=(0,A.Z)(["\n    flex-basis: calc((100% - 3 * 29px) / 4);\n\n    & img {\n        width: 100%;\n        height: 268px; \n        border-radius: 14px;\n        background: var(--secondaryGrey);\n    }\n"]))),en=w.ZP.p(Y||(Y=(0,A.Z)(["\n    padding: 14px 0 28px 0;\n    color: rgba(18, 20, 23, 0.5);\n    font-size: 12px;\n    max-width: 277px;\n    font-weight: 400;\n    line-height: 1.5;\n"]))),rn=w.ZP.div(K||(K=(0,A.Z)(["\n    height: 268px;\n    overflow: hidden;\n    position: relative;\n    border-radius: 14px;\n    border-color: transparent;\n    margin-bottom: 14px;\n    background: linear-gradient(\n        180deg,\n        rgba(18, 20, 23, 0.5) 2.5%,\n        rgba(18, 20, 23, 0) 41.07%\n        ),\n        #f3f3f2;\n"]))),on=w.ZP.div(V||(V=(0,A.Z)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 8px;\n"]))),tn=w.ZP.h3(X||(X=(0,A.Z)(["\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n"]))),an=w.ZP.h3(J||(J=(0,A.Z)(["\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n"])));var sn;const cn=w.ZP.button(sn||(sn=(0,A.Z)(["\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  margin: 0;\n  width: 18px;\n  height: 18px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 2;\n"]))),pn=()=>(0,O.jsx)(cn,{children:(0,O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgBvZLhDYIwEIVb418HkAFcgAF0ABdgAQaQAWABBpABdAAdQP67AA6AAzAAvkeuSQUCLTFe8nLl2n73SqvUj0LbH23bBkh7aAO9tNYPa461A7SFGqjEfD0AYWGCFPUavaFcxqk0sOMKWG47SaCn5I3UQugmderCmnEOxVLPDGQnhbjXrTuOAM6mQW/eGAiVRR4snAtp1JlY4Zs/uMZZG+UZsocKCKo4WOiIJrivIugu1FT5x0lyacjR1w24uclGL2lwnUsgPrBZiAvMGTIFm4Osx4p4HwU2cBhLZhyhgnPKNyxn7seZgPFpROpf8QHQFxCiuRmjZAAAAABJRU5ErkJggg==",width:"18px",height:"18px",alt:""})}),ln=n=>{let{car:e}=n;const[r,o]=(0,j.useState)(!1);return(0,O.jsxs)($,{children:[(0,O.jsx)(pn,{}),(0,O.jsxs)(nn,{children:[(0,O.jsx)(rn,{children:(0,O.jsx)("img",{src:e.img,alt:"".concat(e.make," ").concat(e.model)})}),(0,O.jsxs)(on,{children:[(0,O.jsxs)(tn,{children:["".concat(e.make),(0,O.jsxs)(B,{children:[" ","".concat(e.model),", "]}),"".concat(e.year)]}),(0,O.jsx)(an,{children:"".concat(e.rentalPrice)})]}),(0,O.jsx)(en,{children:"".concat(e.address.split(",").slice(-2).join(" | ")," | \n                ").concat(e.rentalCompany," | ").concat(e.type," | ").concat(e.id," | \n                ").concat(e.accessories[0])}),(0,O.jsx)(_,{onClick:()=>{o(!0)},children:"Learn more"}),r&&(0,O.jsx)(G,{isOpen:r,onClose:()=>{o(!1)},car:e})]})]})};var dn;const xn=w.ZP.ul(dn||(dn=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 50px 29px;\n  flex-wrap: wrap;\n  \n"]))),hn=n=>n.cars.cars,gn=n=>n.filter,un=()=>{const n=(0,Z.v9)(hn),{make:e}=(0,Z.v9)(gn);let r=[];return""===e?r=n:""!==e&&(r=n.filter((n=>n.make.toLowerCase()===e.toLowerCase()))),(0,O.jsx)(xn,{children:r.map((n=>(0,O.jsx)(ln,{car:n},n.id)))})};var fn,mn,bn=r(822);const jn=w.ZP.div(fn||(fn=(0,A.Z)(["\n    display: flex;\n    justify-content: center;\n    padding-top: 100px;\n"]))),Zn=w.ZP.a(mn||(mn=(0,A.Z)(["\n    color: #3470FF;\nfont-family: Manrope;\nfont-size: 16px;\nfont-style: normal;\nfont-weight: 500;\nline-height: 24px; /* 150% */\ntext-decoration-line: underline;\ncursor: pointer\n"])));var An=r(807);const vn=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]');var wn,yn,kn,Pn,Cn;const zn={control:n=>({...n,backgroundColor:"#F7F7FB",borderRadius:"14px",borderColor:"transparent",color:"#121417",fontSize:"18px",padding:"14px 18px",width:"224px",height:"48px",display:"flex",alignContent:"center"}),valueContainer:n=>({...n,margin:"0px",padding:"0px"}),input:n=>({...n,margin:"0px",padding:"0px"}),placeholder:n=>({...n,color:"#121417",margin:"0px"}),dropdownIndicator:n=>({...n,color:"#121417",padding:"0px"}),menuList:n=>({...n,color:"rgba(18, 20, 23, 0.20)",borderRadius:"14px"}),menu:n=>({...n,borderRadius:"14px"})},Bn={control:n=>({...n,backgroundColor:"#F7F7FB",borderRadius:"14px",borderColor:"transparent",color:"#121417",fontSize:"18px",padding:"14px 18px",width:"125px",height:"48px",display:"flex",alignContent:"center"}),valueContainer:n=>({...n,margin:"0px",padding:"0px"}),input:n=>({...n,margin:"0px",padding:"0px"}),placeholder:n=>({...n,color:"#121417",margin:"0px"}),dropdownIndicator:n=>({...n,color:"#121417",padding:"0px"}),menuList:n=>({...n,color:"rgba(18, 20, 23, 0.20)",borderRadius:"14px"}),menu:n=>({...n,borderRadius:"14px"})},Fn=w.zo.form(wn||(wn=(0,A.Z)(["\n  padding: 42px 162px 50px 162px;\n  display: flex;\n  gap: 18px;\n"]))),Ln=w.zo.span(yn||(yn=(0,A.Z)(["\n  padding-bottom: 8px;\n  color: #8a8a89;\n  font-size: 14px;\n  line-height: 1.28;\n  font-weight: 500;\n"]))),Mn=w.zo.input(kn||(kn=(0,A.Z)(["\n  width: 160px;\n  height: 48px;\n  padding: 14px 24px;\n  border-color: transparent;\n  border-radius: 14px 0px 0px 14px;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  background: #f7f7fb;\n  color: #121417;\n  font-size: 18px;\n\n  &::placeholder {\n    color: #121417;\n  }\n"]))),Rn=w.zo.input(Pn||(Pn=(0,A.Z)(["\n  width: 160px;\n  height: 48px;\n  padding: 14px 24px;\n  border-color: transparent;\n  border-radius: 0px 14px 14px 0px;\n  background: #f7f7fb;\n  color: #121417;\n  font-size: 18px;\n\n  &::placeholder {\n    color: #121417;\n  }\n"]))),In=w.zo.button(Cn||(Cn=(0,A.Z)(["\n  width: 136px;\n  height: 48px;\n  padding: 14px 44px;\n  border-radius: 12px;\n  background: #3470ff;\n  color: #fff;\n  border: transparent;\n  margin-top: auto;\n\n  &:hover {\n    background: #0b44cd;\n  }\n\n  &:focus {\n    background: #0b44cd;\n  }\n"])));var Sn=r(761);const Un=()=>{const n=vn.map((n=>({value:n,label:n}))),e=(()=>{const n=[];for(let e=10;e<=500;e+=10)n.push(e);return n})().map((n=>({value:n,label:"To ".concat(n,"$")}))),r=(0,Z.I0)();return(0,O.jsxs)(Fn,{onSubmit:n=>{n.preventDefault(),r((0,Sn.I)({make:n.currentTarget.elements.make.value,price:n.currentTarget.elements.price.value,mileageFrom:n.currentTarget.elements.from.value,mileageTo:n.currentTarget.elements.to.value}))},children:[(0,O.jsxs)("label",{children:[(0,O.jsx)(Ln,{children:"Car brand"}),(0,O.jsx)(An.ZP,{name:"make",components:{IndicatorSeparator:null},placeholder:"Enter the text",options:n,styles:zn})]}),(0,O.jsxs)("label",{children:[(0,O.jsx)(Ln,{children:"Price/ 1 hour"}),(0,O.jsx)(An.ZP,{name:"price",components:{IndicatorSeparator:null},placeholder:"To $",options:e,styles:Bn})]}),(0,O.jsxs)("label",{children:[(0,O.jsx)(Ln,{children:"\u0421ar mileage / km"}),(0,O.jsxs)("div",{children:[(0,O.jsx)(Mn,{placeholder:"From",name:"from"}),(0,O.jsx)(Rn,{placeholder:"To",name:"to"})]})]}),(0,O.jsx)(In,{type:"submit",children:"Search"})]})},En=()=>{const n=(0,Z.I0)(),e=(0,Z.v9)((n=>n.cars.currentPage)),r=(0,Z.v9)((n=>n.cars.hasMoreData));return(0,O.jsxs)("div",{className:"container",children:[(0,O.jsx)(Un,{}),(0,O.jsx)(un,{}),(0,O.jsx)(jn,{children:r&&(0,O.jsx)(Zn,{onClick:()=>{n((0,bn.D4)(e+1))},children:"Load More"})})]})}}}]);
//# sourceMappingURL=870.690738c6.chunk.js.map