const initialEvents = [
 {id:1,name:"Annual Tech Fest",date:"2026-12-05",venue:"Main Auditorium",category:"Technical",description:"A day of coding, innovation, robotics and exciting competitions.",registrations:12},
 {id:2,name:"Cultural Night",date:"2026-12-12",venue:"College Ground",category:"Cultural",description:"Celebrate talent with music, dance and performances.",registrations:24},
 {id:3,name:"Sports Meet",date:"2026-12-18",venue:"Sports Complex",category:"Sports",description:"Join your friends for a day of energetic sports activities.",registrations:8}
];
let events = JSON.parse(localStorage.getItem("campusEvents") || "null") || initialEvents;
function save(){localStorage.setItem("campusEvents",JSON.stringify(events));render()}
function render(){
 const list=document.getElementById("eventList"); list.innerHTML="";
 events.forEach(e=>{
  const card=document.createElement("article");card.className="event";
  const safe=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  card.innerHTML=`<span class="tag">${safe(e.category)}</span><h3>${safe(e.name)}</h3><p class="date">📅 ${safe(e.date)}</p><p>📍 ${safe(e.venue)}</p><p>${safe(e.description)}</p><p>👥 ${e.registrations} registrations</p><div class="event-actions"><button class="register" data-register="${e.id}">Register</button><button class="delete" data-delete="${e.id}">Delete</button></div>`;
  list.appendChild(card);
 });
 document.getElementById("eventCount").textContent=events.length;
 document.getElementById("registrationCount").textContent=events.reduce((n,e)=>n+e.registrations,0);
 document.getElementById("emptyMessage").classList.toggle("hidden",events.length!==0);
}
const form=document.getElementById("eventForm");
document.getElementById("showForm").onclick=()=>form.classList.remove("hidden");
document.getElementById("cancelForm").onclick=()=>form.classList.add("hidden");
form.onsubmit=e=>{
 e.preventDefault();
 events.push({id:Date.now(),name:eventName.value.trim(),date:eventDate.value,venue:eventVenue.value.trim(),category:eventCategory.value.trim(),description:eventDescription.value.trim(),registrations:0});
 save();form.reset();form.classList.add("hidden");
};
document.getElementById("eventList").onclick=e=>{
 const r=e.target.dataset.register,d=e.target.dataset.delete;
 if(r){const item=events.find(x=>x.id==r);item.registrations++;save();alert("Registration successful!")}
 if(d && confirm("Delete this event?")){events=events.filter(x=>x.id!=d);save()}
};
render();