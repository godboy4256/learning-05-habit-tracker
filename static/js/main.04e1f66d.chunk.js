(this.webpackJsonptempelete=this.webpackJsonptempelete||[]).push([[0],{10:function(t,e,a){},12:function(t,e,a){},20:function(t,e,a){},21:function(t,e,a){},28:function(t,e,a){},29:function(t,e,a){"use strict";a.r(e);var n=a(2),i=a.n(n),s=a(14),c=a.n(s),r=(a(20),a(15)),b=a(3),h=a(4),o=a(6),u=a(5),l=(a(21),a(12),a(10),a(0)),j=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){return Object(b.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this,e=i.a.createRef();return Object(l.jsxs)("form",{className:"habitadd",onSubmit:function(a){a.preventDefault(),t.props.habitreset(e.current.value)},children:[Object(l.jsx)("input",{ref:e,className:"add-text",type:"text",placeholder:"add habit contents"}),Object(l.jsx)("input",{className:"add-submit button-style",type:"submit",value:"add"})]})}}]),a}(n.Component),p=a(8),d=a(7),O=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){return Object(b.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return Object(l.jsxs)("li",{className:"onehabit",children:[Object(l.jsx)("span",{className:"habitcon",children:this.props.habits.name}),Object(l.jsx)("span",{className:"habit-count count-style",children:this.props.habits.count}),Object(l.jsx)("i",{className:"habit-plus",onClick:function(){t.props.habitevent.habitplus(t.props.habits)},children:Object(l.jsx)(p.a,{icon:d.c})}),Object(l.jsx)("i",{className:"habit-minus",onClick:function(){t.props.habitevent.habitminus(t.props.habits)},children:Object(l.jsx)(p.a,{icon:d.b})}),Object(l.jsx)("i",{className:"habit-minus",onClick:function(e){t.props.habitevent.habitDelete(t.props.habits)},children:Object(l.jsx)(p.a,{icon:d.d})})]})}}]),a}(n.Component),f=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){return Object(b.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{habitreset:this.props.habitevent.habitAdd}),Object(l.jsx)("ul",{className:"habits",children:this.props.habits.map((function(e){return Object(l.jsx)(O,{habits:e,habitevent:t.props.habitevent},e.id)}))}),Object(l.jsx)("button",{className:"reset-all button-style",onClick:function(){t.props.habitevent.habitreset()},children:"Reset"})]})}}]),a}(n.Component),m=(a(28),function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){return Object(b.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(l.jsxs)("header",{className:"habit-trackr-header",children:[Object(l.jsx)("i",{className:"header-logo-leaf",children:Object(l.jsx)(p.a,{icon:d.a})}),Object(l.jsx)("h1",{children:"Habit Tracker"}),Object(l.jsx)("span",{className:"habit-super-count count-style",children:this.props.habitsall.filter((function(t){return t.count>0})).length})]})}}]),a}(n.Component)),v=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(b.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={habits:[{id:0,name:"coding",count:0},{id:1,name:"running",count:0},{id:2,name:"gaming",count:0}],habitEvents:{habitplus:function(e){e.count++;var a=t.state.habits;t.setState({habits:a})},habitminus:function(e){if(e.count>0){e.count--;var a=t.state.habits;t.setState({habits:a})}},habitreset:function(){t.state.habits.map((function(t){0!==t.count&&(t.count=0)}));var e=t.state.habits;t.setState({habits:e})},habitAdd:function(e){var a=[].concat(Object(r.a)(t.state.habits),[{id:t.state.habits.length+1,name:e,count:0}]);t.setState({habits:a})},habitDelete:function(e){var a=t.state.habits.filter((function(t){return e.id!==t.id}));t.setState({habits:a})}}},t}return Object(h.a)(a,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{habitsall:this.state.habits}),Object(l.jsx)(f,{habits:this.state.habits,habitevent:this.state.habitEvents})]})}}]),a}(n.Component);c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.04e1f66d.chunk.js.map