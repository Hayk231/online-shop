(window["webpackJsonponline-shop"]=window["webpackJsonponline-shop"]||[]).push([[0],{11:function(e,t,a){e.exports={admin:"Admin__admin___1O2go",log_form:"Admin__log_form___3XmnU",admin_panel:"Admin__admin_panel___327_n",admin_add_cont_top:"Admin__admin_add_cont_top___2QEsz",list_cont:"Admin__list_cont___3gS55",input_can_edit:"Admin__input_can_edit___2kBfW",admin_add_par:"Admin__admin_add_par___1NeXZ",admin_add_cont:"Admin__admin_add_cont___1HF1L",admin_add_img:"Admin__admin_add_img___1-LAN",admin_add_inputs:"Admin__admin_add_inputs___2jPUX",admin_add_del:"Admin__admin_add_del___2YeHY",admin_add_cont_opened:"Admin__admin_add_cont_opened___acSAq"}},21:function(e,t,a){e.exports={header:"Header__header___3i1v2",connect:"Header__connect___1xXgL",connect_cont:"Header__connect_cont___MXSpB",user_info:"Header__user_info___3SjkQ",user_login:"Header__user_login___370rd",user_logged:"Header__user_logged___2KrDO",outButt:"Header__outButt___330SN",user_favours:"Header__user_favours___EIz9q"}},24:function(e,t,a){e.exports={favour_head:"Favours__favour_head___3n2vt",favours_par:"Favours__favours_par___3Vpsm",favour_child:"Favours__favour_child___Xtk1f",favour_child_img:"Favours__favour_child_img___2NHZW",favour_child_cont:"Favours__favour_child_cont___2DPgh",favour_child_remove:"Favours__favour_child_remove___3GgBg"}},25:function(e,t,a){e.exports={prod_head:"Products__prod_head___369ZW",product:"Products__product___3i_pV",img_div:"Products__img_div___3b4re",cont_div:"Products__cont_div___1ouqj"}},28:function(e,t,a){e.exports={content:"DefContent__content___1tKsQ",head_img:"DefContent__head_img___3Ncs6",home_cont:"DefContent__home_cont___33xwx",opened:"DefContent__opened___1obJK"}},45:function(e,t,a){e.exports={App:"App__App___wmyqV"}},53:function(e,t,a){e.exports={shop_head:"ShopHead__shop_head___1BBXh"}},55:function(e,t,a){e.exports=a(78)},64:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),c=a.n(o),i=a(32),s=a(54),l=a(44);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var m={allData:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA":return d({},e,{allData:[]});default:return e}},_=a(19),f=(a(64),a(5)),h=a(6),v=a(8),g=a(7),E=a(9),b=a(45),y=a.n(b),O=a(21),j=a.n(O),P=a(46),k=a(36),I=(a(65),{apiKey:"AIzaSyAd_iZpMCUr64IfgmpMC8VzMlNxc89lyXU",authDomain:"online-shop-757ab.firebaseapp.com",databaseURL:"https://online-shop-757ab.firebaseio.com",projectId:"online-shop-757ab",storageBucket:"online-shop-757ab.appspot.com",messagingSenderId:"454382573274",appId:"1:454382573274:web:b301179a639886b28f37e3",measurementId:"G-HGLPLTY0Q2"}),A=a(12),w=a(17),N=a(47),C=a(48),U=k.initializeApp(I).auth(),D={googleProvider:new k.auth.GoogleAuthProvider},S=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).handleOutClick=function(e){var t=document.getElementById("userPop"),n=document.getElementById("userIcon");if("flex"===t.style.display){if(a.popRef.contains(e.target)||e.target===n)return;a.closeUserPop()}},a.signInHandler=function(){a.props.signInWithGoogle().then(function(e){})},a.openUserPopup=function(){document.getElementById("userPop").style.display="flex"},a.closeUserPop=function(){document.getElementById("userPop").style.display="none"},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleOutClick)}},{key:"componentDidUpdate",value:function(e,t,a){e.user!==this.props.user&&this.props.saveUser(this.props.user)}},{key:"render",value:function(){var e=this,t=this.props.userProducts?this.props.userProducts.length:"";return r.a.createElement("div",{className:j.a.header},r.a.createElement(_.b,{to:"/shop",style:{height:"100%"}},r.a.createElement("img",{src:"/online-shop/Images/head-logo.png",alt:"logo"})),r.a.createElement("div",{className:j.a.connect},this.props.user?r.a.createElement(_.b,{to:"/favours"},r.a.createElement("div",{className:j.a.user_favours},r.a.createElement("span",null,t),r.a.createElement(A.a,{icon:w.b}))):null,r.a.createElement("div",{className:j.a.connect_cont,ref:function(t){return e.popRef=t}},r.a.createElement(A.a,{icon:N.faUserCircle,onClick:this.openUserPopup,id:"userIcon"}),r.a.createElement("div",{className:j.a.user_info,id:"userPop"},this.props.user?r.a.createElement("div",{className:j.a.user_logged},r.a.createElement("img",{src:this.props.user.photoURL,alt:"profPic"}),r.a.createElement("span",null,this.props.user.displayName),r.a.createElement("button",{onClick:this.props.signOut,className:j.a.outButt},"Sign Out")):r.a.createElement("div",{className:j.a.user_login,onClick:this.signInHandler},r.a.createElement("div",null,r.a.createElement(A.a,{icon:C.a})),r.a.createElement("span",null,"LOGIN WITH GOOGLE"))))))}}]),t}(n.Component),x=Object(P.a)({providers:D,firebaseAppAuth:U})(S),R=a(28),H=a.n(R),B=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.homeCont.classList.add(H.a.opened)},500)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:H.a.content},r.a.createElement("div",{className:H.a.head_img,style:{backgroundImage:"url(".concat("/online-shop/Images/house_wall.jpg",")")}},r.a.createElement("div",{className:H.a.home_cont,ref:function(t){return e.homeCont=t}},r.a.createElement("h1",null,"Welcome to our online store"),r.a.createElement(_.b,{to:"/shop"},r.a.createElement("button",null,"Start Shopping")))))}}]),t}(n.Component),F=a(23),L=a(25),M=a.n(L),G=a(50),T=a(51),X=a(10),V=a.n(X),W=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).addToFavourites=function(e){if(a.props.userId){var t=V.a.database().ref().child("/user_products/"+a.props.userId).push().key,n={key:t,data:e};V.a.database().ref("/user_products/"+a.props.userId).child(t).set(n).then()}},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t="/online-shop/Images/no-image-home.png";return this.props.data.info.imageUrl&&(t=this.props.data.info.imageUrl),r.a.createElement("div",{className:M.a.product,key:this.props.data.id},r.a.createElement("div",{className:M.a.img_div,style:{backgroundImage:"url(".concat(t,")")}}),r.a.createElement("div",{className:M.a.cont_div},this.props.isFavour?r.a.createElement(A.a,{icon:T.faHeart}):r.a.createElement(A.a,{icon:G.faHeart,onClick:function(){return e.addToFavourites(e.props.data)}}),r.a.createElement("p",null,this.props.data.info.name),r.a.createElement("p",null,this.props.data.info.info),r.a.createElement("p",null,"Price"),r.a.createElement("p",null,this.props.data.info.price+" AMD")))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={products:[]},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;V.a.database().ref("/products").on("value",function(t){var a=t.val(),n=[];for(var r in a)n.push({id:r,info:a[r]});console.log(n),e.setState({products:n})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:M.a.prod_head},this.state.products.map(function(t){var a=!1;return e.props.userProducts&&e.props.userProducts.map(function(e){t.id===e.data.id&&(a=!0)}),r.a.createElement(W,{data:t,key:t.id,userId:e.props.userId,isFavour:a})}))}}]),t}(n.Component),q=a(53),K=a.n(q),Q=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.loggedUser?this.props.loggedUser.uid:null;return r.a.createElement("div",{className:K.a.shop_head},r.a.createElement(z,{userId:e,userProducts:this.props.userProducts}))}}]),t}(n.Component),Z=a(11),J=a.n(Z),Y={login:"admin@admin",pass:"adminpass"},$=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={imageUrl:""},a.selectImage=function(e){e.target.value&&a.setState({imageUrl:URL.createObjectURL(e.target.files[0])})},a.removeImageHandler=function(){a.setState({imageUrl:""}),a.imageInput.value=""},a.addProductHandler=function(){if(a.nameRef.value&&a.descRef.value&&a.priceRef.value){var e=a.imageInput.files[0];if(e){var t=V.a.storage().ref("/");t.child(e.name).put(e).then(function(){t.child(e.name).getDownloadURL().then(function(e){V.a.database().ref("/products").push({name:a.nameRef.value,info:a.descRef.value,price:a.priceRef.value,imageUrl:e})})})}else V.a.database().ref("/products").push({name:a.nameRef.value,info:a.descRef.value,price:a.priceRef.value,imageUrl:""})}else alert("Please feel all fields")},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.addRef.classList.add(J.a.admin_add_cont_opened)},100)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:J.a.admin_add_par,onClick:this.props.hideAdd},r.a.createElement("div",{className:J.a.admin_add_cont,ref:function(t){return e.addRef=t}},r.a.createElement("label",null,this.state.imageUrl?r.a.createElement("div",{style:{backgroundImage:"url(".concat(this.state.imageUrl,")")}}," "):r.a.createElement("div",{className:J.a.admin_add_img},"+"),r.a.createElement("input",{type:"file",ref:function(t){return e.imageInput=t},accept:"image/*",onChange:this.selectImage})),this.state.imageUrl?r.a.createElement("button",{onClick:this.removeImageHandler,className:J.a.admin_add_del},"Remove Image"):null,r.a.createElement("div",{className:J.a.admin_add_inputs},r.a.createElement("input",{type:"text",placeholder:"Product name",ref:function(t){return e.nameRef=t}}),r.a.createElement("textarea",{placeholder:"Product info",ref:function(t){return e.descRef=t}}),r.a.createElement("input",{type:"number",placeholder:"Price",step:1e3,ref:function(t){return e.priceRef=t},min:1e3}),r.a.createElement("button",{onClick:this.addProductHandler},"Add"))))}}]),t}(n.Component),ee=a(33),te=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],openAdd:!1,editId:null},a.hideAdd=function(e){e.target.classList.contains(J.a.admin_add_par)&&a.setState({openAdd:!1})},a.editProduct=function(e){a.setState({editId:e.id})},a.deleteProduct=function(e){V.a.database().ref("/products").child(e.id).remove().then()},a.saveChanges=function(e,t){var n=Array.from(document.getElementsByName("input"+e));if(n[1].value&&n[0].value&&n[2].value){var r={info:n[1].value,name:n[0].value,price:n[2].value};V.a.database().ref("/products").child(t).update(r).then(function(){a.setState({editId:null})})}else n.map(function(e){e.value||(e.style.border="1px solid #ff0000bf")})},a.cancelEdit=function(e,t){var n=Array.from(document.getElementsByName("input"+e));n[0].value=t.info.name,n[1].value=t.info.info,n[2].value=t.info.price,a.setState({editId:null})},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;V.a.database().ref("/products").on("value",function(t){var a=t.val(),n=[];for(var r in a)n.push({id:r,info:a[r]});e.setState({products:n})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:J.a.admin_panel},this.state.openAdd?r.a.createElement($,{hideAdd:this.hideAdd}):null,r.a.createElement("div",{onClick:function(){return e.setState({openAdd:!0})},className:J.a.admin_add_cont_top},"Add"),r.a.createElement("div",{className:J.a.list_cont},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.state.products.map(function(t,a){var n=t.id!==e.state.editId,o=n?"":"input_can_edit";return r.a.createElement("tr",{key:t.id,className:J.a[o]},r.a.createElement("td",null,t.info.imageUrl?r.a.createElement("img",{src:t.info.imageUrl,style:{height:"30px",width:"40px"},alt:"asd"}):r.a.createElement(A.a,{icon:ee.a})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"input"+a,defaultValue:t.info.name,readOnly:n})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"input"+a,defaultValue:t.info.info,readOnly:n})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"input"+a,defaultValue:t.info.price,readOnly:n})),r.a.createElement("td",null,n?r.a.createElement("div",null,r.a.createElement(A.a,{icon:w.c,onClick:function(){return e.editProduct(t)},title:"Edit"}),r.a.createElement(A.a,{icon:ee.b,onClick:function(){return e.deleteProduct(t)},title:"Delete"})):r.a.createElement("div",null,r.a.createElement(A.a,{icon:w.a,style:{color:"green"},onClick:function(){return e.saveChanges(a,t.id)},title:"Change"}),r.a.createElement(A.a,{icon:w.d,onClick:function(){return e.cancelEdit(a,t)},title:"Cancel"}))))})))))}}]),t}(n.Component),ae=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={isOpened:!1,correct:"none"},a.openAdmin=function(e){e.preventDefault(),a.logRef.value===Y.login&&a.passRef.value===Y.pass?a.setState({isOpened:!1}):a.setState({correct:"block"})},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,this.state.isOpened?r.a.createElement("div",{className:J.a.admin},r.a.createElement("form",{className:J.a.log_form,onSubmit:this.openAdmin},r.a.createElement("h1",null,"Admin Panel"),r.a.createElement("p",{style:{display:this.state.correct}},"Incorrect Username or Password"),r.a.createElement("input",{type:"text",placeholder:"Username",ref:function(t){return e.logRef=t}}),r.a.createElement("input",{type:"password",placeholder:"Password",ref:function(t){return e.passRef=t},autoComplete:"on"}),r.a.createElement("button",null,"Sign In"))):r.a.createElement(te,null))}}]),t}(n.Component),ne=a(24),re=a.n(ne),oe=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).removeFromFavours=function(e){V.a.database().ref("/user_products/"+a.props.userId).child(e).remove().then()},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.showData.imageUrl||"/online-shop/Images/no-image-home.png";return r.a.createElement("div",{className:re.a.favour_child},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t,")")},className:re.a.favour_child_img}," "),r.a.createElement("div",{className:re.a.favour_child_cont},r.a.createElement("div",null,this.props.showData.name),r.a.createElement("div",null,this.props.showData.info),r.a.createElement("div",null,this.props.showData.price+" AMD")),r.a.createElement("div",{className:re.a.favour_child_remove,onClick:function(){return e.removeFromFavours(e.props.delId)}},r.a.createElement(A.a,{icon:w.d})))}}]),t}(n.Component),ce=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:re.a.favour_head},r.a.createElement("div",{className:re.a.favours_par},this.props.userProducts?this.props.userProducts.map(function(t){return r.a.createElement(oe,{showData:t.data.info,delId:t.key,key:t.key,userId:e.props.user.uid})}):r.a.createElement("div",null,"Nothing To Show")))}}]),t}(n.Component),ie=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={user:null,userProducts:null},a.saveUserHandler=function(e){e?a.setState({user:e},function(){V.a.database().ref("/user_products").on("value",function(e){var t=e.val()[a.state.user.uid],n=[];for(var r in t)n.push(t[r]);a.setState({userProducts:n})})}):a.setState({user:null,userProducts:null})},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x,{saveUser:this.saveUserHandler,userProducts:this.state.userProducts}),r.a.createElement(F.c,null,r.a.createElement(F.a,{exact:!0,path:"/",component:B}),r.a.createElement(F.a,{exact:!0,path:"/shop",render:function(t){return r.a.createElement(Q,Object.assign({},t,{loggedUser:e.state.user,userProducts:e.state.userProducts}))}}),r.a.createElement(F.a,{exact:!0,path:"/admin",component:ae}),r.a.createElement(F.a,{exact:!0,path:"/favours",render:function(t){return r.a.createElement(ce,Object.assign({},t,{userProducts:e.state.userProducts,user:e.state.user}))}})))}}]),t}(n.Component),se=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:y.a.App},r.a.createElement(F.a,{path:"/",component:ie}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=Object(i.b)(p);c.a.render(r.a.createElement(_.a,{basename:window.location.pathname||""},r.a.createElement(s.a,{store:le},r.a.createElement(se,null))),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.58ef47b7.chunk.js.map