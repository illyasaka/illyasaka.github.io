(()=>{
const palettes={pink:'NEON PINK',blue:'ELECTRIC BLUE',violet:'ULTRAVIOLET'};
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function setPalette(value){if(!palettes[value])return;document.body.dataset.palette=value;document.querySelectorAll('[data-palette-value]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.paletteValue===value)));const label=document.querySelector('.palette-name');if(label)label.textContent=palettes[value];try{localStorage.setItem('illyasaka-palette',value)}catch{}}
try{setPalette(localStorage.getItem('illyasaka-palette')||'pink')}catch{}
document.querySelectorAll('[data-palette-value]').forEach(button=>button.addEventListener('click',()=>setPalette(button.dataset.paletteValue)));
const scene=document.querySelector('.character-scene');
if(scene&&!reduced&&window.matchMedia('(pointer:fine)').matches){scene.addEventListener('pointermove',event=>{const bounds=scene.getBoundingClientRect();scene.style.setProperty('--tilt-x',((event.clientY-bounds.top)/bounds.height-.5)*-5+'deg');scene.style.setProperty('--tilt-y',((event.clientX-bounds.left)/bounds.width-.5)*5+'deg');});scene.addEventListener('pointerleave',()=>{scene.style.setProperty('--tilt-x','0deg');scene.style.setProperty('--tilt-y','0deg');});}
})();
