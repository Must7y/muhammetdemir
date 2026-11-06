/* Lightweight airplane scroll interaction; no cookies, analytics or external requests. */
(()=>{"use strict";const plane=document.querySelector(".end-jump-plane");const footer=document.getElementById("page-bottom");if(!plane||!footer)return;let resetId;
plane.addEventListener("click",(event)=>{event.preventDefault();const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(reduced){footer.scrollIntoView({behavior:"instant",block:"end"});return;}
plane.classList.remove("is-flying");void plane.offsetWidth;plane.classList.add("is-flying");footer.scrollIntoView({behavior:"smooth",block:"end"});window.clearTimeout(resetId);resetId=window.setTimeout(()=>plane.classList.remove("is-flying"),930);});})();
