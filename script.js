
const matches=[
{home:"Arsenal",away:"Man City",score:"2 - 1"},
{home:"Barcelona",away:"Real Madrid",score:"1 - 1"},
{home:"Liverpool",away:"Chelsea",score:"3 - 2"}
];
const container=document.getElementById("matches");
if(container){
matches.forEach(m=>{
const card=document.createElement("div");
card.className="card";
card.innerHTML=`<h3>${m.home} vs ${m.away}</h3><p>Score: ${m.score}</p>`;
container.appendChild(card);
});
}
// Heatmap Demo
const canvas=document.getElementById("heatmap");
if(canvas){
const ctx=canvas.getContext("2d");
for(let i=0;i<50;i++){
const x=Math.random()*600;
const y=Math.random()*300;
ctx.beginPath();
ctx.arc(x,y,8,0,Math.PI*2);
ctx.fillStyle="rgba(0,255,156,0.3)";
ctx.fill();
}
}
