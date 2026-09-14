const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

const svgData=svg=>'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
const line=(x1,y1,x2,y2,w=16,c='#9aa0aa')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
const bodyBase=(accent='#ef4444',front=true)=>`<g opacity=".95"><circle cx="90" cy="40" r="13" fill="#d7d9de"/><rect x="80" y="53" width="20" height="58" rx="10" fill="#d7d9de"/>${line(82,66,58,94,10,'#c4c7cd')}${line(98,66,122,94,10,'#c4c7cd')}${line(85,108,68,145,11,'#c4c7cd')}${line(95,108,112,145,11,'#c4c7cd')}<ellipse cx="90" cy="69" rx="17" ry="13" fill="${accent}" opacity=".92"/><path d="M79 83 Q90 92 101 83" stroke="${accent}" stroke-width="10" fill="none" stroke-linecap="round"/></g>`;
function muscleSvg(label,accent='#ef4444',kind='torso'){
  let hi='';
  if(kind==='chest') hi='<path d="M72 66 Q90 54 108 66 L104 81 Q90 88 76 81Z" fill="#ef4444"/>';
  if(kind==='back') hi='<path d="M73 60 Q90 52 107 60 L102 94 Q90 101 78 94Z" fill="#ef4444"/>';
  if(kind==='shoulders') hi='<circle cx="69" cy="67" r="9" fill="#ef4444"/><circle cx="111" cy="67" r="9" fill="#ef4444"/>';
  if(kind==='arms') hi='<rect x="52" y="72" width="10" height="31" rx="5" fill="#ef4444"/><rect x="118" y="72" width="10" height="31" rx="5" fill="#ef4444"/>';
  if(kind==='quads') hi='<rect x="72" y="108" width="14" height="35" rx="7" fill="#ef4444"/><rect x="94" y="108" width="14" height="35" rx="7" fill="#ef4444"/>';
  if(kind==='hamstrings') hi='<rect x="72" y="108" width="14" height="35" rx="7" fill="#ef4444"/><rect x="94" y="108" width="14" height="35" rx="7" fill="#ef4444" opacity=".8"/>';
  if(kind==='glutes') hi='<ellipse cx="82" cy="103" rx="11" ry="10" fill="#ef4444"/><ellipse cx="98" cy="103" rx="11" ry="10" fill="#ef4444"/>';
  if(kind==='abs') hi='<rect x="82" y="72" width="16" height="32" rx="7" fill="#ef4444"/>';
  if(kind==='calves') hi='<rect x="68" y="137" width="10" height="22" rx="5" fill="#ef4444"/><rect x="102" y="137" width="10" height="22" rx="5" fill="#ef4444"/>';
  if(kind==='neck') hi='<rect x="84" y="48" width="12" height="15" rx="5" fill="#ef4444"/>';
  return svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><rect width="180" height="180" rx="30" fill="#f5f6f8"/>${bodyBase('#e3e5e9')}${hi}<text x="90" y="173" text-anchor="middle" font-family="Arial" font-size="11" fill="#555">${label}</text></svg>`)
}
function equipmentSvg(name){
  const common='<rect width="180" height="180" rx="30" fill="#f5f6f8"/>';
  const c='#343a40', g='#8d949e'; let art='';
  if(name==='Штанга'||name==='EZ-штанга') art=`${line(36,91,144,91,8,c)}<circle cx="48" cy="91" r="18" fill="${c}"/><circle cx="132" cy="91" r="18" fill="${c}"/><circle cx="48" cy="91" r="7" fill="#111"/><circle cx="132" cy="91" r="7" fill="#111"/>`;
  else if(name==='Гантели') art=`<g transform="translate(28 60) rotate(-15 60 30)">${line(42,30,78,30,8,c)}<rect x="30" y="14" width="18" height="32" rx="4" fill="${c}"/><rect x="73" y="14" width="18" height="32" rx="4" fill="${c}"/></g><g transform="translate(58 80) rotate(12 50 20)">${line(25,20,60,20,8,c)}<rect x="14" y="5" width="16" height="30" rx="4" fill="${c}"/><rect x="56" y="5" width="16" height="30" rx="4" fill="${c}"/></g>`;
  else if(name==='Кроссовер') art=`<rect x="43" y="38" width="13" height="98" rx="5" fill="${g}"/><rect x="124" y="38" width="13" height="98" rx="5" fill="${g}"/>${line(50,45,130,45,6,c)}${line(55,52,90,99,4,c)}${line(125,52,90,99,4,c)}<circle cx="90" cy="100" r="7" fill="${c}"/>`;
  else if(name==='Тренажёр') art=`<rect x="45" y="48" width="15" height="85" rx="5" fill="${g}"/><rect x="118" y="48" width="15" height="85" rx="5" fill="${g}"/>${line(53,55,125,55,7,c)}${line(61,117,117,117,8,c)}<rect x="69" y="77" width="42" height="27" rx="8" fill="${c}"/>`;
  else if(name==='Собственный вес') art=`<circle cx="90" cy="48" r="15" fill="#d0d4da"/><rect x="79" y="63" width="22" height="48" rx="11" fill="#aab0b8"/>${line(79,76,48,102,10,c)}${line(101,76,132,102,10,c)}${line(83,109,66,145,11,c)}${line(97,109,114,145,11,c)}`;
  else if(name==='Резинка') art=`<path d="M48 60 C70 28 110 28 132 60 C155 91 133 138 90 138 C47 138 25 91 48 60Z" fill="none" stroke="${c}" stroke-width="8"/>`;
  else if(name==='Гиря') art=`<path d="M66 78 Q65 45 90 45 Q115 45 114 78" fill="none" stroke="${c}" stroke-width="10"/><circle cx="90" cy="106" r="34" fill="${c}"/>`;
  else if(name==='TRX') art=`${line(72,38,84,88,6,c)}${line(108,38,96,88,6,c)}<rect x="76" y="86" width="16" height="27" rx="6" fill="none" stroke="${c}" stroke-width="6"/><rect x="88" y="86" width="16" height="27" rx="6" fill="none" stroke="${c}" stroke-width="6"/>`;
  else if(name==='Скамья') art=`<rect x="45" y="88" width="92" height="25" rx="6" fill="${c}"/>${line(58,111,50,142,6,g)}${line(124,111,132,142,6,g)}`;
  else art='<text x="90" y="104" text-anchor="middle" font-size="48" font-family="Arial" fill="#3b3f46">•••</text>';
  return svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">${common}${art}</svg>`)
}
function exerciseSvg(name,muscle,equipment){
  const colors={'Грудь':'#ef4444','Спина':'#f97316','Плечи':'#8b5cf6','Бицепс':'#3b82f6','Трицепс':'#06b6d4','Квадрицепс':'#22c55e','Бицепс бедра':'#84cc16','Ягодицы':'#ec4899','Пресс':'#f59e0b','Икры':'#14b8a6','Предплечья':'#6366f1','Шея':'#ef4444','Кардио':'#e11d48'};
  const a=colors[muscle]||'#64748b';
  let eq='';
  if(equipment==='Штанга') eq=`${line(45,101,255,101,7,'#252a31')}<circle cx="59" cy="101" r="16" fill="#252a31"/><circle cx="241" cy="101" r="16" fill="#252a31"/>`;
  if(equipment==='Гантели') eq=`<circle cx="67" cy="103" r="12" fill="#252a31"/><circle cx="233" cy="103" r="12" fill="#252a31"/>`;
  if(equipment==='Кроссовер') eq=`${line(42,35,42,178,8,'#9aa0aa')}${line(258,35,258,178,8,'#9aa0aa')}${line(42,43,258,43,6,'#9aa0aa')}${line(42,51,119,96,3,'#252a31')}`;
  if(equipment==='Тренажёр') eq=`<rect x="45" y="150" width="205" height="18" rx="7" fill="#9aa0aa"/><rect x="55" y="80" width="16" height="80" rx="6" fill="#9aa0aa"/>`;
  const body=`<circle cx="150" cy="70" r="22" fill="#d7d9de"/><rect x="134" y="92" width="32" height="78" rx="16" fill="#b9bec6"/><path d="M136 107 L95 135" stroke="#9ba2ad" stroke-width="15" stroke-linecap="round"/><path d="M164 107 L205 135" stroke="#9ba2ad" stroke-width="15" stroke-linecap="round"/><path d="M141 165 L112 212" stroke="#9ba2ad" stroke-width="17" stroke-linecap="round"/><path d="M159 165 L188 212" stroke="#9ba2ad" stroke-width="17" stroke-linecap="round"/><ellipse cx="150" cy="117" rx="24" ry="17" fill="${a}" opacity=".9"/>`;
  return svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250"><rect width="300" height="250" rx="28" fill="#f5f6f8"/>${eq}${body}<text x="150" y="236" text-anchor="middle" font-family="Arial" font-size="12" fill="#4b5563">${name}</text></svg>`)
}
function motionSvg(name,muscle,equipment){
  const img=decodeURIComponent(exerciseSvg(name,muscle,equipment).split(',')[1]);
  return svgData(img.replace('</svg>',`<g><circle cx="150" cy="117" r="8" fill="#111"><animate attributeName="cy" values="117;103;117" dur="1.4s" repeatCount="indefinite"/></circle></g><text x="150" y="20" text-anchor="middle" font-size="10" font-family="Arial" fill="#6b7280">Анимация движения</text></svg>`))
}
const E=(id,name,muscle,equipment,type,difficulty,mechanics,secondary,steps)=>({id,name,muscle,equipment,type,difficulty,mechanics,secondary,media:exerciseSvg(name,muscle,equipment),video:motionSvg(name,muscle,equipment),instructions:steps});
const commonSteps={
 press:['Зафиксируй корпус и лопатки.','Выполняй движение плавно без рывков.','Сохраняй нейтральное положение суставов.','Контролируемо вернись в исходное положение.'],
 pull:['Сохраняй спину нейтральной.','Начни движение лопатками.','Тяни рабочую рукоять без рывка.','Плавно вернись в исходное положение.'],
 legs:['Поставь стопы устойчиво.','Сохраняй колени по направлению носков.','Контролируй амплитуду.','Поднимись усилием рабочих мышц.']
};
const seeds=[
 E('bench','Жим штанги лёжа','Грудь','Штанга','Силовое','Средний','Базовое',['Трицепс','Передняя дельта'],['Ляг на скамью и сведи лопатки.','Возьмись за гриф немного шире плеч.','Опусти штангу к нижней части груди.','Выжми штангу вверх без отрыва таза от скамьи.']),
 E('incdb','Жим гантелей на наклонной скамье','Грудь','Гантели','Силовое','Средний','Базовое',['Трицепс','Передняя дельта'],commonSteps.press),
 E('pushup','Отжимания от пола','Грудь','Собственный вес','Силовое','Начальный','Базовое',['Трицепс','Плечи'],commonSteps.press),
 E('fly','Сведение рук в кроссовере','Грудь','Кроссовер','Силовое','Средний','Изолирующее',['Передняя дельта'],commonSteps.press),
 E('lat','Тяга верхнего блока к груди','Спина','Кроссовер','Силовое','Начальный','Базовое',['Бицепс'],['Зафиксируй бёдра под валиками.','Опусти плечи и слегка отклони корпус назад.','Тяни рукоять к верхней части груди, сводя лопатки.','Плавно выпрями руки.']),
 E('row','Горизонтальная тяга блока сидя','Спина','Кроссовер','Силовое','Начальный','Базовое',['Бицепс','Задняя дельта'],commonSteps.pull),
 E('barrow','Тяга штанги в наклоне','Спина','Штанга','Силовое','Средний','Базовое',['Бицепс','Задняя дельта'],commonSteps.pull),
 E('pullup','Подтягивания','Спина','Собственный вес','Силовое','Продвинутый','Базовое',['Бицепс'],commonSteps.pull),
 E('deadlift','Становая тяга','Спина','Штанга','Силовое','Продвинутый','Базовое',['Ягодицы','Бицепс бедра'],['Поставь стопы под грифом.','Возьмись за штангу, сохраняя спину нейтральной.','Оттолкнись ногами и разогни таз.','Опусти штангу обратно под контролем.']),
 E('shoulder','Жим гантелей сидя','Плечи','Гантели','Силовое','Средний','Базовое',['Трицепс'],commonSteps.press),
 E('lateral','Разведения гантелей в стороны','Плечи','Гантели','Силовое','Начальный','Изолирующее',['Средняя дельта'],['Слегка согни локти.','Подними руки в стороны до уровня плеч.','Не поднимай плечи к ушам.','Медленно опусти гантели.']),
 E('facepull','Тяга каната к лицу','Плечи','Кроссовер','Силовое','Начальный','Изолирующее',['Задняя дельта','Верх спины'],commonSteps.pull),
 E('curl','Сгибание рук с гантелями стоя','Бицепс','Гантели','Силовое','Начальный','Изолирующее',['Предплечья'],['Зафиксируй локти возле корпуса.','Согни руки, не раскачивая корпус.','Сожми бицепс в верхней точке.','Медленно опусти гантели.']),
 E('barcurl','Сгибание рук со штангой стоя','Бицепс','Штанга','Силовое','Начальный','Изолирующее',['Предплечья'],commonSteps.press),
 E('triceps','Разгибание рук на верхнем блоке','Трицепс','Кроссовер','Силовое','Начальный','Изолирующее',['Предплечья'],['Прижми локти к корпусу.','Разогни руки вниз.','Полностью сократи трицепс.','Плавно верни рукоять вверх.']),
 E('french','Французский жим с гантелью сидя','Трицепс','Гантели','Силовое','Средний','Изолирующее',['Плечи'],commonSteps.press),
 E('squat','Приседания со штангой','Квадрицепс','Штанга','Силовое','Продвинутый','Базовое',['Ягодицы','Бицепс бедра'],commonSteps.legs),
 E('press','Жим ногами в тренажёре','Квадрицепс','Тренажёр','Силовое','Начальный','Базовое',['Ягодицы'],['Прижми таз и спину к спинке.','Поставь стопы на платформу.','Опусти платформу до комфортной глубины.','Выжми платформу, не блокируя колени.']),
 E('extension','Разгибание ног в тренажёре','Квадрицепс','Тренажёр','Силовое','Начальный','Изолирующее',[],commonSteps.legs),
 E('lunge','Выпады с гантелями','Квадрицепс','Гантели','Силовое','Средний','Базовое',['Ягодицы'],commonSteps.legs),
 E('rdl','Румынская тяга со штангой','Бицепс бедра','Штанга','Силовое','Средний','Базовое',['Ягодицы','Спина'],['Слегка согни колени.','Отводи таз назад, держа штангу близко к ногам.','Опускайся до натяжения задней поверхности бедра.','Разогни таз и вернись в исходное положение.']),
 E('legcurl','Сгибание ног лёжа в тренажёре','Бицепс бедра','Тренажёр','Силовое','Начальный','Изолирующее',[],commonSteps.legs),
 E('hip','Ягодичный мост со штангой','Ягодицы','Штанга','Силовое','Средний','Базовое',['Бицепс бедра'],['Упрись верхней частью спины в скамью.','Поставь стопы устойчиво на ширине таза.','Подними таз до прямой линии от плеч до коленей.','Сожми ягодицы вверху и контролируемо опусти таз.']),
 E('kickback','Отведение ноги назад в кроссовере','Ягодицы','Кроссовер','Силовое','Начальный','Изолирующее',['Бицепс бедра'],commonSteps.legs),
 E('abduction','Разведение ног в тренажёре','Ягодицы','Тренажёр','Силовое','Начальный','Изолирующее',['Средняя ягодичная'],commonSteps.legs),
 E('crunch','Скручивания лёжа','Пресс','Собственный вес','Силовое','Начальный','Изолирующее',[],['Ляг на спину и согни колени.','Подтяни рёбра к тазу, отрывая лопатки.','Не тяни голову руками.','Плавно опустись обратно.']),
 E('plank','Планка на предплечьях','Пресс','Собственный вес','Силовое','Начальный','Изолирующее',['Ягодицы'],['Поставь локти под плечами.','Вытяни тело в прямую линию.','Напряги пресс и ягодицы.','Дыши ровно и удерживай положение.']),
 E('calf','Подъёмы на носки стоя','Икры','Собственный вес','Силовое','Начальный','Изолирующее',[],['Встань устойчиво.','Поднимись максимально высоко на носки.','Задержись в верхней точке.','Медленно опусти пятки.']),
 E('wrist','Сгибание кистей с гантелями','Предплечья','Гантели','Силовое','Начальный','Изолирующее',[],commonSteps.press),
 E('shrug','Шраги с гантелями','Шея','Гантели','Силовое','Начальный','Изолирующее',['Трапеции'],['Держи гантели по бокам.','Подними плечи строго вверх.','Задержись на секунду.','Плавно опусти плечи.']),
 E('walk','Быстрая ходьба','Кардио','Собственный вес','Кардио','Начальный','Базовое',[],['Иди в бодром темпе.','Держи корпус ровно.','Работай руками естественно.','Поддерживай ровное дыхание.']),
 E('jump','Прыжки «Джампинг Джек»','Кардио','Собственный вес','Кардио','Начальный','Базовое',[],['Встань прямо.','Прыжком разведи ноги и подними руки.','Вернись в исходное положение.','Поддерживай равномерный темп.'])
];

function load(k,d){try{const v=JSON.parse(localStorage.getItem('trainly-'+k));if(!v)return d;if(k==='exercises'){const map=Object.fromEntries(d.map(x=>[x.id,x]));const merged=v.map(x=>map[x.id]?{...x,...map[x.id],custom:x.custom,favorite:x.favorite}:x);for(const x of d)if(!merged.some(e=>e.id===x.id))merged.push(x);return merged}return v}catch{return d}}
function save(){const localExercises=state.exercises.filter(e=>e.custom);localStorage.setItem('trainly-exercises',JSON.stringify(localExercises));localStorage.setItem('trainly-favorites',JSON.stringify(state.exercises.filter(e=>e.favorite).map(e=>e.id)));localStorage.setItem('trainly-workouts',JSON.stringify(state.workouts));localStorage.setItem('trainly-history',JSON.stringify(state.history));state.active?localStorage.setItem('trainly-active',JSON.stringify(state.active)):localStorage.removeItem('trainly-active')}
const state={tab:'home',exercises:load('exercises',seeds),workouts:load('workouts',[{id:'glutes',name:'Ноги и ягодицы',exercises:['squat','hip','rdl','press','abduction'],last:'ещё не выполнена'}]),history:load('history',[]),selectedExercise:null,selectedWorkout:null,builder:null,active:load('active',null),filter:'Все',query:'',sheet:null,detailTab:'about',catalogStatus:'Подключение каталога Lyfta…',catalogCount:0,advanced:{equipment:[],types:[],difficulty:'Любой',mechanics:'Любая'}};
const I={home:'⌂',workouts:'♜',exercises:'◎',history:'◷',progress:'▥'};
function header(t,right=''){return `<div class="topbar"><h1>${esc(t)}</h1>${right}</div>`}
function nav(){return `<nav class="bottom-nav">${[['home','Главная'],['workouts','Тренировки'],['exercises','Упражнения'],['history','История'],['progress','Прогресс']].map(([id,l])=>`<button data-nav="${id}" class="${state.tab===id?'active':''}"><b>${I[id]}</b><span>${l}</span></button>`).join('')}</nav>`}
function backHead(title,subtitle='',right=''){return `<div class="detail-head"><button class="icon-btn" data-global-back aria-label="Назад">‹</button><div><h1>${esc(title)}</h1>${subtitle?`<p>${esc(subtitle)}</p>`:''}</div>${right||'<span></span>'}</div>`}
function render(){save();let html=state.selectedExercise?exerciseDetail(state.selectedExercise):state.active?activeWorkout():state.builder?builder():state.selectedWorkout?workoutDetail(state.selectedWorkout):({home,workouts,exercises,history,progress}[state.tab])();$('#root').innerHTML=`<div class="app-shell"><main class="main">${html}</main>${(!state.active&&!state.selectedExercise&&!state.builder&&!state.selectedWorkout)?nav():''}${state.sheet?sheet():''}</div>`;bind()}
function stat(n,t){return `<div class="stat"><strong>${n}</strong><span>${t}</span></div>`}
function home(){let h=state.history;return `<div class="page">${header('Главная')}<section class="hero-card"><span class="eyebrow">ГОТОВА К ТРЕНИРОВКЕ?</span><h2>Начни тренировку</h2><p>Выбери готовую программу или создай свою.</p>${state.workouts[0]?`<button class="primary" data-start="${state.workouts[0].id}">▶ ${esc(state.workouts[0].name)}</button>`:''}<button class="ghost" data-create-workout>＋ Создать тренировку</button></section><div class="stats-row">${stat(h.length,'тренировок')}${stat(h.reduce((a,x)=>a+x.sets,0),'подходов')}${stat(h.reduce((a,x)=>a+x.volume,0),'кг объёма')}</div><h3 class="section-title">Последние тренировки</h3>${h.length?h.slice(0,3).map(historyCard).join(''):'<div class="empty">После первой тренировки здесь появится история.</div>'}</div>`}
function workouts(){return `<div class="page">${header('Тренировки','<button class="round" data-create-workout>＋</button>')}<p class="sub">Создавай свои программы и запускай их одним нажатием.</p><div class="stack">${state.workouts.map(w=>`<div class="workout-card" data-open-workout="${w.id}"><div><h3>${esc(w.name)}</h3><p>${w.exercises.length} упражнений · ${esc(w.last||'ещё не выполнена')}</p><div class="avatar-row">${w.exercises.slice(0,4).map(id=>{let e=state.exercises.find(x=>x.id===id);return e?`<img src="${e.media}">`:''}).join('')}</div></div><button class="start-mini" data-start="${w.id}">Начать</button></div>`).join('')}</div></div>`}
function muscleKind(f){return ({'Грудь':'chest','Спина':'back','Плечи':'shoulders','Бицепс':'arms','Трицепс':'arms','Квадрицепс':'quads','Бицепс бедра':'hamstrings','Ягодицы':'glutes','Пресс':'abs','Икры':'calves','Предплечья':'arms','Шея':'neck'}[f]||'torso')}
function exercises(){const muscles=['Избранное','Кардио','Грудь','Спина','Бицепс','Трицепс','Квадрицепс','Бицепс бедра','Плечи','Ягодицы','Пресс','Икры','Предплечья','Шея','Мои'];let a=state.advanced;let list=state.exercises.filter(e=>{let q=state.query.toLowerCase(),qok=!q||(e.name+' '+e.muscle+' '+e.equipment).toLowerCase().includes(q);let f=state.filter;let fok=f==='Все'||(f==='Мои'&&e.custom)||(f==='Избранное'&&e.favorite)||e.muscle===f||(f==='Кардио'&&e.type==='Кардио');let eq=!a.equipment.length||a.equipment.includes(e.equipment);let ty=!a.types.length||a.types.includes(e.type);let dif=a.difficulty==='Любой'||e.difficulty===a.difficulty;let mech=a.mechanics==='Любая'||e.mechanics===a.mechanics;return qok&&fok&&eq&&ty&&dif&&mech});let count=a.equipment.length+a.types.length+(a.difficulty!=='Любой'?1:0)+(a.mechanics!=='Любая'?1:0);let status=state.catalogStatus.includes('нужно указать')?'':state.catalogStatus;return `<div class="page exercises-page">${header('Упражнения','<button class="round" data-custom aria-label="Создать своё упражнение">＋</button>')}<div class="searchbox lyfta-search"><b>⌕</b><input id="search" value="${esc(state.query)}" placeholder="Поиск упражнений"><button class="camera" data-open-filters aria-label="Фильтры">☷${count?`<i>${count}</i>`:''}</button></div><div class="muscle-scroll lyfta-muscles"><button class="muscle-tile ${state.filter==='Избранное'?'on':''}" data-filter="Избранное"><span class="bookmark-symbol">☆</span><small>Избранное</small></button><button class="muscle-tile ${state.filter==='Кардио'?'on':''}" data-filter="Кардио"><img src="${muscleSvg('Кардио','#ef4444','torso')}"><small>Кардио</small></button>${muscles.filter(f=>!['Избранное','Кардио','Мои'].includes(f)).map(f=>`<button class="muscle-tile ${state.filter===f?'on':''}" data-filter="${f}"><img src="${muscleSvg(f,'#ef4444',muscleKind(f))}"><small>${esc(f)}</small></button>`).join('')}<button class="muscle-tile ${state.filter==='Мои'?'on':''}" data-filter="Мои"><span class="my-symbol">＋</span><small>Мои</small></button><button class="muscle-tile filter-tile ${count?'on':''}" data-open-filters><span class="filter-symbol">☷</span><small>Фильтры${count?` (${count})`:''}</small></button></div>${status?`<div class="catalog-status compact"><span>${esc(status)}</span>${state.catalogCount?`<b>${state.catalogCount.toLocaleString('ru-RU')}</b>`:''}</div>`:''}<div class="results-head"><strong>${list.length} упражнений</strong>${count?'<button data-clear-filters>Сбросить фильтры</button>':''}</div><div class="exercise-grid">${list.length?list.map(exCard).join(''):'<div class="empty grid-empty">Ничего не найдено. Измени фильтры или создай своё упражнение.</div>'}</div></div>`}
function exCard(e){return `<article class="exercise-card"><button class="card-favorite ${e.favorite?'on':''}" data-card-favorite="${e.id}" aria-label="Добавить в избранное">${e.favorite?'★':'☆'}</button><button class="card-help" data-ex="${e.id}" aria-label="Открыть упражнение">?</button><button class="card-main" data-ex="${e.id}"><div class="card-media"><img src="${e.media}" alt="${esc(e.name)}" loading="lazy"></div><div class="card-copy"><h3>${esc(e.name)}${e.custom?'<span class="badge">Моё</span>':''}</h3><p>${esc(e.muscle)}${e.secondary?.length?' · '+esc(e.secondary.slice(0,1).join(', ')):''}</p><small>${esc(e.equipment)}</small></div></button></article>`}
function exRow(e){return `<button class="exercise-row" data-ex="${e.id}"><img src="${e.media}"><div><h3>${esc(e.name)}${e.custom?'<span class="badge">Моё</span>':''}</h3><p>${esc(e.muscle)} · ${esc(e.equipment)}</p></div><b>›</b></button>`}
function exerciseDetail(e){let h=state.history.filter(x=>x.exerciseIds?.includes(e.id));return `<div class="page detail-page">${backHead(e.name,e.muscle,`<button class="icon-btn" data-favorite="${e.id}" aria-label="Избранное">${e.favorite?'★':'☆'}</button>`)}<div class="tabs"><button data-detail-tab="about" class="${state.detailTab==='about'?'on':''}">Описание</button><button data-detail-tab="history" class="${state.detailTab==='history'?'on':''}">История</button><button data-detail-tab="progress" class="${state.detailTab==='progress'?'on':''}">Прогресс</button></div>${state.detailTab==='about'?`<div class="media-card"><img id="exercise-media" src="${e.media}"><button class="media-toggle" data-toggle-media>▶ Анимация</button></div><div class="info-grid"><div><span>Основная мышца</span><strong>${esc(e.muscle)}</strong></div><div><span>Оборудование</span><strong>${esc(e.equipment)}</strong></div><div><span>Тип</span><strong>${esc(e.type)}</strong></div><div><span>Сложность</span><strong>${esc(e.difficulty)}</strong></div></div>${e.secondary?.length?`<h3 class="section-title">Дополнительные мышцы</h3><div class="tag-row">${e.secondary.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`:''}<h3 class="section-title">Техника выполнения</h3><ol class="steps">${(e.instructions||[]).map((s,i)=>`<li><span>${i+1}</span><p>${esc(s)}</p></li>`).join('')}</ol><button class="primary full" data-add-ex-to-workout="${e.id}">＋ Добавить в тренировку</button>`:state.detailTab==='history'?`<div class="stack">${h.length?h.map(historyCard).join(''):'<div class="empty">Это упражнение ещё не выполнялось.</div>'}</div>`:`<div class="progress-placeholder"><h3>Прогресс по упражнению</h3><p>После тренировок здесь появятся лучший вес, объём и динамика.</p></div>`}</div>`}
function workoutDetail(w){return `<div class="page">${backHead(w.name,`${w.exercises.length} упражнений`,`<button class="icon-btn" data-edit-workout="${w.id}">✎</button>`)}<button class="primary full" data-start="${w.id}">▶ Начать тренировку</button><h3 class="section-title">Упражнения</h3><div class="exercise-list">${w.exercises.map(id=>{let e=state.exercises.find(x=>x.id===id);return e?exRow(e):''}).join('')}</div><button class="danger-button" data-delete-workout="${w.id}">Удалить тренировку</button></div>`}
function builder(){let b=state.builder;return `<div class="page builder">${backHead('Редактирование','Изменения сохранятся после нажатия «Готово»','<button class="save-text" data-save-builder>Готово</button>')}<label class="field-label">Название тренировки</label><input id="workout-name" class="big-input" value="${esc(b.name)}"><h3 class="section-title">Упражнения</h3>${b.exercises.length?`<div class="stack">${b.exercises.map((id,i)=>{let e=state.exercises.find(x=>x.id===id);return `<div class="builder-row"><span>☰</span><img src="${e?.media}"><div><strong>${esc(e?.name||'')}</strong><span>3 подхода</span></div><button data-remove-builder="${i}">×</button></div>`}).join('')}</div>`:'<div class="empty">Добавь первое упражнение.</div>'}<button class="add-exercise" data-open-picker>＋ Добавить упражнение</button></div>`}
function makeActive(w){return {id:'s'+Date.now(),name:w.name,started:Date.now(),items:w.exercises.map(id=>({exercise:state.exercises.find(e=>e.id===id),sets:[{kg:'',reps:'',done:false},{kg:'',reps:'',done:false},{kg:'',reps:'',done:false}]}))}}
function activeWorkout(){let a=state.active,mins=Math.max(1,Math.floor((Date.now()-a.started)/60000));return `<div class="page active-workout"><div class="active-top"><button class="icon-btn" data-exit-active>‹</button><div><span>АКТИВНАЯ ТРЕНИРОВКА</span><h1>${esc(a.name)}</h1></div><div class="timer">◷ ${mins} мин</div></div>${a.items.map((it,ei)=>`<section class="active-ex"><div class="active-ex-head"><img src="${it.exercise?.media}"><div><h3>${esc(it.exercise?.name||'')}</h3><p>${esc(it.exercise?.muscle||'')}</p></div><button class="icon-btn" data-active-menu="${ei}">•••</button></div><div class="set-head"><span>№</span><span>ПРОШЛЫЙ</span><span>КГ</span><span>ПОВТ.</span><span></span></div>${it.sets.map((s,si)=>`<div class="set-row ${s.done?'done':''}"><span>${si+1}</span><span class="prev">—</span><input inputmode="decimal" data-set="${ei}:${si}:kg" value="${esc(s.kg)}" placeholder="0"><input inputmode="numeric" data-set="${ei}:${si}:reps" value="${esc(s.reps)}" placeholder="0"><button data-done="${ei}:${si}">✓</button></div>`).join('')}<button class="add-set" data-add-set="${ei}">＋ Добавить подход</button></section>`).join('')}<button class="add-exercise" data-add-active-ex>＋ Добавить упражнение</button><button class="finish" data-finish>Завершить тренировку</button></div>`}
function history(){return `<div class="page">${header('История',state.history.length?'<button class="text-danger" data-clear-history>Очистить</button>':'')}${state.history.length?`<div class="stack">${state.history.map(historyCard).join('')}</div>`:'<div class="empty">Пока нет завершённых тренировок.</div>'}</div>`}
function historyCard(h){return `<div class="history-card"><div><span>${esc(h.date)}</span><h3>${esc(h.name)}</h3></div><div class="history-metrics"><strong>${h.duration} мин</strong><strong>${h.sets} подходов</strong><strong>${h.volume} кг</strong></div></div>`}
function progress(){let total=state.history.reduce((a,h)=>a+h.volume,0);return `<div class="page">${header('Прогресс')}<div class="progress-hero"><span>ОБЩИЙ ОБЪЁМ</span><strong>${total.toLocaleString('ru-RU')} кг</strong><p>По завершённым тренировкам</p></div><div class="stats-row">${stat(state.history.length,'тренировок')}${stat(state.history.reduce((a,h)=>a+h.sets,0),'подходов')}${stat(state.history.reduce((a,h)=>a+h.duration,0),'минут')}</div><h3 class="section-title">Динамика</h3><div class="chart">${[28,42,34,60,48,72,80].map(h=>`<div style="height:${h}%"><span></span></div>`).join('')}</div><h3 class="section-title">Прогресс по упражнениям</h3><div class="exercise-list">${state.exercises.slice(0,6).map(exRow).join('')}</div></div>`}
function sheet(){if(state.sheet==='filters'){let a=state.advanced,eq=['Штанга','Собственный вес','Кроссовер','Гантели','EZ-штанга','Тренажёр','Резинка','Гиря','TRX','Скамья','Другое'],types=['Силовое','Кардио','Растяжка','Мобильность'];return `<div class="sheet-backdrop" data-dismiss-sheet><div class="sheet filters-sheet" data-sheet-body><div class="sheet-grab"></div><div class="sheet-title"><h2>Фильтры</h2><button data-close-sheet>×</button></div><h3 class="filter-heading">Оборудование</h3><div class="filter-grid">${eq.map(x=>`<button class="filter-option ${a.equipment.includes(x)?'selected':''}" data-eq="${x}"><img src="${equipmentSvg(x)}"><b>${x}</b></button>`).join('')}</div><h3 class="filter-heading">Тип упражнения</h3><div class="filter-chips">${types.map(x=>`<button class="chip ${a.types.includes(x)?'on':''}" data-type="${x}">${x}</button>`).join('')}</div><h3 class="filter-heading">Уровень сложности</h3><select id="difficulty-filter">${['Любой','Начальный','Средний','Продвинутый'].map(x=>`<option ${a.difficulty===x?'selected':''}>${x}</option>`).join('')}</select><h3 class="filter-heading">Механика движения</h3><select id="mechanics-filter">${['Любая','Базовое','Изолирующее'].map(x=>`<option ${a.mechanics===x?'selected':''}>${x}</option>`).join('')}</select><div class="filter-actions"><button class="ghost dark" data-reset-advanced>Сбросить</button><button class="primary dark" data-apply-filters>Применить</button></div></div></div>`}
if(state.sheet==='picker'||state.sheet==='active-picker'){return `<div class="sheet-backdrop" data-dismiss-sheet><div class="sheet" data-sheet-body><div class="sheet-grab"></div><div class="sheet-title"><h2>Выбрать упражнение</h2><button data-close-sheet>×</button></div><div class="searchbox"><b>⌕</b><input id="picker-search" placeholder="Поиск упражнения"></div><div id="picker-list" class="picker-list">${state.exercises.map(e=>`<button class="exercise-row" data-pick="${e.id}"><img src="${e.media}"><div><h3>${esc(e.name)}</h3><p>${esc(e.muscle)} · ${esc(e.equipment)}</p></div><b>＋</b></button>`).join('')}</div></div></div>`}
if(state.sheet==='active-menu'){let ei=state.activeMenuIndex,it=state.active.items[ei];return `<div class="sheet-backdrop" data-dismiss-sheet><div class="sheet menu-sheet" data-sheet-body><div class="sheet-grab"></div><div class="sheet-title"><h2>${esc(it.exercise.name)}</h2><button data-close-sheet>×</button></div><button class="menu-action" data-view-active-ex="${ei}">Открыть упражнение</button><button class="menu-action" data-replace-active="${ei}">Заменить упражнение</button><button class="menu-action danger" data-remove-active="${ei}">Удалить из тренировки</button></div></div>`}
if(state.sheet==='custom')return `<div class="sheet-backdrop" data-dismiss-sheet><div class="sheet custom-sheet" data-sheet-body><div class="sheet-grab"></div><div class="sheet-title"><h2>Своё упражнение</h2><button data-close-sheet>×</button></div><label class="upload" id="upload-preview"><span class="upload-icon">◉</span><strong>Добавить фото или GIF</strong><span>JPG, PNG или GIF</span><input id="custom-file" type="file" accept="image/*,.gif"></label><label class="field-label">Название</label><input id="custom-name" class="big-input" placeholder="Например, тяга резинки"><div class="two"><div><label class="field-label">Мышца</label><select id="custom-muscle">${['Ягодицы','Спина','Квадрицепс','Бицепс бедра','Плечи','Грудь','Бицепс','Трицепс','Пресс','Икры','Предплечья','Шея'].map(x=>`<option>${x}</option>`).join('')}</select></div><div><label class="field-label">Оборудование</label><select id="custom-equipment">${['Собственный вес','Гантели','Штанга','Тренажёр','Кроссовер','Резинка','Гиря','TRX','Скамья','EZ-штанга','Другое'].map(x=>`<option>${x}</option>`).join('')}</select></div></div><label class="field-label">Описание / техника</label><textarea id="custom-instructions" class="big-textarea" placeholder="Коротко опиши выполнение"></textarea><button class="primary full" data-save-custom>Создать упражнение</button></div></div>`;return ''}
function closeOverlay(){state.sheet=null;render()}
function globalBack(){if(state.sheet){closeOverlay();return}if(state.selectedExercise){state.selectedExercise=null;state.detailTab='about'}else if(state.builder){state.builder=null}else if(state.selectedWorkout){state.selectedWorkout=null}else if(state.active){state.active=null}else state.tab='home';render()}
function bind(){
  $$('[data-nav]').forEach(x=>x.onclick=()=>{state.tab=x.dataset.nav;state.selectedExercise=state.selectedWorkout=state.builder=null;render()});
  $$('[data-create-workout]').forEach(x=>x.onclick=()=>{state.builder={id:'w'+Date.now(),name:'Новая тренировка',exercises:[]};render()});
  $$('[data-start]').forEach(x=>x.onclick=e=>{e.stopPropagation();let w=state.workouts.find(w=>w.id===x.dataset.start);state.active=makeActive(w);render()});
  $$('[data-open-workout]').forEach(x=>x.onclick=()=>{state.selectedWorkout=state.workouts.find(w=>w.id===x.dataset.openWorkout);render()});
  $$('[data-ex]').forEach(x=>x.onclick=()=>{state.selectedExercise=state.exercises.find(e=>e.id===x.dataset.ex);state.detailTab='about';render()});
  $$('[data-global-back]').forEach(x=>x.onclick=globalBack);
  $('[data-exit-active]')?.addEventListener('click',()=>{if(confirm('Выйти из тренировки? Прогресс сохранится, и ты сможешь продолжить позже.')){state.active=null;render()}});
  $('[data-custom]')?.addEventListener('click',()=>{state.sheet='custom';render()});
  $$('[data-open-filters]').forEach(x=>x.onclick=()=>{state.sheet='filters';render()});
  $$('[data-clear-filters]').forEach(x=>x.onclick=()=>{state.advanced={equipment:[],types:[],difficulty:'Любой',mechanics:'Любая'};render()});
  $$('[data-eq]').forEach(x=>x.onclick=()=>{let v=x.dataset.eq,a=state.advanced.equipment,i=a.indexOf(v);i>=0?a.splice(i,1):a.push(v);render()});
  $$('[data-type]').forEach(x=>x.onclick=()=>{let v=x.dataset.type,a=state.advanced.types,i=a.indexOf(v);i>=0?a.splice(i,1):a.push(v);render()});
  $('#difficulty-filter')?.addEventListener('change',e=>state.advanced.difficulty=e.target.value);
  $('#mechanics-filter')?.addEventListener('change',e=>state.advanced.mechanics=e.target.value);
  $('[data-reset-advanced]')?.addEventListener('click',()=>{state.advanced={equipment:[],types:[],difficulty:'Любой',mechanics:'Любая'};render()});
  $('[data-apply-filters]')?.addEventListener('click',closeOverlay); $('[data-close-sheet]')?.addEventListener('click',closeOverlay);
  $('[data-dismiss-sheet]')?.addEventListener('click',e=>{if(e.target.hasAttribute('data-dismiss-sheet'))closeOverlay()});
  $$('[data-sheet-body]').forEach(x=>x.onclick=e=>e.stopPropagation());
  $$('[data-filter]').forEach(x=>x.onclick=()=>{state.filter=x.dataset.filter;render()});
  let s=$('#search');if(s)s.oninput=e=>{let p=e.target.selectionStart;state.query=e.target.value;render();let n=$('#search');n?.focus();n?.setSelectionRange(p,p)};
  $$('[data-detail-tab]').forEach(x=>x.onclick=()=>{state.detailTab=x.dataset.detailTab;render()});
  // media toggle is bound by the v6 interaction layer below
  $$('[data-favorite]').forEach(x=>x.onclick=()=>{let e=state.exercises.find(z=>z.id===x.dataset.favorite);e.favorite=!e.favorite;render()});
  $$('[data-card-favorite]').forEach(x=>x.onclick=ev=>{ev.stopPropagation();let e=state.exercises.find(z=>z.id===x.dataset.cardFavorite);if(e){e.favorite=!e.favorite;render()}});
  $$('[data-edit-workout]').forEach(x=>x.onclick=()=>{state.builder=structuredClone(state.workouts.find(w=>w.id===x.dataset.editWorkout));state.selectedWorkout=null;render()});
  $$('[data-delete-workout]').forEach(x=>x.onclick=()=>{if(confirm('Удалить эту тренировку?')){state.workouts=state.workouts.filter(w=>w.id!==x.dataset.deleteWorkout);state.selectedWorkout=null;render()}});
  let wn=$('#workout-name');if(wn)wn.oninput=e=>state.builder.name=e.target.value;
  $('[data-save-builder]')?.addEventListener('click',()=>{if(!state.builder.name.trim())return alert('Введи название тренировки');let i=state.workouts.findIndex(w=>w.id===state.builder.id),w={...state.builder,last:state.builder.last||'ещё не выполнена'};i>=0?state.workouts.splice(i,1,w):state.workouts.unshift(w);state.builder=null;state.tab='workouts';render()});
  $$('[data-remove-builder]').forEach(x=>x.onclick=()=>{state.builder.exercises.splice(+x.dataset.removeBuilder,1);render()});
  $('[data-open-picker]')?.addEventListener('click',()=>{state.sheet='picker';render()});
  $('[data-add-active-ex]')?.addEventListener('click',()=>{state.sheet='active-picker';render()});
  bindPicker();
  $$('[data-done]').forEach(x=>x.onclick=()=>{let [ei,si]=x.dataset.done.split(':').map(Number);state.active.items[ei].sets[si].done=!state.active.items[ei].sets[si].done;render()});
  $$('[data-set]').forEach(x=>x.oninput=()=>{let [ei,si,k]=x.dataset.set.split(':');state.active.items[+ei].sets[+si][k]=x.value;save()});
  $$('[data-add-set]').forEach(x=>x.onclick=()=>{state.active.items[+x.dataset.addSet].sets.push({kg:'',reps:'',done:false});render()});
  $$('[data-active-menu]').forEach(x=>x.onclick=()=>{state.activeMenuIndex=+x.dataset.activeMenu;state.sheet='active-menu';render()});
  $$('[data-remove-active]').forEach(x=>x.onclick=()=>{state.active.items.splice(+x.dataset.removeActive,1);state.sheet=null;render()});
  $$('[data-replace-active]').forEach(x=>x.onclick=()=>{state.replaceIndex=+x.dataset.replaceActive;state.sheet='active-picker';render()});
  $$('[data-view-active-ex]').forEach(x=>x.onclick=()=>{let ex=state.active.items[+x.dataset.viewActiveEx].exercise;state.sheet=null;state.selectedExercise=ex;render()});
  $('[data-finish]')?.addEventListener('click',()=>{let sets=0,volume=0,exerciseIds=[],exerciseResults=[];const iso=new Date().toISOString().slice(0,10);state.active.items.forEach(it=>{exerciseIds.push(it.exercise.id);const doneSets=[];it.sets.forEach(s=>{if(s.done){sets++;volume+=(+s.kg||0)*(+s.reps||0);doneSets.push({kg:+s.kg||0,reps:+s.reps||0})}});if(doneSets.length){exerciseResults.push({exerciseId:it.exercise.id,sets:doneSets});const best=doneSets.slice().sort((a,b)=>(b.kg*b.reps)-(a.kg*a.reps))[0];state.exerciseLogs=state.exerciseLogs||[];state.exerciseLogs.unshift({id:'l'+Date.now()+Math.random(),exerciseId:it.exercise.id,date:iso,kg:best.kg,reps:best.reps,sets:doneSets.length,source:'workout'});}});state.history.unshift({id:state.active.id,name:state.active.name,date:new Intl.DateTimeFormat('ru-RU',{day:'2-digit',month:'short'}).format(new Date()),dateISO:iso,duration:Math.max(1,Math.floor((Date.now()-state.active.started)/60000)),sets,volume,exerciseIds,exerciseResults});state.active=null;state.tab='history';render()});
  $('[data-clear-history]')?.addEventListener('click',()=>{if(confirm('Удалить всю историю тренировок? Это действие нельзя отменить.')){state.history=[];render()}});
  let cf=$('#custom-file');if(cf)cf.onchange=e=>{let f=e.target.files[0];if(!f)return;let r=new FileReader();r.onload=()=>{state.customMedia=r.result;let p=$('#upload-preview');p.innerHTML=`<img src="${r.result}"><span>Нажми, чтобы заменить файл</span><input id="custom-file" type="file" accept="image/*,.gif">`};r.readAsDataURL(f)};
  $('[data-save-custom]')?.addEventListener('click',()=>{let name=$('#custom-name').value.trim();if(!name)return alert('Введи название упражнения');let m=$('#custom-muscle').value,eq=$('#custom-equipment').value,desc=$('#custom-instructions').value.trim();let ex={id:'c'+Date.now(),name,muscle:m,equipment:eq,custom:true,type:'Силовое',difficulty:'Средний',mechanics:'Изолирующее',secondary:[],media:state.customMedia||exerciseSvg(name,m,eq),video:state.customMedia||motionSvg(name,m,eq),instructions:desc?[desc]:['Добавь свою инструкцию к упражнению.']};state.exercises.unshift(ex);state.customMedia=null;state.sheet=null;state.selectedExercise=ex;render()});
  $$('[data-add-ex-to-workout]').forEach(x=>x.onclick=()=>{state.sheet='picker';state.pendingExercise=x.dataset.addExToWorkout;state.selectedExercise=null;state.builder={id:'w'+Date.now(),name:'Новая тренировка',exercises:[x.dataset.addExToWorkout]};render()});
}
function bindPicker(){const pick=id=>{if(state.sheet==='active-picker'){let ex=state.exercises.find(e=>e.id===id);if(state.replaceIndex!=null){state.active.items[state.replaceIndex]={exercise:ex,sets:[{kg:'',reps:'',done:false},{kg:'',reps:'',done:false},{kg:'',reps:'',done:false}]};state.replaceIndex=null}else state.active.items.push({exercise:ex,sets:[{kg:'',reps:'',done:false},{kg:'',reps:'',done:false},{kg:'',reps:'',done:false}]});state.sheet=null}else{state.builder.exercises.push(id);state.sheet=null}render()};$$('[data-pick]').forEach(x=>x.onclick=()=>pick(x.dataset.pick));let ps=$('#picker-search');if(ps)ps.oninput=e=>{let q=e.target.value.toLowerCase();$('#picker-list').innerHTML=state.exercises.filter(ex=>(ex.name+' '+ex.muscle+' '+ex.equipment).toLowerCase().includes(q)).map(ex=>`<button class="exercise-row" data-pick="${ex.id}"><img src="${ex.media}"><div><h3>${esc(ex.name)}</h3><p>${esc(ex.muscle)} · ${esc(ex.equipment)}</p></div><b>＋</b></button>`).join('');$$('[data-pick]').forEach(x=>x.onclick=()=>pick(x.dataset.pick))}}
render();


// ===== Trainly v4: безопасная синхронизация каталога Lyfta через backend-proxy =====
const RU_EXACT_NAMES = {
  'Bench Press':'Жим штанги лёжа','Barbell Bench Press':'Жим штанги лёжа','Dumbbell Bench Press':'Жим гантелей лёжа',
  'Incline Bench Press':'Жим штанги на наклонной скамье','Incline Dumbbell Press':'Жим гантелей на наклонной скамье',
  'Deadlift':'Становая тяга','Romanian Deadlift':'Румынская тяга','Barbell Romanian Deadlift':'Румынская тяга со штангой',
  'Full Squat':'Приседания со штангой','Barbell Squat':'Приседания со штангой','Front Squat':'Фронтальные приседания',
  'Hip Thrust':'Ягодичный мост','Barbell Hip Thrust':'Ягодичный мост со штангой','Glute Bridge':'Ягодичный мост лёжа',
  'Lat Pulldown':'Тяга верхнего блока к груди','Bar Lateral Pulldown':'Тяга верхнего блока к груди',
  'Seated Cable Row':'Горизонтальная тяга блока сидя','Straight Back Seated Row':'Горизонтальная тяга блока сидя',
  'Pull Up':'Подтягивания','Pull-up':'Подтягивания','Chin Up':'Подтягивания обратным хватом',
  'Lateral Raise':'Разведения гантелей в стороны','Dumbbell Lateral Raise':'Разведения гантелей в стороны',
  'Seated Shoulder Press':'Жим сидя над головой','Dumbbell Shoulder Press':'Жим гантелей сидя',
  'Alternate Biceps Curl':'Попеременное сгибание рук с гантелями','Dumbbell Curl':'Сгибание рук с гантелями',
  'Hammer Curl':'Молотковые сгибания с гантелями','Preacher Curl':'Сгибание рук на скамье Скотта',
  'Triceps Pushdown':'Разгибание рук на верхнем блоке','Leg Press':'Жим ногами в тренажёре',
  'Sled 45° Leg Press':'Жим ногами под углом 45°','Sled 45° Leg Wide Press':'Жим ногами под углом 45° с широкой постановкой',
  'Leg Extension':'Разгибание ног в тренажёре','Lever Leg Extension':'Разгибание ног в тренажёре',
  'Lying Leg Curl':'Сгибание ног лёжа в тренажёре','Seated Leg Curl':'Сгибание ног сидя в тренажёре',
  'Calf Raise':'Подъёмы на носки','Standing Calf Raise':'Подъёмы на носки стоя','Plank':'Планка',
  'Crunch':'Скручивания','Push-up':'Отжимания от пола','Push Up':'Отжимания от пола'
};
const RU_WORDS=[
  [/\bbarbell\b/gi,'со штангой'],[/\bdumbbell\b/gi,'с гантелями'],[/\bcable\b/gi,'на блоке'],[/\blever\b/gi,'в тренажёре'],
  [/\bmachine\b/gi,'в тренажёре'],[/\bseated\b/gi,'сидя'],[/\bstanding\b/gi,'стоя'],[/\blying\b/gi,'лёжа'],[/\bincline\b/gi,'на наклонной скамье'],
  [/\bdecline\b/gi,'на скамье с отрицательным наклоном'],[/\bsingle arm\b/gi,'одной рукой'],[/\bone arm\b/gi,'одной рукой'],[/\bsingle leg\b/gi,'одной ногой']
];
function ruExerciseName(raw){
  const n=String(raw||'').trim(); if(!n)return 'Упражнение'; if(RU_EXACT_NAMES[n])return RU_EXACT_NAMES[n];
  // Для неизвестных названий не делаем опасный машинный перевод: оставляем оригинал и переводим только однозначные модификаторы.
  let out=n; for(const [re,to] of RU_WORDS)out=out.replace(re,to); return out.trim();
}
function pick(o,keys){for(const k of keys){const v=o?.[k];if(v!==undefined&&v!==null&&v!=='')return v}return null}
function textish(v){if(Array.isArray(v))return v.map(textish).filter(Boolean).join(', ');if(v&&typeof v==='object')return v.name||v.title||v.label||v.value||'';return String(v??'')}
function inferMuscle(raw,name){
  const src=(textish(pick(raw,['target_muscle','targetMuscle','Target_muscles_id','target_muscles','body_part','bodyPart','body_part_name']))+' '+name).toLowerCase();
  const rules=[['Ягодицы',/glute|hip thrust|abduct/],['Квадрицепс',/quad|leg extension|squat|leg press/],['Бицепс бедра',/hamstring|leg curl|romanian/],['Икры',/calf/],['Грудь',/chest|bench press|push.?up|fly/],['Спина',/back|lat |pulldown|row|pull.?up|deadlift/],['Плечи',/shoulder|deltoid|lateral raise|front raise/],['Бицепс',/biceps|curl/],['Трицепс',/triceps|pushdown|skull/],['Пресс',/abs|abdominal|crunch|plank|core/],['Предплечья',/forearm|wrist/],['Шея',/neck|trap|shrug/],['Кардио',/cardio|run|walk|bike|treadmill|elliptical/]];
  return rules.find(([,r])=>r.test(src))?.[0]||'Другое';
}
function inferEquipment(raw,name){
  const src=(textish(pick(raw,['equipment','equipment_name','equipmentName','equipment_id']))+' '+name).toLowerCase();
  if(/barbell/.test(src))return 'Штанга'; if(/dumbbell/.test(src))return 'Гантели'; if(/cable|pulley/.test(src))return 'Кроссовер';
  if(/kettlebell/.test(src))return 'Гиря'; if(/band|resistance/.test(src))return 'Резинка'; if(/smith|lever|machine|sled/.test(src))return 'Тренажёр';
  if(/bodyweight|body weight|assisted|pull.?up|push.?up|plank/.test(src))return 'Собственный вес'; if(/ez/.test(src))return 'EZ-штанга'; return 'Другое';
}
function resolveMedia(raw,fallback){
  let v=pick(raw,['image_url','imageUrl','image','gif_url','gifUrl','gif','thumbnail','picture','image_name']); v=textish(v).trim();
  if(!v)return fallback; if(/^https?:\/\//i.test(v)||/^data:/i.test(v))return v; if(v.startsWith('//'))return 'https:'+v;
  if(v.startsWith('/'))return 'https://my.lyfta.app'+v; return 'https://my.lyfta.app/'+v.replace(/^\.\//,'');
}
function resolveVideo(raw,fallback){
  let v=pick(raw,['video_url','videoUrl','video','animation_url','animationUrl','animation','gif_url','gifUrl','gif']); v=textish(v).trim();
  if(!v)return fallback; if(/^https?:\/\//i.test(v)||/^data:/i.test(v))return v;if(v.startsWith('//'))return 'https:'+v;if(v.startsWith('/'))return 'https://my.lyfta.app'+v;return 'https://my.lyfta.app/'+v.replace(/^\.\//,'');
}
function normalizeLyfta(raw,index){
  const original=textish(pick(raw,['name','exercise_name','excercise_name','title']))||`Exercise ${index+1}`;
  const name=ruExerciseName(original),muscle=inferMuscle(raw,original),equipment=inferEquipment(raw,original);
  const fallback=exerciseSvg(name,muscle,equipment);
  const secondaryRaw=pick(raw,['synergist_muscles','Synergist_muscles_id','secondary_muscles','secondaryMuscles']);
  return {id:'lyfta-'+String(pick(raw,['id','exercise_id','uuid','slug'])??index),lyftaId:pick(raw,['id','exercise_id','uuid','slug']),name,originalName:original,muscle,equipment,
    type:muscle==='Кардио'?'Кардио':'Силовое',difficulty:'Средний',mechanics:'Базовое',secondary:textish(secondaryRaw)?textish(secondaryRaw).split(',').map(x=>x.trim()).filter(Boolean):[],
    media:resolveMedia(raw,fallback),video:resolveVideo(raw,resolveMedia(raw,fallback)),instructions:[],source:'Lyfta'};
}
async function syncLyftaCatalog(){
  const base=window.TRAINLY_CONFIG?.API_BASE?.replace(/\/$/,'');
  if(!base||base.includes('YOUR-WORKER')){state.catalogStatus='Каталог Lyfta: нужно указать URL Worker в config.js';render();return}
  try{
    state.catalogStatus='Загружаю каталог Lyfta…';render();
    const r=await fetch(base+'/api/library',{headers:{Accept:'application/json'}}); const data=await r.json();
    if(!r.ok||!data.ok)throw new Error(data.detail||data.error||'Ошибка API');
    const remote=(data.exercises||[]).map(normalizeLyfta); const customs=state.exercises.filter(e=>e.custom); const favs=new Set(JSON.parse(localStorage.getItem('trainly-favorites')||'[]'));
    remote.forEach(e=>{if(favs.has(e.id))e.favorite=true});
    const byId=new Map(); [...customs,...remote,...seeds].forEach(e=>{if(!byId.has(e.id))byId.set(e.id,e)}); state.exercises=[...byId.values()];
    state.catalogCount=remote.length; state.catalogStatus=remote.length?`Каталог Lyfta подключён`:'Lyfta ответила, но упражнения не найдены'; render();
  }catch(err){console.error(err);state.catalogStatus='Не удалось загрузить Lyfta: '+(err?.message||'ошибка');render()}
}
setTimeout(syncLyftaCatalog,0);


// ===== Trainly v6: полный каталог, нормализованные данные Lyfta, iOS-подобный UX =====
const LYFTA_EQUIPMENT_RU={
  '1':'Штанга','2':'Собственный вес','3':'Кроссовер','4':'Гантели','5':'EZ-штанга','6':'Рычажный тренажёр','7':'Сани-тренажёр','8':'Машина Смита','9':'Дополнительный вес','10':'С поддержкой','11':'Резинка','12':'Боевые канаты','13':'BOSU','14':'Молот','15':'Гиря','16':'Медбол','17':'Олимпийская штанга','18':'Силовые сани','19':'Эспандер','20':'Ролл','21':'Мяч-роллер','22':'Канат','23':'Фитбол','24':'Палка','25':'Петли/TRX','26':'Трэп-гриф','27':'Виброплатформа','28':'Ролик для пресса'
};
const LYFTA_BODY_RU={'1':'Бёдра','2':'Грудь','3':'Ягодицы','4':'Спина','5':'Руки','6':'Плечи','7':'Предплечья','8':'Икры','9':'Шея','10':'Кардио','11':'Всё тело','12':'Пресс','13':'Плиометрика','14':'Тяжёлая атлетика','15':'Йога','16':'Растяжка','17':'Бицепс','18':'Трицепс','19':'Квадрицепс','20':'Бицепс бедра'};
const LYFTA_MUSCLE_RU={
  '2':'Длинная приводящая мышца','3':'Большая приводящая мышца','4':'Бицепс плеча','5':'Плечевая мышца','6':'Плечелучевая мышца','7':'Глубокие наружные ротаторы бедра','8':'Передняя дельта','9':'Средняя дельта','10':'Задняя дельта','11':'Разгибатели позвоночника','12':'Икроножная мышца','13':'Большая ягодичная мышца','14':'Средняя ягодичная мышца','15':'Малая ягодичная мышца','16':'Тонкая мышца бедра','17':'Бицепс бедра','18':'Подвздошно-поясничная мышца','19':'Подостная мышца','20':'Широчайшая мышца спины','21':'Мышца, поднимающая лопатку','22':'Косые мышцы живота','23':'Гребенчатая мышца','24':'Верх груди','25':'Средняя/нижняя часть груди','26':'Подколенная мышца','27':'Квадрицепс','28':'Прямая мышца живота','29':'Портняжная мышца','30':'Передняя зубчатая мышца','31':'Передняя зубчатая мышца','32':'Камбаловидная мышца','33':'Ременная мышца','34':'Грудино-ключично-сосцевидная мышца','35':'Подлопаточная мышца','36':'Напрягатель широкой фасции бедра','37':'Большая круглая мышца','38':'Малая круглая мышца','39':'Передняя большеберцовая мышца','40':'Поперечная мышца живота','41':'Нижняя часть трапеции','42':'Средняя часть трапеции','43':'Верхняя часть трапеции','44':'Трицепс плеча','45':'Разгибатели запястья','46':'Сгибатели запястья'
};
function parseIdList(v){if(Array.isArray(v))return v.map(String);try{const x=JSON.parse(v||'[]');return Array.isArray(x)?x.map(String):[]}catch{return String(v||'').match(/\d+/g)||[]}}
function groupFromTargets(ids,bodyIds,name=''){
  const ms=ids.map(i=>LYFTA_MUSCLE_RU[i]||'').join(' ').toLowerCase();
  const body=bodyIds.map(i=>LYFTA_BODY_RU[i]||'');
  if(/ягод/.test(ms))return 'Ягодицы'; if(/квадриц/.test(ms))return 'Квадрицепс'; if(/бицепс бедра|подкол/.test(ms))return 'Бицепс бедра';
  if(/икронож|камбал/.test(ms))return 'Икры'; if(/груд|pector/.test(ms))return 'Грудь'; if(/широчай|трапец|разгибатели позвоночника|круглая мышца/.test(ms))return 'Спина';
  if(/дельт/.test(ms))return 'Плечи'; if(/бицепс плеча|плечевая|плечелучевая/.test(ms))return 'Бицепс'; if(/трицепс/.test(ms))return 'Трицепс';
  if(/живота/.test(ms))return 'Пресс'; if(/запясть/.test(ms))return 'Предплечья'; if(/грудино|ременная|лопатку/.test(ms))return 'Шея';
  for(const b of ['Грудь','Спина','Плечи','Бицепс','Трицепс','Квадрицепс','Бицепс бедра','Ягодицы','Пресс','Икры','Предплечья','Шея','Кардио'])if(body.includes(b))return b;
  return inferMuscle({},name);
}
const V6_EXACT={
  ...RU_EXACT_NAMES,
  '123 Back Drill (male)':'Дрилл «1-2-3» для спины','123 Back Drill (female)':'Дрилл «1-2-3» для спины',
  '1 2 Stick Drill (male)':'Дрилл «1-2» с палкой','1 2 Stick Drill (female)':'Дрилл «1-2» с палкой',
  '1 to 2 Jump Box':'Прыжок на тумбу с одной ноги на две','2 to 1 Jump Box':'Прыжок на тумбу с двух ног на одну',
  '3 4 Sit up':'Скручивания 3/4','Alternate Leg Raise from Reverse Plank Position':'Попеременный подъём ног из обратной планки',
  'Alternate Leg Raise Plank':'Попеременный подъём ног в планке','Rear Lunge':'Выпады назад','Barbell Rear Lunge':'Выпады назад со штангой'
};
const V6_PHRASES=[
  [/\((male|female)\)/gi,''],[/\bsmith machine\b/gi,'в машине Смита'],[/\bleverage machine\b/gi,'в рычажном тренажёре'],[/\bbody weight\b/gi,'с собственным весом'],[/\bresistance band\b/gi,'с резинкой'],[/\bolympic barbell\b/gi,'с олимпийской штангой'],[/\bez barbell\b/gi,'с EZ-штангой'],[/\bbarbell\b/gi,'со штангой'],[/\bdumbbell\b/gi,'с гантелями'],[/\bkettlebell\b/gi,'с гирей'],[/\bcable\b/gi,'на блоке'],[/\bmachine\b/gi,'в тренажёре'],[/\bband\b/gi,'с резинкой'],
  [/\bbench press\b/gi,'жим лёжа'],[/\bchest press\b/gi,'жим от груди'],[/\bshoulder press\b/gi,'жим над головой'],[/\boverhead press\b/gi,'жим над головой'],[/\bmilitary press\b/gi,'армейский жим'],[/\bpush.?up\b/gi,'отжимания'],[/\bpull.?up\b/gi,'подтягивания'],[/\bchin.?up\b/gi,'подтягивания обратным хватом'],[/\bpulldown\b/gi,'тяга верхнего блока'],[/\brow\b/gi,'тяга'],[/\bdeadlift\b/gi,'становая тяга'],[/\bsquat\b/gi,'приседания'],[/\blunge\b/gi,'выпады'],[/\bhip thrust\b/gi,'ягодичный мост'],[/\bglute bridge\b/gi,'ягодичный мост лёжа'],[/\bleg press\b/gi,'жим ногами'],[/\bleg extension\b/gi,'разгибание ног'],[/\bleg curl\b/gi,'сгибание ног'],[/\bbiceps curl\b/gi,'сгибание рук на бицепс'],[/\bcurl\b/gi,'сгибание'],[/\btriceps extension\b/gi,'разгибание рук на трицепс'],[/\bpushdown\b/gi,'разгибание рук на верхнем блоке'],[/\blateral raise\b/gi,'разведение рук в стороны'],[/\bfront raise\b/gi,'подъём рук перед собой'],[/\brear delt fly\b/gi,'разведение на заднюю дельту'],[/\bfly\b/gi,'сведение рук'],[/\bcalf raise\b/gi,'подъём на носки'],[/\bsit.?up\b/gi,'подъём корпуса'],[/\bcrunch\b/gi,'скручивания'],[/\bplank\b/gi,'планка'],[/\bshrug\b/gi,'шраги'],[/\bdip\b/gi,'отжимания на брусьях'],[/\bjumping jack\b/gi,'джампинг-джек'],[/\bmountain climber\b/gi,'альпинист'],
  [/\balternate\b/gi,'попеременный'],[/\breverse\b/gi,'обратный'],[/\bsingle arm\b/gi,'одной рукой'],[/\bone arm\b/gi,'одной рукой'],[/\bsingle leg\b/gi,'одной ногой'],[/\bone leg\b/gi,'одной ногой'],[/\bseated\b/gi,'сидя'],[/\bstanding\b/gi,'стоя'],[/\blying\b/gi,'лёжа'],[/\bincline\b/gi,'на наклонной скамье'],[/\bdecline\b/gi,'на скамье с отрицательным наклоном'],[/\bwide grip\b/gi,'широким хватом'],[/\bclose grip\b/gi,'узким хватом'],[/\bneutral grip\b/gi,'нейтральным хватом'],[/\bhammer\b/gi,'молотковый'],[/\brotation\b/gi,'вращение'],[/\btwist\b/gi,'повороты'],[/\bstretch\b/gi,'растяжка'],[/\braise\b/gi,'подъём'],[/\bextension\b/gi,'разгибание'],[/\bflexion\b/gi,'сгибание'],[/\babduction\b/gi,'отведение'],[/\badduction\b/gi,'приведение'],[/\bdrill\b/gi,'дрилл'],[/\bjump box\b/gi,'прыжок на тумбу'],[/\bbox jump\b/gi,'прыжок на тумбу'],[/\bstick\b/gi,'с палкой']
];
function ruExerciseName(raw){
  const original=String(raw||'').trim();if(!original)return 'Упражнение';if(V6_EXACT[original])return V6_EXACT[original];
  let out=original;for(const [re,to] of V6_PHRASES)out=out.replace(re,to);out=out.replace(/\s+/g,' ').trim();
  // Если после словаря осталось много английских слов, сохраняем понятную русскую часть и оригинал как справочную подпись в detail.
  return out.charAt(0).toUpperCase()+out.slice(1);
}
function highResLyfta(url){return String(url||'').replace(/_small(?=\.png(?:$|\?))/i,'')}
function gifLyfta(url){const u=String(url||'');if(!u)return '';return u.replace('/GymvisualPNG/','/GymvisualGIF/').replace(/_small\.png(?:$|\?)/i,'.gif').replace(/\.png(?:$|\?)/i,'.gif')}
function normalizeLyfta(raw,index){
  const original=textish(pick(raw,['name','exercise_name','excercise_name','title']))||`Exercise ${index+1}`;
  const targetIds=parseIdList(raw.Target_muscles_id), secondaryIds=parseIdList(raw.Synergist_muscles_id), bodyIds=parseIdList(raw.body_part_id), equipmentIds=parseIdList(raw.equipment_id);
  const name=ruExerciseName(original),muscle=groupFromTargets(targetIds,bodyIds,original),equipment=equipmentIds.map(i=>LYFTA_EQUIPMENT_RU[i]).filter(Boolean).join(', ')||'Другое';
  const image=resolveMedia(raw,'');
  return {id:'lyfta-'+String(pick(raw,['id','exercise_id','uuid','slug'])??index),lyftaId:String(pick(raw,['id','exercise_id','uuid','slug'])??''),name,originalName:original,muscle,equipment,
    bodyParts:bodyIds.map(i=>LYFTA_BODY_RU[i]).filter(Boolean),targetMuscles:targetIds.map(i=>LYFTA_MUSCLE_RU[i]).filter(Boolean),secondary:secondaryIds.map(i=>LYFTA_MUSCLE_RU[i]).filter(Boolean),
    type:raw.exercise_type==='duration'?'По времени':raw.exercise_type==='weight_reps'?'Вес × повторения':'Повторения',difficulty:'Не указано',mechanics:'Не указано',
    media:image||exerciseSvg(name,muscle,equipment),mediaLarge:highResLyfta(image)||image,video:gifLyfta(image)||image,instructions:[],source:'Lyfta'};
}
function representativeMedia(predicate,fallback){const x=state.exercises.find(e=>!e.custom&&e.media&&predicate(e));return x?.media||fallback}
function latestExerciseLog(id){return (state.exerciseLogs||[]).filter(x=>x.exerciseId===id).sort((a,b)=>String(b.date).localeCompare(String(a.date)))[0]||null}
function exerciseLogsFor(id){return (state.exerciseLogs||[]).filter(x=>x.exerciseId===id).sort((a,b)=>String(b.date).localeCompare(String(a.date)))}
function prettyLog(x){return `${x.kg?x.kg+' кг · ':''}${x.reps?x.reps+' повт.':''}${x.sets>1?' · '+x.sets+' подх.':''}`.replace(/ · $/,'')}
function imgTag(e,cls='',detail=false){const src=detail?(e.mediaLarge||e.media):e.media;return `<img class="${cls}" src="${esc(src)}" data-fallback="${esc(e.media)}" alt="${esc(e.name)}" loading="lazy" onerror="if(this.dataset.fallback&&this.src!==this.dataset.fallback){this.src=this.dataset.fallback}else{this.onerror=null}">`}

state.exerciseLogs=load('exercise-logs',[]);state.visibleLimit=120;state.catalogTotal=0;state.catalogLoading=false;
const v6Save=save;save=function(){v6Save();localStorage.setItem('trainly-exercise-logs',JSON.stringify(state.exerciseLogs||[]));};

function exercises(){
  const muscles=['Избранное','Кардио','Грудь','Спина','Бицепс','Трицепс','Квадрицепс','Бицепс бедра','Плечи','Ягодицы','Пресс','Икры','Предплечья','Шея','Мои'];let a=state.advanced;
  let list=state.exercises.filter(e=>{let q=state.query.toLowerCase(),qok=!q||(e.name+' '+e.originalName+' '+e.muscle+' '+e.equipment+' '+(e.targetMuscles||[]).join(' ')).toLowerCase().includes(q);let f=state.filter;let fok=f==='Все'||(f==='Мои'&&e.custom)||(f==='Избранное'&&e.favorite)||e.muscle===f||(f==='Кардио'&&(e.muscle==='Кардио'||e.type==='По времени'));let eq=!a.equipment.length||a.equipment.some(v=>e.equipment.includes(v));let ty=!a.types.length||a.types.includes(e.type);return qok&&fok&&eq&&ty});
  const count=a.equipment.length+a.types.length;const shown=list.slice(0,state.visibleLimit);const icon=(f)=>representativeMedia(e=>e.muscle===f,muscleSvg(f,'#ef4444',muscleKind(f)));
  return `<div class="page exercises-page">${header('Упражнения','<button class="round" data-custom aria-label="Создать упражнение">＋</button>')}<div class="searchbox lyfta-search"><b>⌕</b><input id="search" value="${esc(state.query)}" placeholder="Найти упражнение"><button class="camera" data-open-filters aria-label="Фильтры">☷${count?`<i>${count}</i>`:''}</button></div><div class="muscle-scroll lyfta-muscles"><button class="muscle-tile ${state.filter==='Избранное'?'on':''}" data-filter="Избранное"><span class="bookmark-symbol">☆</span><small>Избранное</small></button>${muscles.filter(f=>!['Избранное','Мои'].includes(f)).map(f=>`<button class="muscle-tile ${state.filter===f?'on':''}" data-filter="${f}"><img src="${icon(f)}"><small>${esc(f)}</small></button>`).join('')}<button class="muscle-tile ${state.filter==='Мои'?'on':''}" data-filter="Мои"><span class="my-symbol">＋</span><small>Мои</small></button><button class="muscle-tile filter-tile ${count?'on':''}" data-open-filters><span class="filter-symbol">☷</span><small>Фильтры${count?` (${count})`:''}</small></button></div><div class="catalog-status compact"><span>${esc(state.catalogStatus)}</span><b>${state.catalogTotal?`${state.exercises.filter(e=>!e.custom).length.toLocaleString('ru-RU')} / ${state.catalogTotal.toLocaleString('ru-RU')}`:state.catalogCount||''}</b></div><div class="results-head"><strong>${list.length.toLocaleString('ru-RU')} упражнений</strong>${count?'<button data-clear-filters>Сбросить фильтры</button>':''}</div><div class="exercise-grid">${shown.length?shown.map(exCard).join(''):'<div class="empty grid-empty">Ничего не найдено.</div>'}</div>${shown.length<list.length?`<button class="ios-secondary full" data-show-more>Показать ещё (${Math.min(120,list.length-shown.length)})</button>`:''}</div>`;
}
function exCard(e){return `<article class="exercise-card"><button class="card-favorite ${e.favorite?'on':''}" data-card-favorite="${e.id}" aria-label="Избранное">${e.favorite?'★':'☆'}</button><button class="card-main" data-ex="${e.id}"><div class="card-media">${imgTag(e)}</div><div class="card-copy"><h3>${esc(e.name)}${e.custom?'<span class="badge">Моё</span>':''}</h3><p>${esc(e.muscle)} · ${esc(e.equipment)}</p></div><span class="ios-chevron">›</span></button></article>`}
function exRow(e,extra=''){return `<button class="exercise-row" data-ex="${e.id}">${imgTag(e)}<div><h3>${esc(e.name)}${e.custom?'<span class="badge">Моё</span>':''}</h3><p>${esc(e.muscle)} · ${esc(e.equipment)}</p>${extra}</div><b>›</b></button>`}
function exerciseDetail(e){
  const logs=exerciseLogsFor(e.id),last=logs[0];const secondary=(e.secondary||[]).filter(x=>!/^[\[\]"\d, ]+$/.test(x));
  return `<div class="page detail-page">${backHead(e.name,e.muscle,`<button class="icon-btn" data-favorite="${e.id}" aria-label="Избранное">${e.favorite?'★':'☆'}</button>`)}${e.originalName&&e.originalName!==e.name?`<p class="original-name">Lyfta: ${esc(e.originalName)}</p>`:''}<div class="tabs"><button data-detail-tab="about" class="${state.detailTab==='about'?'on':''}">Описание</button><button data-detail-tab="history" class="${state.detailTab==='history'?'on':''}">История</button><button data-detail-tab="progress" class="${state.detailTab==='progress'?'on':''}">Прогресс</button></div>${state.detailTab==='about'?`<div class="media-card lyfta-detail-media">${imgTag(e,'',true)}<button class="media-toggle" data-toggle-media data-photo="${esc(e.mediaLarge||e.media)}" data-gif="${esc(e.video||'')}">▶ Анимация</button></div><div class="info-grid"><div><span>Основная группа</span><strong>${esc(e.muscle)}</strong></div><div><span>Оборудование</span><strong>${esc(e.equipment)}</strong></div><div><span>Основные мышцы</span><strong>${esc((e.targetMuscles||[]).join(', ')||e.muscle)}</strong></div><div><span>Формат</span><strong>${esc(e.type)}</strong></div></div>${secondary.length?`<h3 class="section-title">Вспомогательные мышцы</h3><p class="section-help">Мышцы, которые помогают основной группе выполнять движение и стабилизировать тело.</p><div class="tag-row">${secondary.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`:''}<div class="ios-action-group"><button data-log-result="${e.id}">＋ Записать результат без тренировки</button><button data-add-ex-to-workout="${e.id}">＋ Добавить в тренировку</button></div>${last?`<div class="last-result"><span>Последний результат · ${esc(last.date)}</span><strong>${esc(prettyLog(last))}</strong></div>`:''}<h3 class="section-title">Техника выполнения</h3>${e.instructions?.length?`<ol class="steps">${e.instructions.map((s,i)=>`<li><span>${i+1}</span><p>${esc(s)}</p></li>`).join('')}</ol>`:'<div class="empty compact-empty">Lyfta API не передаёт инструкцию для этого упражнения. Используй изображение/анимацию как демонстрацию движения.</div>'}`:state.detailTab==='history'?`<div class="history-toolbar"><button class="ios-primary" data-log-result="${e.id}">＋ Добавить результат</button></div><div class="stack">${logs.length?logs.map(l=>`<div class="manual-log"><div><strong>${esc(prettyLog(l))}</strong><span>${esc(l.date)}</span></div><button class="delete-inline" data-delete-log="${l.id}">Удалить</button></div>`).join(''):'<div class="empty">Результатов пока нет. Их можно добавить вручную без запуска тренировки.</div>'}</div>`:`<div class="progress-placeholder"><h3>Прогресс по упражнению</h3>${logs.length?`<strong class="big-progress">${Math.max(...logs.map(x=>+x.kg||0))} кг</strong><p>Максимальный зафиксированный вес</p>`:'<p>Добавь первый результат или заверши тренировку — здесь появится динамика.</p>'}</div>`}</div>`;
}
function builder(){let b=state.builder;return `<div class="page builder">${backHead(b._new?'Новая тренировка':'Редактирование','',`<button class="save-text" data-save-builder>Готово</button>`)}<label class="field-label">Название</label><input id="workout-name" class="big-input" value="${esc(b.name)}" placeholder="Например, Ноги и ягодицы"><div class="builder-section-head"><h3>Упражнения</h3><span>${b.exercises.length}</span></div>${b.exercises.length?`<div class="stack sortable-builder">${b.exercises.map((id,i)=>{let e=state.exercises.find(x=>x.id===id);return `<div class="builder-row ios-builder-row" data-builder-index="${i}"><button class="drag-handle" data-drag-index="${i}" aria-label="Перетащить">≡</button>${e?imgTag(e):''}<div><strong>${esc(e?.name||'Упражнение')}</strong><span>${esc(e?.muscle||'')}</span></div><button class="remove-circle" data-remove-builder="${i}" aria-label="Удалить">−</button></div>`}).join('')}</div><p class="drag-hint">Зажми ≡ и перетащи упражнение, чтобы изменить порядок.</p>`:'<div class="empty">Добавь первое упражнение.</div>'}<button class="ios-secondary full" data-open-picker>＋ Добавить упражнение</button></div>`}
function workoutDetail(w){return `<div class="page">${backHead(w.name,`${w.exercises.length} упражнений`,`<button class="icon-btn" data-edit-workout="${w.id}" aria-label="Редактировать">⋯</button>`)}<button class="ios-primary full" data-start="${w.id}">▶ Начать тренировку</button><h3 class="section-title">Упражнения</h3><div class="exercise-list">${w.exercises.map(id=>{let e=state.exercises.find(x=>x.id===id);let last=e?latestExerciseLog(e.id):null;return e?exRow(e,last?`<small class="previous-inline">Последний: ${esc(prettyLog(last))}</small>`:''):''}).join('')}</div><button class="ios-secondary full" data-edit-workout="${w.id}">Изменить тренировку</button><button class="danger-button" data-delete-workout="${w.id}">Удалить тренировку</button></div>`}
function makeActive(w){return {id:'s'+Date.now(),name:w.name,started:Date.now(),items:w.exercises.map(id=>{const ex=state.exercises.find(e=>e.id===id),last=latestExerciseLog(id);return {exercise:ex,previous:last,sets:[{kg:last?.kg||'',reps:last?.reps||'',done:false},{kg:'',reps:'',done:false},{kg:'',reps:'',done:false}]}}).filter(x=>x.exercise)}}
function activeWorkout(){let a=state.active,mins=Math.max(1,Math.floor((Date.now()-a.started)/60000));return `<div class="page active-workout"><div class="active-top"><button class="icon-btn" data-exit-active>‹</button><div><span>ТРЕНИРОВКА</span><h1>${esc(a.name)}</h1></div><div class="timer">◷ ${mins} мин</div></div>${a.items.map((it,ei)=>`<section class="active-ex"><div class="active-ex-head">${imgTag(it.exercise)}<div><h3>${esc(it.exercise?.name||'')}</h3><p>${esc(it.exercise?.muscle||'')}</p></div><button class="icon-btn" data-active-menu="${ei}">•••</button></div><div class="set-head"><span>№</span><span>ПРОШЛЫЙ</span><span>КГ</span><span>ПОВТ.</span><span></span></div>${it.sets.map((s,si)=>`<div class="set-row ${s.done?'done':''}"><span>${si+1}</span><span class="prev">${si===0&&it.previous?esc(`${it.previous.kg||0}×${it.previous.reps||0}`):'—'}</span><input inputmode="decimal" data-set="${ei}:${si}:kg" value="${esc(s.kg)}" placeholder="0"><input inputmode="numeric" data-set="${ei}:${si}:reps" value="${esc(s.reps)}" placeholder="0"><button data-done="${ei}:${si}">✓</button></div>`).join('')}<button class="add-set" data-add-set="${ei}">＋ Добавить подход</button></section>`).join('')}<button class="ios-secondary full" data-add-active-ex>＋ Добавить упражнение</button><button class="finish" data-finish>Завершить тренировку</button></div>`}
function equipmentIcon(name){return representativeMedia(e=>e.equipment.includes(name),equipmentSvg(name))}
function sheet(){
  if(state.sheet==='filters'){let a=state.advanced,eq=['Штанга','Гантели','Кроссовер','Собственный вес','Резинка','Гиря','Машина Смита','Рычажный тренажёр','Петли/TRX','Фитбол','Скамья','Другое'],types=['Вес × повторения','Повторения','По времени'];return `<div class="sheet-backdrop" data-dismiss-sheet><div class="sheet filters-sheet" data-sheet-body><div class="sheet-grab"></div><div class="sheet-title"><h2>Фильтры</h2><button data-close-sheet>×</button></div><h3 class="filter-heading">Оборудование</h3><div class="filter-grid">${eq.map(x=>`<button class="filter-option ${a.equipment.includes(x)?'selected':''}" data-eq="${x}"><img src="${equipmentIcon(x)}"><b>${x}</b></button>`).join('')}</div><h3 class="filter-heading">Формат упражнения</h3><div class="filter-chips">${types.map(x=>`<button class="chip ${a.types.includes(x)?'on':''}" data-type="${x}">${x}</button>`).join('')}</div><div class="filter-actions"><button class="ghost dark" data-reset-advanced>Сбросить</button><button class="primary dark" data-apply-filters>Применить</button></div></div></div>`}
  if(state.sheet==='picker'||state.sheet==='active-picker'){const top=state.exercises.slice(0,120);return `<div class="sheet-backdrop" data-dismiss-sheet><div class="sheet picker-sheet" data-sheet-body><div class="sheet-grab"></div><div class="sheet-title"><h2>${state.sheet==='active-picker'?'Добавить упражнение':'Выбрать упражнение'}</h2><button data-close-sheet>×</button></div><div class="searchbox"><b>⌕</b><input id="picker-search" placeholder="Поиск по ${state.exercises.length.toLocaleString('ru-RU')} упражнениям"></div><div id="picker-list" class="picker-list">${top.map(e=>`<button class="exercise-row" data-pick="${e.id}">${imgTag(e)}<div><h3>${esc(e.name)}</h3><p>${esc(e.muscle)} · ${esc(e.equipment)}</p></div><b>＋</b></button>`).join('')}</div></div></div>`}
  if(state.sheet==='active-menu'){let ei=state.activeMenuIndex,it=state.active.items[ei];return `<div class="sheet-backdrop" data-dismiss-sheet><div class="sheet menu-sheet" data-sheet-body><div class="sheet-grab"></div><div class="sheet-title"><h2>${esc(it.exercise.name)}</h2><button data-close-sheet>×</button></div><button class="menu-action" data-view-active-ex="${ei}">Открыть упражнение</button><button class="menu-action" data-log-result="${it.exercise.id}">Записать прошлый результат</button><button class="menu-action" data-replace-active="${ei}">Заменить упражнение</button><button class="menu-action danger" data-remove-active="${ei}">Удалить из тренировки</button></div></div>`}
  if(state.sheet==='manual-log'){const e=state.exercises.find(x=>x.id===state.logExerciseId);const today=new Date().toISOString().slice(0,10);return `<div class="sheet-backdrop" data-dismiss-sheet><div class="sheet manual-log-sheet" data-sheet-body><div class="sheet-grab"></div><div class="sheet-title"><h2>Записать результат</h2><button data-close-sheet>×</button></div><p class="sub">${esc(e?.name||'')}</p><label class="field-label">Дата</label><input id="log-date" class="big-input" type="date" value="${today}"><div class="two"><div><label class="field-label">Вес, кг</label><input id="log-kg" class="big-input" inputmode="decimal" placeholder="Например, 60"></div><div><label class="field-label">Повторения</label><input id="log-reps" class="big-input" inputmode="numeric" placeholder="Например, 10"></div></div><label class="field-label">Количество подходов</label><input id="log-sets" class="big-input" inputmode="numeric" value="1"><button class="ios-primary full" data-save-log>Сохранить результат</button></div></div>`}
  if(state.sheet==='add-to-workout'){const e=state.exercises.find(x=>x.id===state.pendingExercise);return `<div class="sheet-backdrop" data-dismiss-sheet><div class="sheet menu-sheet" data-sheet-body><div class="sheet-grab"></div><div class="sheet-title"><h2>Добавить в тренировку</h2><button data-close-sheet>×</button></div><p class="sub">${esc(e?.name||'')}</p><button class="menu-action" data-new-workout-with="${e?.id||''}">＋ Новая тренировка</button>${state.workouts.map(w=>`<button class="menu-action" data-add-to-existing="${w.id}">${esc(w.name)} <span>${w.exercises.length} упр.</span></button>`).join('')}</div></div>`}
  if(state.sheet==='custom')return `<div class="sheet-backdrop" data-dismiss-sheet><div class="sheet custom-sheet" data-sheet-body><div class="sheet-grab"></div><div class="sheet-title"><h2>Своё упражнение</h2><button data-close-sheet>×</button></div><label class="upload" id="upload-preview"><span class="upload-icon">◉</span><strong>Добавить фото или GIF</strong><span>JPG, PNG или GIF</span><input id="custom-file" type="file" accept="image/*,.gif"></label><label class="field-label">Название</label><input id="custom-name" class="big-input" placeholder="Например, тяга резинки"><div class="two"><div><label class="field-label">Мышца</label><select id="custom-muscle">${['Ягодицы','Спина','Квадрицепс','Бицепс бедра','Плечи','Грудь','Бицепс','Трицепс','Пресс','Икры','Предплечья','Шея'].map(x=>`<option>${x}</option>`).join('')}</select></div><div><label class="field-label">Оборудование</label><select id="custom-equipment">${['Собственный вес','Гантели','Штанга','Тренажёр','Кроссовер','Резинка','Гиря','TRX','Скамья','EZ-штанга','Другое'].map(x=>`<option>${x}</option>`).join('')}</select></div></div><label class="field-label">Описание / техника</label><textarea id="custom-instructions" class="big-textarea" placeholder="Коротко опиши выполнение"></textarea><button class="ios-primary full" data-save-custom>Создать упражнение</button></div></div>`;
  return '';
}

const v5Bind=bind;bind=function(){
  v5Bind();
  $('[data-show-more]')?.addEventListener('click',()=>{state.visibleLimit+=120;render()});
  $$('[data-log-result]').forEach(x=>x.onclick=()=>{state.logExerciseId=x.dataset.logResult;state.sheet='manual-log';render()});
  $('[data-save-log]')?.addEventListener('click',()=>{const kg=parseFloat($('#log-kg').value||0),reps=parseInt($('#log-reps').value||0),sets=Math.max(1,parseInt($('#log-sets').value||1)),date=$('#log-date').value||new Date().toISOString().slice(0,10);if(!kg&&!reps)return alert('Укажи вес или количество повторений');state.exerciseLogs.unshift({id:'l'+Date.now(),exerciseId:state.logExerciseId,date,kg,reps,sets,source:'manual'});state.sheet=null;render()});
  $$('[data-delete-log]').forEach(x=>x.onclick=()=>{state.exerciseLogs=state.exerciseLogs.filter(l=>l.id!==x.dataset.deleteLog);render()});
  $('[data-toggle-media]')?.addEventListener('click',e=>{const img=$('#exercise-media'),photo=e.currentTarget.dataset.photo,gif=e.currentTarget.dataset.gif;if(!gif||gif===photo){alert('Для этого упражнения Lyfta не передала отдельную GIF-анимацию.');return}const showingGif=e.currentTarget.dataset.mode==='gif';if(showingGif){img.src=photo;e.currentTarget.dataset.mode='photo';e.currentTarget.textContent='▶ Анимация'}else{img.onerror=()=>{img.onerror=null;img.src=photo;alert('Анимация для этого упражнения недоступна, показываю фото.');};img.src=gif;e.currentTarget.dataset.mode='gif';e.currentTarget.textContent='▣ Фото'}});
  $$('[data-add-ex-to-workout]').forEach(x=>x.onclick=()=>{state.pendingExercise=x.dataset.addExToWorkout;state.sheet='add-to-workout';render()});
  $$('[data-add-to-existing]').forEach(x=>x.onclick=()=>{const w=state.workouts.find(w=>w.id===x.dataset.addToExisting);if(w&&!w.exercises.includes(state.pendingExercise))w.exercises.push(state.pendingExercise);state.sheet=null;state.selectedExercise=null;state.selectedWorkout=w;render()});
  $$('[data-new-workout-with]').forEach(x=>x.onclick=()=>{state.builder={id:'w'+Date.now(),name:'Новая тренировка',exercises:[x.dataset.newWorkoutWith],_new:true};state.sheet=null;state.selectedExercise=null;render()});
  $$('[data-create-workout]').forEach(x=>x.onclick=()=>{state.builder={id:'w'+Date.now(),name:'Новая тренировка',exercises:[],_new:true};render()});
  // iOS-like drag reorder: pointer down on handle, release over target row.
  $$('[data-drag-index]').forEach(handle=>{let start=null;handle.onpointerdown=e=>{start=+handle.dataset.dragIndex;handle.setPointerCapture?.(e.pointerId);handle.closest('.builder-row')?.classList.add('dragging');};handle.onpointerup=e=>{const row=document.elementFromPoint(e.clientX,e.clientY)?.closest?.('[data-builder-index]');handle.closest('.builder-row')?.classList.remove('dragging');if(start!=null&&row){const end=+row.dataset.builderIndex;if(end!==start){const [id]=state.builder.exercises.splice(start,1);state.builder.exercises.splice(end,0,id);render()}}start=null;};});
};
const v5BindPicker=bindPicker;bindPicker=function(){
  v5BindPicker();const ps=$('#picker-search');if(ps)ps.oninput=e=>{const q=e.target.value.toLowerCase();const matches=state.exercises.filter(ex=>(ex.name+' '+ex.originalName+' '+ex.muscle+' '+ex.equipment).toLowerCase().includes(q)).slice(0,200);$('#picker-list').innerHTML=matches.map(ex=>`<button class="exercise-row" data-pick="${ex.id}">${imgTag(ex)}<div><h3>${esc(ex.name)}</h3><p>${esc(ex.muscle)} · ${esc(ex.equipment)}</p></div><b>＋</b></button>`).join('');$$('[data-pick]').forEach(x=>x.onclick=()=>{const id=x.dataset.pick;if(state.sheet==='active-picker'){let ex=state.exercises.find(e=>e.id===id);if(state.replaceIndex!=null){state.active.items[state.replaceIndex]={exercise:ex,previous:latestExerciseLog(id),sets:[{kg:'',reps:'',done:false},{kg:'',reps:'',done:false},{kg:'',reps:'',done:false}]};state.replaceIndex=null}else state.active.items.push({exercise:ex,previous:latestExerciseLog(id),sets:[{kg:'',reps:'',done:false},{kg:'',reps:'',done:false},{kg:'',reps:'',done:false}]});state.sheet=null}else{state.builder.exercises.push(id);state.sheet=null}render()})};
};

async function syncLyftaCatalog(){
  const base=window.TRAINLY_CONFIG?.API_BASE?.replace(/\/$/,'');if(!base||base.includes('YOUR-WORKER')){state.catalogStatus='Укажи URL Worker в config.js';render();return}
  const cacheKey='trainly-lyfta-catalog-v6',timeKey='trainly-lyfta-catalog-v6-time';
  try{
    const cached=JSON.parse(localStorage.getItem(cacheKey)||'null'),cacheTime=+localStorage.getItem(timeKey)||0;
    if(Array.isArray(cached)&&cached.length){const favs=new Set(JSON.parse(localStorage.getItem('trainly-favorites')||'[]'));cached.forEach(e=>{if(favs.has(e.id))e.favorite=true});state.exercises=[...state.exercises.filter(e=>e.custom),...cached];state.catalogTotal=cached.length;state.catalogCount=cached.length;state.catalogStatus='Каталог Lyfta загружен';cleanupWorkouts();render();if(Date.now()-cacheTime<86400000)return}
    state.catalogLoading=true;state.catalogStatus='Загружаю каталог Lyfta…';render();let offset=0,total=0,all=[];
    while(true){const r=await fetch(`${base}/api/library?limit=100&offset=${offset}`,{headers:{Accept:'application/json'}});const data=await r.json();if(!r.ok||data.status!==true)throw new Error(data.detail||data.message||data.error||'Ошибка API');const batch=data.data?.results||[],pg=data.data?.pagination||{};total=pg.total||total||batch.length;all.push(...batch.map((x,i)=>normalizeLyfta(x,offset+i)));offset+=batch.length;state.catalogTotal=total;state.catalogCount=all.length;state.catalogStatus=`Загружаю каталог: ${all.length.toLocaleString('ru-RU')} из ${total.toLocaleString('ru-RU')}`;if(all.length===batch.length||all.length%500===0){state.exercises=[...state.exercises.filter(e=>e.custom),...all];render()}if(!pg.hasMore||!batch.length||all.length>=total)break;await new Promise(res=>setTimeout(res,1050));}
    const favs=new Set(JSON.parse(localStorage.getItem('trainly-favorites')||'[]'));all.forEach(e=>{if(favs.has(e.id))e.favorite=true});state.exercises=[...state.exercises.filter(e=>e.custom),...all];state.catalogTotal=total||all.length;state.catalogCount=all.length;state.catalogStatus='Каталог Lyfta загружен полностью';state.catalogLoading=false;cleanupWorkouts();try{localStorage.setItem(cacheKey,JSON.stringify(all));localStorage.setItem(timeKey,String(Date.now()))}catch(e){console.warn('Каталог не поместился в localStorage',e)}render();
  }catch(err){console.error(err);state.catalogLoading=false;state.catalogStatus='Не удалось загрузить Lyfta: '+(err?.message||'ошибка');render()}
}
function cleanupWorkouts(){const ids=new Set(state.exercises.map(e=>e.id));state.workouts=state.workouts.map(w=>({...w,exercises:(w.exercises||[]).filter(id=>ids.has(id))})).filter(w=>w.id!=='glutes'||w.exercises.length);}


// ===== Trainly v7: media, picker, workout previews, safer deletion =====
state.pickerSelected = state.pickerSelected || [];
state.pickerContext = state.pickerContext || null;
state.returnToPicker = state.returnToPicker || false;
state.reorderedIndex = null;

const V7_WORDS = [
  [/\bbent over\b/gi,'в наклоне'],[/\bwide grip\b/gi,'широким хватом'],[/\bclose grip\b/gi,'узким хватом'],[/\breverse grip\b/gi,'обратным хватом'],[/\bneutral grip\b/gi,'нейтральным хватом'],[/\bpronated grip\b/gi,'прямым хватом'],[/\bsupinated grip\b/gi,'обратным хватом'],
  [/\bback extension\b/gi,'гиперэкстензия'],[/\bgood morning\b/gi,'наклоны «Доброе утро»'],[/\bupright row\b/gi,'тяга к подбородку'],[/\bface pull\b/gi,'тяга каната к лицу'],[/\bstraight arm pulldown\b/gi,'тяга верхнего блока прямыми руками'],[/\bpullover\b/gi,'пуловер'],[/\brear delt\b/gi,'задняя дельта'],[/\bpec deck\b/gi,'сведение рук в тренажёре'],
  [/\bfront squat\b/gi,'фронтальные приседания'],[/\bgoblet squat\b/gi,'гоблет-приседания'],[/\bsplit squat\b/gi,'сплит-приседания'],[/\bbulgarian split squat\b/gi,'болгарские выпады'],[/\bstep up\b/gi,'зашагивания на платформу'],[/\bwalking lunge\b/gi,'выпады в ходьбе'],[/\breverse lunge\b/gi,'выпады назад'],[/\bside lunge\b/gi,'боковые выпады'],
  [/\bhip abduction\b/gi,'отведение бедра'],[/\bhip adduction\b/gi,'приведение бедра'],[/\bkickback\b/gi,'отведение ноги назад'],[/\bcalf press\b/gi,'жим носками'],[/\bseated calf raise\b/gi,'подъёмы на носки сидя'],[/\bstanding calf raise\b/gi,'подъёмы на носки стоя'],
  [/\bpreacher curl\b/gi,'сгибание рук на скамье Скотта'],[/\bconcentration curl\b/gi,'концентрированные сгибания'],[/\bhammer curl\b/gi,'молотковые сгибания'],[/\bskull crusher\b/gi,'французский жим лёжа'],[/\boverhead triceps extension\b/gi,'разгибание рук из-за головы'],[/\btriceps dip\b/gi,'отжимания на брусьях на трицепс'],
  [/\bhanging leg raise\b/gi,'подъём ног в висе'],[/\bleg raise\b/gi,'подъём ног'],[/\brussian twist\b/gi,'русские скручивания'],[/\bside plank\b/gi,'боковая планка'],[/\bdead bug\b/gi,'«Мёртвый жук»'],[/\bbird dog\b/gi,'«Птица-собака»'],
  [/\bfarmer.?s walk\b/gi,'фермерская прогулка'],[/\bwalking\b/gi,'ходьба'],[/\brunning\b/gi,'бег'],[/\bsprint\b/gi,'спринт'],[/\bjump rope\b/gi,'прыжки на скакалке'],[/\bhigh knees\b/gi,'бег с высоким подниманием коленей'],[/\bburpee\b/gi,'бёрпи']
];
const V7_SINGLE = {
  'lat':'широчайших','over':'над','under':'под','rear':'задний','front':'передний','side':'боковой','upper':'верхний','lower':'нижний','horizontal':'горизонтальная','vertical':'вертикальная',
  'rope':'канатом','handle':'рукоятью','bar':'грифом','bench':'скамье','floor':'пола','kneeling':'на коленях','supported':'с опорой','assisted':'с поддержкой','alternating':'попеременный','alternatingly':'попеременно',
  'raise':'подъём','raises':'подъёмы','press':'жим','pull':'тяга','push':'жим','extension':'разгибание','curl':'сгибание','rotation':'вращение','twist':'повороты','fly':'сведение','row':'тяга','squat':'приседания','lunge':'выпады','jump':'прыжок','walk':'ходьба','stretch':'растяжка','drill':'упражнение'
};
function ruExerciseName(raw){
  const original=String(raw||'').trim(); if(!original) return 'Упражнение'; if(V6_EXACT[original]) return V6_EXACT[original];
  let out=original; for(const [re,to] of [...V7_WORDS,...V6_PHRASES]) out=out.replace(re,to); out=out.replace(/\((male|female)\)/gi,'').replace(/\s+/g,' ').trim();
  out=out.split(/(\s+|[-/])/).map(tok=>{const k=tok.toLowerCase();return V7_SINGLE[k]||tok}).join('').replace(/\s+/g,' ').trim();
  if(/[A-Za-z]{3,}/.test(out)){
    // Avoid half-English labels in the UI: keep a readable Russian category if terminology is unknown.
    const base=inferMuscle({},original); const eq=inferEquipment({},original); return `${base}: упражнение${eq&&eq!=='Другое'?' ('+eq.toLowerCase()+')':''}`;
  }
  return out.charAt(0).toUpperCase()+out.slice(1);
}
function lyftaGifCandidates(url){
  const u=String(url||''); if(!u)return [];
  const noSmall=u.replace(/_small(?=\.png(?:$|\?))/i,'');
  const base=noSmall.replace('/GymvisualPNG/','/GymvisualGIF/');
  return [...new Set([
    base.replace(/\.png(?:$|\?)/i,'.gif'),
    u.replace('/GymvisualPNG/','/GymvisualGIF/').replace(/_small\.png(?:$|\?)/i,'.gif'),
    noSmall.replace(/\.png(?:$|\?)/i,'.gif')
  ])];
}
function normalizeLyfta(raw,index){
  const original=textish(pick(raw,['name','exercise_name','excercise_name','title']))||`Exercise ${index+1}`;
  const targetIds=parseIdList(raw.Target_muscles_id), secondaryIds=parseIdList(raw.Synergist_muscles_id), bodyIds=parseIdList(raw.body_part_id), equipmentIds=parseIdList(raw.equipment_id);
  const name=ruExerciseName(original),muscle=groupFromTargets(targetIds,bodyIds,original),equipment=equipmentIds.map(i=>LYFTA_EQUIPMENT_RU[i]).filter(Boolean).join(', ')||'Другое';
  const image=resolveMedia(raw,'');
  return {id:'lyfta-'+String(pick(raw,['id','exercise_id','uuid','slug'])??index),lyftaId:String(pick(raw,['id','exercise_id','uuid','slug'])??''),name,originalName:original,muscle,equipment,
    bodyParts:bodyIds.map(i=>LYFTA_BODY_RU[i]).filter(Boolean),targetMuscles:targetIds.map(i=>LYFTA_MUSCLE_RU[i]).filter(Boolean),secondary:secondaryIds.map(i=>LYFTA_MUSCLE_RU[i]).filter(Boolean),
    type:raw.exercise_type==='duration'?'По времени':raw.exercise_type==='weight_reps'?'Вес × повторения':'Повторения',difficulty:'Не указано',mechanics:'Не указано',
    media:image||'',mediaLarge:highResLyfta(image)||image,videoCandidates:lyftaGifCandidates(image),video:'',instructions:[],source:'Lyfta'};
}
function imgTag(e,cls='',detail=false){const src=detail?(e.mediaLarge||e.media):e.media;return `<img class="${cls}" src="${esc(src)}" alt="${esc(e.name)}" loading="lazy" onerror="this.onerror=null;this.style.opacity='.18'">`}
function exCard(e){return `<article class="exercise-card"><button class="card-favorite ${e.favorite?'on':''}" data-card-favorite="${e.id}" aria-label="Избранное">${e.favorite?'★':'☆'}</button><button class="card-main" data-ex="${e.id}"><div class="card-media">${imgTag(e)}</div><div class="card-copy"><h3>${esc(e.name)}${e.custom?'<span class="badge">Моё</span>':''}</h3><p>${esc(e.muscle)} · ${esc(e.equipment)}</p></div><span class="ios-chevron">›</span></button></article>`}

function exerciseDetail(e){
  const logs=exerciseLogsFor(e.id),latest=logs[0],gif=(e.videoCandidates||[])[0]||'';
  const secondary=e.secondary?.length?`<div class="secondary-muscles">${e.secondary.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`:`<p class="empty-secondary">Дополнительные мышцы не указаны для этого упражнения.</p>`;
  return `<div class="page detail-page">${backHead(e.name,e.muscle,`<button class="icon-btn ${e.favorite?'on':''}" data-favorite="${e.id}">${e.favorite?'★':'☆'}</button>`)}<div class="tabs"><button class="${state.detailTab==='about'?'on':''}" data-detail-tab="about">Описание</button><button class="${state.detailTab==='history'?'on':''}" data-detail-tab="history">История</button><button class="${state.detailTab==='progress'?'on':''}" data-detail-tab="progress">Прогресс</button></div>${state.detailTab==='about'?`<div class="media-card">${imgTag(e,'',true)}<button class="media-toggle" data-toggle-media data-photo="${esc(e.mediaLarge||e.media)}" data-candidates='${esc(JSON.stringify(e.videoCandidates||[]))}' data-mode="photo">▶ Анимация</button></div><div class="info-grid"><div><span>Основная группа</span><strong>${esc(e.muscle)}</strong></div><div><span>Оборудование</span><strong>${esc(e.equipment)}</strong></div></div><h3 class="section-title">Основные мышцы</h3><div class="secondary-muscles">${(e.targetMuscles?.length?e.targetMuscles:[e.muscle]).map(x=>`<span>${esc(x)}</span>`).join('')}</div><h3 class="section-title">Дополнительно работают</h3>${secondary}<h3 class="section-title">Техника выполнения</h3>${e.instructions?.length?`<ol class="steps">${e.instructions.map((x,i)=>`<li><span>${i+1}</span><p>${esc(x)}</p></li>`).join('')}</ol>`:'<div class="empty">Подробная техника для этого упражнения пока не добавлена.</div>'}<button class="ios-secondary full" data-log-result="${e.id}">${latest?'Изменить / добавить результат':'Записать прошлый результат'}</button><button class="ios-primary full" data-add-ex-to-workout="${e.id}">＋ Добавить в тренировку</button>`:state.detailTab==='history'?`<h3 class="section-title">История результатов</h3>${logs.length?logs.map(x=>`<div class="history-card"><div><button class="text-danger" data-delete-log="${x.id}">Удалить</button><div><h3>${esc(prettyLog(x))}</h3><span>${esc(x.date)}</span></div></div></div>`).join(''):'<div class="empty">Истории пока нет.</div>'}`:`<div class="progress-hero"><span>ПОСЛЕДНИЙ РЕЗУЛЬТАТ</span><strong>${latest?esc(prettyLog(latest)):'—'}</strong><p>${latest?esc(latest.date):'Добавь первый результат'}</p></div>`}</div>`;
}

function workoutDetail(w){return `<div class="page">${backHead(w.name,`${w.exercises.length} упражнений`,`<button class="icon-btn" data-edit-workout="${w.id}" aria-label="Редактировать">⋯</button>`)}<button class="ios-primary full" data-start="${w.id}">▶ Начать тренировку</button><h3 class="section-title">Упражнения и последние результаты</h3>${w.exercises.map(id=>{const e=state.exercises.find(x=>x.id===id);if(!e)return'';const last=latestExerciseLog(id)||{};return `<section class="workout-preview-card"><div class="workout-preview-head">${imgTag(e)}<div><h3>${esc(e.name)}</h3><p>${esc(e.muscle)} · ${esc(e.equipment)}</p></div><button class="icon-btn" data-ex="${e.id}" aria-label="Описание">›</button></div><div class="workout-preview-grid"><div><label>ДАТА</label><input type="date" data-preview-date="${e.id}" value="${esc(last.date||'')}"></div><div><label>КГ</label><input inputmode="decimal" data-preview-kg="${e.id}" value="${esc(last.kg??'')}"></div><div><label>ПОВТ.</label><input inputmode="numeric" data-preview-reps="${e.id}" value="${esc(last.reps??'')}"></div></div><div class="small-date">${last.date?`Последний результат: ${esc(prettyLog(last))}`:'Результат ещё не записан'}</div><button class="ios-secondary full" data-save-preview="${e.id}">Сохранить результат</button></section>`}).join('')}<button class="ios-secondary full" data-edit-workout="${w.id}">Изменить тренировку</button><button class="danger-button" data-delete-workout="${w.id}">Удалить тренировку</button></div>`}

function builder(){let b=state.builder;return `<div class="page builder">${backHead(b._new?'Новая тренировка':'Редактирование','',`<button class="save-text" data-save-builder>Готово</button>`)}<label class="field-label">Название</label><input id="workout-name" class="big-input" value="${esc(b.name)}" placeholder="Например, Ноги и ягодицы"><div class="builder-section-head"><h3>Упражнения</h3><span>${b.exercises.length}</span></div>${b.exercises.length?`<div class="stack sortable-builder">${b.exercises.map((id,i)=>{let e=state.exercises.find(x=>x.id===id);let last=e?latestExerciseLog(e.id):null;return `<div class="builder-row ios-builder-row ${state.reorderedIndex===i?'just-moved':''}" data-builder-index="${i}"><button class="drag-handle" data-drag-index="${i}" aria-label="Перетащить">≡</button>${e?imgTag(e):''}<div><strong>${esc(e?.name||'Упражнение')}</strong><span>${last?`${esc(prettyLog(last))} · ${esc(last.date)}`:esc(e?.muscle||'')}</span></div><button class="remove-circle" data-remove-builder="${i}" aria-label="Удалить">−</button></div>`}).join('')}</div><p class="drag-hint">Зажми ≡ и перетащи. После перемещения строка подсветится.</p>`:'<div class="empty">Добавь первое упражнение.</div>'}<button class="ios-secondary full" data-open-picker>＋ Добавить упражнение</button></div>`}

function pickerRows(q=''){
  const sel=new Set(state.pickerSelected||[]); const query=q.toLowerCase();
  return state.exercises.filter(e=>!query||(e.name+' '+e.originalName+' '+e.muscle+' '+e.equipment).toLowerCase().includes(query)).slice(0,350).map(e=>`<div class="picker-row"><button class="picker-radio ${sel.has(e.id)?'on':''}" data-picker-toggle="${e.id}" aria-label="Выбрать"></button>${imgTag(e)}<div data-picker-open="${e.id}"><h3>${esc(e.name)}</h3><p>${esc(e.muscle)} · ${esc(e.equipment)}</p></div><button class="picker-open" data-picker-open="${e.id}" aria-label="Описание">›</button></div>`).join('');
}
const v7OldSheet=sheet;
sheet=function(){
  if(state.sheet==='picker'||state.sheet==='active-picker')return `<div class="sheet-backdrop" data-dismiss-sheet><div class="sheet picker-sheet" data-sheet-body><div class="sheet-grab"></div><div class="sheet-title"><h2>${state.sheet==='active-picker'?'Добавить упражнения':'Добавить упражнения'}</h2><button data-close-sheet>×</button></div><div class="searchbox"><b>⌕</b><input id="picker-search" placeholder="Поиск по каталогу"></div><div id="picker-list" class="picker-list">${pickerRows('')}</div><div class="picker-footer"><button class="ghost dark" data-close-sheet>Отмена</button><button class="primary dark" data-picker-confirm>Добавить (${(state.pickerSelected||[]).length})</button></div></div></div>`;
  return v7OldSheet();
}

const v7OldGlobalBack=globalBack;
globalBack=function(){if(state.selectedExercise&&state.returnToPicker){state.selectedExercise=null;state.returnToPicker=false;state.sheet=state.pickerContext||'picker';render();return}v7OldGlobalBack()}

const v7OldBind=bind;
bind=function(){
  v7OldBind();
  $$('[data-ex]').forEach(x=>x.onclick=()=>{state.selectedExercise=state.exercises.find(e=>e.id===x.dataset.ex);state.detailTab='about';render();requestAnimationFrame(()=>window.scrollTo({top:0,behavior:'instant'}))});
  $$('[data-remove-builder]').forEach(x=>x.onclick=()=>{if(confirm('Удалить это упражнение из тренировки?')){state.builder.exercises.splice(+x.dataset.removeBuilder,1);render()}});
  $$('[data-delete-log]').forEach(x=>x.onclick=()=>{if(confirm('Удалить этот результат?')){state.exerciseLogs=state.exerciseLogs.filter(l=>l.id!==x.dataset.deleteLog);render()}});
  $$('[data-remove-active]').forEach(x=>x.onclick=()=>{if(confirm('Удалить это упражнение из текущей тренировки?')){state.active.items.splice(+x.dataset.removeActive,1);state.sheet=null;render()}});
  $$('[data-drag-index]').forEach(handle=>{let start=null;handle.onpointerdown=e=>{start=+handle.dataset.dragIndex;handle.setPointerCapture?.(e.pointerId);handle.closest('.builder-row')?.classList.add('dragging')};handle.onpointermove=e=>{$$('.builder-row').forEach(r=>r.classList.remove('drag-target'));document.elementFromPoint(e.clientX,e.clientY)?.closest?.('[data-builder-index]')?.classList.add('drag-target')};handle.onpointerup=e=>{const row=document.elementFromPoint(e.clientX,e.clientY)?.closest?.('[data-builder-index]');$$('.builder-row').forEach(r=>r.classList.remove('drag-target','dragging'));if(start!=null&&row){const end=+row.dataset.builderIndex;if(end!==start){const [id]=state.builder.exercises.splice(start,1);state.builder.exercises.splice(end,0,id);state.reorderedIndex=end;render();setTimeout(()=>state.reorderedIndex=null,700)}}start=null}});
  $('[data-toggle-media]')?.addEventListener('click',async e=>{const img=$('.media-card img');const btn=e.currentTarget;const photo=btn.dataset.photo;let candidates=[];try{candidates=JSON.parse(btn.dataset.candidates||'[]')}catch{};if(btn.dataset.mode==='gif'){img.src=photo;btn.dataset.mode='photo';btn.textContent='▶ Анимация';return}let i=0;const tryNext=()=>{if(i>=candidates.length){img.onerror=null;img.src=photo;alert('Для этого упражнения анимация недоступна.');return}img.onerror=()=>{i++;tryNext()};img.onload=()=>{img.onerror=null;btn.dataset.mode='gif';btn.textContent='▣ Фото'};img.src=candidates[i]};tryNext()});
  $$('[data-save-preview]').forEach(x=>x.onclick=()=>{const id=x.dataset.savePreview;const kg=parseFloat($(`[data-preview-kg="${id}"]`)?.value||0),reps=parseInt($(`[data-preview-reps="${id}"]`)?.value||0),date=$(`[data-preview-date="${id}"]`)?.value||new Date().toISOString().slice(0,10);if(!kg&&!reps)return alert('Укажи вес или повторения');state.exerciseLogs.unshift({id:'l'+Date.now(),exerciseId:id,date,kg,reps,sets:1,source:'manual'});render()});
  $('[data-open-picker]')?.addEventListener('click',()=>{state.pickerSelected=[];state.pickerContext='picker';state.sheet='picker';render()});
  $('[data-add-active-ex]')?.addEventListener('click',()=>{state.pickerSelected=[];state.pickerContext='active-picker';state.sheet='active-picker';render()});
  bindPicker();
}

bindPicker=function(){
  const refresh=()=>{const q=$('#picker-search')?.value||'';const list=$('#picker-list');if(list)list.innerHTML=pickerRows(q);bindPickerRows();const b=$('[data-picker-confirm]');if(b)b.textContent=`Добавить (${(state.pickerSelected||[]).length})`};
  const bindPickerRows=()=>{
    $$('[data-picker-toggle]').forEach(x=>x.onclick=()=>{const id=x.dataset.pickerToggle,a=state.pickerSelected||[];const i=a.indexOf(id);i>=0?a.splice(i,1):a.push(id);refresh()});
    $$('[data-picker-open]').forEach(x=>x.onclick=()=>{state.returnToPicker=true;state.pickerContext=state.sheet;state.selectedExercise=state.exercises.find(e=>e.id===x.dataset.pickerOpen);state.sheet=null;state.detailTab='about';render();requestAnimationFrame(()=>window.scrollTo({top:0,behavior:'instant'}))});
  };
  bindPickerRows(); const ps=$('#picker-search');if(ps)ps.oninput=refresh;
  $('[data-picker-confirm]')?.addEventListener('click',()=>{const ids=[...(state.pickerSelected||[])];if(!ids.length)return; if(state.pickerContext==='active-picker'){for(const id of ids){const ex=state.exercises.find(e=>e.id===id);if(ex)state.active.items.push({exercise:ex,previous:latestExerciseLog(id),sets:[{kg:'',reps:'',done:false},{kg:'',reps:'',done:false},{kg:'',reps:'',done:false}]})}}else{for(const id of ids)if(!state.builder.exercises.includes(id))state.builder.exercises.push(id)}state.pickerSelected=[];state.sheet=null;render()});
}

// Remove old demo content once real Lyfta data is available.
function cleanupWorkouts(){const ids=new Set(state.exercises.map(e=>e.id));state.workouts=state.workouts.filter(w=>w.id!=='glutes').map(w=>({...w,exercises:(w.exercises||[]).filter(id=>ids.has(id))}))}

// ===== Trainly v8: reliable exercise media, native round selectors, simple result history =====
state.logDraftRows = state.logDraftRows || [];

function v8SafeExerciseImage(e, cls='') {
  // Use the exact image returned by Lyfta. Do not invent a high-resolution URL.
  const src = e?.media || '';
  return `<img class="${cls}" src="${esc(src)}" alt="${esc(e?.name||'Упражнение')}" loading="lazy" onerror="this.onerror=null;this.closest('.exercise-photo-frame')?.classList.add('media-failed');this.style.display='none'">`;
}

function v8ResultRowsHtml(){
  const rows = state.logDraftRows?.length ? state.logDraftRows : [{id:'draft-'+Date.now(),date:new Date().toISOString().slice(0,10),kg:'',reps:''}];
  state.logDraftRows = rows;
  return rows.map((r,i)=>`<div class="result-entry" data-result-row="${i}">
    <div class="result-entry-top"><strong>${i===0?'Результат':'Ещё один результат'}</strong>${rows.length>1?`<button class="remove-result-row" data-remove-result-row="${i}" aria-label="Удалить результат">−</button>`:''}</div>
    <label>Дата<input type="date" data-log-row-date="${i}" value="${esc(r.date||'')}"></label>
    <div class="result-values">
      <label>Вес, кг<input inputmode="decimal" type="text" data-log-row-kg="${i}" value="${esc(r.kg??'')}" placeholder="60"></label>
      <label>Повторения<input inputmode="numeric" type="text" data-log-row-reps="${i}" value="${esc(r.reps??'')}" placeholder="10"></label>
    </div>
  </div>`).join('');
}

const v8PrevSheet = sheet;
sheet = function(){
  if(state.sheet==='manual-log'){
    const e=state.exercises.find(x=>x.id===state.logExerciseId);
    if(!state.logDraftRows?.length) state.logDraftRows=[{id:'draft-'+Date.now(),date:new Date().toISOString().slice(0,10),kg:'',reps:''}];
    return `<div class="sheet-backdrop" data-dismiss-sheet><div class="sheet result-sheet" data-sheet-body>
      <div class="sheet-grab"></div>
      <div class="sheet-title"><div><h2>Добавить результат</h2><p>${esc(e?.name||'')}</p></div><button data-close-sheet>×</button></div>
      <p class="result-help">Добавь один или несколько прошлых результатов. Для каждого укажи дату, вес и повторения.</p>
      <div id="result-rows">${v8ResultRowsHtml()}</div>
      <button class="add-result-row" data-add-result-row>＋ Добавить ещё дату</button>
      <button class="ios-primary full" data-save-result-history>Сохранить</button>
    </div></div>`;
  }
  return v8PrevSheet();
};

exerciseDetail = function(e){
  const logs=exerciseLogsFor(e.id), latest=logs[0];
  const secondary=e.secondary?.length?`<div class="secondary-muscles">${e.secondary.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`:`<p class="empty-secondary">Для этого упражнения дополнительные мышцы не указаны.</p>`;
  const candidates=esc(JSON.stringify(e.videoCandidates||[]));
  return `<div class="page detail-page">${backHead(e.name,e.muscle,`<button class="icon-btn ${e.favorite?'on':''}" data-favorite="${e.id}">${e.favorite?'★':'☆'}</button>`)}
    <div class="tabs"><button class="${state.detailTab==='about'?'on':''}" data-detail-tab="about">Описание</button><button class="${state.detailTab==='history'?'on':''}" data-detail-tab="history">История</button><button class="${state.detailTab==='progress'?'on':''}" data-detail-tab="progress">Прогресс</button></div>
    ${state.detailTab==='about'?`<div class="media-card exercise-photo-frame">${v8SafeExerciseImage(e)}<div class="media-placeholder"><span>Изображение недоступно</span></div><button class="media-toggle media-probe" data-media-probe data-photo="${esc(e.media||'')}" data-candidates='${candidates}' hidden>▶ Анимация</button></div>
    <div class="info-grid"><div><span>Основная группа</span><strong>${esc(e.muscle)}</strong></div><div><span>Оборудование</span><strong>${esc(e.equipment)}</strong></div></div>
    <h3 class="section-title">Основные мышцы</h3><div class="secondary-muscles">${(e.targetMuscles?.length?e.targetMuscles:[e.muscle]).map(x=>`<span>${esc(x)}</span>`).join('')}</div>
    <h3 class="section-title">Дополнительно работают</h3>${secondary}
    <button class="ios-secondary full" data-log-result="${e.id}">${latest?'Добавить ещё результат':'Добавить прошлый результат'}</button>
    <button class="ios-primary full" data-add-ex-to-workout="${e.id}">＋ Добавить в тренировку</button>`:
    state.detailTab==='history'?`<h3 class="section-title">История результатов</h3>${logs.length?logs.map(x=>`<div class="history-card"><div><button class="text-danger" data-delete-log="${x.id}">Удалить</button><div><h3>${esc(prettyLog(x))}</h3><span>${esc(x.date)}</span></div></div></div>`).join(''):'<div class="empty">Истории пока нет.</div>'}`:
    `<div class="progress-hero"><span>ПОСЛЕДНИЙ РЕЗУЛЬТАТ</span><strong>${latest?esc(prettyLog(latest)):'—'}</strong><p>${latest?esc(latest.date):'Добавь первый результат'}</p></div>`}
  </div>`;
};

workoutDetail = function(w){
  return `<div class="page">${backHead(w.name,`${w.exercises.length} упражнений`,`<button class="icon-btn" data-edit-workout="${w.id}" aria-label="Редактировать">⋯</button>`)}
    <button class="ios-primary full" data-start="${w.id}">▶ Начать тренировку</button>
    <h3 class="section-title">Упражнения</h3>
    <p class="section-help">Сразу видно последний результат. Нажми «＋», чтобы добавить новую дату, вес и повторения без запуска тренировки.</p>
    ${w.exercises.map(id=>{const e=state.exercises.find(x=>x.id===id);if(!e)return'';const last=latestExerciseLog(id);return `<section class="workout-preview-card"><div class="workout-preview-head">${v8SafeExerciseImage(e)}<div><h3>${esc(e.name)}</h3><p>${esc(e.muscle)} · ${esc(e.equipment)}</p></div><button class="icon-btn" data-ex="${e.id}" aria-label="Описание">›</button></div><div class="last-result-line">${last?`<div><span>${esc(last.date)}</span><strong>${esc(prettyLog(last))}</strong></div>`:'<span>Результатов ещё нет</span>'}<button class="add-inline-result" data-log-result="${e.id}" aria-label="Добавить результат">＋</button></div></section>`}).join('')}
    <button class="ios-secondary full" data-edit-workout="${w.id}">Изменить тренировку</button>
    <button class="danger-button" data-delete-workout="${w.id}">Удалить тренировку</button>
  </div>`;
};

// Preserve picker behavior but enforce a true circular selector.
const v8OldPickerRows = pickerRows;
pickerRows = function(q=''){
  const sel=new Set(state.pickerSelected||[]), query=q.toLowerCase();
  return state.exercises.filter(e=>!query||(e.name+' '+(e.originalName||'')+' '+e.muscle+' '+e.equipment).toLowerCase().includes(query)).slice(0,350).map(e=>`<div class="picker-row"><button type="button" class="picker-radio ${sel.has(e.id)?'on':''}" data-picker-toggle="${e.id}" aria-label="${sel.has(e.id)?'Убрать выбор':'Выбрать'}"><span></span></button>${v8SafeExerciseImage(e)}<div data-picker-open="${e.id}"><h3>${esc(e.name)}</h3><p>${esc(e.muscle)} · ${esc(e.equipment)}</p></div><button class="picker-open" data-picker-open="${e.id}" aria-label="Описание">›</button></div>`).join('');
};

const v8PrevBind = bind;
bind = function(){
  v8PrevBind();

  // Start every manual history flow with a clean row.
  $$('[data-log-result]').forEach(btn=>btn.addEventListener('click',()=>{
    state.logDraftRows=[{id:'draft-'+Date.now(),date:new Date().toISOString().slice(0,10),kg:'',reps:''}];
  },{once:true}));

  $('[data-add-result-row]')?.addEventListener('click',()=>{
    // sync current values before adding a row
    state.logDraftRows=(state.logDraftRows||[]).map((r,i)=>({...r,date:$(`[data-log-row-date="${i}"]`)?.value||r.date,kg:$(`[data-log-row-kg="${i}"]`)?.value??r.kg,reps:$(`[data-log-row-reps="${i}"]`)?.value??r.reps}));
    state.logDraftRows.push({id:'draft-'+Date.now(),date:new Date().toISOString().slice(0,10),kg:'',reps:''});
    render();
  });
  $$('[data-remove-result-row]').forEach(btn=>btn.addEventListener('click',()=>{
    const i=+btn.dataset.removeResultRow;
    if(confirm('Удалить этот результат из формы?')){state.logDraftRows.splice(i,1);render()}
  }));
  $('[data-save-result-history]')?.addEventListener('click',()=>{
    const rows=(state.logDraftRows||[]).map((r,i)=>({
      date:$(`[data-log-row-date="${i}"]`)?.value||'',
      kg:parseFloat(String($(`[data-log-row-kg="${i}"]`)?.value||'').replace(',','.'))||0,
      reps:parseInt($(`[data-log-row-reps="${i}"]`)?.value||'0')||0
    })).filter(r=>r.date&&(r.kg||r.reps));
    if(!rows.length){alert('Добавь хотя бы один результат: дату и вес или повторения.');return}
    const now=Date.now();
    rows.forEach((r,i)=>state.exerciseLogs.unshift({id:'l'+now+'-'+i,exerciseId:state.logExerciseId,date:r.date,kg:r.kg,reps:r.reps,sets:1,source:'manual'}));
    state.logDraftRows=[];state.sheet=null;render();
  });

  // Probe candidate GIFs silently. Show the animation control only if a real image loads.
  const probe=$('[data-media-probe]');
  if(probe){
    let candidates=[];try{candidates=JSON.parse(probe.dataset.candidates||'[]')}catch{}
    const photo=probe.dataset.photo;let idx=0,working='';
    const testNext=()=>{
      if(idx>=candidates.length){probe.hidden=true;return}
      const tester=new Image();const url=candidates[idx++];
      tester.onload=()=>{working=url;probe.hidden=false;probe.dataset.gif=working};
      tester.onerror=testNext;tester.src=url;
    };testNext();
    probe.addEventListener('click',()=>{
      const img=$('.media-card img');if(!img||!probe.dataset.gif)return;
      if(probe.dataset.mode==='gif'){img.src=photo;probe.dataset.mode='photo';probe.textContent='▶ Анимация'}
      else{img.style.display='block';img.src=probe.dataset.gif;probe.dataset.mode='gif';probe.textContent='▣ Фото'}
    });
  }
};
