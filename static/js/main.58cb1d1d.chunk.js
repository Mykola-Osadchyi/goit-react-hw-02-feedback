(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(4),i=n.n(r),o=(n(17),n(5)),d=n(6),b=n(7),l=n(11),u=n(10),j=n(8),h=n.n(j);var v=function(e){var t=e.children;return Object(a.jsx)("div",{className:h.a.container,children:t})},O=n(9),f=n.n(O);var x=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{className:f.a.task,children:[t&&Object(a.jsx)("h2",{children:t}),n]})},p=n(2),k=n.n(p),g=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(a.jsx)("div",{className:k.a.list,children:t.map((function(e){return Object(a.jsx)("button",{className:k.a.button,type:"button",onClick:n,children:e.name},e.id)}))})},m=function(e){var t=e.good,n=e.neutral,c=e.bad,s=e.total,r=e.positivePercentage;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:k.a.statistics,children:[Object(a.jsxs)("span",{children:["Good: ",t]}),Object(a.jsxs)("span",{children:["Neutral: ",n]}),Object(a.jsxs)("span",{children:["Bad: ",c]}),Object(a.jsxs)("span",{children:["Total: ",s]}),Object(a.jsxs)("span",{children:["Positive feedback: ",Math.round(r),"%"]})]})})};var _=function(e){var t=e.message;return Object(a.jsx)("span",{children:t&&Object(a.jsx)("h4",{children:t})})},F=[{id:"btn-1",name:"Good"},{id:"btn-2",name:"Neutral"},{id:"btn-3",name:"Bad"}],P=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){var n=t.target.innerHTML.toLowerCase();e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return e.state.good/e.countTotalFeedback()*100},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(a.jsxs)(v,{children:[Object(a.jsx)(x,{title:"Please leave feedback",children:Object(a.jsx)(g,{options:F,onLeaveFeedback:this.handleIncrement})}),Object(a.jsx)(x,{title:"Statistics",children:this.countTotalFeedback()?Object(a.jsx)(m,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(a.jsx)(_,{message:"No feedback given"})})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={button:"Feedback_button__3DWIf",statistics:"Feedback_statistics__2KUl4"}},8:function(e,t,n){e.exports={container:"Container_container__PVCKn"}},9:function(e,t,n){e.exports={task:"Section_task__3ZBlZ"}}},[[18,1,2]]]);
//# sourceMappingURL=main.58cb1d1d.chunk.js.map