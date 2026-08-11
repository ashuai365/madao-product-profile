import type { Metadata } from "next";
import { getProject, projectDetails } from "../../project-data";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  return {
    title: project ? `${project.title}｜MADAO 项目详情` : "项目详情｜MADAO",
    description: project?.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) return <main className="project-missing"><h1>没有找到这个项目</h1><a href="/#cases">返回项目列表</a></main>;

  const currentIndex = projectDetails.findIndex((item) => item.slug === project.slug);
  const previous = projectDetails[(currentIndex - 1 + projectDetails.length) % projectDetails.length];
  const next = projectDetails[(currentIndex + 1) % projectDetails.length];

  return <>
    <header className="detail-header">
      <div className="shell detail-nav">
        <a className="brand" href="/#top"><img src="/cat-avatar.jpg" alt="" /><span><strong>MADAO</strong><small>PROJECT CASE</small></span></a>
        <nav aria-label="项目详情导航"><a href="#overview">项目概览</a><a href="#flow">业务流程</a><a href="#decisions">关键判断</a><a href="#work">方案落地</a><a href="#strengths">结果与复盘</a></nav>
        <a className="detail-back" href="/#cases">返回项目列表</a>
      </div>
    </header>
    <main className="project-detail">
      <section className="project-hero" id="overview">
        <div className="shell">
          <p className="project-eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
          <p className="project-summary">{project.summary}</p>
          <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="project-facts">
            <article><span>我的角色</span><p>{project.role}</p></article>
            <article><span>项目结果</span><p>{project.result}</p></article>
          </div>
        </div>
      </section>

      <section className="project-section shell">
        <div className="detail-section-heading"><span>01</span><div><p>背景与难点</p><h2>先说明为什么要做</h2></div></div>
        <div className="context-grid"><article><h3>业务背景</h3><p>{project.context}</p></article><article><h3>主要难点</h3><p>{project.challenge}</p></article></div>
        <div className="goal-user-grid">
          <article><p className="detail-card-label">核心使用者</p><ul>{project.users.map((user) => <li key={user}>{user}</li>)}</ul></article>
          <article><p className="detail-card-label">产品目标</p><ol>{project.goals.map((goal, index) => <li key={goal}><span>0{index + 1}</span>{goal}</li>)}</ol></article>
        </div>
      </section>

      <section className="project-section flow-section" id="flow">
        <div className="shell">
          <div className="detail-section-heading"><span>02</span><div><p>业务流程</p><h2>业务怎么流转，产品负责到哪里</h2></div></div>
          <div className="business-flow" role="list" aria-label={`${project.title}业务流程`}>
            {project.flow.map((step, index) => <div className="flow-step-wrap" key={step.name} role="listitem"><article><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.name}</h3><p>{step.detail}</p></article>{index < project.flow.length - 1 && <i aria-hidden="true">→</i>}</div>)}
          </div>
          <p className="flow-note">流程图展示主链路；各节点涉及的状态、异常处理、接口和后台配置，在下方“产品判断”和“方案落地”中展开。</p>
        </div>
      </section>

      <section className="project-section decision-section" id="decisions">
        <div className="shell">
          <div className="detail-section-heading"><span>03</span><div><p>产品判断</p><h2>我如何把问题转成产品方案</h2></div></div>
          <div className="decision-list">{project.decisions.map((decision, index) => <article key={decision.problem}><div className="decision-number">0{index + 1}</div><div><span>看到的问题</span><p>{decision.problem}</p></div><div><span>我的判断</span><p>{decision.judgment}</p></div><div className="decision-solution"><span>落地方案</span><p>{decision.solution}</p></div></article>)}</div>
        </div>
      </section>

      <section className="project-section project-work-section" id="work">
        <div className="shell">
          <div className="detail-section-heading"><span>04</span><div><p>方案落地</p><h2>我具体负责并交付了什么</h2></div></div>
          <ol className="project-work-list">{project.work.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
          <div className="outputs"><p>主要交付物</p><div>{project.outputs.map((output) => <span key={output}>{output}</span>)}</div></div>
        </div>
      </section>

      <section className="project-section shell" id="strengths">
        <div className="detail-section-heading"><span>05</span><div><p>结果与复盘</p><h2>结果、能力证据与下一步思考</h2></div></div>
        <div className="strength-grid">{project.strengths.map((strength, index) => <article key={strength.title}><span>0{index + 1}</span><h3>{strength.title}</h3><p>{strength.detail}</p></article>)}</div>
        <div className="result-panel"><span>项目结果</span><strong>{project.result}</strong></div>
        <div className="reflection-panel"><span>项目复盘</span><p>{project.reflection}</p></div>
      </section>

      <nav className="project-switch shell" aria-label="切换项目"><a href={`/projects/${previous.slug}`}><span>← 上一个项目</span><strong>{previous.title}</strong></a><a href={`/projects/${next.slug}`}><span>下一个项目 →</span><strong>{next.title}</strong></a></nav>
    </main>
    <footer className="site-footer"><div className="shell"><span>MADAO · PROJECT CASE</span><a href="/#contact">联系我 →</a></div></footer>
  </>;
}
