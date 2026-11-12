const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const mb=$(".menu-btn"),nav=$("#nav");
if(mb){mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nav.onclick=e=>{if(e.target.tagName==="A"){nav.classList.remove("open");mb.setAttribute("aria-expanded",false)}}}
const pick=(g,b)=>g.forEach(x=>x.setAttribute("aria-pressed",x===b));
const days=$$(".days button"),slots=$$(".slots button:not(:disabled)"),book=$("#book"),toast=$("#toast");
if(book){days.forEach(b=>b.onclick=()=>{pick(days,b);toast.style.display="none"});
slots.forEach(b=>b.onclick=()=>{pick(slots,b);book.disabled=false;toast.style.display="none"});
book.onclick=()=>{const d=days.find(b=>b.getAttribute("aria-pressed")==="true"),s=slots.find(b=>b.getAttribute("aria-pressed")==="true");
toast.textContent=`Booked: ${d.dataset.day}, ${s.textContent}. Reminder sent to the client.`;toast.style.display="block"}}
const tabs=$$("[role=tab]");
function sel(t){tabs.forEach(x=>{const on=x===t;x.setAttribute("aria-selected",on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute("aria-controls")).hidden=!on})}
tabs.forEach((t,i)=>{t.onclick=()=>sel(t);t.onkeydown=e=>{const k={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key];if(k){e.preventDefault();const n=tabs[(i+k+tabs.length)%tabs.length];n.focus();sel(n)}}});
const f=$("#lead");
if(f)f.onsubmit=e=>{e.preventDefault();const em=f.email,er=$("#email-err"),v=em.value.trim();
if(!/^\S+@\S+\.\S+$/.test(v)){em.setAttribute("aria-invalid",true);er.textContent="Enter a valid work email, like you@studio.com.";em.focus();return}
em.removeAttribute("aria-invalid");er.textContent="";const b=f.querySelector("button");b.classList.add("loading");b.disabled=true;
setTimeout(()=>{f.style.display="none";$("#ok").style.display="block"},900)};
const st=$(".sticky");
if(st)addEventListener("scroll",()=>st.classList.toggle("show",scrollY>520),{passive:true});
