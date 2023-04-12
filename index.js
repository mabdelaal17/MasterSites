// Content Array

const websitesData = [
  {
    mainSection: "useful for everyone",
    section: "helpful tools",
    tags: ["code", "palette"],
    tagsTitle: ["برمجة", "تصميم"],
    nameWebsite: "FontBug",
    websiteUrl: "https://fontbug.com",
    imgUrl: "https://i.imgur.com/5XySvkq.png",
    detailsSite: [
      "معرفة الخط",
      "فحص الصورة للبحث عن الخط",
      "يجب كتابة النص كما هو في الصورة",
    ],
  },
  {
    mainSection: "useful for everyone",
    section: "helpful tools",
    tags: ["palette"],
    tagsTitle: ["تصميم"],
    nameWebsite: "Zyro",
    websiteUrl: "https://zyro.com/tools/image-upscaler",
    imgUrl: "https://i.imgur.com/XQy6SCC.png",
    detailsSite: [
      "ذيادة الجودة",
      ">تحسين الصورة",
      "معاينة الصورة قبل وبعد",
      "تكبير الصور",
      "رفع الصور",
      "ذيادة الحجم",
      ,
      "تكبير الأبعاد",
    ],
  },
  {
    mainSection: "useful for everyone",
    section: "helpful tools",
    tags: [],
    tagsTitle: [],
    nameWebsite: "SSize",
    websiteUrl: "https://ssizes.com",
    imgUrl: "https://i.imgur.com/pCmrpna.png",
    detailsSite: [
      "ابعاد صور مواقع التواصل",
      "معظم مواقع التواصل الإجتماعي",
      "17 موقع بالأبعاد المحددة",
      "تصميم",
      "مصممين",
    ],
  },
  {
    mainSection: "useful for everyone",
    section: "visual feed",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Dribble",
    websiteUrl: "https://dribbble.com",
    imgUrl: "https://i.imgur.com/VQ3yWC5.png",
    detailsSite: ["Illustration", "تصميمات", "UI & UX"],
  },
  {
    mainSection: "useful for everyone",
    section: "visual feed",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Pinterest",
    websiteUrl: "https://www.pinterest.com",
    imgUrl: "https://i.imgur.com/9uYdjGo.png",
    detailsSite: ["شعارات", "صور", "Illustration", "أيقونات", "تصميمات"],
  },
  {
    mainSection: "useful for everyone",
    section: "visual feed",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Behance",
    websiteUrl: "https://www.behance.net",
    imgUrl: "https://i.imgur.com/xHBHVvE.png",
    detailsSite: [
      "مجتمع المصممين",
      "أفكار",
      "شعارات",
      "صور",
      "Illustration",
      "أيقونات",
      "تصميمات",
    ],
  },
  {
    mainSection: "useful for everyone",
    section: "fonts",
    tags: ["code", "palette"],
    tagsTitle: ["برمجة", "تصميم"],
    nameWebsite: "Google Fonts",
    websiteUrl: "https://fonts.google.com/icons",
    imgUrl: "https://i.imgur.com/sZbBEch.png",
    detailsSite: ["خطوط", "جميع الأوزان", "تحميل الخط", "كود الخط"],
  },
  {
    mainSection: "useful for everyone",
    section: "fonts",
    tags: ["palette"],
    tagsTitle: ["تصميم"],
    nameWebsite: "DaFont",
    websiteUrl: "https://www.dafont.com",
    imgUrl: "https://i.imgur.com/cpJUhNS.png",
    detailsSite: ["شعارات", "صور", "Illustration", "أيقونات", "تصميمات"],
  },
  {
    mainSection: "useful for everyone",
    section: "images",
    tags: ["code"],
    tagsTitle: ["برمجة"],
    nameWebsite: "Online Web Fonts",
    websiteUrl: "https://www.onlinewebfonts.com/top",
    imgUrl: "https://i.imgur.com/yJi4VY7.png",
    detailsSite: [
      "خطوط كثيرة جداً",
      "إستيراد الخط في المواقع",
      "تحميل الخط",
      "اوزان مختلفة",
      "كود الخط",
      "صيغ مختلفة وكثيرة",
    ],
  },
  {
    mainSection: "useful for everyone",
    section: "images",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Freepik",
    websiteUrl: "https://www.freepik.com",
    imgUrl: "https://i.imgur.com/xV70drw.png",
    detailsSite: [
      "شعارات",
      "صور",
      "Illustration",
      "أيقونات",
      "تصميمات",
      "ملحقات",
    ],
  },
  {
    mainSection: "useful for everyone",
    section: "images",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Pixabay",
    websiteUrl: "https://pixabay.com",
    imgUrl: "https://i.imgur.com/l3F79MM.png",
    detailsSite: ["صور", "تصوير", "افكار", "إلهام", "خلفيات", "ملحقات"],
  },
  {
    mainSection: "useful for everyone",
    section: "images",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Pexels",
    websiteUrl: "https://www.pexels.com",
    imgUrl: "https://i.imgur.com/XAgHol4.png",
    detailsSite: ["صور", "تصوير", "افكار", "إلهام", "خلفيات", "ملحقات"],
  },
  {
    mainSection: "useful for everyone",
    section: "icons",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Flaticon",
    websiteUrl: "https://www.flaticon.com",
    imgUrl: "https://i.imgur.com/RKsOrbA.png",
    detailsSite: [
      "أيقونات",
      "ملونة وغير ملونة",
      "ملصقات",
      "ايقونات للويب",
      "ايقونات متحركة",
      "ابعاد مختلفة",
      "مختلف المجالات",
      "صور",
      "شعارات",
    ],
  },
  {
    mainSection: "useful for everyone",
    section: "icons",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Iconfinder",
    websiteUrl: "https://www.iconfinder.com",
    imgUrl: "https://i.imgur.com/CjzV04W.png",
    detailsSite: [
      "ملصقات",
      "أيقونات",
      "ثلاثية الأبعاد",
      "ابعاد مختلفة",
      "Illustration",
    ],
  },
  {
    mainSection: "useful for everyone",
    section: "icons",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Icons8",
    websiteUrl: "https://icons8.com",
    imgUrl: "https://i.imgur.com/P4tsYCM.png",
    detailsSite: [
      "ثلاثية الأبعاد",
      "أيقونات",
      "ابعاد مختلفة",
      "مختلف المجالات",
      "صور",
      "رموز تعبيرية",
    ],
  },
  {
    mainSection: "useful for everyone",
    section: "color gradations",
    tags: [],
    tagsTitle: [],
    nameWebsite: "uiGradients",
    websiteUrl: "https://uigradients.com",
    imgUrl: "https://i.imgur.com/AJ4NlBB.png",
    detailsSite: [
      "تدريجات جاهزة",
      "أفضل التدريجات",
      "الأكشر شيوعاً",
      "عدد كبير من التدريجات",
    ],
  },
  {
    mainSection: "programming",
    section: "arabic channles",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Elzero Web School",
    websiteUrl: "https://www.youtube.com/@ElzeroWebSchool",
    imgUrl: "https://i.imgur.com/8EBi9Ic.png",
    detailsSite: [
      "أفضل القنوات العربية",
      "Front-End",
      "Back-End",
      "Full Stack",
      "Python",
      "تاسيس",
      "كورسات جانبية",
      "نصايح ومواقف حياتية",
      "تطبيق",
      "تاسيس بلغة C++",
    ],
  },
  {
    mainSection: "programming",
    section: "arabic channles",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Abdelrahman Gamal",
    websiteUrl: "https://www.youtube.com/@AbdelrahmanGamal",
    imgUrl: "https://i.imgur.com/kBp4Ddj.png",
    detailsSite: [
      "منهج تاسيسي للبرمجة CS50",
      "Front-End",
      "افكار",
      "حيل وتاثيرات",
      "تطبيق مشاريع",
      "Python",
    ],
  },
  {
    mainSection: "programming",
    section: "arabic channles",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Codezilla",
    websiteUrl: "https://www.youtube.com/@Codezilla",
    imgUrl: "https://i.imgur.com/IJuntQ6.jpg",
    detailsSite: [
      "أفكار",
      "تطبيق",
      "Python",
      "نصايح",
      "مواقف حياتية",
      "الرسم بـ CSSS",
    ],
  },
  {
    mainSection: "programming",
    section: "arabic channles",
    tags: [],
    tagsTitle: [],
    nameWebsite: "freeCodeCamp",
    websiteUrl: "https://www.youtube.com/@freecodecamp",
    imgUrl: "https://i.imgur.com/2a0aqH9.png",
    detailsSite: [
      "C",
      "C++",
      "CSS",
      "علوم الكمبيوتر",
      "مقدمة في تطوير الالعاب",
      "منهج تاسيسي CS50",
      "Vue",
      "Python",
    ],
  },
  {
    mainSection: "programming",
    section: "arabic channles",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Traversy Media",
    websiteUrl: "https://www.youtube.com/@TraversyMedia",
    imgUrl: "https://i.imgur.com/oxS0GDJ.png",
    detailsSite: [
      "React",
      "Python",
      "HTML",
      "Javascript",
      "CSS",
      "Vue",
      "Django",
      "Bootstrap 4",
    ],
  },
  {
    mainSection: "programming",
    section: "free hosting",
    tags: [],
    tagsTitle: [],
    nameWebsite: "GitHub",
    websiteUrl: "https://github.com",
    imgUrl: "https://i.imgur.com/fX6UXp8.png",
    detailsSite: [
      "الأكثر شهرة",
      "مواقع إستضافة",
      "مجاني",
      "الحد الأقصي لكل Repo 2 جيجا في الخطة المجانية",
      "رفع الملفات اقصاه 25 ميجا اذا تم من المتصفح",
      "احترافي",
    ],
  },
  {
    mainSection: "programming",
    section: "free hosting",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Netlify",
    websiteUrl: "https://www.netlify.com",
    imgUrl: "https://i.imgur.com/xYRtp58.png",
    detailsSite: ["إستضافة مجانية علي منصة Git", "متطورة", "احترافية", "موثوق"],
  },
  {
    mainSection: "programming",
    section: "free hosting",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Gitlab",
    websiteUrl: "https://about.gitlab.com/",
    imgUrl: "https://i.imgur.com/CMTLOWP.png",
    detailsSite: [
      "إستضافة مجانية",
      "مستودع Git",
      "التحكم بالكود بالكامل",
      "التحكم بالمشروع",
      "تخصيص متميز",
      "مميز للشركات",
      "مميزات اخري",
    ],
  },
  {
    mainSection: "programming",
    section: "code creativity",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Online Tutorials",
    websiteUrl: "https://www.youtube.com/@OnlineTutorialsYT",
    imgUrl: "https://i.imgur.com/qSPXJO8.png",
    detailsSite: [
      "احتراف CSS",
      "افكار",
      "ابداع",
      "تطبيقات مستحيلة بالـ CSS",
      "كتابة الاكواد",
    ],
  },
  {
    mainSection: "programming",
    section: "code creativity",
    tags: [],
    tagsTitle: [],
    nameWebsite: "CodingLab",
    websiteUrl: "https://www.youtube.com/@CodingLabYT",
    imgUrl: "https://i.imgur.com/vZTvZpK.png",
    detailsSite: [
      "حيل",
      "تطبيق",
      "اكواد",
      "إبداع",
      "احترافية",
      "تعلم",
      "كتابة الاكواد",
    ],
  },
  {
    mainSection: "programming",
    section: "code creativity",
    tags: [],
    tagsTitle: [],
    nameWebsite: "MDN Web Docs",
    websiteUrl: "https://developer.mozilla.org/en-US",
    imgUrl: "https://i.imgur.com/obEtpgY.png",
    detailsSite: [
      "مرجع موثوق",
      "لغات Front-End",
      "Accessibility",
      "HTTPS",
      "Web APIs",
      "Web extenstions",
      "Web technology",
    ],
  },
  {
    mainSection: "programming",
    section: "code creativity",
    tags: [],
    tagsTitle: [],
    nameWebsite: "HTML Referance",
    websiteUrl: "https://htmlreference.io",
    imgUrl: "https://i.imgur.com/Y3cXkfa.png",
    detailsSite: [
      "مرجع موثوق",
      "جميع عناصر HTML",
      "أمثلة ومعاينة",
      "أكواد",
      "معرفة العنصر Block أو Inline",
      "معرفة العنصر Meta",
      "معرفة العنصر Self-closing ام لا",
    ],
  },
  {
    mainSection: "programming",
    section: "code creativity",
    tags: [],
    tagsTitle: [],
    nameWebsite: "CSS Referance",
    websiteUrl: "https://cssreference.io",
    imgUrl: "https://i.imgur.com/obEtpgY.png",
    detailsSite: [
      "مرجع موثوق",
      "عناصر CSS",
      "أمثلة ومعاينة",
      "أكواد",
      "معرفة خصائص العناصر",
    ],
  },
  {
    mainSection: "programming",
    section: "color gradations",
    tags: [],
    tagsTitle: [],
    nameWebsite: "joshwcomeau",
    websiteUrl: "https://www.joshwcomeau.com/gradient-generator",
    imgUrl: "https://i.imgur.com/Bw2XP8a.png",
    detailsSite: [
      "تدرجات متعددة الألوان",
      "خمسة Color mode",
      "تخصيص زاوية التدرج",
      "تخصيص منحني التخفيف",
      "تخصيص دقة التدرج",
      "كود CSS جاهز",
    ],
  },
  {
    mainSection: "programming",
    section: "color gradations",
    tags: [],
    tagsTitle: [],
    nameWebsite: "CSS Gradient",
    websiteUrl: "https://cssgradient.io",
    imgUrl: "https://i.imgur.com/Ss7728C.png",
    detailsSite: [
      "تدرجات متعددة الألوان",
      "اختيار اماكن بداية ونهاية اللون بضغطه",
      "كود CSS جاهز",
    ],
  },
  {
    mainSection: "programming",
    section: "color gradations",
    tags: [],
    tagsTitle: [],
    nameWebsite: "MY Color Space",
    websiteUrl: "https://mycolor.space",
    imgUrl: "https://i.imgur.com/G9FQbGJ.png",
    detailsSite: [
      "تدرجات للألوان",
      "تدرجات ثنائية الألوان",
      "تدرجات ثلاثية الألوان",
      "كود CSS جاهز",
    ],
  },
  {
    mainSection: "programming",
    section: "backgrounds",
    tags: [],
    tagsTitle: [],
    nameWebsite: "BgJar",
    websiteUrl: "https://bgjar.com",
    imgUrl: "https://i.imgur.com/kexceAa.png",
    detailsSite: [
      "خلفيات متحركة",
      "تخصيص الألوان",
      "تخصيص تدرج الألوان",
      "تخصيص الأشكال",
      "تخصص الحركة",
    ],
  },
  {
    mainSection: "programming",
    section: "backgrounds",
    tags: [],
    tagsTitle: [],
    nameWebsite: "haikei",
    websiteUrl: "https://haikei.app",
    imgUrl: "https://i.imgur.com/JyIi3GP.png",
    detailsSite: [
      "خلفات عصرية",
      "تصميم جذاب",
      "تمويجات",
      "تخصيص الأشكال",
      "تخصيص الألوان",
      "تخصيص التدرجات",
    ],
  },
  {
    mainSection: "programming",
    section: "backgrounds",
    tags: [],
    tagsTitle: [],
    nameWebsite: "SVG Background",
    websiteUrl: "https://www.svgbackgrounds.com",
    imgUrl: "https://i.imgur.com/scZl2aW.png",
    detailsSite: [
      "انماط متنوعة",
      "تخصيص الألوان",
      "تخصيص حجم النمط",
      "تخصص الأبعاد",
    ],
  },
  {
    mainSection: "design",
    section: "transparent images",
    tags: [],
    tagsTitle: [],
    nameWebsite: "FootyRenders",
    websiteUrl: "https://www.footyrenders.com",
    imgUrl: "https://i.imgur.com/6m5n1PW.png",
    detailsSite: [
      "المجال الرياضي",
      "اللاعبين",
      "صور في مختلف المسابقات والبطولات",
      "صور شفافة",
    ],
  },
  {
    mainSection: "design",
    section: "transparent images",
    tags: [],
    tagsTitle: [],
    nameWebsite: "HiClipart",
    websiteUrl: "https://www.hiclipart.com",
    imgUrl: "https://i.imgur.com/FcLQw8o.png",
    detailsSite: ["مجالات متعددة", "صور احترافية", "افكار متعددة", "صور شفافة"],
  },
  {
    mainSection: "design",
    section: "transparent images",
    tags: [],
    tagsTitle: [],
    nameWebsite: "CleanPNG",
    websiteUrl: "",
    imgUrl: "https://i.imgur.com/Uy07THU.png",
    detailsSite: ["صور شفافة", "مختلفة", "مجالات متوعة"],
  },
  {
    mainSection: "design",
    section: "brushes",
    tags: [],
    tagsTitle: [],
    nameWebsite: "CleanPNG",
    websiteUrl: "https://www.cleanpng.com",
    imgUrl: "https://i.imgur.com/Uy07THU.png",
    detailsSite: ["صور شفافة", "مختلفة", "مجالات متوعة"],
  },
  {
    mainSection: "design",
    section: "brushes",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Brusheezy",
    websiteUrl: "https://www.brusheezy.com",
    imgUrl: "https://i.imgur.com/ZD25LHg.png",
    detailsSite: [
      "فُرش احترافية",
      "فُرَش باشكال متنوعة",
      "فُرَش للتصميم",
      "ايقونات",
      "خلفيات",
      "اشكال هندسية",
    ],
  },
  {
    mainSection: "design",
    section: "mockups",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Mokeup Hunt",
    websiteUrl: "https://mockuphunt.co",
    imgUrl: "https://i.imgur.com/xMFZ4K8.png",
    detailsSite: [
      "موكب اب علي قباعات",
      "موكب اب علي الملابس",
      "موكب علي الحقائب",
      "موكب اب علي الكتب",
      "موكب اب علي الاجهزة الإلكترونية",
      "وغيرهم",
    ],
  },
  {
    mainSection: "design",
    section: "mockups",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Mokeups Design",
    websiteUrl: "https://mockups-design.com",
    imgUrl: "https://i.imgur.com/iaDYKYh.png",
    detailsSite: [
      "موكب اب علي البانر",
      "موكب اب علي الحقائب",
      "موكب اب علي الكتب",
      "موكب اب علي الزجاجات",
      "موكب اب علي اللافتات",
      "موكب اب علي الساعات",
      "وغيرهم",
    ],
  },
  {
    mainSection: "design",
    section: "colors",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Color Hunt",
    websiteUrl: "https://colorhunt.co",
    imgUrl: "https://i.imgur.com/mYEii0z.png",
    detailsSite: [
      "ألوان متعددة",
      "باليتات الوان مناسبة",
      "تخصيص باليتة متعددة الالوان",
      "المجموعات",
      "الأكثر شهرة",
    ],
  },
  {
    mainSection: "design",
    section: "colors",
    tags: [],
    tagsTitle: [],
    nameWebsite: "Adobe Color",
    websiteUrl: "https://color.adobe.com/create",
    imgUrl: "https://i.imgur.com/6oocBfE.png",
    detailsSite: [
      "احترافي",
      "تخصيص باليتة متعددة الالوان",
      "التحكم في عدد كبير من المؤثرات في الالوان",
      "أفضل نتيجة",
      "انماط مختلفة من كتابة كود الالوان",
      "",
    ],
  },
];

// Main Sections Counter
var clas = document.getElementsByClassName("section-header");
console.log(clas.length);
document.getElementsByClassName("section-header-counter");
document.getElementById("section-header-counter").innerHTML = clas.length;

// Secondary Section Counter
var clas = document.getElementsByClassName("secondary-section-header");
console.log(clas.length);
document.getElementsByClassName("secondary-section-counter");
document.getElementById("secondary-section-counter").innerHTML = clas.length;

// Counting sites
const urls = [
  "index.html",
  "design/png-more/png-more.html",
  "everyone/helper-sites/helper-sites.html",
  "everyone/icons-more/icons-more.html",
  "everyone/inspiration/inspiration.html",
  "everyone/photos-more/photos-more.html",
  "programming/prog-hosting/prog-hosting.html",
];
const class_names = ["count"];
let counter = 0;

(async () => {
  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.text();
    const parser = new DOMParser();
    const html = parser.parseFromString(data, "text/html");
    const elements = html.querySelectorAll(
      class_names.map((className) => `.${className}`).join(",")
    );
    counter += elements.length;
  }

  document.querySelector("h2#site-counter").innerText = counter;
})();

// Image Copression
const MAX_WIDTH = 50;
const MAX_HEIGHT = 50;

const INPUT = document.getElementById("imgId");

INPUT.onchange = function (event) {
  const file = event.target.files[0]; // get the file
  const blobURL = URL.createObjectURL(file);
  const img = new Image();
  img.src = blobURL;

  img.onload = function () {
    const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
    const canvas = document.createElement("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, newWidth, newHeight);
    canvas.toBlob((blob) => {
      // Handle the compressed image.
      const displayTag = document.createElement("h1");
      displayTag.innerText = `Original Image - ${readableBytes(
        file.size
      )} :::::: Compressed Image - ${readableBytes(blob.size)}`;
      document.getElementById("container").append(displayTag);
    });
  };
};

function calculateSize(img, maxWidth, maxHeight) {
  let width = img.width;
  let height = img.height;

  // calculate the width and height, constraining the proportions
  if (width > height) {
    if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
    }
  } else {
    if (height > maxHeight) {
      width = Math.round((width * maxHeight) / height);
      height = maxHeight;
    }
  }
  return [width, height];
}

function readableBytes(bytes) {
  const i = Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
}

// Share buttons
var a2a_config = a2a_config || {};
a2a_config.onclick = 1;
