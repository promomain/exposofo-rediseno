(function(){
// ---------- datos (del programa original y del tríptico v83; sin actividades con invitación)
var DAYS=[
 {k:'jue',n:'Jueves 19',date:'2026-11-19',s:'Día del Agricultor e Innovación',o:'10:00',c:'20:00',x:'20:00'},
 {k:'vie',n:'Viernes 20',date:'2026-11-20',s:'Día Institucional y Gremial',o:'10:00',c:'21:00',x:'21:00'},
 {k:'sab',n:'Sábado 21',date:'2026-11-21',s:'Tradiciones, espectáculo y familia',o:'10:00',c:'22:00',x:'22:00'},
 {k:'dom',n:'Domingo 22',date:'2026-11-22',s:'Tradiciones, espectáculo y familia',o:'10:00',c:'21:00',x:'20:00'}];
var MUESTRA=['Bovinos, equinos y ovinos, aves de corral y granja educativa','Rincón Ganadero y Rincón Ecuestre','Maquinaria agrícola, automotriz, inmobiliaria y servicios del agro','Expo Mundo Rural INDAP y Expo Emprendimiento FOSIS','Patio Gastronómico y artesanías'];
var SHOW=['Apertura del Show','Demostración de coches','Escuadra árabe Haras Santa Ana','Escuadra Huella Ecuestre','Carrera de corpóreos','Demostración Barrilete','Presentación Haras Militar Pupunahue y Regimiento Húsares','Presentación cuadro negro del Ejército','Desfile de cierre'];
var CAT={ch:{n:'Charlas',s:'Charla'},de:{n:'Demostraciones',s:'Demostración'},co:{n:'Concursos y juras',s:'Concurso y jura'},es:{n:'Espectáculos',s:'Espectáculo'},ac:{n:'Actos oficiales',s:'Acto oficial'}};
var CICLO='Ciclo de charlas agrícolas';
// id, día, inicio, fin real, fin a mostrar, título, detalle, lugar, pin, categoría, extra
function V(id,s,e,se,t,det,lug,pin,c,x){var o={id:id,d:id.slice(0,3),s:s,e:e,se:se,t:t,det:det||'',lug:lug||'',pin:pin||'',c:c};for(var k in x||{})o[k]=x[k];return o}
var EV=[
 V('jue3','10:00','11:00','11:00','Estaciones demostrativas berries','UFRO','Salón Canelo','casino','de'),
 V('jue4','10:00','11:00','11:00','Charla de maquinaria','','Pabellón Empresas','pe','ch'),
 V('jue5','10:00','18:00','18:00','Jura y premiación Concurso ganadero','Bovinos, equinos y ovinos','Cancha Principal','cancha','co',{imp:1}),
 V('jue6','11:00','18:00','18:00','Foro agrícola','','Pabellón Empresas','pe','ch'),
 V('jue7','12:00','13:00','13:00','Demostración de drones','','Cancha verde del estacionamiento','estac','de'),
 V('jue8a','16:00','18:30','18:30','Avellano europeo','','Casino · Salón Copihue','casino','ch',{grp:'jue8',gt:CICLO,org:'AGRICHILE'}),
 V('jue8b','16:00','18:30','18:30','Innovación y tecnología en el agro','','Casino · Salón Copihue','casino','ch',{grp:'jue8',gt:CICLO,org:'ANASAC'}),
 V('jue8c','16:00','18:30','18:30','Charla financiera','','Casino · Salón Copihue','casino','ch',{grp:'jue8',gt:CICLO,org:'GLOBAL66'}),
 V('jue8d','16:00','18:30','18:30','Fertilización','','Casino · Salón Copihue','casino','ch',{grp:'jue8',gt:CICLO,org:'DERCOMAQ'}),
 V('vie2','11:00','13:00','13:00','Acto oficial EXPOSOFO 2026','','Cancha Principal','cancha','ac',{imp:1}),
 V('vie3','15:00','16:00','','Demostración Conecta Maquinaria','','Cancha Principal','cancha','de'),
 V('vie4','15:00','18:00','18:00','Foro agrícola','','Pabellón Empresas','pe','ch'),
 V('vie5','16:00','17:00','','Charla ganadera y demostración manejo ovino','Fedecarne y Jóvenes pastores 🇦🇷','Pabellón Ganadero','pg','ch'),
 V('vie6','16:00','17:00','','Competencia aparta de ganado','','Corral de Aparta','aparta','co'),
 V('sab1','10:00','20:00','20:00','Rodeo','','Medialuna','medialuna','co'),
 V('sab3','11:00','13:00','13:00','Jura de caballos árabes','','Cancha Principal','cancha','co'),
 V('sab4','13:30','14:30','14:30','Lanzamiento Expo Chol Chol','','Cancha Principal','cancha','ac'),
 V('sab5','15:00','18:00','18:00','Gran Show Ecuestre',SHOW,'Cancha Principal','cancha','es',{show:1}),
 V('sab6','18:30','22:00','','SOFO FEST','Disonancia (rock & pop) · Grupo Ranchero','Cancha Principal','cancha','es',{imp:1}),
 V('dom1','10:00','20:00','20:00','Rodeo','','Medialuna','medialuna','co'),
 V('dom3','12:00','13:00','13:00','Show infantil','','Cancha Principal','cancha','es'),
 V('dom4','13:00','13:30','13:30','Brigada Canina SAG','','Cancha Principal','cancha','de'),
 V('dom5','13:30','14:30','14:30','Lanzamiento Expo Loncoche','','Cancha Principal','cancha','ac'),
 V('dom6','15:00','18:00','18:00','Gran Show Ecuestre',SHOW,'Cancha Principal','cancha','es',{show:1})];
var PINS={cancha:{n:'Cancha Principal',x:60.3,y:78.8,c:'#157439'},medialuna:{n:'Medialuna',x:12.5,y:24.7,c:'#8a4b24'},pe:{n:'Pabellón Empresas',x:26.4,y:61.8,c:'#2b6cb0'},pg:{n:'Pabellón Ganadero',x:52.1,y:64.2,c:'#8a4b24'},casino:{n:'Casino · Salones',x:68.5,y:66.5,c:'#c0392b'},aparta:{n:'Corral de Aparta',x:75.8,y:49.5,c:'#9a6b3f'},estac:{n:'Cancha verde',x:7.2,y:80.5,c:'#3d6fb6',al:'l'}};
var LUGARES=[['cancha','Cancha Principal'],['pe','Pabellón Empresas'],['casino','Casino y salones'],['pg','Pabellón Ganadero'],['medialuna','Medialuna (rodeo)'],['aparta','Corral de Aparta'],['estac','Cancha verde del estacionamiento']];
var SERV=[{n:'Acceso principal',x:37.1,y:93.0,i:'🚪'},{n:'Patio Gastronómico',x:28.7,y:35.0,i:'🍽️'},{n:'Primeros auxilios',x:42.0,y:79.5,i:'➕'},{n:'Pabellón Tradiciones (artesanía)',x:38.7,y:33.0,i:'🧺'}];
// expositores del tríptico v83: código, nombre, rubro, sector
var XSEC={pe:'Pabellón Empresas',ic:'Carpa INDAP y Corner COPEC, junto al Pabellón Empresas',n:'Sector Automotriz',a:'Sitios de Exposición A',r:'Sector Maquinaria',e:'Sitios de Exposición E',z:'Ubicación por confirmar'};
var XSO=['pe','ic','n','a','r','e','z'];
var X=[['PE1–2','Servomec','','pe'],['PE3','Radiadores Palacios','Radiadores','pe'],['PE4','GTD','Telecomunicaciones e internet','pe'],['PE5','Santander','Banca y financiamiento','pe'],['PE6','BancoEstado','Banca y financiamiento','pe'],['PE7','Pocuro','Proyectos inmobiliarios','pe'],['PE8','Nualart','','pe'],['PE9','INESPA','','pe'],['PE10','Dadelco','','pe'],['PE11','Logisamb / Los Muermos','','pe'],['PE12','Agrotop','','pe'],['PE13','Lab Bio Bio','','pe'],['PE14','FIA','Fondos y proyectos de innovación agraria','pe'],['PE15','Eco Suelo','','pe'],['PE16','Syngenta','Semillas y protección de cultivos','pe'],['PE17','Teleservice','','pe'],['PE18','Liceo Sembrador','Establecimiento educacional','pe'],['PE19','LT Laser Tools','','pe'],['PE20','Rodaplus','','pe'],['PE21','IP Chile','Educación técnico-profesional','pe'],['PE','Club Café','Cafetería','pe'],['PE','Radio Mirador','Radioemisora · transmisión en vivo','pe'],
 ['INDAP','INDAP','Expo Mundo Rural · apoyo a la pequeña agricultura','ic'],['CF','Corner COPEC','Copec Flux · electromovilidad y energía solar','ic'],
 ['N1','De Car','','n'],['N2','Ferosor','Maquinaria agrícola (Hustler) · Los Muermos','n'],['N3–N5','Portillo','Automotora','n'],['N6','Frontel','Distribución eléctrica','n'],['N7','Movsa','','n'],
 ['A1','Alimor','','a'],['A2','Anteros','','a'],['A3','Alo Rental','','a'],['A4','Equipromaq','','a'],['A5','Repser','Repuestos de maquinaria agrícola','a'],['A6','Van Beek','','a'],['A7','Securitas','Seguridad privada','a'],['A8','Germania Import','','a'],['A9','RTI','','a'],['A10','Cercacero','','a'],['A11','Famagro','','a'],['A12','STIHL','Motosierras, desbrozadoras y herramientas a motor','a'],['A13','Agravis Technik','','a'],['A14','Motos Teo','Motocicletas','a'],
 ['R1','FACMA','Cosechadoras de avellanas y frutos secos','r'],['R2','SurAgro','','r'],['R3','SKC','Maquinaria y equipos','r'],['R4','Hund','','r'],['R5','Toroyo','','r'],['R6','Coseche','Automotora','r'],['R7','Sargent Agrícola','Maquinaria agrícola Joskin y Bednar','r'],['R8','Dercomaq','Maquinaria JCB','r'],['R9','Expo FOSIS','Programas de emprendimiento y apoyo social','r'],['R10','Salfa','Maquinaria John Deere y autos Toyota','r'],
 ['E2–E3','Jardín y Vivero San José','','e'],['E4','Serviagro Chile','Tecnología y servicio','e'],
 ['','INIA','','z'],['','Todo Campo','','z']];
// posición de cada sitio en el mapa (% del ancho y alto de img/mapa.jpg)
var XP={PE:[26,64.5],INDAP:[25.5,79],CF:[25.5,72.3],N1:[41.4,42],N2:[45.2,42],'N3–N5':[52.8,42],N6:[60.5,42],N7:[64.3,42],
 A14:[43,50.5],A13:[47.3,50.5],A12:[51.5,50.5],A11:[55.8,50.5],A10:[60,50.5],A9:[64.2,50.5],A8:[68.5,50.5],
 A1:[43,54.5],A2:[47.3,54.5],A3:[51.5,54.5],A4:[55.8,54.5],A5:[60,54.5],A6:[64.2,54.5],A7:[68.5,54.5],
 R9:[26.8,45.3],R8:[28.3,48.7],R7:[28.3,52.3],R6:[28.3,56],R5:[33,62.6],R4:[33,67.4],R3:[33,73.6],R2:[33,77.9],R1:[33,82.2],R10:[41.3,74.6],
 'E2–E3':[48.5,60.2],E4:[51.2,60.2]};
function xpos(c){return XP[c]||(/^PE/.test(c)?XP.PE:null)}

var $=function(s){return document.getElementById(s)};
var MAPI='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function ls(k,v){try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}}
function trk(n,d){try{if(window.umami&&typeof window.umami.track==='function')window.umami.track(n,d)}catch(e){}}
function tm(s){s=s.split(':');return +s[0]*60+(+s[1])}
function dayOf(k){return DAYS.filter(function(d){return d.k===k})[0]}
EV.forEach(function(e,i){e.i=i;e.date=dayOf(e.d).date;e.a=tm(e.s);e.b=tm(e.e);if(e.b<=e.a)e.b=e.a+60});
DAYS.forEach(function(d){d.oa=tm(d.o);d.ca=tm(d.c);d.xa=tm(d.x)});
function hora(e){return e.se?e.s+' a '+e.se:e.s}
function ft(e){return e.org?e.t+' · '+e.org:e.t}
function byId(id){return EV.filter(function(e){return e.id===id})[0]}
// unidades: una actividad suelta o un ciclo de charlas con sus filas
var UNITS={};
function unitsOf(k){var U=[],G={};EV.filter(function(e){return e.d===k}).sort(function(a,b){return a.a-b.a||a.i-b.i}).forEach(function(e){
 if(e.grp){if(!G[e.grp]){G[e.grp]={id:e.grp,grp:1,evs:[],r:e};U.push(G[e.grp])}G[e.grp].evs.push(e)}else U.push({id:e.id,evs:[e],r:e})});
 U.forEach(function(u){UNITS[u.id]=u});return U}
DAYS.forEach(function(d){unitsOf(d.k)});

var favs=ls('xs26_favs')||[], avisos=ls('xs26_av')||[30], fired=ls('xs26_fired')||{}, demo=null;
// el ciclo de charlas antes era una sola actividad: el favorito viejo pasa a sus cuatro charlas
if(favs.indexOf('jue8')>=0){favs=favs.filter(function(x){return x!=='jue8'});['jue8a','jue8b','jue8c','jue8d'].forEach(function(x){if(favs.indexOf(x)<0)favs.push(x)});ls('xs26_favs',favs)}
favs=favs.filter(function(x){return !!byId(x)});

// ---------- tiempo (hora de Chile)
var demoURL=null;
function now(){
 if(demoURL)return demoURL();
 if(demo)return demo;
 var p={};try{new Intl.DateTimeFormat('en-CA',{timeZone:'America/Santiago',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).formatToParts(new Date()).forEach(function(x){p[x.type]=x.value})}catch(e){var d=new Date();p={year:d.getFullYear(),month:('0'+(d.getMonth()+1)).slice(-2),day:('0'+d.getDate()).slice(-2),hour:d.getHours(),minute:d.getMinutes(),second:d.getSeconds()}}
 return {date:p.year+'-'+p.month+'-'+p.day,m:(+p.hour%24)*60+(+p.minute),sec:+p.second};
}
function st(e,n){
 if(e.date!==n.date)return e.date<n.date?'past':'fut';
 if(n.m>=e.a&&n.m<e.b)return 'live'; if(n.m>=e.b)return 'past'; return e.a-n.m<=60?'soon':'fut';
}
function mins(x){x=Math.round(x);if(x<60)return x+' min';var h=Math.floor(x/60),m=x%60;return h+' h'+(m?' '+m+' min':'')}

// ---------- filtros
var fT='',fL='';
function passF(e){return (!fT||e.c===fT)&&(!fL||e.pin===fL)}
$('fT').innerHTML='<button data-t="">Todo</button>'+Object.keys(CAT).map(function(k){return '<button data-t="'+k+'" data-c="'+k+'" style="--cc:var(--'+k+')"><i style="background:var(--'+k+')"></i>'+CAT[k].n+'</button>'}).join('');
$('fL').innerHTML='<option value="">Todo el parque</option>'+LUGARES.map(function(l){return '<option value="'+l[0]+'">'+esc(l[1])+'</option>'}).join('');
$('fT').querySelectorAll('button').forEach(function(b){b.onclick=function(){fT=(fT===b.dataset.t)?'':b.dataset.t;trk('filtro-tipo',{tipo:fT?CAT[fT].n:'Todo'});renderDias();tick()}});
$('fL').onchange=function(){fL=this.value;trk('filtro-lugar',{lugar:fL?PINS[fL].n:'Todo el parque'});renderDias();tick()};
function clearF(){fT='';fL='';$('fL').value='';trk('filtro-limpiar');renderDias();tick()}
$('fClr').onclick=clearF;
function paintFilt(){
 $('fT').querySelectorAll('button').forEach(function(b){var on=b.dataset.t===fT;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
 var on=fT||fL;$('fS').classList.toggle('on',!!on);
 $('fSt').textContent=on?'Mostrando: '+[fT?CAT[fT].n:'',fL?LUGARES.filter(function(l){return l[0]===fL})[0][1]:''].filter(Boolean).join(' · '):'';
}

// ---------- programa
var selDay=null;
function renderTabs(){
 $('dtabs').innerHTML=DAYS.map(function(d){var p=d.n.split(' ');return '<button class="dt" data-d="'+d.k+'" data-date="'+d.date+'" aria-label="'+esc(d.n)+' de noviembre"><span>'+p[0].slice(0,3)+'</span><b>'+p[1]+'</b></button>'}).join('');
 document.querySelectorAll('.dt').forEach(function(b){b.onclick=function(){sel(b.dataset.d,1);trk('dia',{dia:b.dataset.d})}});
}
function mlBtn(e,o){return e.pin?'<button class="ml" data-pin="'+e.pin+'" data-ev="'+e.id+'" data-o="'+o+'">'+MAPI+'<span class="mlt"><span>'+esc(e.lug)+'</span><small>Ver en mapa</small></span></button>':(e.lug?'<span class="lu">'+MAPI+esc(e.lug)+'</span>':'')}
function stBtn(e){return '<button class="st" data-f="'+e.id+'" aria-label="Guardar en favoritos: '+esc(ft(e))+'">★</button>'}
function timeLine(e){return '<div class="hr2"><b>'+esc(e.s)+'</b>'+(e.se?'<span>a '+esc(e.se)+'</span>':'')+'<span class="cw"></span></div>'}
function unitHTML(u){var e=u.r,cc=' style="--cc:var(--'+e.c+')"';
 if(u.grp){
  return '<li class="u" id="u-'+u.id+'" data-u="'+u.id+'"'+cc+'><div class="gh"><span class="tg">Ciclo de charlas</span>'+timeLine(e)+'<div class="a">'+esc(e.gt)+'</div><div class="det">'+u.evs.length+' charlas en el mismo salón, entre las '+e.s+' y las '+e.se+'. Guarda con ★ las que te interesen.</div>'+mlBtn(e,'programa')+'</div>'
   +'<ul class="sub2">'+u.evs.map(function(c){return '<li><div><div class="nm">'+esc(c.t)+'</div><div class="org">'+esc(c.org)+'</div></div>'+stBtn(c)+'</li>'}).join('')+'</ul></li>';
 }
 var det='';
 if(Array.isArray(e.det))det='<ol class="pl">'+e.det.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ol>';
 else if(e.det)det='<div class="det">'+esc(e.det)+'</div>';
 return '<li class="u'+(e.imp?' imp1':'')+'" id="u-'+u.id+'" data-u="'+u.id+'"'+cc+'><div class="ev"><div class="b"><span class="tg">'+CAT[e.c].s+'</span>'+timeLine(e)+'<div class="a">'+esc(e.t)+(e.imp?'<span class="imp">Imperdible</span>':'')+'</div>'+det+mlBtn(e,'programa')+'</div>'+stBtn(e)+'</div></li>';
}
function allDay(d){return '<div class="allday"><div class="k2">Todo el día · '+d.o+' – '+d.x+'</div><div class="ttl">Exposiciones y muestras</div>'
 +'<div class="sum">Ganado, maquinaria, INDAP y FOSIS, gastronomía y artesanía, en todo el parque.</div><div class="mchips" hidden>'+MUESTRA.map(function(x){return '<span>'+esc(x)+'</span>'}).join('')+'</div>'
 +'<div class="acts2"><button class="more" aria-expanded="false">Ver qué hay</button><button class="ml" data-all="1">'+MAPI+'Ver en mapa</button></div></div>'}
var CLK='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
function renderDias(){
 paintFilt();
 $('dias').innerHTML=DAYS.map(function(d){
  var U=unitsOf(d.k).filter(function(u){return passF(u.r)}),f=fT||fL;
  var body=U.length?'<ol class="evs">'+U.map(unitHTML).join('')+'</ol>':'<div class="empty"><b>☆</b>No hay '+(fT?CAT[fT].n.toLowerCase():'actividades')+(fL?' en '+esc(LUGARES.filter(function(l){return l[0]===fL})[0][1]):'')+' este día.<br>Prueba otro día o mira todo el programa.<br><button class="eclr">Ver todo el programa</button></div>';
  return '<section class="dia'+(d.k===selDay?' on':'')+'" data-k="'+d.k+'"><div class="park">'+CLK+'Parque abierto '+d.o+' – '+d.c+'</div>'+(f?'':allDay(d))+body+'</section>'}).join('');
 $('dias').querySelectorAll('.st').forEach(function(b){b.onclick=function(){togF(b.dataset.f,'programa')}});
 $('dias').querySelectorAll('.more').forEach(function(b){b.onclick=function(){var ad=b.closest('.allday'),ch=ad.querySelector('.mchips'),o=ch.hidden;ch.hidden=!o;ad.querySelector('.sum').hidden=o;b.setAttribute('aria-expanded',o);b.textContent=o?'Ocultar':'Ver qué hay';if(o)trk('todo-el-dia')}});
 $('dias').querySelectorAll('[data-all]').forEach(function(b){b.onclick=function(){trk('ver-en-mapa',{origen:'todo el dia',lugar:'Todo el parque'});F.serv=1;openMap()}});
 $('dias').querySelectorAll('.eclr').forEach(function(b){b.onclick=clearF});
 bindML($('dias'));paintF();lastStates='';
}
function sel(k,u){selDay=k;var d=dayOf(k);
 if(u&&$('days').classList.contains('stuck')){var y=$('dsent').getBoundingClientRect().top+window.scrollY-navH()+1;window.scrollTo({top:y,behavior:'smooth'})}
 document.querySelectorAll('.dt').forEach(function(t){var on=t.dataset.d===k;t.classList.toggle('on',on);t.setAttribute('aria-pressed',on)});
 document.querySelectorAll('.dia').forEach(function(s){s.classList.toggle('on',s.dataset.k===k)});
 $('theme').innerHTML='<b>'+esc(d.n)+'</b><span>· '+esc(d.s)+'</span>';
}

// ---------- estados en vivo
var lastDate=null,lastStates='';
function tick(){
 var n=now(),hh=Math.floor(n.m/60),mm=n.m%60,today=DAYS.filter(function(d){return d.date===n.date})[0];
 var clk=('0'+hh).slice(-2)+':'+('0'+mm).slice(-2);
 if(today){var abierto=n.m>=today.oa&&n.m<today.ca;
  $('clk').innerHTML='<b>'+clk+'</b> · '+today.n+' · '+(abierto?'Parque abierto hasta las '+today.c:(n.m<today.oa?'Abre a las '+today.o:'Parque cerrado'));
  $('clock').classList.toggle('off',!abierto);}
 else{var f=DAYS[0].date;
  if(n.date<f){var dd=Math.round((Date.parse(f)-Date.parse(n.date))/864e5);$('clk').innerHTML='<b>'+clk+'</b> · Faltan '+dd+' día'+(dd>1?'s':'')+' para EXPOSOFO 2026';}
  else $('clk').innerHTML='<b>'+clk+'</b> · ¡Gracias por venir a EXPOSOFO 2026!';
  $('clock').classList.add('off');}
 if(demo||demoURL)$('clk').innerHTML+=' <span class="demo">'+(demoURL?'MODO PRUEBA':'DEMO')+'</span>';
 document.querySelectorAll('.dt').forEach(function(t){t.classList.toggle('hoy',t.dataset.date===n.date)});
 if(lastDate!==n.date){lastDate=n.date;if(today)sel(today.k);else if(!selDay)sel('jue')}
 var liveP={};
 document.querySelectorAll('#dias [data-u]').forEach(function(el){var u=UNITS[el.dataset.u],e=u.r,s=st(e,n),cw=el.querySelector('.cw');
  el.classList.remove('live','soon','past');cw.innerHTML='';
  if(s==='live'){el.classList.add('live');cw.innerHTML='<span class="chip">● En curso</span>'}
  else if(s==='soon'){el.classList.add('soon');cw.innerHTML='<span class="chip">en '+mins(e.a-n.m)+'</span>'}
  else if(s==='past'&&e.date===n.date){el.classList.add('past');cw.innerHTML='<span class="chip">Terminó</span>'}});
 EV.forEach(function(e){if(e.pin&&st(e,n)==='live')liveP[e.pin]=1});
 // Ahora / A continuación: solo en los días de la feria
 var on=false;
 if(today){var U=unitsOf(today.k),lv=U.filter(function(u){return st(u.r,n)==='live'}),nx=U.filter(function(u){return u.r.a>n.m}).slice(0,2),
  mu=n.m>=today.oa&&n.m<today.xa;
  on=!!(lv.length||nx.length||mu);
  if(on){
   var h=lv.slice(0,4).map(function(u){var e=u.r,p=Math.min(100,(n.m-e.a)/(e.b-e.a)*100);return ni(u,'Termina en '+mins(e.b-n.m),p)}).join('');
   if(lv.length>4)h+='<div class="ni"><div class="none">Y '+(lv.length-4)+' más en curso: míralas abajo.</div></div>';
   if(mu)h+='<div class="ni"><span class="bar" style="background:var(--lime)"></span><div style="flex:1;min-width:0"><div class="tt">Exposiciones y muestras</div><div class="sub">Todo el parque · hasta las '+today.x+'</div></div></div>';
   if(!h)h='<div class="ni"><div class="none">No hay actividades en curso en este momento.</div></div>';
   $('ahL').innerHTML=h;
   $('nxT').style.display=nx.length?'':'none';
   $('nxL').innerHTML=nx.map(function(u){return ni(u,'Empieza en '+mins(u.r.a-n.m))}).join('');
   bindML($('ahora'));
  }
 }
 $('ahora').classList.toggle('on',on);
 document.querySelectorAll('.pin').forEach(function(p){p.classList.toggle('livep',!!liveP[p.dataset.pin])});
 renderWhere(n);
 applyFilter();checkAvisos(n);renderFavs(n);
}
function ni(u,sub,p){var e=u.r,t=u.grp?e.gt:e.t;
 return '<div class="ni"><span class="bar" style="background:var(--'+e.c+');box-shadow:0 0 0 2px rgba(255,255,255,.75)"></span><div style="min-width:0"><div class="tt">'+esc(t)+'</div><div class="sub"><b>'+esc(hora(e))+'</b>'+(e.lug?' · '+esc(e.lug):'')+'</div><div class="sub">'+sub+'</div>'+(p!==undefined?'<div class="prog"><i style="width:'+p+'%"></i></div>':'')+'</div>'+(e.pin?'<button class="mapb" data-pin="'+e.pin+'" data-ev="'+e.id+'" data-o="ahora" aria-label="Ver '+esc(t)+' en el mapa">'+MAPI.replace(/18/g,'22')+'Mapa</button>':'')+'</div>'}

// ---------- favoritos
function isF(id){return favs.indexOf(id)>=0}
function togF(id,o){var add=!isF(id);if(add)favs.push(id);else favs.splice(favs.indexOf(id),1);ls('xs26_favs',favs);trk('favorito',{accion:add?'agregar':'quitar',actividad:ft(byId(id)),origen:o||''});paintF();tick();
 if(add&&favs.length===1)toastMsg('★ Guardado en Mis favoritos','Te avisamos antes de que empiece','Elige 1 hora, 30 o 10 min en la pestaña “Favoritos”.');}
function paintF(){document.querySelectorAll('.st').forEach(function(b){var on=isF(b.dataset.f);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});$('fc').hidden=!favs.length;$('fc').textContent=favs.length;
 document.querySelectorAll('.pin').forEach(function(p){p.classList.toggle('hasfav',favs.some(function(id){var e=byId(id);return e&&e.pin===p.dataset.pin}))})}
function gcal(e){var dt=e.date.replace(/-/g,''),f=function(m){return ('0'+Math.floor(m/60)).slice(-2)+('0'+m%60).slice(-2)+'00'};
 return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(ft(e)+' · EXPOSOFO 2026')+'&dates='+dt+'T'+f(e.a)+'/'+dt+'T'+f(e.b)+'&ctz=America/Santiago&location='+encodeURIComponent((e.lug?e.lug+', ':'')+'Parque SOFO, Rudecindo Ortega 04780, Temuco')+'&details='+encodeURIComponent((e.gt?e.gt+' · ':'')+'EXPOSOFO 2026 · 19 al 22 de noviembre · Parque SOFO Temuco')}
function ics(e){var m=avisos.slice().sort(function(a,b){return b-a}).join('-')||'0';return 'cal/'+e.id+'-'+m+'.ics'}
var lastFavHtml='';
function renderFavs(n){
 var L=favs.map(byId).filter(Boolean).sort(function(a,b){return a.date<b.date?-1:a.date>b.date?1:a.a-b.a||a.i-b.i});
 var h=L.length?L.map(function(e){var s=st(e,n),d=dayOf(e.d),cd='';
  if(s==='live')cd='● En curso · termina en '+mins(e.b-n.m);else if(e.date===n.date&&e.a>n.m)cd='Empieza en '+mins(e.a-n.m);else if(s==='past')cd='Ya terminó';
  return '<div class="fi'+(s==='past'?' past':'')+'"><div class="top2"><div style="flex:1;min-width:0"><div class="w">'+esc(d.n)+' · '+esc(hora(e))+'</div><div class="n">'+esc(e.t)+'</div>'+(e.gt?'<div class="lg">'+esc(e.gt)+' · '+esc(e.org)+'</div>':'')+(e.lug?'<div class="lg">'+esc(e.lug)+'</div>':'')+(cd?'<div class="cd">'+cd+'</div>':'')+'</div>'+stBtn(e)+'</div><div class="acts">'+(e.pin?'<button class="ml" style="margin:0" data-pin="'+e.pin+'" data-ev="'+e.id+'" data-o="favoritos">'+MAPI+'Ver en mapa</button>':'')+'<a href="'+ics(e)+'" data-umami-event="calendario-iphone">+ Calendario iPhone</a><a href="'+gcal(e)+'" target="_blank" rel="noopener noreferrer" data-umami-event="calendario-google">+ Google Calendar</a></div></div>'}).join('')
 :'<div class="empty" style="padding:14px 6px"><b>★</b>Aún no tienes favoritos.<br>En el <a href="#programa">Programa</a> toca la estrella de las actividades que no te quieres perder.</div>';
 if(h!==lastFavHtml){lastFavHtml=h;$('favL').innerHTML=h;$('favL').querySelectorAll('.st').forEach(function(b){b.onclick=function(){togF(b.dataset.f,'favoritos')}});bindML($('favL'));paintF()}
}

// ---------- avisos
function paintOpts(){document.querySelectorAll('#opts button').forEach(function(b){b.classList.toggle('on',avisos.indexOf(+b.dataset.m)>=0)})}
document.querySelectorAll('#opts button').forEach(function(b){b.onclick=function(){var m=+b.dataset.m,i=avisos.indexOf(m);if(i>=0)avisos.splice(i,1);else avisos.push(m);ls('xs26_av',avisos);paintOpts();lastFavHtml='';tick()}});
var actx=null;
function beep(){try{if(!actx)return;[0,0.25,0.5].forEach(function(t){var o=actx.createOscillator(),g=actx.createGain();o.frequency.value=t===0.5?1046:784;o.connect(g);g.connect(actx.destination);g.gain.setValueAtTime(.0001,actx.currentTime+t);g.gain.exponentialRampToValueAtTime(.35,actx.currentTime+t+.02);g.gain.exponentialRampToValueAtTime(.0001,actx.currentTime+t+.22);o.start(actx.currentTime+t);o.stop(actx.currentTime+t+.24)})}catch(e){}}
$('act').onclick=function(){
 try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();if(actx.resume)actx.resume()}catch(e){}
 beep();try{navigator.vibrate&&navigator.vibrate(200)}catch(e){}
 trk('activar-avisos',{minutos:avisos.join('-')});
 var m=$('okm');m.hidden=false;m.textContent=avisos.length?'✓ Avisos activados: '+avisos.slice().sort(function(a,b){return b-a}).map(function(x){return x===60?'1 hora':x+' min'}).join(', ')+' antes. Mantén la página abierta.':'Elige al menos un horario de aviso.';
 try{if(window.Notification&&Notification.permission==='default'){var pr=Notification.requestPermission();if(pr&&pr.catch)pr.catch(function(){})}}catch(e){}
};
function checkAvisos(n){
 favs.map(byId).filter(Boolean).forEach(function(e){if(e.date!==n.date)return;
  avisos.concat([0]).forEach(function(m){var t=e.a-m,key=e.id+'_'+m;
   if(n.m>=t&&n.m<t+5&&n.m<e.b&&!fired[key]){fired[key]=1;ls('xs26_fired',fired);
    toastMsg(m?'⏰ En '+(m===60?'1 hora':m+' minutos'):'▶ Comienza ahora',ft(e),(e.lug||'Parque SOFO')+' · '+hora(e),e)}})});
}
var tEv=null;
function toastMsg(k,nm,l,e){$('tK').textContent=k;$('tN').textContent=nm;$('tL').textContent=l;tEv=e||null;$('tMap').style.display=e&&e.pin?'':'none';$('toast').classList.add('on');
 if(e){beep();try{navigator.vibrate&&navigator.vibrate([300,150,300])}catch(x){}
  try{if(window.Notification&&Notification.permission==='granted'){var o={body:nm+' — '+l,icon:'img/icon-192.png',tag:e.id,vibrate:[300,150,300]};if(navigator.serviceWorker&&navigator.serviceWorker.controller)navigator.serviceWorker.ready.then(function(r){r.showNotification('EXPOSOFO 2026 · '+k,o)});else new Notification('EXPOSOFO 2026 · '+k,o)}}catch(x){}}
 clearTimeout(toastMsg.t);if(!e)toastMsg.t=setTimeout(function(){$('toast').classList.remove('on')},4500)}
$('tX').onclick=function(){$('toast').classList.remove('on')};
$('tMap').onclick=function(){$('toast').classList.remove('on');if(tEv){trk('ver-en-mapa',{origen:'aviso',lugar:PINS[tEv.pin].n});openMap({pin:tEv.pin,ev:tEv.id})}};

// ---------- mapa a pantalla completa
var mi=$('mi'),mb=$('mb'),R=2352/2600,BW=1,BH=1,padB=0;
Object.keys(PINS).forEach(function(k){var p=PINS[k],b=document.createElement('button');b.className='pin'+(p.al?' al':'');b.dataset.pin=k;b.style.left=p.x+'%';b.style.top=p.y+'%';b.setAttribute('aria-label',p.n);
 b.innerHTML='<span class="halo"></span><div class="bd" style="background:'+p.c+'"><span>★</span></div><span class="lb">'+esc(p.n)+'</span>';b.onclick=function(){openPin(k)};mi.appendChild(b)});
SERV.forEach(function(v){var b=document.createElement('div');b.className='sv';b.style.left=v.x+'%';b.style.top=v.y+'%';b.innerHTML=v.i+'<span class="lb2">'+esc(v.n)+'</span>';mi.appendChild(b)});
var F0={fav:1,act:1,serv:0},F={fav:1,act:1,serv:0};
$('mf').innerHTML='<button data-f="fav">★ Favoritos</button><button data-f="act">Actividades</button><button data-f="serv">Servicios</button><button data-f="clr">Limpiar</button>';
$('mf').querySelectorAll('button').forEach(function(b){b.onclick=function(){var f=b.dataset.f;if(f==='clr')F={fav:F0.fav,act:F0.act,serv:F0.serv};else F[f]=F[f]?0:1;trk('filtro-mapa',{filtro:f});applyFilter()}});
function applyFilter(){
 $('mf').querySelectorAll('button').forEach(function(b){b.classList.toggle('on',!!F[b.dataset.f])});
 document.querySelectorAll('.pin').forEach(function(p){p.classList.toggle('vis',!!((F.fav&&p.classList.contains('hasfav'))||F.act||p.classList.contains('sel')))});
 document.querySelectorAll('.sv').forEach(function(v){v.classList.toggle('vis',!!F.serv)});
}
// zoom con los dedos (pellizcar, arrastrar, doble toque)
var S=1,TX=0,TY=0,PT={},g=null,moved=false,lastTap=0,lastXY=null,vel={x:0,y:0},raf=0;
function W(){return mb.clientWidth} function H(){return mb.clientHeight}
function lay(){var w=W(),h=H();if(!w||!h)return;BW=Math.min(w,h/R);BH=BW*R;mi.style.width=BW+'px'}
function clamp(){S=Math.max(1,Math.min(6,S));var w=W(),h=H(),cw=BW*S,ch=BH*S;
 TX=cw<=w?(w-cw)/2:Math.min(0,Math.max(w-cw,TX));TY=ch+padB<=h?(h-padB-ch)/2:Math.min(0,Math.max(h-padB-ch,TY))}
function paint(anim){clamp();mi.classList.toggle('anim',!!anim);mi.style.transform='translate3d('+TX+'px,'+TY+'px,0) scale('+S+')';mi.style.setProperty('--iz',(1/Math.pow(S,.75)).toFixed(3));$('zr').classList.toggle('on',S>1.01)}
function zoomAt(ns,px,py,anim){ns=Math.max(1,Math.min(6,ns));TX=px-(px-TX)*ns/S;TY=py-(py-TY)*ns/S;S=ns;paint(anim)}
function zoomTo(ns,fx,fy,anim,cy){S=Math.max(1,Math.min(6,ns));TX=W()/2-fx*BW*S;TY=(cy===undefined?H()/2:cy)-fy*BH*S;paint(anim)}
function rel(e){var r=mb.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top}}
function pts(){return Object.keys(PT).map(function(k){return PT[k]})}
function start(){var p=pts();cancelAnimationFrame(raf);
 if(p.length===1)g={t:'pan',x:p[0].x,y:p[0].y,tx:TX,ty:TY,lx:p[0].x,ly:p[0].y,lt:Date.now()};
 else if(p.length>=2){var a=p[0],b=p[1];g={t:'pinch',d:Math.hypot(a.x-b.x,a.y-b.y)||1,s:S,cx:(a.x+b.x)/2,cy:(a.y+b.y)/2,tx:TX,ty:TY};moved=true}}
mb.addEventListener('pointerdown',function(e){if(e.pointerType==='mouse'&&e.button!==0)return;var p=rel(e);PT[e.pointerId]={x:p.x,y:p.y,x0:p.x,y0:p.y};if(Object.keys(PT).length===1)moved=false;mi.classList.remove('anim');start()});
window.addEventListener('pointermove',function(e){if(!PT[e.pointerId]||!g)return;var p=rel(e),q=PT[e.pointerId];q.x=p.x;q.y=p.y;
 if(Math.hypot(q.x-q.x0,q.y-q.y0)>6)moved=true;
 if(g.t==='pan'){if(S<=1.01)return;e.preventDefault();var t=Date.now(),dt=Math.max(1,t-g.lt);vel={x:(p.x-g.lx)/dt,y:(p.y-g.ly)/dt};g.lx=p.x;g.ly=p.y;g.lt=t;TX=g.tx+(p.x-g.x);TY=g.ty+(p.y-g.y);paint()}
 else{var P=pts(),a=P[0],b=P[1];if(!b)return;var d=Math.hypot(a.x-b.x,a.y-b.y),cx=(a.x+b.x)/2,cy=(a.y+b.y)/2,ns=Math.max(1,Math.min(6,g.s*d/g.d));
  TX=cx-(g.cx-g.tx)*ns/g.s;TY=cy-(g.cy-g.ty)*ns/g.s;S=ns;paint()}},{passive:false});
function end(e){if(!PT[e.pointerId])return;var wasPan=g&&g.t==='pan',p=PT[e.pointerId];delete PT[e.pointerId];
 if(Object.keys(PT).length){start();return}
 g=null;
 if(!moved&&e.type==='pointerup'){var t=Date.now();
  if(t-lastTap<300&&lastXY&&Math.hypot(p.x-lastXY.x,p.y-lastXY.y)<30){lastTap=0;if(S<1.8)zoomAt(2.6,p.x,p.y,true);else zoomTo(1,.5,.5,true);return}
  lastTap=t;lastXY={x:p.x,y:p.y};
  var tg=e.target;setTimeout(function(){if(lastTap===t&&(tg===mi||tg===mb))closeSheet()},310);return}
 if(wasPan&&S>1.01){var vx=vel.x*16,vy=vel.y*16;(function step(){vx*=.92;vy*=.92;if(Math.abs(vx)<.4&&Math.abs(vy)<.4)return;TX+=vx;TY+=vy;paint();raf=requestAnimationFrame(step)})()}
}
window.addEventListener('pointerup',end);window.addEventListener('pointercancel',end);
mb.addEventListener('click',function(e){if(moved){e.stopPropagation();e.preventDefault()}},true);
mb.addEventListener('wheel',function(e){e.preventDefault();var p=rel(e);zoomAt(S*Math.exp(-e.deltaY*(e.ctrlKey?.01:.002)),p.x,p.y)},{passive:false});
mb.addEventListener('dragstart',function(e){e.preventDefault()});
$('zr').onclick=function(){closeSheet();zoomTo(1,.5,.5,true)};
window.addEventListener('resize',function(){if(fsOpen){lay();paint()}});

var fsOpen=false;
function openMap(o){o=o||{};
 if(!fsOpen){$('mapfs').hidden=false;document.documentElement.classList.add('fs');fsOpen=true;try{history.pushState({fs:1},'')}catch(x){}}
 closeSheet();$('site').classList.remove('on');lay();
 if(o.pin){var p=PINS[o.pin];openPin(o.pin,o.ev);zoomTo(2.4,p.x/100,p.y/100,false,(H()-padB)/2)}
 else if(o.x!==undefined){var x=X[o.x],xy=xpos(x[0]);$('siteT').textContent=x[0]+' · '+x[1];$('site').style.left=xy[0]+'%';$('site').style.top=xy[1]+'%';$('site').classList.add('on');
  openSite(o.x);zoomTo(2.8,xy[0]/100,xy[1]/100,false,(H()-padB)/2)}
 else zoomTo(1,.5,.5);
 applyFilter();
 setTimeout(function(){try{$('fsx').focus({preventScroll:true})}catch(x){}},50);
}
function closeMap(fromPop){if(!fsOpen)return;fsOpen=false;$('mapfs').hidden=true;document.documentElement.classList.remove('fs');closeSheet();$('site').classList.remove('on');
 if(!fromPop){try{if(history.state&&history.state.fs)history.back()}catch(x){}}}
window.addEventListener('popstate',function(){if(fsOpen)closeMap(true)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&fsOpen){if($('sheet').classList.contains('on'))closeSheet();else closeMap()}});
$('fsx').onclick=function(){closeMap()};
$('mprev').onclick=function(){trk('abrir-mapa',{origen:'pestaña mapa'});openMap()};
function openPin(k,evId){var p=PINS[k],n=now();document.querySelectorAll('.pin').forEach(function(x){x.classList.toggle('sel',x.dataset.pin===k)});
 var L=EV.filter(function(e){return e.pin===k}),h='<h4><span style="color:'+p.c+';display:inline-flex">'+MAPI.replace(/18/g,'26')+'</span>'+esc(p.n)+'<button class="x" aria-label="Cerrar">×</button></h4>';
 var ord=DAYS.slice().sort(function(a,b){return (a.date===n.date?-1:0)-(b.date===n.date?-1:0)});
 ord.forEach(function(d){var de=L.filter(function(e){return e.d===d.k}).sort(function(a,b){return a.a-b.a||a.i-b.i});if(!de.length)return;h+='<div class="dd">'+(d.date===n.date?'Hoy · ':'')+esc(d.n)+'</div>';
  de.forEach(function(e){var s=st(e,n),hl=e.id===evId||(evId&&byId(evId)&&byId(evId).grp&&byId(evId).grp===e.grp);
   h+='<div class="si'+(s==='past'&&d.date===n.date?' past':'')+(hl?' hl':'')+'"><div><div class="w">'+esc(hora(e))+(s==='live'?' · <span style="color:var(--red)">● EN CURSO</span>':'')+'</div><div class="n">'+esc(e.gt?e.t+' ('+e.org+')':e.t)+'</div></div>'+stBtn(e)+'</div>'})});
 showSheet(h)}
function openSite(i){var x=X[i];
 showSheet('<h4>'+esc(x[1])+'<button class="x" aria-label="Cerrar">×</button></h4><div class="xd"><b>Sitio '+esc(x[0])+'</b> · '+esc(XSEC[x[3]])+(x[2]?'<br>'+esc(x[2]):'')+'</div><div class="xd">Lo marcamos en rojo en el mapa.</div>')}
function showSheet(h){$('shC').innerHTML=h;$('sheet').classList.add('on');padB=fsOpen?$('sheet').offsetHeight:0;$('shC').querySelectorAll('.x').forEach(function(b){b.onclick=closeSheet});
 $('shC').querySelectorAll('.st').forEach(function(b){b.onclick=function(){togF(b.dataset.f,'mapa')}});paintF()}
function closeSheet(){$('sheet').classList.remove('on');if(padB){padB=0;if(fsOpen)paint(true)}document.querySelectorAll('.pin').forEach(function(x){x.classList.remove('sel')})}
function bindML(root){root.querySelectorAll('.ml[data-pin],.mapb[data-pin]').forEach(function(b){b.onclick=function(){trk('ver-en-mapa',{origen:b.dataset.o||'',lugar:PINS[b.dataset.pin].n});openMap({pin:b.dataset.pin,ev:b.dataset.ev})}})}

// ---------- ¿Dónde es cada actividad?
var whOpen=false,lastWh='';
$('wh').onclick=function(){whOpen=!whOpen;$('wh').classList.toggle('open',whOpen);$('whb').classList.toggle('open',whOpen);$('wh').setAttribute('aria-expanded',whOpen)};
$('gomap').onclick=function(){trk('abrir-mapa',{origen:'donde es cada actividad'});openMap()};
function renderWhere(n){
 var idx=DAYS.map(function(d){return d.date}).indexOf(n.date);if(idx<0)idx=n.date<DAYS[0].date?0:-1;
 var ds=idx<0?DAYS:DAYS.slice(idx),h='';
 ds.forEach(function(d,i){var U=unitsOf(d.k).filter(function(u){return u.r.lug});if(!U.length)return;
  var isHoy=d.date===n.date;h+='<div class="wd'+(isHoy?' hoy':'')+'">'+(isHoy?'Hoy · ':(i===1&&idx>=0?'Próximos días · ':''))+esc(d.n)+'</div>';
  U.forEach(function(u){var e=u.r,s=st(e,n);h+='<div class="wi'+(s==='past'&&isHoy?' past':'')+'"><div class="t">'+esc(e.s)+'</div><div><span class="n">'+esc(u.grp?e.gt:e.t)+'</span> <span class="l">— '+esc(e.lug)+'</span>'+(s==='live'?' <span class="lv">● en curso</span>':'')+'</div></div>'})});
 if(h!==lastWh){lastWh=h;$('whL').innerHTML=h}
}

// ---------- buscador de expositores
function norm(s){return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[–-]/g,'-')}
function codeKey(s){return norm(s).replace(/[^a-z0-9]/g,'')}
function xRow(i){var x=X[i],xy=xpos(x[0]);
 return '<div class="xr"><div class="cd'+(x[0]?'':' nc')+'">'+(x[0]?esc(x[0]):'Por<br>confirmar')+'</div><div><div class="nm">'+esc(x[1])+'</div>'+(x[2]?'<div class="ds">'+esc(x[2])+'</div>':'')+'<div class="ds">'+esc(XSEC[x[3]])+'</div>'
  +(xy?'<button class="ml xm" data-x="'+i+'">'+MAPI+'<span><u>Ver en mapa</u></span></button>':'')+'</div></div>'}
var xAll=false,xT=0;
function renderX(){var q=$('xq').value.trim(),h='';$('srch').classList.toggle('has',!!q);$('xhint').hidden=!!q;
 if(q){var nq=norm(q),cq=codeKey(q),R1=[];
  X.forEach(function(x,i){var ck=codeKey(x[0]),sc=-1;
   if(cq&&ck===cq)sc=0;else if(cq&&/^[a-z]+\d/.test(cq)&&ck.indexOf(cq)===0)sc=1;else if(norm(x[1]).indexOf(nq)===0)sc=2;else if(norm(x[1]+' '+x[2]+' '+XSEC[x[3]]).indexOf(nq)>=0)sc=3;
   if(sc>=0)R1.push([sc,i])});
  R1.sort(function(a,b){return a[0]-b[0]||a[1]-b[1]});
  h=R1.length?R1.map(function(r){return xRow(r[1])}).join(''):'<div class="xhint">No encontramos “'+esc(q)+'”. Prueba con otra palabra o con el código del sitio (por ejemplo PE5 o R10).</div>';
  clearTimeout(xT);xT=setTimeout(function(){trk('buscar-expositor',{busqueda:q.slice(0,40),resultados:R1.length})},1200);
  $('xall').hidden=true;
 }else{$('xall').hidden=false;$('xall').textContent=xAll?'Ocultar la lista':'Ver los 57 por sector';
  if(xAll)XSO.forEach(function(k){h+='<div class="xsec">'+esc(XSEC[k])+'</div>'+X.map(function(x,i){return x[3]===k?xRow(i):''}).join('')})}
 $('xres').innerHTML=h;
 $('xres').querySelectorAll('.xm').forEach(function(b){b.onclick=function(){var x=X[+b.dataset.x];trk('ver-en-mapa',{origen:'expositor',expositor:x[1],sitio:x[0]});openMap({x:+b.dataset.x})}});
}
$('xq').addEventListener('input',renderX);
$('xq').addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();this.blur()}});
$('xclr').onclick=function(){$('xq').value='';renderX();$('xq').focus()};
$('xall').onclick=function(){xAll=!xAll;if(xAll)trk('ver-todos-expositores');renderX()};

// ---------- días fijos al bajar
function navH(){return document.querySelector('nav.main').offsetHeight}
function setNav(){document.documentElement.style.setProperty('--navh',navH()+'px')}
setNav();window.addEventListener('resize',setNav);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(setNav);
function chkStuck(){var on=$('v-programa').classList.contains('on')&&$('dsent').getBoundingClientRect().top<navH();$('days').classList.toggle('stuck',on)}
window.addEventListener('scroll',chkStuck,{passive:true});window.addEventListener('hashchange',function(){setTimeout(chkStuck,50)});

// ---------- vistas
var VW=['programa','mapa','favoritos','info'];
function show(){var h=(location.hash||'').slice(1);if(VW.indexOf(h)<0)h='programa';VW.forEach(function(v){$('v-'+v).classList.toggle('on',v===h)});
 document.querySelectorAll('.mt a').forEach(function(a){a.classList.toggle('on',a.dataset.v===h);if(a.dataset.v===h)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})}
window.addEventListener('hashchange',show);
document.querySelectorAll('.mt a').forEach(function(a){a.addEventListener('click',function(){trk('pestaña',{pestaña:a.dataset.v})})});
// modo prueba por URL (?prueba=sab-15:20) y demo tocando el reloj 5 veces (sábado 15:20)
(function(){var q=(location.search.match(/[?&]prueba=([^&]+)/)||[])[1];if(!q)return;q=decodeURIComponent(q).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
 var map={jue:'2026-11-19',vie:'2026-11-20',sab:'2026-11-21',dom:'2026-11-22'},m=q.match(/^([a-z]{3})[a-z]*[-_ ]?(\d{1,2})(?:[:.h](\d{2}))?/);if(!m||!map[m[1]])return;
 var base=(+m[2])*60+(+(m[3]||0)),t0=Date.now();demoURL=function(){var x=base+Math.floor((Date.now()-t0)/60000);return {date:map[m[1]],m:x,sec:0}}})();
var taps=0,tt;$('clock').onclick=function(){taps++;clearTimeout(tt);tt=setTimeout(function(){taps=0},1500);if(taps>=5){taps=0;demo=demo?null:{date:'2026-11-21',m:15*60+20,sec:0};lastDate=null;tick()}};
renderTabs();renderDias();renderX();
paintOpts();paintF();show();tick();
try{if('serviceWorker' in navigator&&(location.protocol==='https:'||location.hostname==='localhost'))navigator.serviceWorker.register('sw.js').catch(function(){})}catch(e){}
var uid=document.documentElement.getAttribute('data-umami');if(uid){var sc=document.createElement('script');sc.defer=true;sc.src='https://cloud.umami.is/script.js';sc.setAttribute('data-website-id',uid);document.head.appendChild(sc)}
setInterval(tick,15000);
document.addEventListener('visibilitychange',function(){if(!document.hidden)tick()});
})();
