import{_ as n,c as e,F as r,r as i,o as t}from"./index-Dirxkq53.js";const d={data(){return{states:[{name:"California",path:"M150,300 L200,350 L250,300 L200,250 Z",clicked:!1},{name:"Texas",path:"M300,400 L350,450 L400,400 L350,350 Z",clicked:!1}]}},methods:{toggleStateColor(s){this.states[s].clicked=!this.states[s].clicked}}},h={class:"map-container"},_={viewBox:"0 0 1000 600",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},p=["d","fill","onClick"];function f(s,m,u,k,c,o){return t(),e("div",h,[(t(),e("svg",_,[(t(!0),e(r,null,i(c.states,(a,l)=>(t(),e("path",{key:a.name,d:a.path,fill:a.clicked?"blue":"red",onClick:g=>o.toggleStateColor(l),class:"state"},null,8,p))),128))]))])}const w=n(d,[["render",f]]);export{w as default};
