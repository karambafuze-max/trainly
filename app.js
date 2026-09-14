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
function exercises(){const muscles=['Избранное','Кардио','Грудь','Спина','Бицепс','Трицепс','Квадрицепс','Бицепс бедра','Плечи','Ягодицы','Пресс','Икры','Предплечья','Шея','Мои'];let a=state.advanced;let list=state.exercises.filter(e=>{let q=state.query.toLowerCase(),qok=!q||(e.name+' '+e.muscle+' '+e.equipment).toLowerCase().includes(q);let f=state.filter;let fok=f==='Все'||(f==='Мои'&&e.custom)||(f==='Избранное'&&e.favorite)||e.muscle===f||(f==='Кардио'&&e.type==='Кардио');let eq=!a.equipment.length||a.equipment.includes(e.equipment);let ty=!a.types.length||a.types.includes(e.type);let dif=a.difficulty==='Любой'||e.difficulty===a.difficulty;let mech=a.mechanics==='Любая'||e.mechanics===a.mechanics;return qok&&fok&&eq&&ty&&dif&&mech});let count=a.equipment.length+a.types.length+(a.difficulty!=='Любой'?1:0)+(a.mechanics!=='Любая'?1:0);return `<div class="page">${header('Упражнения','<button class="round" data-custom>＋</button>')}<div class="searchbox"><b>⌕</b><input id="search" value="${esc(state.query)}" placeholder="Найти упражнение"><button class="camera" data-open-filters>☷${count?`<i>${count}</i>`:''}</button></div><div class="muscle-scroll"><button class="muscle-tile ${state.filter==='Все'?'on':''}" data-filter="Все"><span>Все</span><small>Все</small></button>${muscles.map(f=>`<button class="muscle-tile ${state.filter===f?'on':''}" data-filter="${f}"><img src="${f==='Мои'?muscleSvg('+','#64748b','torso'):f==='Избранное'?muscleSvg('★','#64748b','torso'):f==='Кардио'?muscleSvg('Кардио','#e11d48','torso'):muscleSvg(f,'#ef4444',muscleKind(f))}"><small>${esc(f)}</small></button>`).join('')}<button class="muscle-tile filter-tile" data-open-filters><img src="${equipmentSvg('Другое')}"><small>Фильтры${count?` (${count})`:''}</small></button></div><div class="catalog-status"><span>${esc(state.catalogStatus)}</span>${state.catalogCount?`<b>${state.catalogCount.toLocaleString('ru-RU')}</b>`:''}</div><div class="results-head"><strong>${list.length} упражнений</strong>${count?'<button data-clear-filters>Сбросить фильтры</button>':''}</div><div class="exercise-list">${list.length?list.map(exRow).join(''):'<div class="empty">Ничего не найдено. Измени фильтры или создай своё упражнение.</div>'}</div></div>`}
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
  $('[data-toggle-media]')?.addEventListener('click',e=>{let img=$('#exercise-media'),ex=state.selectedExercise;if(img.src.startsWith(ex.video.split(',')[0])){img.src=ex.media;e.currentTarget.textContent='▶ Анимация'}else{img.src=ex.video;e.currentTarget.textContent='▣ Фото'}});
  $$('[data-favorite]').forEach(x=>x.onclick=()=>{let e=state.exercises.find(z=>z.id===x.dataset.favorite);e.favorite=!e.favorite;render()});
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
  $('[data-finish]')?.addEventListener('click',()=>{let sets=0,volume=0,exerciseIds=[];state.active.items.forEach(it=>{exerciseIds.push(it.exercise.id);it.sets.forEach(s=>{if(s.done){sets++;volume+=(+s.kg||0)*(+s.reps||0)}})});state.history.unshift({id:state.active.id,name:state.active.name,date:new Intl.DateTimeFormat('ru-RU',{day:'2-digit',month:'short'}).format(new Date()),duration:Math.max(1,Math.floor((Date.now()-state.active.started)/60000)),sets,volume,exerciseIds});state.active=null;state.tab='history';render()});
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
    if (!r.ok || data.status !== true) {
  throw new Error(data.detail || data.error || 'Ошибка API');
}

const remote = (data.data?.results || []).map(normalizeLyfta);; const customs=state.exercises.filter(e=>e.custom); const favs=new Set(JSON.parse(localStorage.getItem('trainly-favorites')||'[]'));
    remote.forEach(e=>{if(favs.has(e.id))e.favorite=true});
    const byId=new Map(); [...customs,...remote,...seeds].forEach(e=>{if(!byId.has(e.id))byId.set(e.id,e)}); state.exercises=[...byId.values()];
    state.catalogCount=remote.length; state.catalogStatus=remote.length?`Каталог Lyfta подключён`:'Lyfta ответила, но упражнения не найдены'; render();
  }catch(err){console.error(err);state.catalogStatus='Не удалось загрузить Lyfta: '+(err?.message||'ошибка');render()}
}
setTimeout(syncLyftaCatalog,0);
