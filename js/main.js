// JavaScript 代码
// 图片列表数组
var images = [
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/102.jpg",
        title: "大连中心御景",
        quote: "没有人富有得能够不好别人的帮忙，也没有人穷得不能在某方面给他人帮忙。",
        coordinates: "坐标:121.635623,38.923408",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/11.jpg",
        title: "小平岛中心广场",
        quote: "同在一个环境中生活，强者与弱者的分界就在于谁能改变它。",
        coordinates: "坐标:121.509537,38.837753",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/14.jpg",
        title: "富国公园",
        quote: "用行动祈祷比用言语更能够使上帝了解。",
        coordinates: "坐标:121.582156,38.8986",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/19.jpg",
        title: "北海公园",
        quote: "坚信就是强大，怀疑只会抑制潜质，而信仰就是力量。",
        coordinates: "坐标:122.215461,40.414008",
        camera: "iPhone 14 pro拍摄于/营口"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/21.jpg",
        title: "乳状云",
        quote: "在真实的性命里，每桩伟业都由信心开始，并由信心跨出第一步。",
        coordinates: "坐标:116.295564,40.154634",
        camera: "iPhone 12 mini拍摄于/北京"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/23.jpg",
        title: "北京故宫",
        quote: "自我打败自我是最可悲的失败，自我战胜自我是最可贵的胜利。",
        coordinates: "坐标:116.403197,39.925973",
        camera: "iPhone 14 pro拍摄于/北京"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/24.jpg",
        title: "北京故宫",
        quote: "一个人除非自我有信心，否则无法带给别人信心。",
        coordinates: "坐标:116.403197,39.925973",
        camera: "iPhone 14 pro拍摄于/北京"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/26.jpg",
        title: "回家的路",
        quote: "注意你的思想，它会变成你的言语；注意你的言语，它会变成你的行动；注意你的行动，它会变成你的习惯；注意你的习惯，它会变成你的性格；注意你的性格，它会变成你的命运。",
        coordinates: "坐标:122.534006,40.194285",
        camera: "iPhone 14 pro拍摄于/营口"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/27.jpg",
        title: "居民楼",
        quote: "没有热忱，世间便无进步。",
        coordinates: "坐标:121.59141,38.898802",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/28.jpg",
        title: "环境污染",
        quote: "蝴蝶如要在百花园里得到飞舞的欢乐，那首先得忍受与蛹决裂的痛苦。",
        coordinates: "坐标:122.214995,40.414741",
        camera: "iPhone 14 pro拍摄于/营口"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/29.jpg",
        title: "钻石湾公园",
        quote: "生命力的意义在于拚搏，因为世界本身就是一个竞技场。",
        coordinates: "坐标:121.623695,38.956806",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/3.jpg",
        title: "北京朝阳站",
        quote: "海浪的品格，就是无数次被礁石击碎又无数闪地扑向礁石。",
        coordinates: "坐标:116.514785,39.950697",
        camera: "iPhone 14 pro拍摄于/北京"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/30.jpg",
        title: "夕阳",
        quote: "只会在水泥地上走路的人，永远不会留下深深的脚印。",
        coordinates: "坐标:121.591316,38.882119",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/31.jpg",
        title: "望月",
        quote: "没有一颗珍珠的闪光，是靠别人涂抹上去的。",
        coordinates: "坐标:121.509566,38.836116",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/32.jpg",
        title: "雕塑公园",
        quote: "世界太大，生命这样短。要把它过得尽量像自己想要的那个样子。",
        coordinates: "坐标:121.552177,38.861241",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/41.jpg",
        title: "俄罗斯街",
        quote: "让你难过的事情，有一天，你一定会笑着说出来。",
        coordinates: "坐标:121.642654,38.933404",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/48.jpg",
        title: "531",
        quote: "谁不是一边受伤，一边学会坚强。",
        coordinates: "坐标:121.517475,38.848839",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/49.jpg",
        title: "神龙仙岛",
        quote: "不管脚步有多慢都不要紧，只要你在走，总会看到进步。",
        coordinates: "坐标:121.097841,38.913299",
        camera: "Canon EOS R6 拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/50.jpg",
        title: "神龙仙岛",
        quote: "不是每个人，都可以在我心里兴风作浪。",
        coordinates: "坐标:121.097841,38.913299",
        camera: "Canon EOS R6 拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/52.jpg",
        title: "神龙仙岛",
        quote: "就让我执迷不悟，在自己的世界勇敢地走下去。",
        coordinates: "坐标:121.097841,38.913299",
        camera: "Canon EOS R6 拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/6.jpg",
        title: "希望大厦",
        quote: "心若计较，处处都是怨言;心若放宽，时时都是春天。",
        coordinates: "坐标:121.636999,38.923072",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/64.jpg",
        title: "老虎滩",
        quote: "继续添加更多图片和鸡汤...",
        coordinates: "坐标:121.692546,38.884159",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/83.jpg",
        title: "海",
        quote: "继续添加更多图片和鸡汤...",
        coordinates: "坐标:121.55228,38.860869",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/84.jpg",
        title: "御景中心",
        quote: "如果想走出阴影，那就让你的脸面向阳光；如果你想告别懦弱，那就让心在历练中慢慢坚强；如果你想摆脱平凡的生活，那就努力让自己高傲的飞翔。多心的人注定活得辛苦，因为太容易被别人的情绪所左右。多心的人总胡思乱想，结果是困在一团乱麻般的思绪中，动弹不得。有时候，与其多心不如少根筋。",
        coordinates: "坐标:121.63664,38.923938",
        camera: "iPhone 14 pro拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/99.jpg",
        title: "清风小镇",
        quote: "失败与挫折并不可怕，可怕的是丧失了自信，丧失了激发我们积极向上的内在动力。让我们重拾信心，始终坚信：人生航船由我们自己掌舵，只要鼓起自信的风帆，就能战胜风浪，抵达美好彼岸。",
        coordinates: "坐标:121.244865,38.835625",
        camera: "Canon EOS R6拍摄于/大连"
    },
    {
        url: "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/97.jpg",
        title: "横山寺",
        quote: "也许你想成为太阳，可你却只是一颗星辰；也许你想成为大树，可你却是一棵小草。于是，你有些自卑。其实，你和别人一样，也是一片风景：做不了太阳，就做星辰，在自己的星座发光发热；做不了大树，就做小草，以自己的绿色装点希望……",
        coordinates: "坐标:121.431916,38.889787",
        camera: "iPhone 14 pro拍摄于/大连"
    },
];


var currentIndex = 0; // 当前显示的图片索引

// 切换图片并更新信息的函数
function changeImage() {
    var imageElement = document.getElementById("image");
    var imageData = images[currentIndex];

    imageElement.src = imageData.url;
    imageElement.onload = function () {
        // 更新渐变条和颜色信息
        updateGradientBar(imageElement);

        // 更新标题、每日鸡汤、坐标和拍摄设备信息
        document.getElementById("image-title").textContent = imageData.title;
        document.getElementById("image-quote").textContent = imageData.quote;
        document.getElementById("image-coordinates").textContent = imageData.coordinates;
        document.getElementById("image-camera").textContent = imageData.camera;

        // 准备下一张图片
        currentIndex = (currentIndex + 1) % images.length;
    };
}

// 定时切换图片
setInterval(changeImage, 3000);

// 用于更新渐变条和颜色代码的函数
function updateGradientBar(imgElement) {
    var colorThief = new ColorThief();

    // 当图片加载后执行颜色提取
    if (imgElement.complete && imgElement.naturalWidth !== 0) {
        try {
            var colors = colorThief.getPalette(imgElement, 3);
            var gradientString = colors.map((color, index) => {
                var colorRgb = `rgb(${color.join(',')})`;
                return `${colorRgb} ${index * (100 / colors.length)}%, ${colorRgb} ${(index + 1) * (100 / colors.length)}%`;
            }).join(', ');
            document.querySelector('.color-rectangle').style.background =
                `linear-gradient(to right, ${gradientString})`;

            var colorCodeElements = document.querySelectorAll('.custom-text-row div');
            colors.forEach((color, index) => {
                if (colorCodeElements[index]) {
                    colorCodeElements[index].textContent = rgbToHex(color);
                }
            });

            // 更新每日鸡汤的颜色为图片的主要颜色
            document.getElementById("image-quote").style.color = `rgb(${colors[0].join(',')})`;

        } catch (e) {
            console.error('Error extracting colors:', e);
        }
    } else {
        imgElement.addEventListener('load', function () {
            updateGradientBar(imgElement);
        });
    }
}

// 将RGB颜色数组转换为16进制代码的函数
function rgbToHex(color) {
    var hex = color.map(c => c.toString(16).padStart(2, '0')).join('');
    return `#${hex}`;
}

// 首次加载页面时也更新图片和信息
document.addEventListener('DOMContentLoaded', changeImage);

// 用户与页面的第一次交互来播放音乐的功能
function playMusic() {
    var audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
    }
    document.removeEventListener('click', playMusic);
}
document.addEventListener('click', playMusic);



document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('hamburger-menu');
    var navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

