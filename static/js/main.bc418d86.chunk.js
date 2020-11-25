(this.webpackJsonpwea=this.webpackJsonpwea||[]).push([[0],{169:function(n,t,e){},170:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(24),o=e.n(i),c=e(13),u=r.a.createContext(),l=u.Provider,s=u.Consumer,p=e(4),f=e(5),d=function(){function n(){Object(p.a)(this,n),this.errors={404:"Unfortunately, the city was not found.",401:"service not working."},this.days="https://api.openweathermap.org/data/2.5/forecast?q=london&appid=78edeadf8a6a325f53559aab91892dbb",this.now="https://api.openweathermap.org/data/2.5/weather?q=london&appid=9c84cd2c676365232a2392dca3a2b7c5"}return Object(f.a)(n,[{key:"getWeather",value:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"london";return fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&appid=78edeadf8a6a325f53559aab91892dbb")).then((function(n){return n.json()})).then((function(t){return 200!==Number(t.cod)?n.errors[t.cod]?n.errors[404]:"Something went wrong!":t})).catch((function(n){return""}))}}]),n}(),m=e(9),b=e(8),h=e(26),g=e.n(h),y=e(37),x=e.n(y),v=e(1),j=e(2);function w(){var n=Object(v.a)(["\n    padding: 7px 15px;\n    border: none;\n    border-radius: 4px;\n    color: #353535;\n    font-size: 17px;\n    font-family: 'Nunito-Bold';\n"]);return w=function(){return n},n}function O(){var n=Object(v.a)(["\n    font-size: 25px;\n    font-family: 'Nunito-Black';\n    color: #fff;\n    position: relative;\n    transition: 1s;\n    &:after {\n        content: '';\n        position: absolute;\n        bottom: -2px;\n        left: 0;\n        height: 5px;\n        width: 0%;\n        background-color: #24E138;\n        border-radius: 2px;\n        animation: "," 2s forwards ease-out;\n    }\n"]);return O=function(){return n},n}function E(){var n=Object(v.a)(["\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translate(-50%, 0%);\n    font-size: 1.5em;\n    color: #666666;\n    font-family: 'Nunito-Bold';\n    text-transform: capitalize;\n    opacity: .2;\n    z-index: 2;\n"]);return E=function(){return n},n}function k(){var n=Object(v.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    transition: 1s;\n    width: 100%;\n    max-width: 90%;\n    margin: 0 auto;\n    & span {\n        display: block;\n        margin: 0px 10px;\n        color: #fff;\n        font-family: 'Nunito-Bold';\n        font-feature-settings: \"thum\";\n        font-variant-numeric: tabular-nums;\n        font-size: 1em;\n        letter-spacing: 0.05em;\n    }\n"]);return k=function(){return n},n}function C(){var n=Object(v.a)(["\n    width: 100%;\n    min-height: 60px;\n    background-color: #417AFF;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    position: relative;\n"]);return C=function(){return n},n}function z(){var n=Object(v.a)(["\n    0% {\n        left: 0;\n        width: 0%;\n    }\n    50% {\n        left: 0;\n        width: 100%;\n    }\n    100% {\n        left: 100%;\n        right: 0;\n        width: 0%;\n    }\n"]);return z=function(){return n},n}var D=Object(j.b)(z()),F=j.a.div(C()),T=j.a.header(k()),N=j.a.div(E()),W=j.a.div(O(),D);j.a.input(w());function S(){var n=Object(v.a)(["\n    font-size: 25px;\n    font-family: 'Nunito-Bold';\n    font-family: 'Nunito-Black';\n    color: #fff;\n    position: relative;\n    animation: "," 3s linear infinite;\n    &:after {\n        content: '';\n        position: absolute;\n        animation: "," 4s linear infinite;\n    }\n"]);return S=function(){return n},n}function B(){var n=Object(v.a)(["\n    0% {\n        opacity: 0;\n        content: '';\n    }\n    25% {\n        opacity: 1;\n        content: '.';\n    }\n    50% {\n        content: '..';\n    }\n    75% {\n        opacity: 1;\n        content: '...';\n    }\n    86% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 0;\n        content: '';\n    }\n\n"]);return B=function(){return n},n}function L(){var n=Object(v.a)(["\n    0% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(1.06);\n    }\n    100% {\n        transform: scale(1);\n    }\n"]);return L=function(){return n},n}var M=Object(j.b)(L()),A=Object(j.b)(B()),H=j.a.div(S(),M,A),Y=function(n){var t=n.children;return r.a.createElement(H,null,t)},U=function(n){Object(m.a)(e,n);var t=Object(b.a)(e);function e(){var n;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))).state={city:"London",mm:g()().tz("Europe/London").format("HH:mm")},n.onUpdateTime=function(){var t=n.props.state.searchCity.replace(/(^|\s)\S/g,(function(n){return n.toUpperCase()})),e=x.a.lookupViaCity(t).filter((function(n){return n.timezone.includes(t.replace(" ","_"))}));e[0]&&n.setState({city:t,mm:g()().tz(e[0].timezone).format("HH:mm")})},n.onGetTime=function(n){var t=n.replace(/(^|\s)\S/g,(function(n){return n.toUpperCase()})),e=x.a.lookupViaCity(t).filter((function(n){return n.timezone.includes(t.replace(" ","_"))}));return e[0]?g()().tz(e[0].timezone).format("HH:mm"):"Ops..."},n}return Object(f.a)(e,[{key:"render",value:function(){var n=this.props.state,t=n.isLoading,e=n.searchCity,a=this.onGetTime(e);return r.a.createElement(F,null,r.a.createElement(T,null,t?r.a.createElement(Y,null,"Wea"):r.a.createElement(W,null,"Wea"),r.a.createElement(N,null,a)))}},{key:"componentDidMount",value:function(){this.int=setInterval(this.onUpdateTime,1e3)}},{key:"componentDidUpdate",value:function(){var n=this.props.state.searchCity;n.toLowerCase()!==this.state.city.toLowerCase()&&this.onGetTime(n)}}]),e}(a.Component),_=Object(c.b)((function(n){return{state:n}}))(U),I=e(3),P=function(){return function(n){return function(t){return r.a.createElement(s,null,(function(e){return r.a.createElement(n,Object.assign({},t,{service:e}))}))}}},R=e(62),q=e(11),G=e.n(q),J=e(61),V=function(n){Object(m.a)(e,n);var t=Object(b.a)(e);function e(n){var a;return Object(p.a)(this,e),(a=t.call(this,n)).state={data:{labels:a.props.data.map((function(n){return n.time.split("")[0]+n.time.split("")[1]+"h"})),datasets:[{label:"Temperature",data:a.props.data.map((function(n){return Math.floor(n.temp-273.15)})),borderWidth:"1",borderColor:"#3564D0",backgroundColor:"rgba(65,122,255, .3)"}]}},a}return Object(f.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J.Line,{data:this.state.data,width:100,height:70}))}}]),e}(a.Component),K=["img/hailstorm.svg","img/autumn.svg"],Q=["img/raining.svg","img/cold.svg"],X=["img/snow.svg","img/autumn.svg"],Z=["img/sun.svg","img/sunny.svg"],$=function(n){switch(n.toLowerCase()){case"clouds":return K;case"sun":return Z;case"snow":return X;case"rain":return Q;default:return Z}};function nn(){var n=Object(v.a)(["\n    opacity: .7;\n    display: block;\n    margin: 0px 0px 10px 0px;\n    font-family: 'Nunito-regular';\n    font-size: 12px;\n    line-height: 16px;\n    color: rgba(0, 0, 0, 0.5);\n"]);return nn=function(){return n},n}function tn(){var n=Object(v.a)(["\n    width: 50px;\n    height: 80px;\n"]);return tn=function(){return n},n}function en(){var n=Object(v.a)(["\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n"]);return en=function(){return n},n}function an(){var n=Object(v.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 10px 5px;\n    height: 170px;\n    border-left: 1px solid rgba(148,148,148, .1);\n    & div {\n        overflow-y: auto;\n        display: inline-flex;\n        flex-direction: column;\n    }\n    & span {\n        font-family: 'Nunito-regular';\n        opacity: .6;\n        margin: 2px 0px;\n        padding: 7px 10px;\n        font-size: 15px;\n        transition: .3s;\n        color: #000;\n        border-radius: 5px;\n    }\n    & span:hover {\n        opacity: 1;\n    }\n    & span.show {\n        transition: .3s;\n        color: #fff;\n        opacity: 1;\n        background-color: rgba(65,122,255);\n    }\n"]);return an=function(){return n},n}function rn(){var n=Object(v.a)(["\n    width: 40px;\n    height: 40px;\n    opacity: .5;\n"]);return rn=function(){return n},n}function on(){var n=Object(v.a)(["\n    margin-top: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    & span {\n        font-family: 'Nunito-regular';\n        margin-top: 10px;\n        display: flex;\n        font-size: 25px;\n        line-height: 34px;\n        color: #000000;\n    }\n"]);return on=function(){return n},n}function cn(){var n=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 70px 65px;\n    line-height: 24px;\n    & span {\n        font-family: 'Nunito-regular';\n        font-size: 14px;\n        color: rgba(0, 0, 0, 0.5);\n    }\n    & div {\n        font-family: 'Nunito-bold';\n        font-size: 13px;\n        color: rgba(0, 0, 0, 0.6);\n    }\n"]);return cn=function(){return n},n}function un(){var n=Object(v.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return un=function(){return n},n}function ln(){var n=Object(v.a)(["\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n"]);return ln=function(){return n},n}function sn(){var n=Object(v.a)(["\n    width: 100%;\n    padding: 15px;\n    display: flex;\n    justify-content: space-between;\n"]);return sn=function(){return n},n}function pn(){var n=Object(v.a)(["\n    border: ",";\n    background-color: #fff;\n    box-shadow: 0px 1px 23px rgba(65, 122, 255, 0.25);\n    width: 95%;\n    max-width: 400px;\n    margin: 0 auto;\n    border-top: none;\n    border-radius: 0px 0px 5px 5px;\n    transform-origin: top;\n    position: relative;\n    margin-top: ",";\n    opacity: ",";\n    /* animation: "," 1s 1s forwards ease-out; */\n    transition: ",";\n    transform: ",";\n    @media (min-width: 771px) {\n        margin-top: 0px;\n        width: 100%;\n        opacity: 1;\n        transform: scaleY(1);\n    }\n"]);return pn=function(){return n},n}function fn(){var n=Object(v.a)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return fn=function(){return n},n}var dn=Object(j.b)(fn()),mn=j.a.div(pn(),(function(n){return n.border}),(function(n){return n.margin||"0px"}),(function(n){return n.margin?"0":"1"}),dn,(function(n){return n.margin?"2s":".8s"}),(function(n){return n.margin?"scaleY(0)":"scaleY(1)"})),bn=j.a.div(sn()),hn=j.a.div(ln()),gn=j.a.div(un()),yn=j.a.div(cn()),xn=j.a.div(on()),vn=j.a.div(rn()),jn=j.a.div(an()),wn=j.a.div(en()),On=j.a.div(tn()),En=j.a.span(nn()),kn=function(n){Object(m.a)(e,n);var t=Object(b.a)(e);function e(n){var r;return Object(p.a)(this,e),(r=t.call(this,n)).getTemp=function(n){return Math.floor(n-273.15)},r.changeTime=function(n){r.setState((function(){return Object(I.a)(Object(I.a)({},r.state),{},{idx:n})}))},r.isClosed=Object(a.createRef)(),r.state={height:170,idx:0,list:r.props.data},r}return Object(f.a)(e,[{key:"componentDidMount",value:function(){var n=this;this.setState((function(){return{height:n.isClosed.current.offsetHeight}}))}},{key:"render",value:function(){var n=this,t=new window.Date,e=this.props.isOpened,a=this.state;console.log(a.list[a.idx]);var i=a.list[a.idx],o=i.day,c=i.windy,u=i.humidity,l=i.cloudly,s=i.temp,p=i.weather,f=i.dayWeek;return r.a.createElement(mn,{ref:this.isClosed,margin:e&&"-".concat(this.state.height,"px"),isOpened:e,border:o===t.getDate()?"3px solid #417AFF":"none"},r.a.createElement(gn,null,r.a.createElement(bn,null,r.a.createElement(hn,null,r.a.createElement(En,null,o," ",G()().format("MMM"),". ",f),r.a.createElement(yn,null,r.a.createElement("span",null,"windy"),r.a.createElement("div",null,Math.floor(c)," km/h"),r.a.createElement("span",null,"cloudly"),r.a.createElement("div",null,l,"%"),r.a.createElement("span",null,"humidity"),r.a.createElement("div",null,u,"%")),r.a.createElement(xn,null,r.a.createElement("span",null,this.getTemp(s),"\xb0 C"))),r.a.createElement(wn,null,r.a.createElement(vn,null,r.a.createElement("img",{src:$(p)[0],alt:"weather"})),r.a.createElement(On,null,r.a.createElement("img",{src:$(p)[1],alt:"human"})))),r.a.createElement(jn,null,r.a.createElement("div",null,a.list.map((function(t,e){return r.a.createElement("span",{onClick:function(){return n.changeTime(e)},key:t.id,className:e===a.idx?"show":""},t.time)}))))))}}]),e}(a.Component);function Cn(){var n=Object(v.a)(["\n    margin-top: 20px;\n    font-family: 'Nunito-regular';\n    font-size: 30px;\n    line-height: 41px;\n    color: #000000;\n    opacity: 0;\n    animation: "," .9s 2s forwards ease-out;\n"]);return Cn=function(){return n},n}function zn(){var n=Object(v.a)(["\n    text-align: left;\n    margin-top: 40px;\n    display: grid;\n    grid-template-columns: 40px 70px 70px;\n    align-items: center;\n    opacity: 0;\n    animation: "," 1s 1.2s forwards ease-out;\n    & span {\n        font-family: 'Nunito-regular';\n        font-size: 15px;\n        line-height: 20px;\n        color: rgba(0, 0, 0, 0.5);\n    }\n    & span + div {\n        font-family: 'Nunito-bold';\n        font-size: 15px;\n        line-height: 20px;\n        color: rgba(0, 0, 0, 0.6);\n    }\n"]);return zn=function(){return n},n}function Dn(){var n=Object(v.a)(["\n    pointer-events: none;\n    width: 30px;\n    height: 30px;\n    & img {\n        object-fit: cover;\n        width: inherit;\n        height: inherit;\n    }\n"]);return Dn=function(){return n},n}function Fn(){var n=Object(v.a)(["\n    pointer-events: none;\n    width: 100px;\n    height: 100px;\n    & svg, img {\n        object-fit: cover;\n        width: inherit;\n        height: inherit;\n    }\n    opacity: 0;\n    animation: "," .9s 3s forwards ease-out;\n    transition: 1s;\n"]);return Fn=function(){return n},n}function Tn(){var n=Object(v.a)(["\n    display: flex;\n    flex-direction: column;\n    opacity: 0;\n    animation: "," 1s .5s forwards ease-out;\n    text-align: left;\n    & div {\n        font-family: 'Nunito-bold';\n        font-size: 20px;\n        line-height: 27px;\n        color: #000000;\n    }\n    & span {\n        font-family: 'Nunito-regular';\n        font-size: 12px;\n        line-height: 16px;\n        color: rgba(0, 0, 0, 0.5);\n    }\n"]);return Tn=function(){return n},n}function Nn(){var n=Object(v.a)(["\n    display: flex;\n    align-items: ",";\n    justify-content: space-between;\n    flex-direction: column;\n"]);return Nn=function(){return n},n}function Wn(){var n=Object(v.a)(["\n    padding: 15px;\n    border-radius: 5px;\n    z-index: 5;\n    position: relative;\n    border: ",";\n    max-width: 400px;\n    margin-top: 25px;\n    box-shadow: 0px 0px 20px 2px rgba(65, 122, 255, 0.25);\n    background-color: #F7F7F7;\n    & canvas {\n        animation: "," 1s forwards ease-out;\n    }\n"]);return Wn=function(){return n},n}function Sn(){var n=Object(v.a)(["\n    margin-top: 25px;\n    width: 100%;\n    max-width: 400px;\n    padding: 15px;\n    background-color: #F7F7F7;\n    border-radius: 5px;\n    border: ",";\n    box-shadow: 0px 0px 20px 2px rgba(65, 122, 255, 0.25);\n    display: flex;\n    justify-content: space-between;\n    z-index: 5;\n    position: relative;\n    transition: 1s;\n    @media (min-width: 771px) {\n        box-shadow: 0px 0px 20px 2px rgba(65, 122, 255, 0.25);\n        border-radius: 5px 5px 0px 0px;\n        border-bottom: none;\n    }\n"]);return Sn=function(){return n},n}function Bn(){var n=Object(v.a)(["\n    position: relative;\n    max-width: 400px;\n    z-index: 2;\n"]);return Bn=function(){return n},n}function Ln(){var n=Object(v.a)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return Ln=function(){return n},n}function Mn(){var n=Object(v.a)(["\n    0% {\n        opacity: 0;\n        transform: scale(.2);\n    }\n    100% {\n        opacity: 1;\n        transform: scale(1);\n    }\n"]);return Mn=function(){return n},n}function An(){var n=Object(v.a)(["\n    0% {\n        opacity: 0;\n        transform: translate(-10px);\n    }\n    100% {\n        opacity: 1;\n        transform: translate(0px);\n    }\n"]);return An=function(){return n},n}function Hn(){var n=Object(v.a)(["\n    0% {\n        opacity: 0;\n        transform: translateY(10px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0px);\n    }\n"]);return Hn=function(){return n},n}function Yn(){var n=Object(v.a)(["\n    0% {\n        opacity: 0;\n        transform: scale(1.2);\n    }\n    100% {\n        opacity: 1;\n        transform: scale(1);\n    }\n"]);return Yn=function(){return n},n}var Un=Object(j.b)(Yn()),_n=Object(j.b)(Hn()),In=Object(j.b)(An()),Pn=Object(j.b)(Mn()),Rn=Object(j.b)(Ln()),qn=j.a.div(Bn()),Gn=j.a.div(Sn(),(function(n){return n.border})),Jn=j.a.div(Wn(),(function(n){return n.border}),Rn),Vn=j.a.div(Nn(),(function(n){return n.center?"center":"stretch"})),Kn=j.a.div(Tn(),In),Qn=j.a.div(Fn(),Un),Xn=j.a.div(Dn()),Zn=j.a.div(zn(),_n),$n=j.a.span(Cn(),Pn),nt=function(n){var t=n.data,e=new window.Date,i=Object(a.useState)(!0),o=Object(R.a)(i,2),c=o[0],u=o[1],l=t[0],s=l.day,p=l.windy,f=l.humidity,d=l.cloudly,m=l.dayWeek,b=l.temp,h=l.weather;return r.a.createElement(qn,null,r.a.createElement("div",{onClick:function(){u((function(){return!c}))}},c?r.a.createElement(Gn,{border:s===e.getDate()?"3px solid #417AFF":"none"},r.a.createElement(Vn,null,r.a.createElement(Kn,null,r.a.createElement("div",null,s===e.getDate()?"Today":s===e.getDate()+1?"Tomorrow":""),r.a.createElement("span",null,s," ",G()().format("MMM"),". ",m)),r.a.createElement(Zn,null,r.a.createElement(Xn,null,r.a.createElement("img",{src:"img/windy.svg",alt:"windy"})),r.a.createElement("span",null,"windy"),r.a.createElement("div",null,Math.floor(p)," km/h"),r.a.createElement(Xn,null,r.a.createElement("img",{src:"img/fog.svg",alt:"fog"})),r.a.createElement("span",null,"cloudly"),r.a.createElement("div",null,d,"%"),r.a.createElement(Xn,null,r.a.createElement("img",{src:"img/humidity.svg",alt:"humidity"})),r.a.createElement("span",null,"humidity"),r.a.createElement("div",null,f,"%"))),r.a.createElement(Vn,{center:!0},r.a.createElement(Qn,null,r.a.createElement("img",{src:$(h)[0],alt:"weather"})),r.a.createElement($n,null,Math.floor(b-273.15),"\xb0 C"))):r.a.createElement(Jn,{border:s===e.getDate()?"3px solid #417AFF":"none"},r.a.createElement(V,{data:t}))),r.a.createElement(kn,{isOpened:c,data:t}))};function tt(){var n=Object(v.a)(["\n    text-align: right;\n    width: 70%;\n    opacity: 0;\n    animation: "," .7s 2s forwards ease-out;\n"]);return tt=function(){return n},n}function et(){var n=Object(v.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    & h1 {\n        opacity: 0;\n        animation: "," 1s .3s forwards ease-out;\n        font-family: 'Nunito-Bold';\n        font-size: 1em;\n        color: #3E3E3E;\n    }\n    & span {\n        display: block;\n        margin-top: 20px;\n        font-family: 'Nunito-regular';\n        font-size: .7em;\n        opacity: 0;\n        color: #3E3E3E;\n        animation: "," .7s 4s forwards ease-out;\n    }\n"]);return et=function(){return n},n}function at(){var n=Object(v.a)(["\n    animation: "," 1s forwards ease-out;\n    margin-top: 25px;\n    width: 100%;\n    max-width: 400px;\n    padding: 15px;\n    background-color: #F7F7F7;\n    border-radius: 5px;\n    border: 2px solid #DC4545;\n    box-shadow: 0px 0px 20px 2px rgba(220, 69, 69, 0.25);\n    display: flex;\n    justify-content: space-between;\n    & img {\n        width: inherit;\n    }\n"]);return at=function(){return n},n}function rt(){var n=Object(v.a)(["\n    0% {\n        transform: scale(.7);\n        opacity: 0;\n    }\n    100% {\n        transform: scale(1);\n        opacity: .6;\n    }\n"]);return rt=function(){return n},n}function it(){var n=Object(v.a)(["\n    0% {\n        transform: scale(.9);\n        opacity: 0;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n"]);return it=function(){return n},n}var ot=Object(j.b)(it()),ct=Object(j.b)(rt()),ut=j.a.div(at(),ot),lt=j.a.div(et(),ot,ct),st=j.a.div(tt(),ct),pt=function(n){var t=n.caption;return r.a.createElement(ut,null,r.a.createElement(lt,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t),r.a.createElement("span",null,"Please, try another city.")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Ops... Something went wrong!"),r.a.createElement("span",null,"Please, check your network, or try later."))),r.a.createElement(st,null,r.a.createElement("img",{src:"img/support.svg",alt:"error"})))};function ft(){var n=Object(v.a)(["\n    margin-top: 50px;\n    font-family: 'Nunito-Bold';\n    font-size: 1.2em;\n    opacity: .2;\n    transition: 3s;\n    &:after {\n        content: '';\n        color: #000;\n        animation: "," 5s infinite linear;\n        font-family: 'Nunito-Bold';\n        z-index: 20;\n    }\n    &:active {\n        transition: .2s;\n        opacity: 1;\n    }\n"]);return ft=function(){return n},n}function dt(){var n=Object(v.a)(["\n    0% {\n        content: '';\n        opacity: 0;\n    }\n    20% {\n        content: '.';\n        opacity: 1;\n    }\n    40% {\n        content: '..';\n    }\n    60% {\n        content: '...'\n    }\n    80% {\n        opacity: 0;\n        content: '...'\n    }\n    90% {\n        content: '...'\n    }\n    100% {\n        opacity: 0;\n        content: '';\n    }\n\n"]);return dt=function(){return n},n}var mt=Object(j.b)(dt()),bt=j.a.div(ft(),mt),ht=function(){return r.a.createElement(bt,null,"Waiting for your action")};function gt(){var n=Object(v.a)(["\n    opacity: 0;\n    animation: "," .6s forwards ease-out;\n    @media (min-width: 771px) {\n        margin: 10px 20px;\n    }\n"]);return gt=function(){return n},n}function yt(){var n=Object(v.a)(["\n    padding: 20px 0px;\n    max-width: 90%;\n    margin: 0 auto;\n    & ul {\n        \n        @media (min-width: 771px) {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n        }\n        @media (min-width: 1300px) {\n            display: grid;\n            grid-template-columns: 1fr 1fr 1fr;\n        }\n        /* justify-content: space-between;\n        flex-wrap: wrap; */\n    }\n"]);return yt=function(){return n},n}function xt(){var n=Object(v.a)(["\n    background-image: url(/weather/img/loupe.svg);\n    background-size: 25px 25px;\n"]);return xt=function(){return n},n}function vt(){var n=Object(v.a)(["\n    background-image: url(/weather/img/close.svg);\n    background-size: 20px 20px;\n"]);return vt=function(){return n},n}function jt(){var n=Object(v.a)(["\n    font-size: 30px;\n    padding: 5px 0px;\n    position: relative;\n    min-height: 80px;\n    background-color: transparent;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    & input {\n        width: 100%;\n        border: none;\n        background-color: transparent;\n        font-size: 27px;\n        color: #474747;\n        text-align: center;\n        font-family: 'Nunito-Bold';\n        text-transform: capitalize;\n    }\n    & input::placeholder{\n        opacity: .5;\n        font-size: 20px;\n    }\n    &:hover button {\n        opacity: .3;\n        pointer-events: auto;\n        z-index: 2;\n    }\n    &:hover button:last-child {\n        animation: "," 2.5s infinite linear;\n    }\n    & button:first-child:hover {\n        animation: "," .4s ease-out;\n    }\n    & button {\n        transition: 2s;\n        border: none;\n        border-radius: 5px;\n        padding: 20px;\n        background-color: transparent;\n        opacity: 0;\n        width: 30px;\n        height: 30px;\n        background-repeat: no-repeat;\n        background-position: center center;\n        z-index: -5;\n        @media (min-width: 771px) {\n            opacity: .3;\n            pointer-events: auto;\n            z-index: 2;\n        }\n    }\n    & button:first-child:active {\n        transition: .1s;\n        background-color: #E6E6E6;\n    }\n    & button:last-child:active {\n        transition: .1s;\n        background-color: rgba(35,184,57, .8);\n    }\n"]);return jt=function(){return n},n}function wt(){var n=Object(v.a)(["\n    0% {\n        opacity: 0;\n        transform: scale(.9);\n    }\n    100% {\n        opacity: 1;\n        transform: scale(1);\n    }\n"]);return wt=function(){return n},n}function Ot(){var n=Object(v.a)(["\n    0% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(.9);\n    }\n    100% {\n        transform: scale(1);\n    }\n"]);return Ot=function(){return n},n}function Et(){var n=Object(v.a)(["\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(180deg);\n    }\n"]);return Et=function(){return n},n}var kt=Object(j.b)(Et()),Ct=Object(j.b)(Ot()),zt=Object(j.b)(wt()),Dt=j.a.form(jt(),Ct,kt),Ft=j.a.button(vt()),Tt=j.a.button(xt()),Nt=j.a.div(yt()),Wt=j.a.li(gt(),zt),St=function(n){Object(m.a)(e,n);var t=Object(b.a)(e);function e(){var n;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))).state={city:"London"},n.compareData=function(t){for(var e=n.props.state,a=t.list,r=[],i=[],o=0,c=0,u=0;u>=0&&a[u];u++){var l=new Date(1e3*a[u].dt);o!==l.getDate()&&(o=l.getDate(),i.length&&r.push(i),i=[]);var s={id:c,date:a[u].dt,day:l.getDate(),dayWeek:e.weekDays[l.getDay()],time:l.getHours()<10?"0".concat(l.getHours(),":00"):"".concat(l.getHours(),":00"),windy:a[u].wind.speed,cloudly:a[u].clouds.all,humidity:a[u].main.humidity,temp:a[u].main.temp,weather:a[u].weather[0].main};i.push(s),c++}return r},n.onChange=function(t){t.preventDefault();var e=n.props.onWaiting;n.setState(Object(I.a)(Object(I.a)({},n.state),{},{city:t.target.value})),e()},n.onClear=function(t){t.preventDefault(),n.setState(Object(I.a)(Object(I.a)({},n.state),{},{city:""})),n.onChange(t)},n.onSearch=function(t){t.preventDefault();var e=n.props,a=e.state,r=e.service,i=e.updateForecast,o=e.searchByCity;n.state.city.trim()?(o(n.state.city.trim()),r.getWeather(n.state.city.trim()).then((function(t){t.list?i(n.compareData(t)):i(t)}))):(n.setState(Object(I.a)(Object(I.a)({},n.state),{},{city:a.defaultCity})),r.getWeather(n.state.defaultCity).then((function(t){t.list&&i(n.compareData(t))})))},n}return Object(f.a)(e,[{key:"componentDidMount",value:function(){var n=this,t=this.props,e=t.service,a=t.updateForecast,r=t.state;e.getWeather(r.searchByCity).then((function(t){t.list?a(n.compareData(t)):a(t)}))}},{key:"render",value:function(){var n=-4,t=this.props.state;return r.a.createElement(Nt,null,r.a.createElement(Dt,{onSubmit:this.onSearch},r.a.createElement(Ft,{type:"reset",onClick:this.onClear}),r.a.createElement("input",{placeholder:"Write Your City",onChange:this.onChange,value:this.state.city}),r.a.createElement(Tt,{onClick:this.onSearch})),t.errorBoundry?r.a.createElement(pt,{caption:t.errorType}):t.isWaiting?r.a.createElement(ht,null):r.a.createElement("ul",null,!t.isLoading&&t.forecast.map((function(t){return n=0===n?n+4:4===n?4:n+4,r.a.createElement(Wt,{style:{animationDelay:"".concat(n,"s")},key:t[0].id},r.a.createElement(nt,{data:t}))}))))}}]),e}(a.Component),Bt={searchByCity:function(n){return{type:"SEARCH_BY_CITY",payload:n}},updateForecast:function(n){return{type:"UPDATE_FORECAST",payload:n}},onWaiting:function(){return{type:"WAIT"}}},Lt=P()(Object(c.b)((function(n){return{state:n}}),Bt)(St)),Mt=function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(Lt,null))},At=e(25),Ht={isLoading:!0,errorBoundry:!1,errorType:"",isWaiting:!1,weekDays:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],defaultCity:"London",searchCity:"London",forecast:[]},Yt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FORECAST":return"string"===typeof t.payload?Object(I.a)(Object(I.a)({},n),{},{isLoading:!1,isWaiting:!1,errorBoundry:!0,errorType:t.payload}):Object(I.a)(Object(I.a)({},n),{},{errorBoundry:!1,isWaiting:!1,isLoading:!1,forecast:t.payload});case"SEARCH_BY_CITY":return Object(I.a)(Object(I.a)({},n),{},{isLoading:!0,isWaiting:!1,searchCity:t.payload});case"WAIT":return Object(I.a)(Object(I.a)({},n),{},{isWaiting:!0,isLoading:!1});default:return n}},Ut=Object(At.b)(Yt),_t=(e(169),new d);o.a.render(r.a.createElement(c.a,{store:Ut},r.a.createElement(l,{value:_t},r.a.createElement(Mt,null))),document.getElementById("root"))},63:function(n,t,e){n.exports=e(170)}},[[63,1,2]]]);
//# sourceMappingURL=main.bc418d86.chunk.js.map