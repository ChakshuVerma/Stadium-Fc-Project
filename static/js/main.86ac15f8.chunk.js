(this.webpackJsonpchakshu_project_stadiumfc=this.webpackJsonpchakshu_project_stadiumfc||[]).push([[0],{71:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(32),a=c.n(s),i=c(7),r=c(13),l=c(0),j=function(){var e={height:"30",width:"30",marginRight:"5px",display:"inline"};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"main-div",children:[Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsxs)(i.b,{to:"/",children:[Object(l.jsx)(r.a,{style:e}),Object(l.jsx)("p",{id:"home-button",children:"Home"})]}),Object(l.jsxs)(i.b,{to:"/help",children:[Object(l.jsx)(r.b,{style:e}),Object(l.jsx)("p",{id:"help-button",children:"Help"})]})]}),Object(l.jsx)("div",{style:{marginTop:"30px",minHeight:"80vh",maxWidth:"95vw",display:"grid",placeItems:"center",padding:"10px 20px"},children:Object(l.jsxs)("p",{style:{fontSize:"1.9rem",color:"gray"},children:["This web app is a fifa browser where the user can search players by their Name, Nationality, Club and Jersey Number.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"To search for a player, the user should go to the ",Object(l.jsx)(i.b,{to:"/",style:{textDecoration:"none"},children:"homepage"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"On the homepage, the user can search for the player by entering the search attribute in the search-box.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"The user can then select the desired player and get the relevant information about that player."]})})]}),"`"]})},o=c(12),b=(c(71),c(21)),d=c.p+"static/media/data.7965732a.csv",h=function(e){var t=e.SQ,c=e.SP,s=Object(n.useState)([]),a=Object(o.a)(s,2),r=a[0],j=a[1];Object(n.useEffect)((function(){Object(b.a)(d).then((function(e){j(e)}))}),[]);var h=t.trim();return""===h?null:r.map((function(e,t){var n,s=h;return n="Name"===c?e.Name:"Club"===c?e.Club:"Nationality"===c?e.Nationality:e.Position,s=s.toUpperCase(),(n=n.toUpperCase()).includes(s)?Object(l.jsx)(i.b,{to:"/playerinfo/".concat(e.Name),style:{textDecoration:"none"},children:Object(l.jsxs)("li",{className:"player-row",children:[e.Name,"Name"===c?"":" - "+n]})},t):null}))},O=function(){var e=Object(n.useState)("Name"),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(o.a)(a,2),j=r[0],b=r[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container-div",children:[Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)(i.b,{to:"/",children:Object(l.jsxs)("h1",{id:"heading",children:["FIFA",Object(l.jsx)("span",{children:"12"})]})})}),Object(l.jsxs)("div",{className:"search-div",children:[Object(l.jsxs)("select",{id:"select-search-attr",value:c,onChange:function(e){var t=e.target.value;s(t)},children:[Object(l.jsx)("option",{value:"Name",children:"Name"}),Object(l.jsx)("option",{value:"Nationality",children:"Nationality"}),Object(l.jsx)("option",{value:"Club",children:"Club"}),Object(l.jsx)("option",{value:"Position",children:"Position"})]}),Object(l.jsxs)("div",{className:"list-container",children:[Object(l.jsx)("input",{type:"text",placeholder:"Enter ".concat(c),onChange:function(e){var t=e.target.value;b(t)},value:j}),Object(l.jsx)("ul",{children:Object(l.jsx)(h,{SQ:j,SP:c})})]})]})]})})},p=c(3),x=(c(73),c(37)),m=function(e){var t=e.player,c={labels:["Crossing","Finishing","HeadingAccuracy","ShortPassing","Volleys"],datasets:[{label:"".concat(t.Name,"'s Skills"),data:[t.Crossing,t.Finishing,t.HeadingAccuracy,t.ShortPassing,t.Volleys],fill:!0,backgroundColor:"rgba(255, 99, 132, 0.4)",borderColor:"rgb(255, 99, 132)",pointBackgroundColor:"rgb(255, 99, 132)",pointRadius:5,pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(255, 99, 132)"}]};return Object(l.jsx)(x.a,{data:c,options:{maintainAspectRatio:!1,scale:{ticks:{beginAtZero:!0,max:100,stepSize:10}}},height:300,width:300})},u=function(e){var t=e.player;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Age \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.Age})]}),Object(l.jsxs)("li",{children:["Height \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.Height})]}),Object(l.jsxs)("li",{children:["Weight \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.Weight})]}),Object(l.jsxs)("li",{children:["Nationality \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.Nationality})]}),Object(l.jsxs)("li",{children:["Preferred Foot \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.PreferredFoot})]}),Object(l.jsxs)("li",{children:["Position \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.Position})]}),Object(l.jsxs)("li",{children:["Jersey Number \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.JerseyNumber})]}),Object(l.jsxs)("li",{children:["Work Rate(Attack - Defense) \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.WorkRate})]}),Object(l.jsxs)("li",{children:["Club \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.Club})]}),Object(l.jsxs)("li",{children:["Value \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.Value})]}),Object(l.jsxs)("li",{children:["Wage \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.Wage})]}),Object(l.jsxs)("li",{children:["Joined \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.Joined})]}),Object(l.jsxs)("li",{children:["Contract Valid Until \xa0\xa0\xa0",Object(l.jsx)("span",{children:t.ContractValidUntil})]})]})})},g=c.p+"static/media/Ronaldo.48fb1c7d.png",v=c.p+"static/media/Messi.1119bef8.png",y=c.p+"static/media/Neymar.83e74fef.png",f=c.p+"static/media/DeGea.02dac133.png",N=c.p+"static/media/Bruyne.621713f2.png",C=function(e){var t,c=e.playerObject,n={height:"30",width:"30",marginRight:"5px",display:"inline"};return t="Cristiano Ronaldo"===c.Name?g:"L. Messi"===c.Name?v:"Neymar Jr"===c.Name?y:"De Gea"===c.Name?f:N,Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"player-stats-container-div",children:[Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsxs)(i.b,{to:"/",children:[Object(l.jsx)(r.a,{style:n}),Object(l.jsx)("p",{id:"home-button",children:"Home"})]}),Object(l.jsxs)(i.b,{to:"/help",children:[Object(l.jsx)(r.b,{style:n}),Object(l.jsx)("p",{id:"help-button",children:"Help"})]})]}),Object(l.jsxs)("div",{className:"sub-container",children:[Object(l.jsxs)("div",{className:"player-name-container",children:[Object(l.jsx)("p",{className:"player-name",children:c.Name}),Object(l.jsx)("img",{src:t,alt:c.Name,height:70,width:70})]}),Object(l.jsxs)("div",{className:"player-stats-container",children:[Object(l.jsx)("div",{className:"col-left",children:Object(l.jsx)(m,{player:c})}),Object(l.jsxs)("div",{className:"col-right",children:[Object(l.jsxs)("div",{className:"concise-data-container",children:[Object(l.jsxs)("p",{children:["Overall: ",Object(l.jsx)("span",{children:c.Overall})]}),Object(l.jsxs)("p",{children:["Potential: ",Object(l.jsx)("span",{children:c.Potential})]})]}),Object(l.jsx)("div",{className:"list-container",children:Object(l.jsx)(u,{player:c})})]})]})]})]})})},P=function(){var e={height:"30",width:"30",marginRight:"5px",display:"inline"};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"main-div",children:[Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsxs)(i.b,{to:"/",children:[Object(l.jsx)(r.a,{style:e}),Object(l.jsx)("p",{id:"home-button",children:"Home"})]}),Object(l.jsxs)(i.b,{to:"/help",children:[Object(l.jsx)(r.b,{style:e}),Object(l.jsx)("p",{id:"help-button",children:"Help"})]})]}),Object(l.jsx)("div",{style:{minHeight:"80vh",maxWidth:"95vw",display:"grid",placeItems:"center"},children:Object(l.jsx)("p",{style:{fontSize:"3rem",color:"gray"},children:"Page Not Found"})})]})})},F=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){Object(b.a)(d).then((function(e){s(e)}))}),[]);for(var a=Object(p.f)().name,i=!1,r=0;r<c.length;r++)if(c[r].Name===a){i=r;break}if(!1===i)return Object(l.jsx)(P,{});var j=c[i],h=parseInt((parseInt(j.Crossing)+parseInt(j.Finishing)+parseInt(j.HeadingAccuracy)+parseInt(j.ShortPassing)+parseInt(j.Volleys))/parseInt(5));return j.Potential=h+parseInt(h/10),j.Potential=j.Potential>j.Overall?j.Potential:parseInt(j.Overall)+parseInt(2),Object(l.jsx)(C,{playerObject:j})},H=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(p.c,{children:[Object(l.jsx)(p.a,{exact:!0,path:"/",component:O}),Object(l.jsx)(p.a,{exact:!0,path:"/playerinfo/:name",component:F}),Object(l.jsx)(p.a,{exact:!0,path:"/help",component:j}),Object(l.jsx)(p.a,{path:"*",component:P})]})})};a.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(H,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.86ac15f8.chunk.js.map