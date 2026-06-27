/* ══════════════════════════════════════════════════════════════
   DATA.JS — Single source of truth for all portfolio content
   ——————————————————————————————————————————————————————————————
   ★ UPDATE NAME / TAGLINE / BIO   → config object below
   ★ ADD A NEW VIDEO               → add to projects[], use template A
   ★ ADD A NEW RTM POST            → add to projects[], use template B
   ★ CHANGE TAGS ON ANY ITEM       → edit the tags: [] array
   ★ MARK A VIDEO AS PORTRAIT      → set isShort: true
   ══════════════════════════════════════════════════════════════

   TEMPLATE A — YouTube video:
   {
     id:      52,                          ← next available number
     title:   "Project Title",
     tags:    ["Brand", "AI"],             ← must match filter pills in app.js
     type:    "video",
     url:     "https://youtu.be/VIDEO_ID",
     role:    "Concept, Script, Edit",
     ytId:    "VIDEO_ID",                  ← the part after youtu.be/ or ?v=
     isShort: false,                       ← true = portrait (9:16)
   }

   TEMPLATE B — LinkedIn / RTM post:
   {
     id:      52,
     title:   "Post Title",
     tags:    ["RTM"],
     type:    "linkedin-post",
     url:     "https://www.linkedin.com/feed/update/...",
     role:    "Concept, Copy, Creative Direction",
     img:     "images/filename.png",       ← drop image in portfolio/images/
     isSquare: true,
   }
   ══════════════════════════════════════════════════════════════ */

const config = {
  name:            "Yuval Moroz",
  tagline:         "Creative Full Stack",
  heroSub:         "From strategy to final cut. Just helping ideas find their way into the world.",
  aboutText:       "Over the past few years, I've worked across product marketing, brand, social media, video production, motion design, and AI-powered creative workflows. My projects have ranged from product launches and employer branding campaigns to short-form content, thought leadership, paid creative, and large-scale brand initiatives. I enjoy working across the full creative process- from messaging and concept development to scripting, production, editing, and launch. Most of all, I like turning complex ideas into content people actually want to watch.",
  skills:          ["Video Production", "Motion Design", "AI Creative", "Brand Strategy", "Product Marketing", "Creative Direction", "Social Content", "Paid Creative", "Storytelling", "Scripting"],
  email:           "morozyuval@gmail.com",
  phone:           "+972524206098",
  linkedin:        "https://www.linkedin.com/in/yuval-moroz-553936208/",
  contactHeadline: "Open to good ideas.",
  contactSub:      "",
};

const projects = [

  /* ── Shorts / Prompt & Tell ─────────────────────────────── */
  { id: 1,  title: "Prompt & Tell", tags: ["Shorts"], type: "video", url: "https://youtube.com/shorts/NOBPxI9GCLg?feature=share", role: "Concept, Script, Videoshoot, Edit", ytId: "NOBPxI9GCLg", isShort: true },
  { id: 2,  title: "Prompt & Tell", tags: ["Shorts"], type: "video", url: "https://youtube.com/shorts/gQBcuRyEDLs?feature=share", role: "Concept, Script, Videoshoot, Edit", ytId: "gQBcuRyEDLs", isShort: true },
  { id: 3,  title: "Prompt & Tell", tags: ["Shorts"], type: "video", url: "https://youtube.com/shorts/HjrtxL6fICc?feature=share", role: "Concept, Script, Videoshoot, Edit", ytId: "HjrtxL6fICc", isShort: true },
  { id: 4,  title: "Prompt & Tell", tags: ["Shorts"], type: "video", url: "https://www.youtube.com/shorts/_7hWIQmHfGw",            role: "Concept, Script, Videoshoot, Edit", ytId: "_7hWIQmHfGw", isShort: true },

  /* ── AI ─────────────────────────────────────────────────── */
  { id: 5,  title: "Agora Growth Awards - Teaser",        tags: ["AI"],         type: "video", url: "https://youtu.be/OcnnA-i0h28",                                        role: "Concept, Script, AI Generation, Edit",          ytId: "OcnnA-i0h28",   isShort: false },
  { id: 6,  title: "The CRE Graveyard - Halloween",       tags: ["AI", "RTM"],  type: "video", url: "https://youtu.be/eLuVpWSm26Q",                                        role: "Concept, Script, AI Generation, Edit",          ytId: "eLuVpWSm26Q",   isShort: false },
  { id: 7,  title: "Agora's Waterfall Tool - Commercial", tags: ["AI"],         type: "video", url: "https://youtu.be/bJmssq078TM",                                        role: "Concept, Script, AI Generation, Edit",          ytId: "bJmssq078TM",   isShort: false },
  { id: 8,  title: "International Women's Day",           tags: ["Shorts", "Employer Branding", "AI", "RTM"], type: "video", url: "https://youtube.com/shorts/uuG4v1WFzDQ?feature=share", role: "Concept, Script, Videoshoot, AI Generation, Edit", ytId: "uuG4v1WFzDQ", isShort: true },
  { id: 9,  title: "Agora × Lego - April Fools",         tags: ["AI", "RTM"],  type: "video", url: "https://youtube.com/shorts/omQxU5KFwrg?feature=share",                role: "Concept, Script, AI Generation, Edit",          ytId: "omQxU5KFwrg",   isShort: true },
  { id: 10, title: "Smart Questionnaire - Hook A",        tags: ["AI", "Shorts"], type: "video", url: "https://youtube.com/shorts/SnWGvuyT99g?feature=share",             role: "Concept, Script, AI Generation, Edit",          ytId: "SnWGvuyT99g",   isShort: true },
  { id: 11, title: "Smart Questionnaire - Hook B",        tags: ["AI", "Shorts"], type: "video", url: "https://youtube.com/shorts/klYk9IL84MM?feature=share",             role: "Concept, Script, AI Generation, Edit",          ytId: "klYk9IL84MM",   isShort: true },
  { id: 12, title: "Smart Questionnaire - Hook C",        tags: ["AI", "Shorts"], type: "video", url: "https://youtube.com/shorts/RdgTgOi85-g?feature=share",             role: "Concept, Script, AI Generation, Edit",          ytId: "RdgTgOi85-g",   isShort: true },

  /* ── Employer Branding ──────────────────────────────────── */
  { id: 13, title: "Stickers ASMR", tags: ["Shorts", "Employer Branding"], type: "video", url: "https://youtube.com/shorts/k-aeidjNshw?feature=share", role: "Concept, Script, Videoshoot, Edit", ytId: "k-aeidjNshw", isShort: true },

  /* ── Brand / Real Estate Gala ───────────────────────────── */
  { id: 14, title: "The Real Estate Gala - Teaser",        tags: ["Brand"],          type: "video", url: "https://youtube.com/shorts/CtIohUSPn2Q?feature=share", role: "Concept, Script, Videoshoot, Edit",     ytId: "CtIohUSPn2Q",   isShort: true  },
  { id: 15, title: "Real Estate Gala Countdown - 1 Day",   tags: ["AI", "Brand"],    type: "video", url: "https://youtu.be/uUCTqt_5Qvc",                        role: "Concept, Script, AI Generation, Edit",  ytId: "uUCTqt_5Qvc",   isShort: false },
  { id: 16, title: "Real Estate Gala Countdown - 2 Days",  tags: ["AI", "Brand"],    type: "video", url: "https://youtu.be/YZ4cEf7acYY",                        role: "Concept, Script, AI Generation, Edit",  ytId: "YZ4cEf7acYY",   isShort: false },
  { id: 17, title: "Real Estate Gala Countdown - 3 Days",  tags: ["AI", "Brand"],    type: "video", url: "https://youtu.be/V3G4hRyvfLU",                        role: "Concept, Script, AI Generation, Edit",  ytId: "V3G4hRyvfLU",   isShort: false },
  { id: 18, title: "Real Estate Gala Countdown - 4 Days",  tags: ["AI", "Brand"],    type: "video", url: "https://youtu.be/6RRWPi_LUp4",                        role: "Concept, Script, AI Generation, Edit",  ytId: "6RRWPi_LUp4",   isShort: false },
  { id: 19, title: "Real Estate Gala Countdown - 5 Days",  tags: ["AI", "Brand"],    type: "video", url: "https://youtu.be/ag_3Csam_K4",                        role: "Concept, Script, AI Generation, Edit",  ytId: "ag_3Csam_K4",   isShort: false },
  { id: 20, title: "Real Estate Gala Countdown - 6 Days",  tags: ["AI", "Brand"],    type: "video", url: "https://youtu.be/VRe6Kzm445g",                        role: "Concept, Script, AI Generation, Edit",  ytId: "VRe6Kzm445g",   isShort: false },
  { id: 21, title: "Real Estate Gala Countdown - 7 Days",  tags: ["AI", "Brand"],    type: "video", url: "https://youtu.be/CAvop-ouvLc",                        role: "Concept, Script, AI Generation, Edit",  ytId: "CAvop-ouvLc",   isShort: false },
  { id: 22, title: "Live Interviews - Real Estate Gala",   tags: ["Shorts"],           type: "video", url: "https://youtube.com/shorts/dLU9Z6B2sL0",              role: "Concept, Script, Videoshoot, Edit",     ytId: "dLU9Z6B2sL0",   isShort: true  },
  { id: 23, title: "Founders Video",                        tags: ["Brand"],          type: "video", url: "https://www.youtube.com/watch?v=VcOwbEChuLY",         role: "Concept, Script, Creative Direction",   ytId: "VcOwbEChuLY",   isShort: false },
  { id: 24, title: "Explainer Video",                       tags: ["Brand", "Motion"],type: "video", url: "https://www.youtube.com/watch?v=2mL6kXY6z-Q",         role: "Concept, Script, Creative Direction",   ytId: "2mL6kXY6z-Q",   isShort: false },
  { id: 25, title: "The Deal Makers Podcast",               tags: ["Brand"],          type: "video", url: "https://www.youtube.com/watch?v=zb0u1JnNYlQ",         role: "Concept, Script, Creative Direction",   ytId: "zb0u1JnNYlQ",   isShort: false },

  /* ── Product Marketing ──────────────────────────────────── */
  { id: 26, title: "Email Studio - Feature Release",    tags: ["Product Marketing", "Motion"],   type: "video", url: "https://www.youtube.com/watch?v=OXfbmkLoUKw",     role: "Concept, Script, Creative Direction", ytId: "OXfbmkLoUKw",   isShort: false },
  { id: 27, title: "Report Builder - Feature Release",  tags: ["Product Marketing", "Motion"],   type: "video", url: "https://www.youtube.com/watch?v=SFkXv2U9NxM",     role: "Concept, Script, Creative Direction", ytId: "SFkXv2U9NxM",   isShort: false },
  { id: 28, title: "Report Builder - Short A",          tags: ["Product Marketing", "Shorts"],   type: "video", url: "https://www.youtube.com/shorts/Xx4Gd0jRmuQ",      role: "Concept, Script, Creative Direction", ytId: "Xx4Gd0jRmuQ",   isShort: true  },
  { id: 29, title: "Report Builder - Short B",          tags: ["Product Marketing", "Shorts"],   type: "video", url: "https://www.youtube.com/shorts/ZDuqYPvCk7A",      role: "Concept, Script, Creative Direction", ytId: "ZDuqYPvCk7A",   isShort: true  },
  { id: 30, title: "Report Builder - Short C",          tags: ["Product Marketing", "Shorts"],   type: "video", url: "https://www.youtube.com/shorts/jAtUv6kKR0w",      role: "Concept, Script, Creative Direction", ytId: "jAtUv6kKR0w",   isShort: true  },
  { id: 31, title: "Waterfall Tool - Short A",          tags: ["Product Marketing", "Shorts"],   type: "video", url: "https://www.youtube.com/shorts/YE01XRzPD00",      role: "Concept, Script, Creative Direction", ytId: "YE01XRzPD00",   isShort: true  },
  { id: 32, title: "Waterfall Tool - Short B",          tags: ["Product Marketing", "Shorts"],   type: "video", url: "https://www.youtube.com/shorts/6BklWDh4X1A",      role: "Concept, Script, Creative Direction", ytId: "6BklWDh4X1A",   isShort: true  },
  { id: 33, title: "Waterfall Tool - Short C",          tags: ["Product Marketing", "Shorts"],   type: "video", url: "https://www.youtube.com/shorts/yKFJDQPDgPw",      role: "Concept, Script, Creative Direction", ytId: "yKFJDQPDgPw",   isShort: true  },
  { id: 34, title: "Onboarding - Short",                tags: ["Product Marketing", "Shorts"],   type: "video", url: "https://www.youtube.com/shorts/ZGmIuOS5cf4",      role: "Concept, Script, Creative Direction", ytId: "ZGmIuOS5cf4",   isShort: true  },
  { id: 35, title: "Payments - Short",                  tags: ["Product Marketing", "Shorts"],   type: "video", url: "https://www.youtube.com/shorts/xhr1JuAxJPw",      role: "Concept, Script, Creative Direction", ytId: "xhr1JuAxJPw",   isShort: true  },
  { id: 36, title: "Smart Questionnaire - Short",       tags: ["Product Marketing", "Shorts"],   type: "video", url: "https://www.youtube.com/shorts/Jnz_KGbMdjk",      role: "Concept, Script, Creative Direction", ytId: "Jnz_KGbMdjk",   isShort: true  },
  { id: 37, title: "Investor Communications - Short",   tags: ["Product Marketing", "Shorts"],   type: "video", url: "https://www.youtube.com/shorts/HM5WXSSfQ0g",      role: "Concept, Script, Creative Direction", ytId: "HM5WXSSfQ0g",   isShort: true  },
  { id: 38, title: "Investor Onboarding - Short",       tags: ["Product Marketing", "Shorts"],   type: "video", url: "https://www.youtube.com/shorts/i04t3cnvHoI",      role: "Concept, Script, Creative Direction", ytId: "i04t3cnvHoI",   isShort: true  },
  { id: 39, title: "Investor Pipeline - Short",         tags: ["Product Marketing", "Shorts"],   type: "video", url: "https://www.youtube.com/shorts/omTMWzumHM0",      role: "Concept, Script, Creative Direction", ytId: "omTMWzumHM0",   isShort: true  },

  /* ── RTM — LinkedIn posts ───────────────────────────────────
     To add a new one: copy a line, increment the id, set title/url/img.
     Drop the image file into portfolio/images/ first.          */
  { id: 40, title: "Wrapped 2025",                    tags: ["RTM"], type: "linkedin-post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7402364836300439552",                                                                     img: "images/Wrapped 2025.png",                    role: "Concept, Copy, Creative Direction", isSquare: true },
  { id: 41, title: "Wrapped 2024",                    tags: ["RTM"], type: "linkedin-post", url: "https://www.linkedin.com/posts/agora-re_your-2024-fundraising-wrapped-activity-7270444363246182400-cFJa",                                     img: "images/Wrapped 2024.png",                    role: "Concept, Copy, Creative Direction", isSquare: true },
  { id: 42, title: "Valentine's Day",                 tags: ["RTM", "AI"], type: "linkedin-post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7427730449390567424",                                                                     img: "images/Valentine's Day post.png",            role: "Concept, Copy, Creative Direction", isSquare: true },
  { id: 43, title: "Valentine's Day - At the Office", tags: ["RTM", "Employer Branding"], type: "linkedin-post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7428075560146399232",                                                                     img: "images/Valentine's Day - at the office.png", role: "Concept, Copy, Creative Direction", isSquare: true },
  { id: 44, title: "Super Bowl",                      tags: ["RTM"], type: "linkedin-post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7426289149260914688",                                                                     img: "images/Super Bowl.png",                      role: "Concept, Copy, Creative Direction", isSquare: true },
  { id: 45, title: "Christmas",                       tags: ["RTM", "AI"], type: "linkedin-post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7409612015071109120",                                                                     img: "images/Christmas.png",                       role: "Concept, Copy, Creative Direction", isSquare: true },
  { id: 46, title: "Thanksgiving - Campaign Summary", tags: ["RTM"], type: "linkedin-post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7399447496587915264",                                                                     img: "images/Thanksgiving campaign summary.png",   role: "Concept, Copy, Creative Direction", isSquare: true },
  { id: 47, title: "Thanksgiving Post",               tags: ["RTM"], type: "linkedin-post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7399156183892262912",                                                                     img: "images/Thanksgiving post example.png",       role: "Concept, Copy, Creative Direction", isSquare: true },
  { id: 48, title: "Duns 100",                        tags: ["RTM", "Employer Branding"], type: "linkedin-post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7389251291304148992",                                                                     img: "images/Duns 100.png",                        role: "Concept, Copy, Creative Direction", isSquare: true },
  { id: 49, title: "Halloween",                       tags: ["RTM", "AI"], type: "linkedin-post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7389004073255194624",                                                                     img: "images/Halloween.png",                       role: "Concept, Copy, Creative Direction", isSquare: true },
  { id: 50, title: "April Fools Day 2025",            tags: ["RTM", "AI"], type: "linkedin-post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7312836217748774915",                                                                     img: "images/April Fools Day 2025.png",            role: "Concept, Copy, Creative Direction", isSquare: true },

];
