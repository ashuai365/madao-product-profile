import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MADAO｜资深产品经理 / 产品负责人",
  description:
    "MADAO 的面试工作简介：16 年+产品经验，覆盖 ToB 交易平台、供应链金融、电商中后台、在线教育与行业 AI。",
};

const metrics = [
  { value: "16 年+", label: "持续负责互联网与平台产品" },
  { value: "交易全链路", label: "商品、订单、支付、结算与履约" },
  { value: "多端产品", label: "用户端、商户端、运营端与后台" },
  { value: "跨机构协同", label: "银行、支付、物流与渠道平台" },
];

const roleFit = [
  {
    index: "01",
    title: "先把业务链路画明白",
    description:
      "先和业务、运营、财务及客户逐段核对现状，梳理谁发起、谁审批、钱怎么走、货怎么交付，再输出角色关系、流程图和问题清单。需求评审前先把范围和优先级说清楚。",
    tags: ["业务访谈", "流程梳理", "范围确认"],
  },
  {
    index: "02",
    title: "按交易闭环拆产品方案",
    description:
      "围绕商品、订单、合同、支付、结算、履约逐模块设计，同时补齐权限、对账、退款和异常处理。涉及银行、支付或外部平台时，会把接口字段、状态流转和失败重试一起落进方案。",
    tags: ["产品架构", "状态流转", "接口方案"],
  },
  {
    index: "03",
    title: "跟到上线，也跟上线后数据",
    description:
      "研发阶段持续处理规则边界和跨团队依赖，上线前组织验收并准备运营配置。上线后看交易量、转化、异常率和人工处理量，再结合客户反馈安排下一轮迭代。",
    tags: ["项目推进", "上线验收", "数据复盘"],
  },
];

const cases = [
  {
    type: "产业互联网｜2023.10 至今",
    title: "怎样把采购、交易与融资放进同一条业务链路？",
    description:
      "围绕企业采购、大宗交易和融资场景，连续负责交易底座、采购协同、银行接口与经营数据产品。",
    responsibilities: [
      "交易底座：商品 SPU / SKU / 批次、订单、合同、支付结算、仓储物流、开票和客户关系。",
      "采购协同：供应商分级、询比价与招标、线上合约、SRM 进销存及集团内采商城。",
      "金融接入：打通应收账款电子债权凭证与邮储银行信贷流程，覆盖客户建档、融资申请、结果通知、还款状态和文件传输。",
      "数据运营：规划 95 个核心埋点、商家看板和运营驾驶舱，并参与行业 AI 产品规划。",
    ],
    result: "银行项目上线首月业务规模近 3 亿元；核心品类 GMV 阶段增长 150%+",
    tags: ["大宗交易", "招采 / SRM", "银行接口", "数据运营"],
  },
  {
    type: "B2B 交易｜2021—2023",
    title: "从零开始，一套 B2B 交易平台先搭什么？",
    description:
      "担任产品中心负责人，从最小交易闭环开始，完成微信小程序、商户端和运营端的产品建设。",
    responsibilities: [
      "搭建用户、商户、账户、商品、购物车、订单、支付和结算等核心模块。",
      "接入聚合担保交易和银行卡快捷支付，支持合并支付、分账、绑卡支付及商户对账。",
      "围绕平台经营设计账期补贴、拼团计划和分销体系，并实现服务费实时划扣及佣金结算。",
      "接入银行授信与贷款支付，在收银台支持企业信用额度支付、结果查询和异常退款。",
    ],
    result: "完成小程序、商户端和运营端基础版本上线",
    tags: ["交易闭环", "聚合支付", "分销结算", "信用支付"],
  },
  {
    type: "供应链金融｜2019—2021",
    title: "供应链金融平台，如何连接渠道、风控与资金方？",
    description:
      "作为主产品搭建面向中小微供应商的融资平台，连接渠道资产、内部风控、外部资金方和第三方支付。",
    responsibilities: [
      "设计用户、商户、账户、资产接入、平台授信、资金方授信、融资和还款流程。",
      "建设渠道数据中心和标准接口，让 SaaS、B2B 平台可以推送客户及业务数据。",
      "对接内部大数据风控和外部银行信贷系统，完成客户与资金方的匹配及流程路由。",
      "接入第三方支付收取融担费用，并支持渠道返佣相关流程线上化。",
    ],
    result: "一年累计放款 37 亿元；近 30 家渠道平台接入",
    tags: ["资产接入", "授信风控", "资金路由", "开放接口"],
  },
  {
    type: "京东 POP｜2017—2019",
    title: "面对海量商家，发品和内容审核怎样提效？",
    description:
      "负责 POP 商家后台的商品、视频和图片产品，重点解决多业务线需求复用、商家发品效率和内容审核压力。",
    responsibilities: [
      "把商品字段抽象为可配置组件，按类目、商家类型和服务能力组合商品发布页面。",
      "重构主图视频审核流程，支持二级审批、类目范围配置和 AI 审核结果回传。",
      "设计尺码助手：商家维护尺码表，支持粘贴和 OCR 提取，前台结合用户身体数据推荐尺码。",
      "作为商品中台接口人，推进拼购、全景主图、便利店标品库等 20 余项业务需求。",
    ],
    result: "参与 20+ 项业务支持，应对视频日增近百万的审核压力",
    tags: ["商家后台", "发品组件化", "AI 审核", "商品中台"],
  },
  {
    type: "在线教育｜2013—2017",
    title: "在线培训产品，如何从 MVP 走到核心产品线？",
    description:
      "负责学员端、讲师端和运营端迭代，并从 0 到 1 推进在线职业培训产品。",
    responsibilities: [
      "通过问卷、访谈和小范围招生验证培训模式，从试听、报名、补款做起逐步完善产品。",
      "把培训过程改为闯关式学习，补充教学管理、题库、练习测验和直播答疑。",
      "重构课程发布，把课程拆成商品信息、目录和素材库，支持视频批量上传与素材复用。",
      "建立讲师积分、等级和权益体系，并补充优惠券、营销活动和订单分摊规则。",
    ],
    result: "在线培训发展为公司核心产品线，课程发布与教学管理形成完整体系",
    tags: ["MVP 验证", "闯关学习", "课程发布", "讲师运营"],
  },
  {
    type: "内容平台｜2010—2013",
    title: "早期内容平台，怎样从日常运营走到独立产品建设？",
    description:
      "负责中国载人航天工程网的内容运营、专题策划和活动支持，并参与英文版网站从规划到上线。",
    responsibilities: [
      "承担网站日常内容采编、发布和专题策划，围绕重要任务节点组织页面内容。",
      "根据中文站内容结构和海外读者需求，梳理英文站栏目、页面及发布流程。",
      "协调内容、设计和开发推进英文站建设，跟进测试、上线及后续内容维护。",
    ],
    result: "完成英文版网站从 0 到 1 建设，并形成持续更新的内容运营流程",
    tags: ["内容运营", "专题策划", "网站建设", "英文站"],
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
  {
    period: "2010.04 — 2013.06",
    company: "中国载人航天工程网",
    role: "产品经理",
    detail: "网站内容与专题策划、日常运营及英文版网站从 0 到 1 建设",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="MADAO 首页">
            <img src="/cat-avatar.jpg" alt="" />
            <span>MADAO</span>
          </a>
          <nav className="main-nav" aria-label="页面导航">
            <a href="#role">工作方式</a>
            <a href="#cases">项目复盘</a>
            <a href="#experience">工作经历</a>
          </nav>
          <a className="contact-link" href="#contact">
            联系我
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="overline">MADAO · 资深产品经理 / 产品负责人</p>
              <h1 id="hero-title">
                把复杂业务，
                <span>做成能落地的产品。</span>
              </h1>
              <p className="hero-lead">
                主要负责 ToB 交易平台、供应链金融和电商中后台，做过商品、订单、合同、支付、结算、履约、授信及银行接口等核心模块。
              </p>
              <p className="hero-summary">
                16 年+互联网产品经验。通常从业务访谈和流程梳理开始，完成产品架构、原型与规则设计，协调研发、测试和外部合作方推进上线，再通过交易数据、异常情况和一线反馈继续迭代。
              </p>
              <div className="hero-tags" aria-label="核心经验标签">
                {["ToB 平台", "供应链金融", "电商中后台", "0 到 1", "数据运营"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="hero-actions">
                <a className="button primary" href="#cases">
                  看我具体做过什么
                </a>
                <a className="button secondary" href="#experience">
                  查看完整经历
                </a>
              </div>
            </div>

            <aside className="profile-card" aria-label="MADAO 的求职概况">
              <span className="profile-badge">OPEN TO WORK</span>
              <div className="profile-head">
                <img
                  src="/cat-avatar.jpg"
                  alt="MADAO 的猫头像：戴黑色圆形墨镜的灰猫"
                />
                <div>
                  <strong>MADAO</strong>
                  <span>北京 · 16 年+经验</span>
                </div>
              </div>
              <dl>
                <div>
                  <dt>方向</dt>
                  <dd>平台产品 / 产品负责人</dd>
                </div>
                <div>
                  <dt>专长</dt>
                  <dd>0 到 1 / 中台 / 项目落地</dd>
                </div>
                <div>
                  <dt>领域</dt>
                  <dd>交易 / 金融 / 电商 / AI</dd>
                </div>
              </dl>
              <p>“先把业务讲清楚，再把产品做好。”</p>
            </aside>
          </div>
        </section>

        <section className="metrics shell" aria-label="产品经验概览">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="section shell" id="role" aria-labelledby="role-title">
          <div className="section-heading">
            <p className="overline">HOW I WORK</p>
            <h2 id="role-title">我具体怎么推进项目</h2>
            <p>不只写需求文档。下面是我在复杂 ToB 项目里通常会实际承担的三段工作。</p>
          </div>
          <div className="role-grid">
            {roleFit.map((item) => (
              <article className="role-item" key={item.index}>
                <span className="item-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list" aria-label={`${item.title}相关标签`}>
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cases-section" id="cases" aria-labelledby="cases-title">
          <div className="shell">
            <div className="section-heading">
              <p className="overline">SELECTED WORK</p>
              <h2 id="cases-title">六段经历，我具体做了什么</h2>
              <p>按业务背景、负责模块、关键方案和项目结果展开，方便同行快速判断我的实际工作边界。</p>
            </div>
            <div className="case-list">
              {cases.map((item, index) => (
                <article className="case-item" key={item.title}>
                  <span className="case-number">0{index + 1}</span>
                  <div>
                    <p className="case-type">{item.type}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <ul className="case-responsibilities">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                    <div className="tag-list case-tags" aria-label={`${item.title}相关标签`}>
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <aside className="case-result">
                    <span>项目结果</span>
                    <strong>{item.result}</strong>
                  </aside>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" id="experience" aria-labelledby="experience-title">
          <div className="section-heading compact">
            <p className="overline">EXPERIENCE</p>
            <h2 id="experience-title">主要工作经历</h2>
            <p>按时间梳理主要经历，详细项目放在上方，早期内容平台经验也一并保留。</p>
          </div>
          <ol className="experience-list">
            {experiences.map((item) => (
              <li key={`${item.company}-${item.period}`}>
                <time>{item.period}</time>
                <strong>{item.company}</strong>
                <div>
                  <p className="experience-role">{item.role}</p>
                  <p className="experience-detail">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-grid">
            <div>
              <p className="overline">LET&apos;S TALK</p>
              <h2 id="contact-title">如果你也在解决复杂业务问题，我们可以聊聊。</h2>
              <p>
                目标方向：资深产品经理 / 产品负责人。优先关注产业互联网、企业服务、供应链金融、大宗交易与行业
                AI 岗位。
              </p>
            </div>
            <div className="wechat-panel">
              <div className="wechat-identity">
                <img
                  className="wechat-avatar"
                  src="/cat-avatar.jpg"
                  alt="MADAO 的猫头像"
                />
                <div>
                  <span>WECHAT</span>
                  <strong>扫码添加 MADAO</strong>
                  <p>建议备注“面试 + 公司名称”。</p>
                </div>
              </div>
              <img className="wechat-code" src="/wechat-qr-code.jpg" alt="MADAO 的微信二维码" />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <span>MADAO · SENIOR PRODUCT MANAGER</span>
          <a href="#top">返回顶部 ↑</a>
        </div>
      </footer>
    </>
  );
}
