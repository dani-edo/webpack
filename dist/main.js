(()=>{"use strict";var e=document.querySelector("#secret-button"),t=document.querySelector("#secret-paragraph"),r=!1;function n(){r?(t.style.border="3px solid",t.style.height="110px"):(t.style.border="none",t.style.height="0")}e.addEventListener("click",(function(){r=!r,e.textContent=r?"Hide":"Show",n()})),n()})();