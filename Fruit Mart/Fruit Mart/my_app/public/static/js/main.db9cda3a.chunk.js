(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},23:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(21),c=a.n(o),l=(a(29),a(7)),i=a(4);const s=Object(n.createContext)(),u=e=>{let{children:t}=e;const[a,o]=Object(n.useState)([]),[c,l]=Object(n.useState)([]),[i,u]=Object(n.useState)([]);return r.a.createElement(s.Provider,{value:{items:a,setItems:o,wishlist:c,setWishlist:l,cart:i,setCart:u}},t)};var m=a(41),d=a(9),p=a(8);a(16),a(32);var h=e=>{let{isOpen:t,onClose:a,item:n}=e;return t&&n?r.a.createElement("div",{className:"modal-overlay",onClick:a},r.a.createElement("div",{className:"modal-content",onClick:e=>e.stopPropagation()},r.a.createElement("img",{src:n.image,alt:n.name,className:"modal-image"}),r.a.createElement("h2",null,n.name),r.a.createElement("p",null,n.description),r.a.createElement("button",{onClick:a,className:"close-btn"},"Close"))):null};function E(){const{cart:e,setCart:t}=Object(n.useContext)(s),[a,o]=Object(n.useState)(0),[c,l]=Object(n.useState)(!1),[i,u]=Object(n.useState)(null);Object(n.useEffect)(()=>{d()},[]);const d=async()=>{try{const a=await m.a.get("http://localhost:3000/api/cart");t(a.data.items),p(a.data.items)}catch(e){console.error("Error fetching cart:",e)}},p=e=>{const t=e.reduce((e,t)=>e+t.productId.price*t.count,0);o(t)},E=async(a,n)=>{try{if(n<=0){await m.a.delete(`http://localhost:3000/api/cart/${a}`);const n=e.filter(e=>e.productId._id!==a);t(n),p(n)}else{await m.a.put("http://localhost:3000/api/cart",{productId:a,count:n});const r=e.map(e=>e.productId._id===a?{...e,count:n}:e);t(r),p(r)}}catch(r){console.error("Error updating quantity:",r)}};return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"total-price"},"Total Price: $",a.toFixed(2)),r.a.createElement("h1",null,"Your Cart"),e.filter(e=>e.count>0).map(e=>r.a.createElement("div",{key:e.productId._id,className:"cart-item"},r.a.createElement("img",{src:e.productId.image,alt:e.productId.name,style:{width:"150px",height:"150px",objectFit:"cover",borderRadius:"8px"}}),r.a.createElement("h3",{onClick:()=>(e=>{u(e),l(!0)})(e.productId),className:"product-name link"},e.productId.name),r.a.createElement("p",null,"Price per unit: $",e.productId.price),r.a.createElement("p",null,"Total price for item: $",(e.productId.price*e.count).toFixed(2)),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:()=>E(e.productId._id,e.count-1)},"-"),r.a.createElement("span",null,e.count),r.a.createElement("button",{onClick:()=>E(e.productId._id,e.count+1)},"+")))),r.a.createElement(h,{isOpen:c,onClose:()=>{u(null),l(!1)},item:i}))}function g(){const{wishlist:e,setWishlist:t}=Object(n.useContext)(s),[a,o]=Object(n.useState)(!1),[c,l]=Object(n.useState)(null);Object(n.useEffect)(()=>{i()},[]);const i=async()=>{try{const a=await m.a.get("http://localhost:3000/api/wishlist");t(a.data.items)}catch(e){console.error("Error fetching wishlist:",e)}};return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Your Wishlist"),e.map(a=>r.a.createElement("div",{key:a._id,className:"wishlist-item"},r.a.createElement("img",{src:a.image,alt:a.name,className:"product-image"}),r.a.createElement("h3",{onClick:()=>(e=>{l(e),o(!0)})(a),className:"product-name link"},a.name),r.a.createElement("p",null,"Price: $",a.price),r.a.createElement("button",{onClick:()=>(async a=>{try{await m.a.delete(`http://localhost:3000/api/wishlist/${a}`),t(e.filter(e=>e._id!==a))}catch(n){console.error("Error removing from wishlist:",n)}})(a._id),className:"remove-button"},"Remove"))),r.a.createElement(h,{isOpen:a,onClose:()=>{l(null),o(!1)},item:c}))}a(37);function y(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-logo"},r.a.createElement("h2",null,r.a.createElement(l.b,{to:"/",className:"nav-link"},r.a.createElement(d.a,{icon:p.a,className:"nav-icon"}),"Fruit Mart"))),r.a.createElement("div",{className:"navbar-links"},r.a.createElement(l.b,{to:"/",className:"nav-link"},r.a.createElement(d.a,{icon:p.a,className:"nav-icon"}),"Products"),r.a.createElement(l.b,{to:"/buyed",className:"nav-link"},r.a.createElement(d.a,{icon:p.d,className:"nav-icon"}),"Cart"),r.a.createElement(l.b,{to:"/liked",className:"nav-link"},r.a.createElement(d.a,{icon:p.c,className:"nav-icon"}),"Wishlist"),r.a.createElement(l.b,{to:"/profile",className:"nav-link"},r.a.createElement(d.a,{icon:p.f,className:"nav-icon"}),"Profile"))),r.a.createElement("main",{className:"content"},r.a.createElement(i.b,null)))}a(38);var f=a(12),b=a(22);var k=()=>{const[e,t]=Object(n.useState)(!0),[a,o]=Object(n.useState)(""),[c,l]=Object(n.useState)(""),[s,u]=Object(n.useState)(""),[m,d]=Object(n.useState)(""),[p,h]=Object(n.useState)(!1),E=Object(i.q)(),g=()=>{t(!e),d(""),o(""),l(""),u("")};return r.a.createElement("div",{className:"wrapper",style:{color:"black"}},r.a.createElement("form",{onSubmit:async t=>{t.preventDefault(),h(!0);const n={username:a,email:c,password:s},r={email:c,password:s};if(e)try{const e=await fetch("http://localhost:3000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(200===e.status){const t=await e.text();d("Login successful!"),localStorage.setItem("authToken",t),E("/")}else 401===e.status?d("Login failed: Invalid credentials. Please try again."):403===e.status?d("Login failed: Email not verified. Please check your email to verify your account."):d("Login failed: Unexpected error. Please try again later.")}catch(o){console.error("Error during login:",o),d("An error occurred during login. Please try again.")}else try{const e=await fetch("http://localhost:3000/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(200===e.status){const t=await e.text();d("Registration successful! Please check your email to verify your account."),localStorage.setItem("authToken",t),E("/login")}else if(409===e.status){const t=await e.text();d(`Registration failed: ${t}`)}else d("Registration failed: Unexpected error. Please try again later.")}catch(o){console.error("Error during registration:",o),d("An error occurred during registration. Please try again.")}h(!1)},style:{color:"black"}},r.a.createElement("h1",{style:{color:"black"}},e?"Login":"Register"),m&&r.a.createElement("p",{style:{color:m.includes("failed")?"red":"green"}},m),!e&&r.a.createElement("div",{className:"input-box"},r.a.createElement("input",{type:"text",placeholder:"Username",value:a,onChange:e=>o(e.target.value),required:!0}),r.a.createElement(f.c,{className:"icon"})),r.a.createElement("div",{className:"input-box"},r.a.createElement("input",{type:"email",placeholder:"Email",value:c,onChange:e=>l(e.target.value),required:!0}),r.a.createElement(b.a,{className:"icon"})),r.a.createElement("div",{className:"input-box"},r.a.createElement("input",{type:"password",placeholder:"Password",value:s,onChange:e=>u(e.target.value),required:!0}),r.a.createElement(f.b,{className:"icon"})),r.a.createElement("button",{type:"submit",disabled:p},p?"Loading...":e?"Login":"Register"),e?r.a.createElement("div",{className:"register-link"},r.a.createElement("p",null,"Don't have an account? ",r.a.createElement("a",{href:"#",onClick:g}," Register"))):r.a.createElement("div",{className:"register-link"},r.a.createElement("p",null,"Already have an account? ",r.a.createElement("a",{href:"#",onClick:g}," Login")))))};var v=e=>{let{children:t}=e;const[a,o]=Object(n.useState)(!1),c=localStorage.getItem("authToken");if(!c)return r.a.createElement(i.a,{to:"/login"});try{var l;const e=((null===(l=c.split(" ")[1])||void 0===l?void 0:l.split(".")[1])||c.split(".")[1]).replace(/-/g,"+").replace(/_/g,"/"),n=JSON.parse(atob(e)),u=Date.now()/1e3,m=300;return n.exp<u?(localStorage.removeItem("authToken"),r.a.createElement(i.a,{to:"/login"})):(n.exp-u<m&&!a&&(o(!0),fetch("http://localhost:3000/api/refresh-token",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`}}).then(e=>{if(!e.ok)throw new Error("Failed to refresh token");return e.json()}).then(e=>{if(!e.token)throw new Error("No token received");localStorage.setItem("authToken",`Bearer ${e.token}`),o(!1),window.location.reload()}).catch(e=>{console.error("Error refreshing token:",e),localStorage.removeItem("authToken"),window.location.href="/login"})),t)}catch(s){return console.error("Error decoding token:",s),localStorage.removeItem("authToken"),r.a.createElement(i.a,{to:"/login"})}};a(17);function I(){const[e,t]=Object(n.useState)([]),[a,o]=Object(n.useState)([]),[c,l]=Object(n.useState)([]);Object(n.useEffect)(()=>{(async()=>{try{const a=await u(),n=await i();await s();const r=n.map(e=>{const t=a.find(t=>t.productId._id===e._id);return{...e,quantity:t?t.quantity:0,inCart:!!t}});t(r)}catch(e){console.error("Error loading data:",e)}})()},[]);const i=async()=>{try{return(await m.a.get("http://localhost:3000/api/items")).data}catch(e){return console.error("Error fetching items:",e),[]}},s=async()=>{try{const t=localStorage.getItem("authToken"),a=t&&JSON.parse(t).token;if(!a)return console.error("Token not found"),[];const n=(await m.a.get("http://localhost:3000/api/userdata/liked",{headers:{Authorization:`Bearer ${a}`}})).data.map(e=>e.productId._id);return o(n),n}catch(e){return console.error("Error fetching wishlist:",e),[]}},u=async()=>{try{const t=localStorage.getItem("authToken"),a=t&&JSON.parse(t).token;if(!a)return console.error("Token not found"),[];const n=(await m.a.get("http://localhost:3000/api/userdata/buyed",{headers:{Authorization:`Bearer ${a}`}})).data.map(e=>({productId:e.productId,quantity:e.quantity}));return l(n),n}catch(e){return console.error("Error fetching cart:",e),[]}};return r.a.createElement("div",{className:"items-container"},r.a.createElement("h1",null,"Items"),r.a.createElement("div",{className:"items-list"},e.map(e=>{const n=a.includes(e._id.toString()),i=c.find(t=>t.productId._id===e._id);return r.a.createElement("div",{key:e._id,className:"item-card"},r.a.createElement("img",{src:e.image,alt:e.name,className:"item-image"}),r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("p",null,"Price: $",e.price),r.a.createElement("button",{onClick:()=>n?(async e=>{try{const a=localStorage.getItem("authToken"),n=a&&JSON.parse(a).token;if(!n)return void console.error("Token not found");await m.a.delete(`http://localhost:3000/api/userdata/wishlist/${e}`,{headers:{Authorization:`Bearer ${n}`}}),o(t=>t.filter(t=>t!==e.toString()))}catch(t){console.error("Error unliking item:",t)}})(e._id):(async e=>{try{const a=localStorage.getItem("authToken"),n=a&&JSON.parse(a).token;if(!n)return void console.error("Token not found");await m.a.post("http://localhost:3000/api/userdata/like",{productId:e},{headers:{Authorization:`Bearer ${n}`}}),o(t=>[...t,e.toString()])}catch(t){console.error("Error liking item:",t)}})(e._id),className:`like-icon ${n?"active":""}`},r.a.createElement(f.a,null)),i?r.a.createElement("div",{className:"quantity-controls"},r.a.createElement("button",{onClick:()=>(async e=>{try{const n=localStorage.getItem("authToken"),r=n&&JSON.parse(n).token,o=c.find(t=>t.productId._id===e);console.log(o.quantity),1===o.quantity?(console.log("yoo it's here"),await m.a.delete(`http://localhost:3000/api/userdata/cart/${e}`,{headers:{Authorization:`Bearer ${r}`}}),l(t=>t.filter(t=>t.productId._id!==e)),t(t=>t.map(t=>t._id===e?{...t,quantity:0,inCart:!1}:t))):o&&(console.log("yoo it's here"),await m.a.put("http://localhost:3000/api/userdata/updatecart",{productId:e,quantityChange:-1},{headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"}}),l(t=>t.map(t=>t.productId._id===e?{...t,quantity:t.quantity-1}:t)),t(t=>t.map(t=>t._id===e?{...t,quantity:t.quantity-1}:t)))}catch(a){console.error("Error decreasing quantity:",a)}})(e._id),disabled:i.quantity<1},"-"),r.a.createElement("span",null,i.quantity),r.a.createElement("button",{onClick:()=>(async e=>{try{const n=localStorage.getItem("authToken"),r=n&&JSON.parse(n).token;await m.a.put("http://localhost:3000/api/userdata/updatecart",{productId:e,quantityChange:1},{headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"}}),l(t=>t.map(t=>t.productId._id===e?{...t,quantity:t.quantity+1}:t)),t(t=>t.map(t=>t._id===e?{...t,quantity:t.quantity+1}:t))}catch(a){console.error("Error increasing quantity:",a)}})(e._id)},"+")):r.a.createElement("button",{onClick:()=>(async e=>{try{const n=localStorage.getItem("authToken"),r=n&&JSON.parse(n).token;await m.a.post("http://localhost:3000/api/userdata/buy",{productId:e},{headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"}}),l(t=>[...t,{productId:{_id:e},quantity:1}]),t(t=>t.map(t=>t._id===e?{...t,quantity:1,inCart:!0}:t))}catch(a){console.error("Error buying item:",a)}})(e._id),className:"buy-button"},"Buy It"))})))}function N(){const[e,t]=Object(n.useState)([]),[a,o]=Object(n.useState)(0);Object(n.useEffect)(()=>{c()},[]);const c=async()=>{try{const a=localStorage.getItem("authToken"),n=a&&JSON.parse(a).token,r=await m.a.get("http://localhost:3000/api/userdata/buyed",{headers:{Authorization:`Bearer ${n}`}});t(r.data),l(r.data)}catch(e){console.error("Error fetching cart:",e)}},l=e=>{const t=e.reduce((e,t)=>e+t.productId.price*t.quantity,0);o(t)};return r.a.createElement("div",{className:"items-container"},r.a.createElement("h1",null,"Cart"),r.a.createElement("div",{className:"items-list"},e.map(a=>r.a.createElement("div",{key:a.productId._id,className:"item-card"},r.a.createElement("img",{src:a.productId.image,alt:a.productId.name,className:"item-image"}),r.a.createElement("h3",null,a.productId.name),r.a.createElement("p",null,a.productId.description),r.a.createElement("p",null,"Price: $",a.productId.price),r.a.createElement("div",{className:"quantity-controls"},r.a.createElement("button",{onClick:()=>(async a=>{try{const r=localStorage.getItem("authToken"),o=r&&JSON.parse(r).token,c=e.find(e=>e.productId._id===a);if(c&&1===c.quantity){await m.a.delete(`http://localhost:3000/api/userdata/cart/${a}`,{headers:{Authorization:`Bearer ${o}`}});const n=e.filter(e=>e.productId._id!==a);t(n),l(n)}else if(c){await m.a.put("http://localhost:3000/api/userdata/updatecart",{productId:a,quantityChange:-1},{headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"}});const n=e.map(e=>e.productId._id===a?{...e,quantity:e.quantity-1}:e);t(n),l(n)}}catch(n){console.error("Error decreasing quantity:",n)}})(a.productId._id),disabled:a.quantity<1},"-"),r.a.createElement("span",null,a.quantity),r.a.createElement("button",{onClick:()=>(async a=>{try{const r=localStorage.getItem("authToken"),o=r&&JSON.parse(r).token;await m.a.put("http://localhost:3000/api/userdata/updatecart",{productId:a,quantityChange:1},{headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"}}),t(e=>e.map(e=>e.productId._id===a?{...e,quantity:e.quantity+1}:e)),l(e.map(e=>e.productId._id===a?{...e,quantity:e.quantity+1}:e))}catch(n){console.error("Error increasing quantity:",n)}})(a.productId._id)},"+")),r.a.createElement("button",{onClick:()=>(async a=>{try{const r=localStorage.getItem("authToken"),o=r&&JSON.parse(r).token;await m.a.delete(`http://localhost:3000/api/userdata/cart/${a}`,{headers:{Authorization:`Bearer ${o}`}});const c=e.filter(e=>e.productId._id!==a);t(c),l(c),console.log("Item removed from cart")}catch(n){console.error("Error removing item from cart:",n)}})(a.productId._id),className:"remove-button"},"Remove")))),r.a.createElement("div",{className:"total-price"},r.a.createElement("h2",null,"Total Price: $",a.toFixed(2))))}function S(){const[e,t]=Object(n.useState)([]);Object(n.useEffect)(()=>{a()},[]);const a=async()=>{try{const a=localStorage.getItem("authToken"),n=a&&JSON.parse(a).token,r=await m.a.get("http://localhost:3000/api/userdata/liked",{headers:{Authorization:`Bearer ${n}`}});t(r.data)}catch(e){console.error("Error fetching wishlist:",e)}};return r.a.createElement("div",{className:"items-container"},r.a.createElement("h1",null,"Wishlist"),r.a.createElement("div",{className:"items-list"},e.map(a=>r.a.createElement("div",{key:a.productId._id,className:"item-card"},r.a.createElement("img",{src:a.productId.image,alt:a.productId.name,className:"item-image"}),r.a.createElement("h3",null,a.productId.name),r.a.createElement("p",null,a.productId.description),r.a.createElement("p",null,"Price: $",a.productId.price),r.a.createElement("button",{onClick:()=>(async a=>{try{const r=localStorage.getItem("authToken"),o=r&&JSON.parse(r).token;await m.a.delete(`http://localhost:3000/api/userdata/wishlist/${a}`,{headers:{Authorization:`Bearer ${o}`}}),t(e.filter(e=>e.productId._id!==a)),console.log("Item removed from wishlist")}catch(n){console.error("Error removing item from wishlist:",n)}})(a.productId._id),className:"remove-button"},"Remove")))))}a(39);function w(){const[e,t]=Object(n.useState)({}),[a,o]=Object(n.useState)({username:"",email:""}),[c,l]=Object(n.useState)(!1),s=Object(i.q)();Object(n.useEffect)(()=>{(async()=>{try{const a=localStorage.getItem("authToken"),n=a&&JSON.parse(a).token;if(!n)return console.error("Token not found"),void s("/login");const r=await m.a.get("http://localhost:3000/api/profile",{headers:{Authorization:`Bearer ${n}`}});t(r.data),o({username:r.data.username,email:r.data.email})}catch(e){console.error("Error fetching profile:",e),s("/login")}})()},[s]);const u=e=>{const{name:t,value:n}=e.target;o({...a,[t]:n})};return r.a.createElement("div",{className:"profile-container"},r.a.createElement("h1",null,"Profile"),c?r.a.createElement("form",{onSubmit:async e=>{e.preventDefault();try{const e=localStorage.getItem("authToken"),r=e&&JSON.parse(e).token,o=await m.a.put("http://localhost:3000/api/profile",{...a},{headers:{Authorization:`Bearer ${r}`}});t(o.data.user),l(!1),console.log("Profile updated successfully")}catch(n){console.error("Error updating profile:",n)}}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:a.username,onChange:u,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:a.email,onChange:u,required:!0})),r.a.createElement("button",{type:"submit",className:"update-button"},"Update Profile"),r.a.createElement("button",{type:"button",onClick:()=>l(!1),className:"cancel-button"},"Cancel")):r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:")," ",e.email),r.a.createElement("button",{onClick:()=>l(!0),className:"edit-button"},r.a.createElement(d.a,{icon:p.b})," Edit Profile"),r.a.createElement("button",{onClick:()=>{localStorage.removeItem("authToken"),s("/login")},className:"logout-button"},r.a.createElement(d.a,{icon:p.e})," Logout")))}var O=function(){return r.a.createElement(u,null,r.a.createElement(l.a,null,r.a.createElement(i.e,null,r.a.createElement(i.c,{path:"/",element:r.a.createElement(y,null)},r.a.createElement(i.c,{index:!0,element:r.a.createElement(v,null,r.a.createElement(I,null))}),r.a.createElement(i.c,{path:"login",element:r.a.createElement(k,null)}),r.a.createElement(i.c,{path:"cart",element:r.a.createElement(v,null,r.a.createElement(E,null))}),r.a.createElement(i.c,{path:"items",element:r.a.createElement(v,null,r.a.createElement(I,null))}),r.a.createElement(i.c,{path:"buyed",element:r.a.createElement(v,null,r.a.createElement(N,null))}),r.a.createElement(i.c,{path:"liked",element:r.a.createElement(v,null,r.a.createElement(S,null))}),r.a.createElement(i.c,{path:"wishlist",element:r.a.createElement(v,null,r.a.createElement(g,null))}),r.a.createElement(i.c,{path:"profile",element:r.a.createElement(v,null,r.a.createElement(w,null))})))))};var C=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:o,getTTFB:c}=t;a(e),n(e),r(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null))),C()}},[[23,1,2]]]);
//# sourceMappingURL=main.db9cda3a.chunk.js.map