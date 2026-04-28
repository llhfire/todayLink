
export type Language = 'tc' | 'en' | 'sc';

export interface ContentType {
  nav: {
    home: string;
    immigration: { label: string; sub: string[] };
    education: string;
    investment: { label: string; sub: string[] };
    corporate: { label: string; sub: string[] };
    overseas: { label: string; sub: string[] };
    news: string;
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
  services: {
    id: string;
    title: string;
    desc: string;
    hook: string;
    icon: string;
  }[];
  about: {
    title: string;
    content: string;
  };
  cases: {
    title: string;
    desc: string;
    tag: string;
  }[];
  news: {
    title: string;
    date: string;
    category: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
  footer: {
    address: string;
    phone: string;
    email: string;
    brn: string;
    crn: string;
    copyright: string;
  };
}

export const translations: Record<Language, ContentType> = {
  tc: {
    nav: {
      home: '首頁',
      immigration: { label: '全球移民', sub: ['投資移民', '商業移民', '技術移民', '留學轉移民'] },
      education: '國際教育',
      investment: { label: '環球投資', sub: ['海外房產', '海外銀行開戶', '全球股票', '海外基金', '海外保險', '家族財富'] },
      corporate: { label: '企業出海', sub: ['商務秘書 (企業架構, 註冊, 開戶)', '一站式出海陪跑', '海外資產/上市', '企業托管', '物流服務'] },
      overseas: { label: '海外服務', sub: ['國家認證', '工簽服務'] },
      news: '海外資訊',
      cta: '立即諮詢',
    },
    hero: {
      badge: '香港本土服務品牌',
      title: '今日智聯 · 海外無憂',
      description: '本土實力護航全球佈局。數十年海外服務經驗，累計服務2000+組客戶，一站式解決海外全需求。',
      ctaPrimary: '領取專屬方案',
      ctaSecondary: '了解更多',
    },
    stats: [
      { label: '服務客戶', value: '2000+' },
      { label: '從業經驗', value: '10+年' },
      { label: '成功率', value: '99%' },
    ],
    services: [
      {
        id: 'talent',
        title: '香港高才A類申請',
        desc: '本土團隊護航，一手資源無中間商。',
        hook: '免費評估適配度',
        icon: 'UserCheck',
      },
      {
        id: 'study',
        title: '香港進修移民',
        desc: '量身定制升學+移民一站式方案，低門檻拿身份。',
        hook: '獲取定制方案',
        icon: 'GraduationCap',
      },
      {
        id: 'invest',
        title: '香港新投資移民',
        desc: '立足資產情況，量身定制最優投資方案。',
        hook: '立足香港陪跑',
        icon: 'Coins',
      },
    ],
    about: {
      title: '關於今日智聯',
      content: '今日智聯，作為香港本土全新服務品牌，依托數十年海外服務經驗，專注海外服務領域。我們已累計為2000+組客戶完成海外一站式需求解決方案。團隊深耕境外服務，涵蓋移民留學、稅籌優化、企業出海、財富管理等領域。',
    },
    cases: [
      { tag: '高才A類', title: '企業高管快速獲批案例', desc: '1個月獲批，成功拿到香港身份。' },
      { tag: '進修移民', title: '職場人士學歷+身份雙提升', desc: '成功入讀合規院校，順利獲得居留。' },
      { tag: '專才進修', title: '技術人才定向獲批', desc: '快速完成申請，銜接後續安家。' },
    ],
    news: [
      { title: '2026年香港人才入境政策最新調整解讀', date: '2026-04-15', category: '政策動態' },
      { title: '今日智聯香港總部遷入中環新辦公區公告', date: '2026-04-10', category: '公司新聞' },
      { title: '香港進修移民：2026秋季入學申請正式開放', date: '2026-03-28', category: '行業動態' },
      { title: '助力粵港澳大灣區人才流動：新專才計劃詳解', date: '2026-03-15', category: '政策動態' },
    ],
    faq: [
      { q: '服務範圍包含哪些？', a: '涵蓋高才A類、進修、專才、投資移民，及安家、稅籌等一站式服務。' },
      { q: '收費標準是什麼？', a: '收費透明公開，承諾價格貴了雙倍賠。可免費獲取專屬報價。' },
      { q: '申請流程需要多久？', a: '高才最快1個月，進修3-6個月，全程專人跟進。' },
      { q: '是否協助準備材料？', a: '是的，我們提供詳細清單並安排專人協助整理、審核。' },
      { q: '申請失敗會退費嗎？', a: '我們承諾申請失敗全額退還服務費，降低客戶風險。' },
    ],
    footer: {
      address: '香港中環德輔道中XX號XX大廈XX樓',
      phone: '+852 1234 5678',
      email: 'info@todaylink.hk',
      brn: 'BRN: 12345678-000',
      crn: 'CRN: 87654321',
      copyright: '© 2026 今日智聯 (Today Link) 保留所有權利',
    },
  },
  en: {
    nav: {
      home: 'Home',
      immigration: { label: 'Migration', sub: ['Investment', 'Business', 'Skilled', 'Study to PR'] },
      education: 'Education',
      investment: { label: 'Global Inv.', sub: ['Real Estate', 'Bank Account', 'Stocks', 'Funds', 'Insurance', 'Family Wealth'] },
      corporate: { label: 'Overseas Biz', sub: ['Secretarial (Corp Structure, Reg, Bank)', 'All-in-one Setup', 'Investment/Listing', 'Corp Trustee', 'Logistics'] },
      overseas: { label: 'Services', sub: ['Certification', 'Work Visa'] },
      news: 'Latest Info',
      cta: 'Consult Now',
    },
    hero: {
      badge: 'HK Local Brand',
      title: 'Today Link · Beyond Borders',
      description: 'Local expertise for your global ambitions. Decades of experience, serving over 2000+ clients worldwide.',
      ctaPrimary: 'Get Expert Plan',
      ctaSecondary: 'Learn More',
    },
    stats: [
      { label: 'Clients Served', value: '2000+' },
      { label: 'Years Experience', value: '10+' },
      { label: 'Success Rate', value: '99%' },
    ],
    services: [
      {
        id: 'talent',
        title: 'HK Top Talent (Cat A)',
        desc: 'Direct local resources, no middlemen, maximum success.',
        hook: 'Free Assessment',
        icon: 'UserCheck',
      },
      {
        id: 'study',
        title: 'Study Immigration',
        desc: 'Custom education and residency paths for career growth.',
        hook: 'Get Custom Plan',
        icon: 'GraduationCap',
      },
      {
        id: 'invest',
        title: 'Capital Investment',
        desc: 'Asset-based tailored investment for secure residency.',
        hook: 'Secure Process',
        icon: 'Coins',
      },
    ],
    about: {
      title: 'About Today Link',
      content: 'Today Link is a premier Hong Kong local brand with decades of overseas service history. We help individuals and enterprises navigate global transitions through professional expertise in immigration, tax planning, and wealth management.',
    },
    cases: [
      { tag: 'Top Talent', title: 'Exec Fast-Track Approval', desc: 'Approved in 1 month for full residency status.' },
      { tag: 'Study Path', title: 'Edu + Identity Dual Boost', desc: 'Successful admission and residency acquisition.' },
      { tag: 'Professionals', title: 'Tech Talent Migration', desc: 'Seamless transition for IT professionals.' },
    ],
    news: [
      { title: 'Interpretation of HK Talent Entry Policy Changes 2026', date: '2026-04-15', category: 'Policy' },
      { title: 'Today Link HK Headquarters Moves to Central District', date: '2026-04-10', category: 'Company' },
      { title: 'HK Study Migration: Autumn 2026 Intake Now Open', date: '2026-03-28', category: 'Industry' },
      { title: 'GBA Talent Mobility: New Professional Scheme Details', date: '2026-03-15', category: 'Policy' },
    ],
    faq: [
      { q: 'What is your service scope?', a: 'High Talent, Study, Investment pathways, plus settlement and corporate services.' },
      { q: 'What are your fees?', a: 'Transparent pricing with a double-refund guarantee if rates are higher elsewhere.' },
      { q: 'How long does it take?', a: 'Top Talent as fast as 1 month; Study paths 3-6 months.' },
      { q: 'Do you help with docs?', a: 'Yes, we provide full support for document organization and auditing.' },
      { q: 'Refund if failed?', a: 'Full refund of service fees guaranteed if the application is not successful.' },
    ],
    footer: {
      address: 'XX/F, XX Building, Des Voeux Road Central, HK',
      phone: '+852 1234 5678',
      email: 'info@todaylink.hk',
      brn: 'BRN: 12345678-000',
      crn: 'CRN: 87654321',
      copyright: '© 2026 Today Link. All rights reserved.',
    },
  },
  sc: {
    nav: {
      home: '首页',
      immigration: { label: '全球移民', sub: ['投资移民', '商业移民', '技术移民', '留学转移民'] },
      education: '国际教育',
      investment: { label: '环球投资', sub: ['海外房产', '海外银行开户', '全球股票', '海外基金', '海外保险', '家族财富'] },
      corporate: { label: '企业出海', sub: ['商务秘书 (企业架构, 注册, 开户)', '一站式出海陪跑', '海外股资/上市', '企业托管', '物流服务'] },
      overseas: { label: '海外服务', sub: ['国家认证', '工签服务'] },
      news: '海外资讯',
      cta: '立即咨询',
    },
    hero: {
      badge: '香港本土服务品牌',
      title: '今日智联 · 海外无忧',
      description: '本土实力护航全球布局。数十载海外服务经验，累计服务2000+组客户，一站式解决海外全需求。',
      ctaPrimary: '领取专属方案',
      ctaSecondary: '了解更多',
    },
    stats: [
      { label: '服务客户', value: '2000+' },
      { label: '从业经验', value: '10+年' },
      { label: '成功率', value: '99%' },
    ],
    services: [
      {
        id: 'talent',
        title: '香港高才A类申请',
        desc: '本土团队护航，一手资源无中间商。',
        hook: '免费评估适配度',
        icon: 'UserCheck',
      },
      {
        id: 'study',
        title: '香港进修移民',
        desc: '量身定制升学+移民一站式方案，低门槛拿身份。',
        hook: '获取定制方案',
        icon: 'GraduationCap',
      },
      {
        id: 'invest',
        title: '香港新投资移民',
        desc: '立足资产情况，量身定制最优投资方案。',
        hook: '立足香港陪跑',
        icon: 'Coins',
      },
    ],
    about: {
      title: '关于今日智联',
      content: '今日智联，作为香港本土全新服务品牌，依托数十载海外服务经验，专注海外服务领域。我们已累计为2000+组客户完成海外一站式需求解决方案。团队深耕境外服务，涵盖移民留学、税筹优化、企业出海、财富管理等领域。',
    },
    cases: [
      { tag: '高才A类', title: '企业高管快速获批案例', desc: '1个月获批，成功拿到香港身份。' },
      { tag: '进修移民', title: '职场人士学历+身份双提升', desc: '成功入读合规院校，顺利获得居留。' },
      { tag: '专才进修', title: '技术人才定向获批', desc: '快速完成申请，衔接后续安家。' },
    ],
    news: [
      { title: '2026年香港人才入境政策最新调整解读', date: '2026-04-15', category: '政策动态' },
      { title: '今日智联香港总部迁入中环新办公区公告', date: '2026-04-10', category: '公司新闻' },
      { title: '香港进修移民：2026秋季入学申请正式开放', date: '2026-03-28', category: '行业动态' },
      { title: '助力粤港澳大湾区人才流动：新专才计划详解', date: '2026-03-15', category: '政策动态' },
    ],
    faq: [
      { q: '服务范围包含哪些？', a: '涵盖高才A类、进修、专才、投资移民，及安家、税筹等一站式服务。' },
      { q: '收费标准是什么？', a: '收费透明公开，承诺价格贵了双倍赔。可免费获取专属报价。' },
      { q: '申请流程需要多久？', a: '高才最快1个月，进修3-6个月，全程专人跟进。' },
      { q: '是否协助准备材料？', a: '是的，我们提供详细清单并安排专人协助整理、审核。' },
      { q: '申请失败会退费吗？', a: '我们承诺申请失败全额退还服务费，降低客户风险。' },
    ],
    footer: {
      address: '香港中环德辅道中XX号XX大厦XX楼',
      phone: '+852 1234 5678',
      email: 'info@todaylink.hk',
      brn: 'BRN: 12345678-000',
      crn: 'CRN: 87654321',
      copyright: '© 2026 今日智联 (Today Link) 保留所有权利',
    },
  },
};
