/* Two-way aircraft scrolling; self-contained and privacy-friendly. */
(()=>{"use strict";
const plane=document.querySelector(".end-jump-plane");
const footer=document.getElementById("page-bottom");
const backToTop=footer?.querySelector('a[href="#main"]');
if(!plane||!footer)return;
let resetId;
const reduced=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function fly(direction){
 window.clearTimeout(resetId);
 plane.classList.remove("is-flying","is-returning");
 if(reduced())return;
 void plane.offsetWidth;
 plane.classList.add(direction==="down"?"is-flying":"is-returning");
 resetId=window.setTimeout(()=>plane.classList.remove("is-flying","is-returning"),860);
}
plane.addEventListener("click",event=>{
 event.preventDefault();
 fly("down");
 footer.scrollIntoView({behavior:reduced()?"auto":"smooth",block:"end"});
});
backToTop?.addEventListener("click",event=>{
 event.preventDefault();
 fly("up");
 window.scrollTo({top:0,behavior:reduced()?"auto":"smooth"});
});
})();
