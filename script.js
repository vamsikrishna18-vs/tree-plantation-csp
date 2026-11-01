const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
let pt;
function push(){clearTimeout(pt);pt=setTimeout(()=>{const d={};['csp_t','csp_p','csp_f'].forEach(k=>d[k]=localStorage.getItem(k));fetch('/api/data',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)}).catch(()=>{})},400)}
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){alert('Browser storage is full. Remove a few photos and try again.')}push()};
let tx=ld('csp_t',{}),ph=ld('csp_p',{}),fb=ld('csp_f',[]),op=new Set([0]),ed=false;
const T=(k,d,c='')=>`<span data-e="${k}"${c?` class="${c}"`:''}>${esc(tx[k]??d)}</span>`;

const W=[
["Survey & Awareness","Field project","With the ward member’s permission, I surveyed my locality to see how people felt about planting trees.",["Planned a schedule and visited households and shops.","Found that people were unaware of tree benefits and were cutting trees for daily needs.","Explained uses of trees, soil erosion and what happens if we stop planting."]],
["Awareness & First Plantings","Field project","I prepared survey questions, then moved from talking to planting.",["Asked villagers about their views on planting.","Bought saplings from village nurseries and gave them to families.","Planted in public areas so neighbours could join in."]],
["Schools & Plant Study","Field project","Visited schools, planted with students and studied what young plants need.",["Planted and watered saplings in school and near shops and homes.","Distributed plants to students.","Visited a nursery, spread nutrients and cleared waste around plants."]],
["ZP High School Programme","Field project","Took permission from the school principal and ran a tree plantation programme.",["Explained the importance of trees to students with real examples.","Pasted pamphlets and posters around the school.","Planted trees in school and along the roadside with the students."]],
["Caring for the Plants","Field project","Revisited every plant from the first four weeks and fixed what was going wrong.",["Found some plants with dried leaves and no growth.","Applied natural fertilisers such as compost, manure and grass clippings.","Planted new trees with proper spacing for healthy growth."]],
["Awareness Rally","Field project","Took the message to people who had little formal education.",["Used posters, pictures and pamphlets to explain uses and benefits of trees.","Held a small rally with slogans like “Save tree save life”.","Pasted pamphlets in public places and watered earlier plantings."]],
["Feedback & Review","Mini project","Collected feedback on the programme from the people it reached.",["Asked about awareness, participation and obstacles to planting.","Noted what worked and what to improve.","Added the responses below."]],
["Website Creation","Mini project","Built this website to present the project and its journey.",["Designed the home page and sections for the journey, student details and project notes.","Built it so photos and text can be updated at any time.","Technology used is listed below."]]];

const gal=k=>`<div class="g">${(ph[k]||[]).map((s,i)=>`<figure><img src="${s}" alt="Project photo" data-z><button class="x" data-r="${k}|${i}" aria-label="Remove photo">×</button></figure>`).join('')}</div><label class="add">+ Add photos<input type="file" accept="image/*" multiple hidden data-p="${k}"></label>`;

const fbh=()=>`<h4>Feedback received</h4>${fb.map((f,i)=>`<blockquote><p>“${esc(f.c)}”</p><cite>— ${esc(f.n)}</cite><button class="x2" data-fd="${i}" aria-label="Delete">×</button></blockquote>`).join('')||'<p class="mut">No feedback added yet.</p>'}<div class="fbf"><input class="f" id="fn" placeholder="Name / role"><textarea id="fc" rows="2" placeholder="What did they say?"></textarea><button class="btn" id="fba">Add feedback</button></div>`;

const tech=()=>`<h4>Technology used</h4><div class="g3">
<div class="cd"><h3>Interface</h3><p>${T('ti','Responsive layout with animated home page, built with CSS animations and canvas.')}</p></div>
<div class="cd"><h3>Frontend</h3><p>${T('tf','HTML5, CSS3 and JavaScript.')}</p></div>
<div class="cd"><h3>Data</h3><p>${T('tb','A small Node.js server (server.js) saves photos, notes and feedback to data.json.')}</p></div></div>
<h4>Files</h4><pre class="f">${T('tfl','index.html — page structure\nstyle.css — layout and animations\nscript.js — interactions, photo upload and saving\nserver.js — local Node.js server and data saving','pre')}</pre>`;

function wk(i){const w=W[i];return `<article class="wk${i>5?' m':''}${op.has(i)?' o':''}" data-i="${i}"><div class="wh"><b>${i+1}</b><div><div class="wt">${T('wt'+i,w[0])}</div><small class="ph">${w[1]}</small></div><span class="ch">⌄</span></div><div class="wb"><p class="dt">${T('wd'+i,'Add dates')}</p><p>${T('ws'+i,w[2])}</p><ul>${w[3].map((b,j)=>`<li>${T('wb'+i+j,b)}</li>`).join('')}</ul>${i==6?fbh():''}${i==7?tech():''}${gal('w'+i)}</div></article>`}

const F=[["Name","Kuracha Vamsi Krishna"],["Register No.","24JNA30091"],["Year & Branch","III B.Tech · Artificial Intelligence & Data Science"],["College","Sree Venkateswara College of Engineering, Nellore"],["Community","Raju Palem, Nellore District, Andhra Pradesh"],["Project","Tree Plantation"],["Duration","8 weeks"],["Faculty guide","Add name"],["From","Add date"],["To","Add date"]];
const stu=()=>`<label class="av">${ph.av&&ph.av[0]?`<img src="${ph.av[0]}" alt="Student photo">`:'KV'}<input type="file" accept="image/*" hidden data-p="av"></label><dl>${F.map((f,i)=>`<div><dt>${f[0]}</dt><dd>${T('sf'+i,f[1])}</dd></div>`).join('')}</dl><p class="mut" style="margin-top:18px">Community Service Project · AP State Council of Higher Education</p>`;

const L=(k,a)=>`<ul>${a.map((b,j)=>`<li>${T(k+j,b)}</li>`).join('')}</ul>`;
const inf=()=>`<h2>More Information</h2><p class="lead">${T('il','Why trees matter, what I asked the community, and what the project achieved.')}</p>
<div class="g3">
<div class="cd"><h3>Why trees matter</h3>${L('a',["Trees absorb carbon dioxide and pollutants and release oxygen.","Roots hold fertile topsoil, and trees slow heavy rain, reducing flood risk.","Forests are home to birds, insects and animals.","Shade cools surroundings and can lower cooling costs at home."])}</div>
<div class="cd"><h3>Survey questions</h3>${L('b',["Are you aware of the environmental benefits of tree plantation?","Have you ever participated in a tree planting event?","Have you faced obstacles when trying to plant trees in your area?","What types of trees are most suitable for your region?","Are you aware of local tree planting initiatives in your community?"])}</div>
<div class="cd"><h3>Outcomes</h3>${L('c',["Increased environmental awareness about climate change and the role of trees.","Improved air quality and a cooler, more comfortable surrounding.","Community engagement: residents took responsibility for planting and care."])}</div>
<div class="cd"><h3>Slogans</h3><p class="sl">${T('d0','“Save tree save life”')}</p><p class="sl">${T('d1','“Cut your greed, instead of cutting trees”')}</p><p class="sl">${T('d2','“Don’t make trees rare, keep them with care”')}</p><p class="sl">${T('d3','“Trees on, global warming gone”')}</p></div></div>
<h4>Thank you</h4><p class="mut">${T('th','My sincere thanks to my college, faculty, the community members, school staff and students, my parents and friends who supported the plantation and awareness activities.')}</p>
<h4>Photos</h4>${gal('info')}`;

function render(){$('#tl').innerHTML=W.map((_,i)=>wk(i)).join('');$('#sd').innerHTML=stu();$('#inf').innerHTML=inf();setEd()}
function setEd(){document.body.classList.toggle('edit',ed);document.querySelectorAll('[data-e]').forEach(e=>e.contentEditable=ed);document.querySelectorAll('.ed').forEach(b=>b.textContent=ed?'✓ Done':'✎ Edit')}
function sync(){const h=location.hash.slice(1);document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('open',p.id==h))}
addEventListener('hashchange',sync);

document.addEventListener('click',e=>{const t=e.target;
 if(t.classList.contains('ed')){ed=!ed;setEd();return}
 const h=t.closest('.wh');if(h){const a=h.parentNode,i=+a.dataset.i;a.classList.toggle('o');a.classList.contains('o')?op.add(i):op.delete(i);return}
 if(t.dataset.r){const[k,i]=t.dataset.r.split('|');ph[k].splice(+i,1);sv('csp_p',ph);render();return}
 if(t.dataset.fd){fb.splice(+t.dataset.fd,1);sv('csp_f',fb);render();return}
 if(t.id=='fba'){const c=$('#fc').value.trim();if(c){fb.push({n:$('#fn').value.trim()||'Community member',c});sv('csp_f',fb);render()}return}
 if(t.dataset.z!==undefined){$('#lb img').src=t.src;$('#lb').classList.add('on');return}
 if(t.closest('#lb'))$('#lb').classList.remove('on')});
document.addEventListener('focusout',e=>{const k=e.target.dataset&&e.target.dataset.e;if(k){tx[k]=e.target.innerText.trim();sv('csp_t',tx)}});

const rs=f=>new Promise(r=>{const fr=new FileReader;fr.onload=()=>{const im=new Image;im.onload=()=>{const s=Math.min(1,1000/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*s;c.height=im.height*s;c.getContext('2d').drawImage(im,0,0,c.width,c.height);r(c.toDataURL('image/jpeg',.72))};im.src=fr.result};fr.readAsDataURL(f)});
document.addEventListener('change',async e=>{const k=e.target.dataset&&e.target.dataset.p;if(!k)return;const out=[];for(const f of e.target.files)out.push(await rs(f));
 ph[k]=k=='av'?out.slice(-1):(ph[k]||[]).concat(out);sv('csp_p',ph);render()});

/* falling leaves */
const cv=$('#cv'),x=cv.getContext('2d');let w,h,Lv=[];
function sz(){w=cv.width=innerWidth;h=cv.height=innerHeight}sz();addEventListener('resize',sz);
for(let i=0;i<30;i++)Lv.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:6+Math.random()*8,v:.3+Math.random()*.7,a:Math.random()*6.28,s:.01+Math.random()*.02,c:`hsla(${90+Math.random()*60},60%,${40+Math.random()*25}%,.5)`});
function fr(){x.clearRect(0,0,w,h);for(const l of Lv){l.y+=l.v;l.a+=l.s;l.x+=Math.sin(l.a)*.6;if(l.y>h+20){l.y=-20;l.x=Math.random()*w}x.save();x.translate(l.x,l.y);x.rotate(l.a);x.fillStyle=l.c;x.beginPath();x.ellipse(0,0,l.r,l.r/2.2,0,0,6.28);x.fill();x.restore()}requestAnimationFrame(fr)}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)fr();

render();sync();

/* load saved data from the local server (if running with server.js) */
fetch('/api/data').then(r=>r.ok?r.json():null).then(d=>{
 if(d&&(d.csp_t||d.csp_p||d.csp_f)){['csp_t','csp_p','csp_f'].forEach(k=>{if(d[k])try{localStorage.setItem(k,d[k])}catch(e){}});
  tx=ld('csp_t',{});ph=ld('csp_p',{});fb=ld('csp_f',[]);render()}
 else if(localStorage.getItem('csp_t')||localStorage.getItem('csp_p')||localStorage.getItem('csp_f'))push()}).catch(()=>{});
