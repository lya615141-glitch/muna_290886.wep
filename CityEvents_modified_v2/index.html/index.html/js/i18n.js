
(function(){
  const dict = {
    ar: { dir:"rtl", brand:"دليل فعاليات المدينة", navHome:"الرئيسية", navEvents:"الفعاليات", navAbout:"عن الدليل", navContact:"اتصل بنا",
          heroTitle:"مرحباً بكم في دليل فعاليات المدينة", heroText:"اكتشف أحدث الفعاليات الثقافية، الرياضية والموسيقية في مدينتك!", heroBtn:"استعرض الفعاليات",
          footer:"©️ 2025 دليل فعاليات المدينة | جميع الحقوق محفوظة",
          eventsTitle:"كل الفعاليات", filterAll:"الكل", filterCulture:"ثقافة", filterSports:"رياضة", filterMusic:"موسيقى",
          details:"تفاصيل", date:"التاريخ:", time:"الوقت:", location:"المكان:", description:"الوصف",
          addToCalendar:"أضف للتقويم", share:"شارك",
          aboutTitle:"عن دليل فعاليات المدينة",
          section1Title:"نبذة عن الدليل",
          section1Text:"دليل فعاليات المدينة هو منصة رقمية تهدف إلى ربط سكان المدينة بأحدث الفعاليات الثقافية، الفنية، الرياضية، والترفيهية، مع عرض تفاصيل كل فعالية بطريقة منظمة وسهلة.",
          section2Title:"رؤيتنا ورسالتنا",
          section2Text:"نطمح إلى أن نكون المصدر الأول لاكتشاف كل جديد في مدينتك. رؤيتنا هي دعم الحياة الاجتماعية والثقافية من خلال نشر الفعاليات المحلية وإتاحة الفرصة للمجتمع للمشاركة والتفاعل.",
          section3Title:"فريق العمل",
          member1Name:"عبدالله لباد", member1Role:"المسؤول عن صفحة index.html",
          member2Name:"سارة محمود",  member2Role:"مصممة واجهة المستخدم",
          member3Name:"ليث العلي",   member3Role:"مسؤول المحتوى",
          member4Name:"منى المصري",   member4Role:"المسؤولة عن صفحة about.html",
          member5Name:"بسمة",         member5Role:"عضوة في الفريق",
          policies:"سياسات النشر", policyText:"الفعاليات المقبولة يجب أن تكون عامة ومفتوحة للجمهور، مع معلومات واضحة عن المكان والزمان والتصنيف.",
          openSubmit:"قدّم فعالية",
          contactTitle:"اتصل بنا", name:"الاسم", email:"البريد الإلكتروني", message:"الرسالة", submit:"إرسال"
    },
    en: { dir:"ltr", brand:"City Events Guide", navHome:"Home", navEvents:"Events", navAbout:"About", navContact:"Contact",
          heroTitle:"Welcome to the City Events Guide", heroText:"Discover the latest cultural, sports, and music events in your city!", heroBtn:"Browse Events",
          footer:"©️ 2025 City Events Guide | All Rights Reserved",
          eventsTitle:"All Events", filterAll:"All", filterCulture:"Culture", filterSports:"Sports", filterMusic:"Music",
          details:"Details", date:"Date:", time:"Time:", location:"Location:", description:"Description",
          addToCalendar:"Add to Calendar", share:"Share",
          aboutTitle:"About City Events Guide",
          section1Title:"About the Guide",
          section1Text:"City Events Guide is a digital platform that connects residents with the latest cultural, artistic, sports, and entertainment events in their city, with organized and simple presentation.",
          section2Title:"Our Vision and Mission",
          section2Text:"We aim to be the primary source for discovering what's new in your city. Our vision is to support social and cultural life by promoting local events and enabling community participation.",
          section3Title:"Team Members",
          member1Name:"Abdullah Labad", member1Role:"Owner of index.html",
          member2Name:"Sarah Mahmoud",  member2Role:"UI Designer",
          member3Name:"Laith Al-Ali",   member3Role:"Content Manager",
          member4Name:"Muna Al-Masri",  member4Role:"Owner of about.html",
          member5Name:"Basma",          member5Role:"Team Member",
          policies:"Publishing Policies", policyText:"Accepted events must be public and open to everyone, with clear information about place, time, and category.",
          openSubmit:"Submit Event",
          contactTitle:"Contact Us", name:"Name", email:"Email", message:"Message", submit:"Send"
    }
  };

  function applyLang(lang){
    const t = dict[lang] || dict.ar;
    document.documentElement.lang = lang;
    document.documentElement.dir  = t.dir;
    const pairs = [
      ["brand","brand"],["nav-home","navHome"],["nav-events","navEvents"],["nav-about","navAbout"],["nav-contact","navContact"],
      ["hero-title","heroTitle"],["hero-text","heroText"],["hero-btn","heroBtn"],
      ["footer-text","footer"],
      ["page-title","eventsTitle"],
      ["filter-all","filterAll"],["filter-culture","filterCulture"],["filter-sports","filterSports"],["filter-music","filterMusic"],
      ["details-title","details"],["label-date","date"],["label-time","time"],["label-location","location"],["label-description","description"],
      ["add-to-calendar","addToCalendar"],["share-btn","share"],
      ["about-title","aboutTitle"],
      ["section1-title","section1Title"],["section1-text","section1Text"],
      ["section2-title","section2Title"],["section2-text","section2Text"],
      ["section3-title","section3Title"],
      ["member1-name","member1Name"],["member1-role","member1Role"],
      ["member2-name","member2Name"],["member2-role","member2Role"],
      ["member3-name","member3Name"],["member3-role","member3Role"],
      ["member4-name","member4Name"],["member4-role","member4Role"],
      ["member5-name","member5Name"],["member5-role","member5Role"],
      ["policies-title","policies"],["policy-text","policyText"],["open-submit","openSubmit"],
      ["contact-title","contactTitle"],["label-name","name"],["label-email","email"],["label-message","message"],["submit-btn","submit"]
    ];
    pairs.forEach(([id,key])=>{
      const el = document.getElementById(id);
      if (el && t[key] !== undefined) el.textContent = t[key];
    });
  }

  function setLang(lang){
    localStorage.setItem("site_lang", lang);
    applyLang(lang);
  }

  document.addEventListener("DOMContentLoaded", function(){
    const lang = localStorage.getItem("site_lang") || "ar";
    applyLang(lang);
    document.getElementById("lang-ar")?.addEventListener("click", ()=>setLang("ar"));
    document.getElementById("lang-en")?.addEventListener("click", ()=>setLang("en"));
  });
})();
