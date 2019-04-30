//  首页 座右铭
const motto = '成事在心，心正则事正';
// 首页 个人日记
const articles = [{
  date: '今日',
  ats: [{
    id: 10001,
    image_url: 'https://images.kuan1.cn/kuan1/upload/image/20190429/20190429113618_79040.jpg',
    title: '我想有个小书房，喝茶读书日月长',
    digest: `在这个时代，庞杂的信息、纷扰的俗事、错杂的人际，无一不在蚕食我们内心最后一点宁静。
    每当此时，我总想有间小书房，可以治愈疲惫身心，安放灵魂，度过悠长的岁月。
    这书房窗明几净，是生活的别处，流淌着温柔的时光。`,
    like: 1,
    visible: 1
  }]
}, {
  date: '昨日',
  ats: [{
    id: 10002,
    image_url: 'https://images.kuan1.cn/kuan1/upload/image/20190429/20190429113846_61902.jpg',
    title: '小院，小生活',
    digest: `林语堂说，他梦中的院子是“宅中有园，园中有屋，屋中有院，院中有树，树上见天，天中有月！”`,
    like: 1,
    visible: 0
  }]
}, {
  date: '2019.4.27',
  ats: [{
    id: 10003,
    image_url: 'https://images.kuan1.cn/kuan1/upload/image/20190429/20190429114304_42905.jpg',
    title: '有遗憾，爱情才完美',
    digest: `随缘去吧…`,
    like: 1,
    visible: 1
  }]
}, {
  date: '2019.4.26',
  ats: [{
    id: 10004,
    image_url: 'https://images.kuan1.cn/kuan1/upload/image/20190429/20190429114444_30106.jpg',
    title: '所有的相遇，都是命中注定',
    digest: `张爱玲曾说：于千万人之中遇见你所要遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，刚巧赶上了，那也没有别的话可说，惟有轻轻的问一声：“噢，你也在这里吗？”`,
    like: 1,
    visible: 1
  }, {
    id: 10005,
    image_url: 'https://images.kuan1.cn/kuan1/upload/image/20190429/20190429114701_15249.jpg',
    title: '成年人的懂事，从不敢麻烦别人开始',
    digest: `大概，成年人的懂事，就是从不敢麻烦别人开始的吧。`,
    like: 1,
    visible: 0
  }]
}]
// 合并首页数据
const home = {
  articles,
  motto
}

// 全部文章数据
const allAct = {
  10001: {
    date: '今日',
    author: '物道',
    image_url: 'https://images.kuan1.cn/kuan1/upload/image/20190429/20190429113618_79040.jpg',
    title: '我想有个小书房，喝茶读书日月长',
    content: `在这个时代，庞杂的信息、纷扰的俗事、错杂的人际，无一不在蚕食我们内心最后一点宁静。

每当此时，我总想有间小书房，可以治愈疲惫身心，安放灵魂，度过悠长的岁月。
这书房窗明几净，是生活的别处，流淌着温柔的时光。

愿你也有这个小书房，喝茶读书日月长。

图片｜Andy-xh ©

10岁

童年，我想要的书房，是个旧房子，装着一个新奇的世界。

这个书房，虽然有旧书陈旧的味道，但对一个小孩来说，所有的一切都是新的。

书里的插画是新的。那里有他没见过的神奇，那远古的恐龙，神秘的野人甚至浩瀚的宇宙。

墙上的地图是新的。当他指指点点时，尚需父亲抱起来告诉他：这片黄色的是撒哈拉沙漠，那里有骆驼；那片蓝色的是太平洋，我们的家就在这边边上。

图片｜股道行知 ©

书房还有个老旧的凳子，一放学就在那写作业，凳子比他个头矮一点，刻满了“名言”，贴满了纸画。凳子在哪里，书房就在哪里。

夜幕时，万籁无声，明月半挂，风吹叶动，树影斑驳，这书房就是一个新世界。

书房是童年远方的摇篮，我们从里面看到宇宙，从里面看到未来。

图片｜ohn0 ©

25岁

青年，我想要的书房，是个有知己谈笑的陋室，里面装满理想。

因为青年人大概是没钱买大书房的。

那就简单点，像周云蓬说的：

“一个小竹楼，简单、平易、朴实。内里只有两个书架，一个书桌子，两张椅子。”

也可以像刘禹锡的书房，虽然苔痕上阶绿，草色入帘青。但是谈笑有鸿儒，往来无白丁。

图片｜淡定Lee ©

昏昏灯火下，几个独立精神的年轻人，几杯清酒。在微醺中深聊至深夜，谩骂纷扰的世态，聊着珍贵的理想。

我们朋友很多，但只有志同道合的人才会被请入书房。

有些人，我们与他们在酒桌上交易，有些人，我们与他们在书房交心。

我想有这样的书房，我也想有这样纯粹的朋友。

图片｜来源于网络

45岁

中年，我想要的书房，是个治愈的场所，装满我的柔软与闲情。

北岛说过：“书房不仅是秘密空间，几乎就是我的精神住所。”

这样的地方宛如一片净土。我们在这里读书喝茶，静静听着这个世界的脉搏。

中年人外表披着铠甲，内心却是软的，只有在书房中，他可以不思考工作，放下社会责任。他可以读年少时最爱的武侠小说，玩最近流行的游戏，可以看想看很久的电影。

图片｜来源于网络

书房，抚慰了他柔软的心。在这里，时间暂停了，俗事清明了，卸下你的面具，任凭躺着，趴着，坐着.....

一个人的书房，也一样热闹。

伏案闲读书一卷，随心沉吟诗三百，独享人间清欢，世界与我无关。

偷得浮生半日闲，大隐隐于市，便是书房最好的治愈。

图片｜来源于网络

65岁

老年，我想有一个书房，它将是我生命的最后居所，包容我所有的过往。

李承鹏说：“每个文人要走过很多寒冷的路，书房才是一生的暖箱。”

我想起丰子恺先生的书房“日月楼”，是他颠沛流离一生后，最后安稳的居所。那件书房豁然洞明，日间能看朝日，夜里可望星汉，所以丰子恺起名“日月楼”。

日月楼很简单，一张老旧的藤椅，一盏老式吊灯，不太整齐的文房笔墨和一张小小的单人床。


他在这温暖的小书房里度过了最后时光。他读书画画，与女儿一起翻译外国名著，岁月慢慢地流转着，平静安稳，像极了缓缓淌过的溪流，

就如书房对联所写：“日月楼中日月长，星汉界里星汉转。”

愿你晚年到来之时，也有一间这样的书房，当作生命最后的温床。


朱光潜说：

“我在书房听见雨落下来，风卷起的声音，这个记忆比读许多秋天意境的诗更为生动，深刻。”

你看这小小的屋子多奇妙，能看到平日感受不到的东西。

在这个生活的别处，我们读着古今万卷，看一窗昏晓；我们看见世界，看见知交，看见我们过去的回忆。

世间原无天堂，书房就是心中天堂。
`,
    motto: '我想有个小书房，喝茶读书日月长。',
    like: 1,
    visible: 1,
    id: 10001,
    digest: `在这个时代，庞杂的信息、纷扰的俗事、错杂的人际，无一不在蚕食我们内心最后一点宁静。
    每当此时，我总想有间小书房，可以治愈疲惫身心，安放灵魂，度过悠长的岁月。
    这书房窗明几净，是生活的别处，流淌着温柔的时光。`,
  },
  10002: {
    id: 10002,
    date: '昨日',
    author: '物道',
    image_url: 'https://images.kuan1.cn/kuan1/upload/image/20190429/20190429113846_61902.jpg',
    title: '小院，小生活',
    digest: `林语堂说，他梦中的院子是“宅中有园，园中有屋，屋中有院，院中有树，树上见天，天中有月！”`,
    content: `林语堂说，他梦中的院子是“宅中有园，园中有屋，屋中有院，院中有树，树上见天，天中有月！”

这或许也是我们每个人梦中的院子，但在城市里居大尚且不易，更何况是一个院子呢？

可是，为什么我们还是无法拒绝它？

有人说，因为院子让人放松、享受，有独处的欢乐，它像一个“存在”，告诉了“我们是谁”，告诉了我们生活美好的样子。

小院，小生活

建筑师中村好文说，我们生活的房子不管是大是小，只要家里有一片能让人舒服的地方，哪怕是1㎡的小角落，都是你的“居心地”。

而中国人的院子，恰恰是居身亦居心。

图片｜EasonLiu ©

有小院，就有了季节感

曾看过一本书，一个叫芭布丝的女孩，和朋友搬到在城区一个特别嘈杂的房子居住，但令她高兴的是，卧室另一扇门外是邻居废弃的屋顶。


春暖花开时，芭布丝买来种子、堆肥和花盆，在不到3平米大的地方尽情播种，番茄、芝麻菜、草莓、黄瓜，还洒下了香花香草的种子，芫荽、薰衣草、茉莉和忍冬。

断断续续一年半载的打理和照顾，植物自由地生长，这里变成了一个花园和菜园。



每天房门一开，能看到“一颗小草莓正在向你发出召唤”“蜘蛛网上挂着晶莹的露珠”“每走一步都会惊起刚刚睡醒的动物，几只小黑影在地上蹦蹦跳跳”。

她说：“这里空间有限，但我们很喜欢这儿。”“每天只要吃一颗番茄，我就会愉快一整天。”



城市的生活很便利，但也有着太多的人工痕迹，例如回家就是空调房，出门就是坐车。我们很少用自己的双脚真正踩在泥土里，感知泥土的温湿度，对季节更是模糊。

芭布丝是幸运的，在这逼仄城市里，能寻到一方小角落，打造成自己的小院，找到了她的春夏秋冬：种花种瓜，欣赏四季花开花落，品尝四时风物美食。

我们渴望小院，或许是因为它让我们的生活有了季节感，有了四时的守候与念想。


有了季节感，人心会变得更温柔

但如今，想拥有一套自己的房子尚且不易，小院更像一个美好的念想。听一个朋友说，她对小院的想象来自书里。


她说，自小生长于城市，对自然草木并不敏感，也没有在小院生活的经历，只是被父母“逼迫”读了好些书。

读鲁迅的《百草园》，知道那里有碧绿的菜畦，和伏在菜花上的黄蜂，家里少有打理，野草生长得乱蓬蓬的，但小鲁迅喜欢到那里玩。



读郁达夫的《故都的秋》，发现他的小院有一棵槐树，秋天早晨起来，泡一杯浓茶，向院子一坐，看一看天色，听一听训鸽的飞声，便觉得没有辜负秋天的美意。

书中小院弥补了朋友的“遗憾”，她说，甚至有时记不起来是从哪里看到的，但对书里描写过的四季风物，虫鱼鸟兽总是印象深刻。



春天来了，会想起《诗经》里有一群小女孩拿着小铲子在房前屋后“采芣苢”，一把一把捋起来，放在兜里揣着，是春天最新鲜的肥野菜。

荷花开的时候，会想起芸娘小心包好茶叶放进莲蓬里，经过一夜的酝酿，第二天可以泡“荷花茶”。



朋友说，从前不觉得看过了多少花开花落有多重要，也不觉错过晴朗之日的夕阳有多遗憾。但只要一想起文人说的，诗里读的，书里看的，虽然现实生活里还没有小院，但多了几许对季节的敏感。



有时候，敏感是一种温柔的力量，因为有了更饱满的感受力，我们更珍惜生活的点滴，更懂得体会花开的欢喜，与叶落的悲伤。


人温柔了，对未来的生活才有了期待

一次出游，看见了陌生人家的屋顶生长着蓬勃的花树草木，牵牛花的藤蔓绕过了栏杆，爬过了高高的围墙，紫蓝的花朵正一点点地放开。

那时的物道君，还居住在出租屋里，没有屋顶，还在为工作忙得焦头烂额，为生活时时感到疲惫。

图片｜C一Life ©

可是那片小花园，让我的内心有了一个决定，有了一种盼望：往前走，过好每一天，我相信在未来的日子里，也能拥有一个这样的屋顶，甚至一个小院。洒下牵牛花的种子，当春天再次到来时，它可以绕过围栏，爬到我的窗前，垂落一片紫色的梦，迎风飘荡。

因为有了那样一个期待，就有了一种坚定的力量，努力把当下的生活过得更好一点，更舒服一点，而不是因为没有而仰天长叹，把日子过得草草率率不像样。



就像在这一个多月里，我们也一起探访过的院子，或是程序员夫妻俩中年归隐的小花园，还是北京小夫妻的菜园，抑或是带着孩子们认识自然的植物私塾，甚至只是在家门口守候的花开花落，这些爱着生活的人们，也不是一下子就拥有自己的小院。

他们也曾像我们一样徘徊、纠结，不知如何取舍。就算他们拥有了自己的小院，也依然为生计奔波，在努力构建自己生活的样子。



可正是因为心中那点对院子的渴望，对四时之景的念想，因而温柔对待一餐一饭，细心感受一风一叶，一步步走向想要的小院小生活……
`,
    like: 1,
    visible: 0
  },
  10003: {
    id: 10003,
    date: '2019.4.27',
    author: '物道',
    image_url: 'https://images.kuan1.cn/kuan1/upload/image/20190429/20190429114304_42905.jpg',
    title: '有遗憾，爱情才完美',
    digest: `随缘去吧…`,
    content: `前段时间，闲着无聊的时候重温了电影《情书》。
 
年少时，被电影里男女主单纯美好的情愫感动，希望故事的主人公能有圆满的结局，所以每次看完悲伤的结局，总有一种闷闷的感觉堵在心头，久久不能散开。
 
而这两年再看，感觉却大不一样，不管是看到被暗恋的女藤井树看到借书卡上自己的画像，还是看到渡边博子在雪地大声与死去的男主告别，心中更多的是释然的松快。
 
那感觉就像，在海边深一步浅一步地走着，海水轻轻拍打在沙滩上，我知道，这样便已经很好了。

图片｜元181-摄

也是在这两天，偶然听到了歌手吴青峰演唱的歌曲《起风了》。


起风了
吴青峰 - 空



他干净的嗓音，配上有些伤感的旋律，一下就仿佛把人拉进了回忆。
 
歌里有一段歌词：
“从前初识这世间，万般流连，
看着天边似在眼前，
也甘愿赴汤蹈火去走它一遍。

如今走过人世间，万般流连，
翻过岁月不同侧脸，
措不及防闯入你的笑颜。”

很多人表示，在这首歌里，听到了曾经的自己。
 
年轻时，我们以为什么都有答案，什么都想求一个结果，可到了一定年纪才发现，其实人生并没有所谓的答案。
 
人这辈子，最怕听懂了一首歌，初听不知曲中意，再听已是曲中人。

图片｜来源于网络

- 1 -


沈从文在《湘行散记》里写道：我行过许多地方的桥，看过许多次数的云，喝过许多种类的酒，却只爱过一个正当最好年龄的人。

图片｜furx-摄

前两天，在综艺节目中，华晨宇动情回忆自己大学时候的女友。

两人是在大学的时候认识的，那时的华晨宇还并未出名，年少时的恋爱往往单纯美好，两人在同一个乐队，一起玩音乐，闲时一起在江边散步。

后来因为性格原因，两人遗憾分手。

图片｜丿倪淑铭-摄

在节目中，华晨宇的朋友回忆，分手后有一次华晨宇回到武汉，想见一见前女友，于是让同学将前女友约了出来。

但是华晨宇没有上前与她见面，因为不想打扰她接下来的研究生考试，华晨宇只是在车上望着她，从她出现，直到她消失在巷子口。

图片｜来源于网络

故事最终，华晨宇在节目中对前女友说了一段话：

“我也不知道你现在结婚没结婚，有没有孩子，我不是个特别会讲话的人，我想告诉你，我现在过得挺好的。

希望你能够遇到一个适合你的人，希望你的爸爸妈妈还是那么健康，我们各自彼此安好。”

想起了《再见金华站》里的一段话：某天， 你无端想起一个人， 他曾让你对明天有所期许， 但是却完全没有出现在你的明天里。

每个人的生命里，应该都有过那样一个人，他教会了你一些东西，最后却消失在你的生命里。

图片｜来源于网络

- 2 -


曾经看到一个问题，放弃一个喜欢的人什么感觉？

有人在评论里说：就像一把火烧了你住了很久的房子，你看着那些残骸和土灰的绝望。你知道那是你家，但已经回不去了。

时间会流逝，所以时间带来离别，因此时间给人们留下遗憾。

图片｜来源于网络

什么是遗憾？

张小娴曾说：
“我以为爱情可以填满人生的遗憾， 
然而，制造更多遗憾的，偏偏是爱情本身。”

《神雕侠侣》里，一名名叫郭襄的女子，风陵渡口初相遇，一见杨过误终生。

此后一生，郭襄都沉浸在16岁那年的感情里，念念不忘，终身未嫁，41岁大彻大悟，出家为尼，为第一个弟子取的法号却是风陵师太。

遗憾是《天龙八部》里，乔峰与阿朱，塞上牛羊空许约，人无影，月依明。

当年，乔峰对阿朱说，要和她去塞上隐居，可没曾想，他却误杀了这个最心爱的女子，此后多年，他终身未娶，身边的人儿早已没有身影，只有月亮依旧皎洁。

图片｜来源于网络
 
罗曼罗兰曾说过：人生的钟摆永远在两极中摇晃，幸福也是其中的一极：要使钟摆停止在它一极上，只能把钟摆折断。

没有人能永远得到，也没有人会永远失去，人生不是十全十美的童话，遗憾，是人生的常态。

图片｜来源于网络

- 3 -


想起之前看过一部电影《和Summer的500天》，故事中男主人公很喜欢女主角Summer，觉得他们的爱情是命中注定，觉得失去了她就是失去了命中注定的爱情。

两人分手后，他颓废，他失落，对一切失去兴趣。

后来又过去了很久，Summer已为人妻，两人在公园相逢，相视一笑，他对她说出最衷心的祝愿。

那时他才懂得：summer后面是autumn，人生总有下一页，爱情总有下一季。

图片｜《和Summer的500天》剧照

《罗马假日》里，公主和乔在记者见面会上握手，微笑告别，对视的那一眼里，尽是坦然。
 
她为了和他握手，认识了所有的记者，我们知道，他们之间是有感情的，可也只能到此为止了。

人生就是一个遗憾接着一个遗憾，年少时，我们觉得王子和公主只要在一起便一定会幸福到老，后来才知道，人生很少有从始至终的美好，遗憾或许也是一种美好。

图片｜来源于网络

电影《夏洛特烦恼》，男主人公夏洛对过去的遗憾耿耿于怀，一直想要回到以前去过另一种人生。

可当真的回到过去，选择了另一种不一样的生活轨迹才发现，自己本来拥有的才是最好的。

图片｜来源于网络

王小波曾说：我活在世上，无非想要明白些道理，遇见些有趣的事，倘能如我愿，我的一生就算成功。

人到一定年纪，就该学会释然了，放下那些求而不得、那些遗憾错过，抓住那些唾手可得的幸福。
 
生命中有些东西就是用来遗憾的，不必执着，总要允许有人错过你，才能赶上更好的相遇，遗憾，才是最大的完美。

图片｜拾柒_-摄
`,
    like: 1,
    visible: 1
  },
  10004: {
    id: 10004,
    author: '谈心社',
    date: '2019.4.26',
    image_url: 'https://images.kuan1.cn/kuan1/upload/image/20190429/20190429114444_30106.jpg',
    title: '所有的相遇，都是命中注定',
    digest: `张爱玲曾说：于千万人之中遇见你所要遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，刚巧赶上了，那也没有别的话可说，惟有轻轻的问一声：“噢，你也在这里吗？”`,
    content: `01
 有生之年，欣喜相逢

张爱玲曾说：于千万人之中遇见你所要遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，刚巧赶上了，那也没有别的话可说，惟有轻轻的问一声：“噢，你也在这里吗？”
 
命运真的是一个很奇妙的东西，相遇的太早，没有结果，相遇的太晚，只能遗憾错过。
 
可是不早不晚，我就刚好遇见你。
 
遇见你之后，我才知道，这世间真的会有一个人，不顾一切的穿越茫茫人海，披荆斩棘只为你而来。
 
我才知道，思念一个人的滋味，就像喝了一大杯冰水，然后用很长很长的时间流成热泪。
 


如果我们不曾相遇，或许你还是你，我也还是我，可是再也没有幸福快乐的我们，我们身处同一时空的平行线上，却此生从无交集。

我一直觉得，人与人之间的相遇就像一场命运的馈赠，当你遇到了那个人，你会发现，从前平淡无奇的人生，也可以从此熠熠生辉。

假如三毛没有遇到荷西，她不会知道有一种爱情可以超越国籍和年龄，百转千回，美到心碎；
 
假如紫霞没有遇到至尊宝，她不会知道爱一个人可以像飞蛾扑火，义无反顾，爱是一生磨难，不爱是一生遗憾；
 
假如Rose 没有遇到Jack，她不会知道，原来一见钟情是如此美妙，原来真的会有人，可以爱她胜过生命。
 
徐志摩曾说：我将于茫茫人海之中，访我灵魂之伴侣，得之我幸，不得我命。
 
我始终相信，我们生命中遇见的每一个人，书写的每一段故事，都是命中注定。
 
一切都是最好的安排，不管结局是悲是喜。

02
如果我们，不曾相遇
 
相遇往往只是故事的开始，这世间有多少泪水，就有多少心碎。
 
也许，我们生命中，都曾出现过这样一个人，他早已不在我们身边，却驻扎在我们心里好多年。
 
他从你的全世界路过，如山间清爽的风，如古城温暖的光，最后消失在茫茫人海之中。
 
只剩你一个人，留在原地，红了眼眶，心死如灰，孤独成性。
 
以至于你在每个辗转反侧、夜不能寐的夜里，反复问自己：
 
假如不曾与那个人相遇，现在的我会不会更快乐？故事会不会有更好的结局？
 
我想答案是：不会的。
 


如果你们不曾相遇，就没有故事的开头，更不会有或悲伤或欢喜的结局。
 
如果你们不曾相遇，你依然会期待着如他一样的人出现，惊艳了你的时光，温暖了你的岁月，哪怕你不知道他是谁。
 
陪伴一程，好过错过一生。
 
我会把和你当初的那段柔软时光妥帖存放，小心收藏，感谢你来过我的世界，让我开心那么多年。
 
就像《罗马假日》中，安娜公主和记者乔·布拉德雷在一起度过了美妙的一天，他们被彼此深深吸引，却也在心底明白，两人的缘分只能仅限于此了。
 
有些人，光是遇见，就花光了有生之年全部运气。
 
人生之路，满是风雨。你陪我一程，我愿念你一生。

03
 凡是遇见，皆是风景

曾看见过一位读者的留言：不确定身边的那个他，能不能陪自己走到最后。
 
其实，没有谁是天生对的人，最好的感情无非就这八个字：
 
有幸遇见，恰好合拍。
 
如果频率不一致，大不了就一拍两散，去寻找下一个与自己同频共振的人。
 
既然选择了，就别瞻前顾后，认真地投入每一份当下的感情。
 
你要相信，你身边那个被你选定的人，就是当下最适合你的那个人。你不试试，永远不会知道你们在一起有几分合拍，又会牵着手走过多远的人生路。
 
哪怕最后撞了南墙，又能怎样呢？
 
人这一生，不是一定要爱到有结果，才算是爱。有些感情，注定无疾而终，因为爱过，所以不留遗憾；不负彼此，也不谈亏欠。
 
就像那句话说的：伸手需要一瞬间，牵手却要很多年，无论你遇见谁，他都是你生命该出现的人，绝非偶然，他一定会教你些什么。
 
一花一世界，一树一菩提。
 


你生命中出现的每一个人，都有他存在的意义。
 
爱你的人给你带来温暖；你爱的人给你带来欢愉；不爱你的人教会了你成长；你不爱的人教会了你疏离。
 
感恩生命中每一场遇见，善待生命中的每一个过客。
 
拥有的时候就好好珍惜，到了告别的时候，就郑重体面地，道声再见，然后，再也不见。

04

曾经有人计算过，地球上有809个岛屿，204个国家，77亿人，人与人之间相遇的概率只有2920万分之一。
 
所以啊，我常常在想，要有多幸运我们才可以遇到现在身边的人。
 
那个陪你度过青葱岁月的闺蜜，那个陪你走过春夏秋冬的爱人，那个把你带到这个世上并陪你长大的母亲。
 
幸好我们都曾相遇。



因为生命中有了这些人才有了现在最好的我，因为有了这些温暖回忆，才有了源源不断前行的动力。

人生有三样东西是无法挽留的：生命、时间和爱，所以你唯一能做的就是去珍惜。
 
感恩身边那些不离不弃的人，不知修了几世的福气才换得今生陪伴，不如趁有生之年，再爱他们一点。
 
就像那句歌词唱的：因为我不知道下辈子还是否能遇见你，所以我今生才会那么努力，把最好的给你。
 
既相逢，何匆匆；既携手，莫相离。`,
    like: 1,
    visible: 1
  },
  10005: {
    id: 10005,
    author: '物道',
    date: '2019.4.26',
    image_url: 'https://images.kuan1.cn/kuan1/upload/image/20190429/20190429114701_15249.jpg',
    title: '成年人的懂事，从不敢麻烦别人开始',
    digest: `大概，成年人的懂事，就是从不敢麻烦别人开始的吧。`,
    content: `最近公司上了新项目，每天晚上加班到11点。

那天下班打车回家，被堵在路上，即便是深夜，北京还是那么多车，那么多人。

我坐在车后座，看着窗外忍不住掉下眼泪。

不知道是因为着急回家，还是压力太大，心里压抑得不行。

打开手机，想找朋友聊天发泄一下，结果在和闺蜜的对话框里输入了一大段牢骚后，久久没有按下发送键：

“都这么晚了，算了吧，别打扰她了。”

然后把原本准备发送的信息又删掉了，关了屏幕。

明明自己难受得要死，但不想因为自己的情绪影响到别人的生活，毕竟别人也有别人的生活呀。

大概，成年人的懂事，就是从不敢麻烦别人开始的吧。



前几天看到一个视频，一位身穿西装，满脸通红的男子，躺在地铁站，身边伴随着一些呕吐物。



路人发现后立即报警，警察赶到后，一边照顾男子一边问他：多大了？你是做什么的啊？是不是喝多了啊？

男子迷迷糊糊地说：95的，做销售的，没有办法啊，兄弟！陪客户啊。

警察安慰道：我理解你，养家糊口不容易，今天喝了多少啊？

男子语气中带着歉意地说：

喝了好多，我已经和我老婆讲了，她会过来接我哒，对不起啊，打扰你们了！

警察将他扶起来，几分钟后男子的妻子赶到，终于男子一直努力收敛的情绪，在这一刻爆发了。

他抱着妻子哭泣起来，内疚地说：宝宝，对不起啊.....我感觉我好没用啊。

妻子则是温柔地打了一下他，然后心疼地抱住他安慰起来。

这一幕虽然温馨，但同样透漏着心酸。

整个视频最让我印象深刻的是，在这短短一分钟内，小伙子的两次道歉。

明明自己难受得不行，却还是因为怕麻烦到别人不停地道歉。

就连面对自己的妻子，也是不顾自己的委屈先道歉。

或许，这样子的成年人看起来多少有点“自残”的倾向。

他们每天秉承着“懂事崩”的原则，伺机而崩，收放自如。

这或许听起来有些机械，但只有这样才能尽可能的不麻烦别人。



记得有一次看到一个故事，一个姑娘和自己老板请了一天假，老板问她原因。

她像是说别人的事一般，淡定地回复到：我去离个婚。

领导知道她刚刚有孩子不久，而此时无论因为什么原因离婚，对于她来说肯定都是一个不小的打击。

可在这种情况下，她依然没有因为自己的情绪而耽误工作。

领导问她：这么大个事，需不需要多请几天假？一天够么？

她说：一天就够了，我就是办理一下手续，然后就回来工作。

简短利落的回答背后，是经历了多少委屈伤心，才累积出这刀枪不入，百毒不侵的坚强。



其实，不仅是普通人怕麻烦别人，那些荧幕上光鲜亮丽的明星也是一样。

1999年的春晚，荧幕前的倪萍和往届没什么区别，还是那么神采奕奕，笑面如靥。

可是没人知道，此时的她内心早已千疮百孔。

儿子被查出来得了先天性白内障，站不稳，不能注视，甚至抓不到眼前的东西。

作为母亲的她心急如焚，准备辞掉工作陪孩子远赴海外治病。

可是春晚需要她，电视台的领导甚至亲自去了她家游说她。

领导说：倪萍啊，春晚是直播，有你我才能踏实啊！

实际情况是，短时间内确实找不到能代替倪萍主持春晚的人。

为了不给台里添麻烦，她藏起了自己所有的情绪，顶着巨大的心理压力主持完了职业生涯中最后一场春晚。



的确，她的主持任务完成得非常好。

和搭档配合默契，和观众一起迎新跨年，向全球各地的华人送去新年的祝福......脸上没有一丝悲伤。

可是结束工作回家后，她却抱着生病的孩子痛哭到半夜。



经常有人会问，为什么越长大，越喜欢熬夜。

其实不是黑夜有多让人留恋，只是对于成年人来说，只有在夜深人静的晚上，才有真正属于自己的时间。

他们把太多的委屈和眼泪留在了深夜，在不影响别人，不影响第二天工作的情况下，才敢狠狠地释放一下。

有人说，成年人的情感和孩子相比是淡漠的。

其实不是淡漠，而是作为一个成年人，如果没有足够强的心脏，就无法面对生活中，那些突如其来的重创。



2013年，作为“戏比天大”的相声演员，岳云鹏在一次海外演出中，得知了自己父亲突然离世的消息。

身为儿子的他，忍不住在后台崩溃大哭，想立马飞回父亲身边。

可是如果他走了，这场节目就没办法继续了。不仅让搭档之前的努力白费，还会让专门来看他的观众失望。

于是，他擦干了眼泪，强忍着自己的悲伤情绪，顺利完成了表演。

在戏终返场时，师傅郭德纲说出了岳云鹏父亲刚刚去世的事情，这个平时在大家眼里的开心果，在舞台上哭得泣不成声。



至此，没有见成父亲最后一面，成为了岳云鹏的心病，久久无法释怀。

在成年人的世界里，充斥着太多的无奈和不得已，没有一个人可以幸免。

他们委屈过，崩溃过，也想过逃避，但情绪平息后，依然选择勇敢前行。



小孩子闹情绪的时候，总是会在父母和家人面前哭得更凶，因为这对他们来说是“情感安全区”。

而成年人，不能够再像孩子一样了，他们上有老下有小，都需要照顾，不敢发泄情绪，更不敢哭不敢闹，因为怕家人担心。

因此，厕所便成为了他们的安全区。

作家槽值写过一篇文章《成年人的不堪，都藏在厕所里》。

文章写出了成年人光鲜亮丽背后的辛酸：

被奇葩客户刁难的时候，真想辞职不干了；

被同事穿小鞋的时候，真想辞职不干了；

被老板指着鼻子骂的时候，真想辞职不干了。

但是啊！想想家里孩子要上学，老人要看病，又忍了。

这时候，厕所就成了他们暂时逃离现实的一个小世界。

他们在这个小小的格子间里，擦干了委屈的泪水，平复了狂躁的情绪，又安抚了受伤的心灵......

然后走出这个小门，像什么都没发生过一样。



毕竟大家的生活都不容易啊，没有谁有义务去为你的情绪买单。

或许就像张爱玲说的那句话一样：因为懂得所以慈悲。

不麻烦别人，成了成年人心照不宣的默契。

此时此刻正在看这篇文章的你，或许在字里行间看到了某一时刻，那个委屈、崩溃、又不堪的自己。

但是啊，只要你还在为了生活奋力前行的路上，请停止责怪自己，抱抱这个不是超人的自己。

亲爱的，你要知道，偶尔在自己的安全区释放一下，做一回不那么懂事的自己，一点也不丢人。

希望你能在做一个“懂事”的成年人时，给予别人温暖，也能够被这个世界温柔以待。
`,
    like: 1,
    visible: 0
  }
}

export {
  home,
  allAct
}