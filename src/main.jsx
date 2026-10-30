import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const roles = [
  { company: 'Nomura', title: 'Senior Software Engineer', period: 'Sep 2025 — Present', note: 'Building enterprise data-platform enhancements, a Neo4j knowledge graph with MCP integration, and reusable engineering automation.' },
  { company: 'Publicis Sapient', title: 'Technology Developer L2', period: 'Jun 2025 — Sep 2025', note: 'Developed enterprise foundations in Java, Spring Boot, and microservices.' },
  { company: 'Media.net', title: 'Senior Web Application Developer', period: 'Jan 2024 — Jun 2025', note: 'Led a full-stack campaign launch tool and secure, high-throughput microservices with Java, Vue, Kafka, Redis, and MySQL.' },
  { company: 'Media.net', title: 'Web Application Developer', period: 'Jan 2021 — Dec 2023', note: 'Built advertising services, data-enrichment crawlers, and advertiser-facing dashboards.' }
];

const labs = [
  ['ChainVault', 'Time-locked ETH custody', 'chain-vault'],
  ['ProofPass', 'Verifiable credential registry', 'proof-pass'],
  ['RelaySwap', 'Constant-product AMM mechanics', 'relay-swap'],
  ['CivicLedger', 'Transparent governance flows', 'civic-ledger']
];

function App() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard?.writeText('tejaswisampat1898@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return <main>
    <nav><a className="mark" href="#top">TK<span>·</span></a><div><a href="#work">Work</a><a href="#lab">Lab</a><a href="#contact">Contact</a></div></nav>
    <section id="top" className="hero">
      <p className="eyebrow">Mumbai, India · available for thoughtful collaborations</p>
      <h1>I make complex systems<br /><em>feel dependable.</em></h1>
      <p className="intro">Senior software engineer working across enterprise data platforms, backend systems, automation, and hands-on on-chain protocol experiments.</p>
      <div className="actions"><a className="button" href="#work">Explore my work <span>↓</span></a><a className="text-link" href="https://www.linkedin.com/in/tejaswi-kharade/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      <div className="orbit"><span>DATA</span><span>AUTOMATION</span><span>PROTOCOLS</span><b>TK</b></div>
    </section>
    <section className="statement"><p>“Good engineering turns ambiguity into systems people can trust.”</p><div>01 / 04</div></section>
    <section id="work" className="work section">
      <div className="section-head"><p className="eyebrow">Selected path</p><h2>Systems, not<br />just services.</h2></div>
      <div className="role-list">{roles.map((role, i) => <article className="role" key={role.title + role.period}><span>0{i + 1}</span><div><h3>{role.title}</h3><p>{role.company} · {role.period}</p></div><p className="role-note">{role.note}</p></article>)}</div>
    </section>
    <section id="lab" className="lab section">
      <div className="section-head"><p className="eyebrow">On-chain engineering lab</p><h2>Learning in<br /><em>public.</em></h2><p className="subtle">Focused Solidity implementations designed to make core protocol ideas inspectable. These are educational projects, not production financial products.</p></div>
      <div className="lab-grid">{labs.map(([name, description, slug], i) => <a className={'lab-card card-' + i} key={name} href={'https://github.com/tejaswikharade/' + slug} target="_blank" rel="noreferrer"><span>0{i + 1}</span><div><h3>{name}</h3><p>{description}</p></div><b>↗</b></a>)}</div>
    </section>
    <section className="craft section"><p className="eyebrow">Tools I reach for</p><div className="skill-row"><span>Java / Spring</span><span>Python</span><span>JavaScript / React</span><span>Solidity</span><span>Kafka / Redis</span><span>SQL / Neo4j</span><span>Docker / CI/CD</span><span>AWS</span></div><p className="craft-copy">From data lineage and knowledge graphs to resilient APIs and developer tooling: I enjoy the places where technical depth turns into a calmer experience for everyone else.</p></section>
    <section id="contact" className="contact"><p className="eyebrow">Say hello</p><h2>Let’s build something<br /><em>worth running.</em></h2><div><a className="email" href="mailto:tejaswisampat1898@gmail.com">tejaswisampat1898@gmail.com</a><button onClick={copyEmail}>{copied ? 'Copied!' : 'Copy email'}</button></div><footer><span>© {new Date().getFullYear()} Tejaswi Kharade</span><a href="https://github.com/tejaswikharade" target="_blank" rel="noreferrer">GitHub ↗</a></footer></section>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
