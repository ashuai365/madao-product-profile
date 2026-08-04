import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MADAO｜资深产品经理 / 产品负责人",
  description:
    "MADAO 的产品工作简介：10 年+产品经验，覆盖 ToB 交易平台、供应链金融、电商中后台、在线教育与行业 AI。",
};

const metrics = [
  { value: "10 年+", label: "产品与平台建设经验" },
  { value: "5 类业务", label: "交易、金融、电商、教育与 AI" },
  { value: "多端协同", label: "用户端、商户端、运营端与后台" },
  { value: "完整交付", label: "调研、方案、上线、运营与复盘" },
];

const roleFit = [
  {
    index: "01",
    title: "把业务现状梳理清楚",
    description:
      "和业务、运营、财务及客户逐段核对流程，明确谁发起、谁审批、钱怎么走、货怎么交付。先形成角色关系、流程图和问题清单，再确认项目范围与优先级。",
    tags: ["业务访谈", "流程梳理", "范围确认"],
    visual: "map",
    visualLabels: ["客户", "业务", "产品", "财务", "研发"],
  },
  {
    index: "02",
    title: "把方案拆到可执行",
    description:
      "围绕主链路拆解产品模块，同时补齐权限、对账、退款、异常处理和外部接口。输出原型、规则、状态流转与接口约定，让研发和合作方知道具体怎么做。",
    tags: ["产品架构", "规则设计", "接口方案"],
    visual: "blocks",
    visualLabels: ["用户端", "交易主链路", "商户端", "规则中心", "运营后台", "外部接口"],
  },
  {
    index: "03",
    title: "跟到上线，也看上线后表现",
    description:
      "研发阶段持续处理规则边界和跨团队依赖，上线前组织验收并准备运营配置；上线后结合交易量、转化、异常率、人工处理量和客户反馈安排下一轮迭代。",
    tags: ["项目推进", "上线验收", "数据复盘"],
    visual: "loop",
    visualLabels: ["需求", "方案", "交付", "上线", "数据", "迭代"],
  },
];

const cases = [
  {
    type: "产业互联网｜2023.10 至今",
    title: "企业采购、商品交易与融资的一体化平台",
    description:
      "围绕企业采购和大宗交易，把交易底座、招采协同、银行融资与经营数据放在同一套平台内推进。",
    responsibilities: [
      "设计商品 SPU / SKU / 批次、订单、合同、支付结算、仓储物流、开票和客户关系等基础能力。",
      "建设供应商分级、询比价与招标、线上合约、SRM 进销存及集团内采商城。",
      "对接应收账款电子债权凭证与邮储银行信贷，覆盖建档、申请、审批结果、还款状态和文件传输。",
      "规划 95 个核心埋点、商家看板和运营驾驶舱，并参与行业 AI 产品规划。",
    ],
    result: "银行项目上线首月业务规模近 3 亿元；核心品类 GMV 阶段增长 150%+",
    tags: ["大宗交易", "招采 / SRM", "银行接口", "数据运营"],
    visual: "trade",
  },
  {
    type: "B2B 交易｜2021—2023",
    title: "从 0 到 1 搭建 B2B 交易平台",
    description:
      "担任产品中心负责人，从最小交易闭环起步，完成微信小程序、商户端与运营端的基础产品建设。",
    responsibilities: [
      "搭建用户、商户、账户、商品、购物车、订单、支付和结算等核心模块。",
      "接入聚合担保交易和银行卡快捷支付，支持合并支付、分账、绑卡支付及商户对账。",
      "设计账期补贴、拼团和分销体系，实现平台服务费实时划扣与佣金结算。",
      "接入银行授信与贷款支付，在收银台支持企业信用额度支付、结果查询和异常退款。",
    ],
    result: "完成小程序、商户端和运营端基础版本上线，并跑通交易与资金闭环",
    tags: ["交易闭环", "聚合支付", "分销结算", "信用支付"],
    visual: "payment",
  },
  {
    type: "供应链金融｜2019—2021",
    title: "连接渠道、风控与资金方的融资平台",
    description:
      "作为主产品搭建面向中小微供应商的融资平台，连接渠道资产、内部风控、外部资金方和第三方支付。",
    responsibilities: [
      "设计客户、商户、账户、资产接入、平台授信、资金方授信、融资和还款流程。",
      "建设渠道数据中心与标准接口，让 SaaS、B2B 平台可以推送客户及业务数据。",
      "对接内部大数据风控和外部银行信贷，完成客户与资金方的匹配及流程路由。",
      "接入第三方支付收取融担费用，并支持渠道返佣流程线上化。",
    ],
    result: "上线一年累计放款 37 亿元；接入近 30 家 SaaS 与 B2B 渠道平台",
    tags: ["资产接入", "授信风控", "资金路由", "开放接口"],
    visual: "finance",
  },
  {
    type: "京东 POP｜2017—2019",
    title: "商家发品与内容审核提效",
    description:
      "负责 POP 商家后台的商品、视频和图片产品，重点解决多业务线能力复用、商家发品效率与内容审核压力。",
    responsibilities: [
      "将商品字段抽象为可配置组件，按类目、商家类型和服务能力组合发布页面。",
      "重构主图视频审核流程，支持二级审批、类目范围配置和 AI 审核结果回传。",
      "设计尺码助手，支持商家粘贴或 OCR 提取尺码表，并结合用户身体数据推荐尺码。",
      "作为商品中台接口人，推进拼购、全景主图、便利店标品库等 20 余项业务需求。",
    ],
    result: "支持 20+ 项业务需求，应对主图视频日增近百万的审核压力",
    tags: ["商家后台", "发品组件化", "AI 审核", "商品中台"],
    visual: "audit",
  },
  {
    type: "在线教育｜2013—2017",
    title: "在线职业培训产品从 MVP 到核心产品线",
    description:
      "负责学员端、讲师端和运营端迭代，并从 0 到 1 推进在线职业培训产品。",
    responsibilities: [
      "通过问卷、访谈和小范围招生验证培训模式，从试听、报名、补款逐步完善产品。",
      "将培训过程设计为闯关式学习，补充教学管理、题库、练习测验和直播答疑。",
      "重构课程发布，将课程拆成商品信息、目录和素材库，支持视频批量上传与素材复用。",
      "建立讲师积分、等级与权益体系，并补充优惠券、营销活动和订单分摊规则。",
    ],
    result: "在线培训发展为公司核心产品线，形成完整的课程发布与教学管理体系",
    tags: ["MVP 验证", "闯关学习", "课程发布", "讲师运营"],
    visual: "learning",
  },
];

const experiences = [
  {
    period: "2023.10 — 至今",
    company: "万联易达商品交易平台",
    role: "资深产品经理",
    detail: "大宗交易、供应链金融、招标采购、SRM / 内采商城、数据运营与行业 AI",
  },
  {
    period: "2021.06 — 2023.06",
    company: "丝路察布",
    role: "高级产品经理 · 产品中心负责人",
    detail: "B2B 交易平台、支付结算、分销与信用支付",
  },
  {
    period: "2019.05 — 2021.06",
    company: "蔷薇大树",
    role: "高级产品经理",
    detail: "普惠金融平台、授信风控与开放渠道",
  },
  {
    period: "2017.11 — 2019.05",
    company: "京东商城",
    role: "技术研发产品经理",
    detail: "POP 商家商品、视频与图片产品线",
  },
  {
    period: "2013.06 — 2017.10",
    company: "51CTO 学院",
    role: "高级产品经理",
    detail: "学员端、讲师端、运营端及在线职业培训产品",
  },
];

function WorkVisual({ variant }: { variant: string }) {
  if (variant === "trade") {
    return <div className="work-visual trade-visual" aria-label="从采购到融资的业务链路图"><span>招采</span><i /><span>交易</span><i /><span>履约</span><i /><span>融资</span></div>;
  }
  if (variant === "payment") {
    return <div className="work-visual payment-visual" aria-label="订单支付与分账示意图"><div><small>订单金额</small><strong>¥ 128,600</strong></div><div className="split"><span>商户结算</span><span>平台服务费</span></div></div>;
  }
  if (variant === "finance") {
    return <div className="work-visual finance-visual" aria-label="供应链金融连接关系图"><span>渠道资产</span><b>风控中心</b><span>银行资金</span><em>标准接口 · 统一路由</em></div>;
  }
  if (variant === "audit") {
    return <div className="work-visual audit-visual" aria-label="商品内容审核工作台示意图"><div className="audit-card"><i /><span>商品主图视频</span><b>AI 初审通过</b></div><div className="audit-card"><i /><span>尺码信息</span><b>待人工复核</b></div></div>;
  }
  return <div className="work-visual learning-visual" aria-label="在线学习进度示意图"><div><span>01</span><b>试听与报名</b></div><div><span>02</span><b>课程闯关</b></div><div><span>03</span><b>测验与答疑</b></div></div>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="MADAO 首页">
            <img src="/cat-avatar.jpg" alt="" />
            <span>MADAO</span>
          </a>
          <nav className="main-nav" aria-label="页面导航">
            <a href="#role">工作方式</a>
            <a href="#cases">项目案例</a>
            <a href="#experience">工作经历</a>
          </nav>
          <a className="contact-link" href="#contact">联系我</a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="overline">资深产品经理 · 产品负责人</p>
              <h1 id="hero-title">把复杂业务梳理清楚，<span>再做成能落地的产品。</span></h1>
              <p className="hero-lead">主要负责 ToB 交易平台、供应链金融和电商中后台，实际做过商品、订单、合同、支付、结算、履约、授信与银行接口等核心模块。</p>
              <p className="hero-summary">我的工作通常从业务访谈和流程梳理开始，完成产品架构、原型与规则设计，协调研发、测试和外部合作方推进上线，再根据交易数据、异常情况和一线反馈继续迭代。</p>
              <div className="hero-tags" aria-label="核心经验标签">
                {["ToB 平台", "供应链金融", "电商中后台", "0 到 1", "数据运营"].map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="hero-actions">
                <a className="button primary" href="#cases">查看项目案例</a>
                <a className="button secondary" href="#experience">查看工作经历</a>
              </div>
            </div>

            <aside className="profile-card" aria-label="MADAO 的求职概况">
              <div className="profile-head">
                <img src="/cat-avatar.jpg" alt="MADAO 的猫头像：戴黑色圆形墨镜的灰猫" />
                <div><strong>MADAO</strong><span>北京 · 10 年+产品经验</span></div>
              </div>
              <dl>
                <div><dt>方向</dt><dd>资深产品经理 / 产品负责人</dd></div>
                <div><dt>擅长</dt><dd>复杂业务梳理、平台规划、项目落地</dd></div>
                <div><dt>领域</dt><dd>交易、金融、电商与行业 AI</dd></div>
              </dl>
              <p>希望把事情说明白，也把产品真正做出来。</p>
            </aside>
          </div>
        </section>

        <section className="metrics shell" aria-label="产品经验概览">
          {metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        </section>

        <aside className="demo-promo shell" aria-labelledby="demo-promo-title">
          <div className="demo-promo-copy">
            <p className="demo-promo-label">站内推荐 · 产品演示站</p>
            <h2 id="demo-promo-title">MADAO 产品经理 Club</h2>
            <p>一个面向产品经理的轻量演示站。这里放了更具体的产品案例、可操作原型和工作方法记录，用实际页面补充简历里不便展开的细节。</p>
            <ul aria-label="网站主要内容"><li>产品案例拆解</li><li>交互原型演示</li><li>工作方法记录</li></ul>
          </div>
          <div className="demo-promo-preview" aria-hidden="true">
            <div className="preview-bar"><i /><i /><i /><span>madao5.top</span></div>
            <div className="preview-body"><strong>产品经理 Club</strong><span>CASE</span><span>DEMO</span><span>NOTES</span><i /><i /></div>
          </div>
          <a className="demo-promo-link" href="https://madao5.top" target="_blank" rel="noopener noreferrer">
            访问 madao5.top <span aria-hidden="true">↗</span>
          </a>
        </aside>

        <section className="section shell" id="role" aria-labelledby="role-title">
          <div className="section-heading"><p className="overline">我的工作方式</p><h2 id="role-title">一个项目，我通常这样推进</h2><p>不只写需求文档，更关注业务有没有梳理清楚、方案能不能执行，以及上线后是否真正解决问题。</p></div>
          <div className="role-grid">
            {roleFit.map((item) => <article className={`role-item ${item.visual}`} key={item.index}><div className="role-figure" aria-hidden="true"><div className="figure-top"><span>{item.index}</span><b>{item.visual === "map" ? "业务关系图" : item.visual === "blocks" ? "产品架构图" : "上线迭代环"}</b></div><div className="figure-canvas">{item.visualLabels.map((label) => <i key={label}>{label}</i>)}</div></div><h3>{item.title}</h3><p>{item.description}</p><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}
          </div>
        </section>

        <section className="cases-section" id="cases" aria-labelledby="cases-title">
          <div className="shell">
            <div className="section-heading"><p className="overline">代表项目</p><h2 id="cases-title">我具体做过什么</h2><p>用业务背景、负责模块、关键方案和项目结果说明实际工作边界，方便同行快速判断经验是否匹配。</p></div>
            <div className="case-list">
              {cases.map((item, index) => <article className="case-item" key={item.title}>
                <div className="case-main">
                  <div className="case-meta"><span>0{index + 1}</span><p>{item.type}</p></div>
                  <h3>{item.title}</h3><p className="case-description">{item.description}</p>
                  <ul>{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
                  <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <aside className="case-side"><WorkVisual variant={item.visual} /><div className="case-result"><span>项目结果</span><strong>{item.result}</strong></div></aside>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section shell" id="experience" aria-labelledby="experience-title">
          <div className="section-heading compact"><p className="overline">工作经历</p><h2 id="experience-title">主要职业经历</h2><p>按时间梳理产品岗位经历，详细负责内容与项目案例见上方。</p></div>
          <ol className="experience-list">{experiences.map((item) => <li key={`${item.company}-${item.period}`}><time>{item.period}</time><div><strong>{item.company}</strong><p>{item.role}</p></div><span>{item.detail}</span></li>)}</ol>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-grid"><div><p className="overline">联系我</p><h2 id="contact-title">如果岗位与这些经验匹配，我们可以聊聊。</h2><p>目标方向：资深产品经理 / 产品负责人。重点关注产业互联网、企业服务、供应链金融、大宗交易与行业 AI。</p></div><div className="wechat-panel"><div className="wechat-identity"><img src="/cat-avatar.jpg" alt="MADAO 的猫头像" /><div><span>WECHAT</span><strong>扫码添加 MADAO</strong><p>建议备注“面试 + 公司名称”</p></div></div><img className="wechat-code" src="/wechat-qr-code.jpg" alt="MADAO 的微信二维码" /></div></div>
        </section>
      </main>
      <footer className="site-footer"><div className="shell"><span>MADAO · PRODUCT MANAGER</span><a href="#top">返回顶部 ↑</a></div></footer>
    </>
  );
}
