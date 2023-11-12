(()=>{"use strict";({891:function(){var e,t=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,l)}a((o=o.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var n,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(a){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(c=0)),c;)try{if(n=1,o&&(r=2&l[0]?o.return:l[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,l[1])).done)return r;switch(o=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return c.label++,{value:l[1],done:!1};case 5:c.label++,o=l[1],l=[0];continue;case 7:l=c.ops.pop(),c.trys.pop();continue;default:if(!((r=(r=c.trys).length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){c=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){c.label=l[1];break}if(6===l[0]&&c.label<r[1]){c.label=r[1],r=l;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(l);break}r[2]&&c.ops.pop(),c.trys.pop();continue}l=t.call(e,c)}catch(e){l=[6,e],o=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,a])}}},o=document.querySelector(".chat-input span"),r=document.querySelector(".chat-input textarea"),i=document.querySelector(".chatbox"),c=document.querySelector(".chatbot-toggler"),l=document.querySelector(".close-btn"),a=(document.querySelector(".quick-reply-button"),r.scrollHeight);r&&r.addEventListener("input",(function(){r.style.height="".concat(a,"px"),r.style.height="".concat(r.scrollHeight,"px")}));var s=function(e,t){var n=document.createElement("li");n.classList.add("chat",t);var o="outgoing"===t?"<p></p>":'<span class="material-symbols-outlined">smart_toy</span><p></p>';return n.innerHTML=o,n.querySelector("p").textContent=e,n};document.getElementById("drop-menu").addEventListener("click",(function(){var e=document.getElementById("menu");"hidden"===e.style.visibility?e.style.visibility="visible":e.style.visibility="hidden"})),r&&r.addEventListener("keydown",(function(e){"Enter"===e.key&&!e.shiftKey&&window.innerWidth>800&&(e.preventDefault(),d())}));var u=!1;function d(){return t(this,void 0,void 0,(function(){var t,o,c,l,d,h,p;return n(this,(function(n){switch(n.label){case 0:e=r.value,r.value="",r.style.height="".concat(a,"px"),i.appendChild(s(e,"outgoing")),i.scrollTo(0,i.scrollHeight),t=s("Thinking...","incoming"),o=t.querySelector("p"),i.appendChild(t),i.scrollTo(0,i.scrollHeight),n.label=1;case 1:return n.trys.push([1,4,,5]),[4,fetch("/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:e})})];case 2:return[4,n.sent().json()];case 3:return c=n.sent(),o.textContent=c.response,l=s(c.response,"incoming"),i.replaceChild(l,t),i.scrollTo(0,i.scrollHeight),[3,5];case 4:return d=n.sent(),console.error("Error:",d),h=s("Error occurred. Please try again.","incoming"),i.replaceChild(h,t),i.scrollTo(0,i.scrollHeight),[3,5];case 5:return u||((p=document.createElement("div")).classList.add("rating-container"),i.appendChild(p),setTimeout((function(){var e=s("How would you rate this conversation? Choose emoji:","incoming");e.classList.add("rating-message");var t=document.createElement("div");t.classList.add("emoji-buttons"),["😃","😐","😞"].forEach((function(e){var n=document.createElement("button");n.classList.add("emoji-button"),n.innerText=e,n.addEventListener("click",(function(){var t=s("Ви оцінили розмову як: ".concat(e),"incoming");i.appendChild(t),i.scrollTo(0,i.scrollHeight)})),t.appendChild(n)})),e.appendChild(t),p.appendChild(e),i.scrollTo(0,i.scrollHeight),u=!0}),3e3)),[2]}}))}))}o.addEventListener("click",d),c.addEventListener("click",(function(){return document.body.classList.toggle("show-chatbot")})),l.addEventListener("click",(function(){return document.body.classList.remove("show-chatbot")}))}})[891]()})();