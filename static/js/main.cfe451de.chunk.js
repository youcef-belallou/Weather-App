(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(4),i=n.n(c),r=(n(14),n(3)),o=n.n(r),l=n(5),h=n(6),d=n(7),m=n(9),u=n(8),p=(n(16),n(17),n(18),n(0));function j(e,t){if(e&&t)return Object(p.jsxs)("h3",{children:[Object(p.jsxs)("span",{className:"px-5",children:[e,"\xb0"]}),Object(p.jsxs)("span",{className:"px-5",children:[t,"\xb0"]})]})}var b=function(e){return Object(p.jsx)("div",{className:"container text-light",children:Object(p.jsxs)("div",{className:"cards pt-4",children:[Object(p.jsx)("h1",{children:e.city}),e.timezone?Object(p.jsx)("h4",{className:"py-2",children:e.timezone}):null,e.temp_celsius?Object(p.jsxs)("h1",{className:"py-2",children:[e.temp_celsius,"\xb0"]}):null,j(e.temp_min,e.temp_max),Object(p.jsx)("h5",{className:"py-4",children:Object(p.jsx)("i",{className:"wi ".concat(e.weatherIcon," display-1")})}),Object(p.jsx)("h4",{className:"py-2",children:e.description}),e.humidity?Object(p.jsxs)("h4",{className:"py-2",children:["Humidity:",e.humidity,"%"]}):null,e.wind?Object(p.jsxs)("h4",{className:"py-2",children:["Wind Speed: ",e.wind,"Kt"]}):null]})})};n(20);var x=function(e){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{children:e.error?Object(p.jsx)("div",{className:"alert alert-danger mx-5",role:"alert",children:"Please Enter City and Country"}):null}),Object(p.jsx)("form",{onSubmit:e.loadweather,children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-3 offset-md-2",children:Object(p.jsx)("input",{type:"text",className:"form-control",name:"city",autoComplete:"off",placeholder:"city"})}),Object(p.jsx)("div",{className:"col-md-3",children:Object(p.jsx)("input",{type:"text",className:"form-control",name:"country",autoComplete:"off",placeholder:"country"})}),Object(p.jsx)("div",{className:"col-md-3 mt-md-0 py-2 text-md-left",children:Object(p.jsx)("button",{className:"btn btn-warning",children:"Get Weather"})})]})})]})},w="2c02b27a7c6ad36875ac6291cdb636ef",y=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).getWeather=function(){var t=Object(l.a)(o.a.mark((function t(n){var s,a,c,i,r,l,h,d;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),s=n.target.elements.city.value,a=n.target.elements.country.value,!s||!a){t.next=22;break}return t.next=6,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(s,",").concat(a,"&appid=").concat(w));case 6:return c=t.sent,t.next=9,c.json();case 9:return i=t.sent,r=i.coord.lat,l=i.coord.lon,t.next=14,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(r,"&lon=").concat(l,"&exclude=hourly,daily&appid=").concat(w));case 14:return h=t.sent,t.next=17,h.json();case 17:d=t.sent,console.log(i),console.log(d),e.setState({city:"".concat(i.name,",").concat(i.sys.country),celsius:e.calCelsius(i.main.temp),temp_max:e.calCelsius(i.main.temp_max),temp_min:e.calCelsius(i.main.temp_min),description:i.weather[0].description,humidity:i.main.humidity,wind:i.wind.speed,error:!1,timezone:d.timezone}),e.get_WeatherIcon(e.weatherIcon,i.weather[0].id);case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={city:void 0,country:void 0,icon:void 0,main:void 0,celsius:void 0,temp_max:void 0,temp_min:void 0,description:"",error:!1,humidity:void 0,wind:void 0,timezone:void 0},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(d.a)(n,[{key:"calCelsius",value:function(e){return Math.floor(e-273.15)}},{key:"get_WeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<=232:this.setState({icon:this.weatherIcon.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:this.weatherIcon.Drizzle});break;case t>=500&&t<=531:this.setState({icon:this.weatherIcon.Rain});break;case t>=600&&t<=622:this.setState({icon:this.weatherIcon.Snow});break;case t>=701&&t<=781:this.setState({icon:this.weatherIcon.Atmosphere});break;case 800===t:this.setState({icon:this.weatherIcon.Clear});break;default:this.setState({icon:this.weatherIcon.Clouds})}}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(x,{loadweather:this.getWeather,error:this.state.error}),Object(p.jsx)(b,{city:this.state.city,country:this.state.country,temp_celsius:this.state.celsius,temp_min:this.state.temp_min,temp_max:this.state.temp_max,description:this.state.description,weatherIcon:this.state.icon,humidity:this.state.humidity,wind:this.state.wind,timezone:this.state.timezone})]})}}]),n}(a.a.Component),f=y,v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),v()}},[[21,1,2]]]);
//# sourceMappingURL=main.cfe451de.chunk.js.map