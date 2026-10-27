export const SIZE=16;
export const BUILDINGS={
 road:{name:'道路',latin:'Via',category:'道路',cost:0,description:'免费铺设。只有四向接入市集广场的道路，才能让城市运转。'},
 casa:{name:'棚屋',latin:'Casa',category:'住宅',cost:30,cap:12,labor:2,food:.12,tax:.12,maint:.02,description:'边境最初的家。12 人口上限，产出 2 劳动力。'},
 domus:{name:'平民民居',latin:'Domus Plebeia',category:'住宅',cost:60,cap:24,labor:5,food:.22,tax:.24,maint:.04,happyUnlock:25,description:'瓦顶下安居。24 人口上限，产出 5 劳动力。'},
 insula:{name:'罗马公寓',latin:'Insula',category:'住宅',cost:120,stone:20,cap:48,labor:10,food:.4,tax:.48,maint:.08,happyUnlock:45,description:'让街区向上生长。48 人口上限，产出 10 劳动力。'},
 patrician:{name:'贵族府邸',latin:'Domus Patriciorum',category:'住宅',cost:250,stone:50,cap:72,labor:12,food:.55,tax:.75,maint:.15,happyUnlock:70,description:'庭院与柱廊。72 人口上限，产出 12 劳动力。'},
 farm:{name:'麦田',latin:'Segetes',category:'产业',cost:40,produce:'food',rate:.8,maint:.03,description:'每秒产粮 0.8，需连通粮仓。首块麦田免于地力衰减。'},
 vegetable:{name:'菜园',latin:'Hortus Olereaeus',category:'产业',cost:20,produce:'food',rate:.3,maint:.02,description:'每秒产粮 0.3，无需休耕，需连通粮仓。'},
 granary:{name:'粮仓',latin:'Granarium',category:'产业',cost:80,storage:500,maint:.02,description:'提供 500 粮食容量。第一座粮仓连通后，农业才开始入库。'},
 workshop:{name:'工坊',latin:'Officina',category:'产业',cost:130,produce:'gold',rate:1.2,workers:3,pollute:3,penalty:.18,maint:.08,description:'每秒产金 1.2，需 3 劳动力。远离住宅以减少烟尘。'},
 quarry:{name:'石矿',latin:'Lapicidina',category:'产业',cost:100,produce:'stone',rate:.35,workers:3,pollute:3,penalty:.15,maint:.06,reserve:700,description:'每秒产石 0.35，需 3 劳动力；矿藏 700。'},
 iron:{name:'铁矿',latin:'Metallum',category:'产业',cost:110,produce:'iron',rate:.25,workers:4,pollute:4,penalty:.22,maint:.08,reserve:600,description:'每秒产铁 0.25，需 4 劳动力；矿藏 600。'},
 well:{name:'水井',latin:'Puteus',category:'公共',cost:50,water:4,waterCap:6,maint:.02,description:'四格内供水，最多覆盖 6 栋住宅。必须接入路网。'},
 fountain:{name:'公共喷泉',latin:'Fons',category:'公共',cost:120,stone:25,water:6,waterCap:10,happy:4,radius:6,maint:.06,popUnlock:105,description:'六格内为 10 栋住宅供水。首座落成，触发罗马时刻。'},
 garden:{name:'罗马花园',latin:'Hortus',category:'公共',cost:70,happy:9,radius:3,maint:.02,description:'三格内幸福 +9，减轻 30% 污染惩罚。'},
 altar:{name:'祭坛',latin:'Ara',category:'公共',cost:60,stone:15,happy:5,radius:3,maint:.02,description:'三格内幸福 +5。第一座祭坛可刻下你的铭文。'},
 bath:{name:'公共浴场',latin:'Balneum',category:'公共',cost:150,stone:30,happy:18,radius:4,maint:.08,popUnlock:90,welfare:true,description:'四格内幸福 +18，福利池不足时效果减半。'},
 watch:{name:'治安岗',latin:'Statio Vigilum',category:'公共',cost:100,stone:20,happy:10,radius:3,maint:.04,popUnlock:90,description:'三格内幸福 +10，为街区带来秩序。'},
 temple:{name:'神庙',latin:'Templum',category:'公共',cost:200,stone:50,happy:22,radius:4,maint:.08,popUnlock:90,welfare:true,description:'四格内幸福 +22；罗马的诸神也在边境安居。'},
 arena:{name:'小型竞技场',latin:'Amphitheatrum Parvum',category:'公共',cost:280,stone:75,happy:26,radius:5,maint:.1,popUnlock:90,welfare:true,description:'五格内幸福 +26。劳作之外，也应有庆典。'},
 trade:{name:'贸易驿站',latin:'Statio Mercatoria',category:'产业',cost:150,stone:20,workers:1,maint:.08,description:'开启交易：每笔最多 20 单位，冷却 30 秒。'},
 tower:{name:'箭塔',latin:'Turris Sagittaria',category:'防务',cost:100,stone:30,iron:25,maint:.1,military:true,description:'射程 4 格，每秒伤害 15。必须接入广场路网。'},
 barracks:{name:'兵营',latin:'Castra Parva',category:'防务',cost:150,stone:50,iron:25,maint:.15,military:true,description:'全体箭塔伤害 +20%，最多叠加至 +80%。'},
 column:{name:'胜利柱',latin:'Columna Victoriae',category:'荣耀',cost:160,stone:45,happy:7,radius:3,maint:.05,winUnlock:1,glory:true,description:'首次击退后解锁。相邻纪念建筑组成纪念区。'},
 arch:{name:'凯旋门',latin:'Arcus Triumphalis',category:'荣耀',cost:600,stone:150,iron:40,happy:16,radius:4,maint:.15,glory:true,description:'人口 360、声望 100、三次击退，忠诚已证且凯旋式筹备完成后建造。'},
 forum:{name:'市集广场',latin:'Forum',category:'公共',cost:0,happy:12,radius:5,maint:.06,description:'行省的心脏。所有有效道路必须连通这里，广场不可拆除。'}
};
export const TAXES=[{name:'宽仁',rate:5,mult:.4,growth:1.2},{name:'常规',rate:12,mult:1,growth:1},{name:'加征',rate:20,mult:1.7,growth:.9},{name:'重税',rate:30,mult:2.5,growth:.75}];
export const MICRO=[{id:'trade',text:'建第一座贸易驿站'},{id:'garden',text:'建第一座花园'},{id:'altar',text:'建第一座祭坛'},{id:'farm',text:'建第一块麦田'},{id:'granary',text:'建第一座粮仓'},{id:'six',text:'建第六座住宅'},{id:'twofarms',text:'建第二块麦田'},{id:'fountain',text:'建第一座公共喷泉'}];
export const EDICTS=[{title:'边境需要守望',text:'总督，河的北岸并不安静。修筑一座接入路网的箭塔，让守夜人有所依凭。',type:'tower',count:1,reward:5},{title:'让人民洗去尘土',text:'一座城不止应当有围墙。请建成一座公共浴场。',type:'bath',count:1,reward:10},{title:'驻军与秩序',text:'为行省修建一座兵营。罗马的和平需要有人守护。',type:'barracks',count:1,reward:10},{title:'石上留名',text:'请修筑一座胜利柱，纪念曾经守住这条边境的人。',type:'column',count:1,reward:10},{title:'诸神在此安居',text:'为行省建一座神庙。让北方的旅人也看见罗马。',type:'temple',count:1,reward:10}];
export const CITIZENS=[{name:'Vibius',job:'鞋匠',line:'路修好了，鞋底倒是磨得慢了。'},{name:'Vedia',job:'运水人',line:'从井边到家，不过百步。'},{name:'Livia',job:'面包师',line:'明早，我还是在这里开炉。'},{name:'Marcus',job:'石匠',line:'一块石头不认得皇帝，却记得凿子。'},{name:'Felix',job:'送信人',line:'他抬起手，向你打了个招呼。'},{name:'Aelia',job:'抄写员',line:'我把今天写在了昨天的背面。'}];
export const CODEX=[['新潘诺尼亚','本作架空行省，以图拉真治世约公元 107 年的多瑙河边境为背景。'],['总督','Legatus Augusti pro praetore，皇帝代理法务官衔总督。女性总督属于本作合理架空。'],['产业税','试玩版按住宅建筑征税，空置住宅也产税。真实罗马税制远比这一模型复杂。'],['多瑙河','约六十年后，马可·奥勒留治下的马可曼尼战争将突破多瑙河防线。你今日所筑之城，将在那时守护罗马。'],['建造与供水','四向道路必须通往广场；水井供水半径 4 格、最多 6 栋。试玩版的范围统一采用曼哈顿距离。']];
