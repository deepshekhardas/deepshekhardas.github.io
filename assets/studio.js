import { EnquiryForm, OwnerInboxLink } from "./enquiry-form.js";
import { b as React, j as s } from "./index-BwnWIdL-.js";

export function CinematicHero() {
  return s.jsxs("section", {
    id: "hero-section",
    className: "studio-hero",
    onPointerMove: moveHero,
    onPointerLeave: resetHero,
    children: [
      s.jsx("div", { className: "hero-ambient", "aria-hidden": true }),
      s.jsx("div", {
        className: "hero-art-stage",
        "aria-hidden": true,
        children: s.jsx("img", {
          className: "hero-sculpture",
          src: "./assets/hero-sculpture.png",
          width: 1536,
          height: 1024,
          alt: "",
          fetchPriority: "high",
        }),
      }),
      s.jsxs("div", {
        className: "hero-copy",
        children: [
          s.jsxs("p", {
            className: "studio-kicker",
            children: [
              s.jsx("span", { className: "status-dot" }),
              "DEEPSHEKHAR DAS / CTO AT EZEFARE",
            ],
          }),
          s.jsxs("h1", {
            children: [
              s.jsx("span", { children: "React products." }),
              s.jsx("em", { children: "Focused fixes." }),
              s.jsx("span", { children: "Built with care." }),
            ],
          }),
          s.jsx("p", {
            className: "hero-intro",
            children:
              "React and TypeScript interfaces, focused debugging, and Node.js real-time features. Clear scope, thoughtful delivery, and written updates.",
          }),
          s.jsx("p", { className: "hero-role", children: "CTO at EzeFare" }),
          s.jsxs("div", {
            className: "studio-actions",
            children: [
              s.jsxs("a", {
                href: "#contact-section",
                className: "portfolio-primary",
                children: [
                  "Let’s build something",
                  s.jsx("span", { children: "↗" }),
                ],
              }),
              s.jsx("a", {
                href: "#work-section",
                className: "portfolio-secondary",
                children: "Discover my work ↓",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "hero-availability",
            children: [
              s.jsx("span", { className: "status-dot" }),
              s.jsx("span", { children: "Available for freelance projects" }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className: "hero-art-note",
        "aria-hidden": true,
        children: [
          s.jsx("span", { children: "FORM × FUNCTION" }),
          s.jsx("span", { children: "Crafted at the intersection." }),
        ],
      }),
      s.jsxs("div", {
        className: "hero-foot",
        children: [
          s.jsx("a", {
            href: "#work-section",
            className: "scroll-cue",
            children: [
              s.jsx("span", { className: "scroll-cue-line" }, "line"),
              "SCROLL TO DISCOVER",
            ],
          }),
          s.jsx("span", { children: "GORAKHPUR, UTTAR PRADESH · REMOTE WORLDWIDE" }),
        ],
      }),
    ],
  });
}

function acceptsMotion() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
function moveHero(event) {
  if (!acceptsMotion()) return;
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--mx",
    ((event.clientX - box.left) / box.width - 0.5) * 22 + "px",
  );
  event.currentTarget.style.setProperty(
    "--my",
    ((event.clientY - box.top) / box.height - 0.5) * 16 + "px",
  );
}
function resetHero(event) {
  event.currentTarget.style.setProperty("--mx", "0px");
  event.currentTarget.style.setProperty("--my", "0px");
}
function moveSurface(event) {
  if (!acceptsMotion()) return;
  const box = event.currentTarget.getBoundingClientRect();
  const px = (event.clientX - box.left) / box.width,
    py = (event.clientY - box.top) / box.height;
  event.currentTarget.style.setProperty("--px", px * 100 + "%");
  event.currentTarget.style.setProperty("--py", py * 100 + "%");
  event.currentTarget.style.setProperty("--rx", (0.5 - py) * 4 + "deg");
  event.currentTarget.style.setProperty("--ry", (px - 0.5) * 4 + "deg");
}
function resetSurface(event) {
  event.currentTarget.style.setProperty("--rx", "0deg");
  event.currentTarget.style.setProperty("--ry", "0deg");
}

function ScrollProgress() {
  const bar = React.useRef(null);
  React.useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current)
        bar.current.style.transform =
          "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);
  return s.jsx("div", {
    className: "reading-progress",
    "aria-hidden": true,
    ref: bar,
  });
}

const email = "deepshekhardas1234@gmail.com";
const github = "https://github.com/deepshekhardas";
const linkedin = "https://www.linkedin.com/in/deepshekhardas/";
const projects = [
  {
    title: "TicketFlow / IndigoPass",
    source: "https://github.com/deepshekhardas/ticketflow",
    number: "01",
    category: "Event discovery & booking",
    cover: ["Make room", "for the moment."],
    color: "ticket",
    art: "ticketflow-live.png",
    problem: "Make event discovery and seat selection one clear journey.",
    approach: "Event categories, venue search and an interactive seat map in a React interface.",
    evidence: "Demo entry and seat-map navigation checked. Checkout and notifications remain demo flows.",
    accessNote: "Try event filters, seat selection and the demo checkout. Google sign-in may be required. No real payments or admission tickets.",
    description:
      "An event ticketing concept exploring seat selection, sign-in, and digital tickets in one focused booking journey.",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "https://ais-pre-6j73gli6rkdggcrnudqldj-357091713250.asia-southeast1.run.app/",
  },
  {
    title: "OptiRoute Operations",
    stageLabel: "OPERATIONS FOUNDATION",
    demoLabel: "View fleet demo",
    caseStudyLink: "https://github.com/deepshekhardas/optiroute/blob/main/docs/ARCHITECTURE.md",
    source: "https://github.com/deepshekhardas/optiroute",
    art: "optiroute-operations.png",
    problem: "Keep company data separate and make every delivery change accountable.",
    approach: "Server-enforced roles, capacity-checked assignments, version conflicts, retry-safe order creation and transactional audit history.",
    evidence: "11 tests and GitHub CI passed. Order-to-delivery workflow and 390px local preview checked; compiled backend inspected with REA. Production identity and hosting acceptance remain pending.",
    number: "02",
    category: "Company-scoped delivery operations",
    accessNote: "Screenshot: working local operations build. GitHub includes architecture, API contracts, tests and recovery runbook. The public fleet demo link opens the earlier illustrative version; no real dispatch or GPS.",
    cover: ["Every route.", "One view."],
    color: "route",
    description:
      "A delivery-operations foundation with company isolation, role-based access, controlled assignments and an inspectable audit trail.",
    tech: ["React", "TypeScript", "Vite", "Node.js", "SQLite"],
    link: "https://ais-pre-tt57r3zgetshqrwfrdru54-357091713250.asia-southeast1.run.app",
  },
  {
    title: "CollabSphere",
    source: "https://github.com/deepshekhardas/collabsphere",
    art: "collabsphere-live.png",
    problem: "Help brands compare creators and organise campaign work in one workspace.",
    approach: "Creator discovery cards and a dashboard organised around campaigns and submissions.",
    evidence: "Creator search, local collaboration drafts and reset checked. The public demo uses an isolated sample workspace, without reading saved account profiles.",
    number: "03",
    category: "Creator & brand marketplace",
    accessNote: "Explore creator search, save a local campaign draft and reset the sample workspace. No real offers, contracts, payments or messages are sent.",
    cover: ["Good people.", "Great chemistry."],
    color: "collab",
    description:
      "A marketplace concept for creators and brands to discover each other and organise campaigns and collaborations.",
    tech: ["React", "TypeScript", "Framer Motion"],
    link: "https://ais-pre-q2znzekaeaddxbreuhpowj-357091713250.asia-southeast1.run.app/?demo=1",
  },
  {
    title: "Aura Labs",
    source: "https://github.com/deepshekhardas/aura-labs",
    number: "04",
    category: "Laboratory management interface",
    accessNote: "Download a demo report or select sample rows to export real 4×2-inch PDF labels. Analytics are simulated; no lab hardware is connected.",
    cover: ["Clarity in", "complexity."],
    color: "aura",
    art: "aura-live.png",
    problem: "Keep sample selection and printable lab labels in a focused workflow.",
    approach: "A searchable sample table, selection controls and 4×2-inch PDF label export.",
    evidence: "Label navigation and selection checked. Analytics are simulated; no lab equipment is connected.",
    description:
      "A laboratory workflow demo with sample-label PDF export, a downloadable dashboard report and clearly labelled simulated telemetry.",
    tech: ["React", "TypeScript", "PDF Export"],
    link: "https://ais-pre-gshg3uavjod4rxesole3n2-357091713250.asia-southeast1.run.app/",
  },
];
const contributions = [
  {
    org: "CopilotKit",
    title: "Fewer unnecessary re-renders.",
    description:
      "A focused React fix for useInterrupt, backed by a regression test.",
    id: "#6969",
    link: "https://github.com/CopilotKit/CopilotKit/pull/6969",
  },
  {
    org: "TheAlgorithms",
    title: "A more resilient algorithm.",
    description:
      "Handle a zero diagonal by pivoting rows in polynomial interpolation.",
    id: "#15044",
    link: "https://github.com/TheAlgorithms/Python/pull/15044",
  },
  {
    org: "CopilotKit",
    title: "Code blocks that render correctly.",
    description:
      "Fix tagged fenced-code formatting in Telegram, with tests for related cases.",
    id: "#6622",
    link: "https://github.com/CopilotKit/CopilotKit/pull/6622",
  },
];
const services = [
  {
    name: "Your idea, brought to life.",
    kind: "WEB PRODUCTS & MVPs",
    description:
      "Shape a focused first version. Build the interface, connect the backend, and make the core user journey work.",
    tags: "Web applications / MVP development",
  },
  {
    name: "AI with a purpose.",
    kind: "AI & AUTOMATION",
    description:
      "Connect an assistant or automate a repetitive task. Start with a real problem and a clear way to check the result.",
    tags: "AI integrations / Workflow automation",
  },
  {
    name: "Make good software better.",
    kind: "PRODUCT IMPROVEMENTS",
    description:
      "Refine the interface, fix a stubborn bug, or improve an existing feature—with focused changes and a clear handover.",
    tags: "Interface refinement / Bug fixes",
  },
];
const external = { target: "_blank", rel: "noopener noreferrer" };
const arrow = () => s.jsx("span", { "aria-hidden": true, children: "↗" });

function Header() {
  return s.jsxs("header", {
    className: "studio-header",
    children: [
      s.jsxs("a", {
        className: "studio-brand",
        href: "#hero-section",
        "aria-label": "Deepshekhar Das, home",
        children: [
          s.jsx("span", { className: "brand-monogram", children: "dd." }),
          s.jsxs("span", {
            className: "brand-name",
            children: ["DEEPSHEKHAR DAS", s.jsx("span", { className: "brand-role", children: "CTO at EzeFare" })],
          }),
        ],
      }),
      s.jsxs("nav", {
        "aria-label": "Main navigation",
        children: [
          s.jsx("a", { href: "#work-section", children: "Selected work" }),
          s.jsx("a", { href: "#skills-section", children: "Services" }),
          s.jsx("a", { href: "#expertise-section", children: "About" }),
        ],
      }),
      s.jsxs("a", {
        className: "header-contact",
        href: "#contact-section",
        children: ["Let’s talk", arrow()],
      }),
    ],
  });
}

function SectionHeading({ number, label, title, italic, description }) {
  return s.jsxs("div", {
    className: "section-heading reveal",
    children: [
      s.jsx("p", {
        className: "studio-kicker",
        children: number + " / " + label,
      }),
      s.jsxs("div", {
        className: "heading-row",
        children: [
          s.jsxs("h2", {
            children: [title, s.jsx("em", { children: italic })],
          }),
          description && s.jsx("p", { children: description }),
        ],
      }),
    ],
  });
}

function Work() {
  const [filter, setFilter] = React.useState("All work");
  const filters = [
    "All work",
    ...new Set(projects.flatMap((project) => project.tech)),
  ];
  const visible = projects.filter(
    (project) => filter === "All work" || project.tech.includes(filter),
  );
  return s.jsxs("section", {
    id: "work-section",
    className: "studio-work section-space",
    children: [
      s.jsx(SectionHeading, {
        number: "01",
        label: "Selected work",
        title: "Built with intent.",
        italic: "Made to be used.",
        description:
          "Four independent demos exploring booking flows, operations dashboards and marketplace interfaces. These are portfolio concepts, not claims of client deployment or production scale.",
      }),
      s.jsx("div", {
        className: "project-filters",
        role: "group",
        "aria-label": "Filter projects by technology",
        children: filters.map((item) =>
          s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": filter === item,
              onClick: () => setFilter(item),
              children: item,
            },
            item,
          ),
        ),
      }),
      s.jsx("p", {
        className: "sr-only",
        "aria-live": "polite",
        children: visible.length + (visible.length === 1 ? " project shown" : " projects shown"),
      }),
      s.jsx("div", {
        className: "project-grid",
        children: visible.map((project) =>
          s.jsxs(
            "article",
            {
              className: "project-item",
              children: [
                s.jsxs("a", {
                  href: project.link,
                  ...external,
                  className:
                    "project-cover cover-" +
                    project.color +
                    (project.art ? " has-art has-screenshot" : ""),
                  onPointerMove: moveSurface,
                  onPointerLeave: resetSurface,
                  "aria-label": "Open " + project.title + " demo in a new tab",
                  children: [
                    project.art &&
                      s.jsx("img", {
                        className: "cover-art",
                        src: "./assets/" + project.art,
                        alt: project.title + " — actual demo interface",
                        width: 1536,
                        height: 1024,
                        loading: "lazy",
                      }),
                    s.jsxs("div", {
                      className: "cover-top",
                      children: [
                        s.jsx("span", { children: project.title }),
                        s.jsx("span", {
                          children: "PROJECT " + project.number,
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "cover-title",
                      "aria-hidden": true,
                      children: [
                        project.cover[0],
                        s.jsx("br", {}),
                        s.jsx("em", { children: project.cover[1] }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "cover-bottom",
                      children: [
                        s.jsx("span", { children: project.category }),
                        s.jsx("span", {
                          className: "cover-arrow",
                          children: "↗",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "project-caption",
                  children: [
                    s.jsxs("div", {
                      className: "project-title-row",
                      children: [
                        s.jsx("h3", { children: project.title }),
                        s.jsx("span", { children: project.stageLabel || "INDEPENDENT DEMO" }),
                      ],
                    }),
                    s.jsx("p", { children: project.description }),
                    s.jsxs("details", {
                      className: "project-case-study",
                      children: [
                        s.jsx("summary", { children: "Inside the project" }),
                        project.caseStudyLink && s.jsx("a", { href: project.caseStudyLink, ...external, className: "engineering-case-link", children: "Read the architecture & tradeoffs ↗" }),
                        s.jsx("dl", { children: [
                          ["The problem", project.problem],
                          ["The approach", project.approach],
                          ["Checked & limitations", project.evidence],
                        ].map(([label, text]) => s.jsxs("div", { children: [s.jsx("dt", { children: label }), s.jsx("dd", { children: text })] }, label)) }),
                      ],
                    }),
                    project.accessNote &&
                      s.jsx("p", {
                        className: "demo-access-note",
                        children: project.accessNote,
                      }),
                    s.jsxs("div", {
                      className: "project-meta",
                      children: [
                        s.jsx("span", { children: project.tech.join(" / ") }),
                        s.jsxs("a", {
                          href: project.source,
                          ...external,
                          "aria-label": "View " + project.title + " source on GitHub",
                          children: ["GitHub source ", arrow()],
                        }),
                        s.jsxs("a", {
                          href: project.link,
                          ...external,
                          children: [(project.demoLabel || "View demo") + " ", arrow()],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            project.title,
          ),
        ),
      }),
    ],
  });
}

function Services() {
  return s.jsxs("section", {
    id: "skills-section",
    className: "studio-services section-space",
    children: [
      s.jsx(SectionHeading, {
        number: "02",
        label: "What I can do for you",
        title: "The right details.",
        italic: "The bigger picture.",
        description:
          "Whether you’re starting from a blank page or improving an existing product, let’s build the next useful thing.",
      }),
      s.jsx("div", {
        className: "service-list",
        children: services.map((service, index) =>
          s.jsxs(
            "article",
            {
              className: "service-row reveal",
              onPointerMove: moveSurface,
              children: [
                s.jsx("span", {
                  className: "service-index",
                  children: "0" + (index + 1),
                }),
                s.jsxs("div", {
                  className: "service-title",
                  children: [
                    s.jsx("p", {
                      className: "studio-kicker",
                      children: service.kind,
                    }),
                    s.jsx("h3", { children: service.name }),
                  ],
                }),
                s.jsxs("div", {
                  className: "service-detail",
                  children: [
                    s.jsx("p", { children: service.description }),
                    s.jsx("span", { children: service.tags }),
                  ],
                }),
                s.jsx("a", {
                  href: "#contact-section",
                  className: "service-link",
                  "aria-label": "Discuss " + service.kind.toLowerCase(),
                  children: "↗",
                }),
              ],
            },
            service.kind,
          ),
        ),
      }),
    ],
  });
}

class CalendarBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed
      ? s.jsx("a", {
          href: github,
          ...external,
          children: "View contribution activity on GitHub ↗",
        })
      : this.props.children;
  }
}

function OpenSource({ Calendar }) {
  const [stats, setStats] = React.useState(null);
  React.useEffect(() => {
    const abort = new AbortController();
    Promise.all([
      fetch("https://api.github.com/users/deepshekhardas", {
        signal: abort.signal,
      }).then((response) => {
        if (!response.ok) throw Error();
        return response.json();
      }),
      fetch("https://api.github.com/users/deepshekhardas/repos?per_page=100", {
        signal: abort.signal,
      }).then((response) => (response.ok ? response.json() : [])),
    ])
      .then(([profile, repos]) =>
        setStats({
          repos: profile.public_repos,
          followers: profile.followers,
          stars: Array.isArray(repos)
            ? repos.reduce((total, repo) => total + repo.stargazers_count, 0)
            : 0,
        }),
      )
      .catch((error) => {
        if (error.name !== "AbortError") setStats({ unavailable: true });
      });
    return () => abort.abort();
  }, []);
  return s.jsxs("section", {
    id: "open-source-section",
    className: "studio-source section-space",
    children: [
      s.jsx(SectionHeading, {
        number: "03",
        label: "Open source",
        title: "Good code.",
        italic: "Out in the open.",
        description:
          "Real issues. Focused fixes. Public reviews. Here are three merged contributions you can inspect.",
      }),
      s.jsx("div", {
        className: "contribution-list",
        children: contributions.map((item) =>
          s.jsxs(
            "a",
            {
              href: item.link,
              ...external,
              className: "contribution-row reveal",
              children: [
                s.jsxs("div", {
                  className: "contribution-org",
                  children: [
                    s.jsx("span", {
                      className: "merged-badge",
                      children: "⑂ MERGED",
                    }),
                    s.jsx("span", { children: item.org }),
                  ],
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("h3", { children: item.title }),
                    s.jsx("p", { children: item.description }),
                  ],
                }),
                s.jsxs("span", {
                  className: "contribution-id",
                  children: [item.id, arrow()],
                }),
              ],
            },
            item.id,
          ),
        ),
      }),
      s.jsxs("div", {
        className: "github-panel reveal",
        children: [
          s.jsxs("div", {
            className: "github-panel-top",
            children: [
              s.jsxs("a", {
                href: github,
                ...external,
                children: [
                  s.jsx("span", { className: "github-symbol", children: "↗" }),
                  "@deepshekhardas",
                ],
              }),
              s.jsx("div", {
                className: "github-stats",
                children:
                  stats && !stats.unavailable
                    ? [
                        ["repos", "repositories"],
                        ["followers", "followers"],
                        ["stars", "repo stars"],
                      ].map(([key, label]) =>
                        s.jsxs(
                          "a",
                          {
                            href:
                              github +
                              "?tab=" +
                              (key === "followers"
                                ? "followers"
                                : "repositories"),
                            ...external,
                            children: [
                              s.jsx("strong", { children: stats[key] }),
                              " " + label,
                            ],
                          },
                          key,
                        ),
                      )
                    : s.jsx("span", {
                        children: stats?.unavailable
                          ? "Activity available on GitHub ↗"
                          : "Loading GitHub activity…",
                      }),
              }),
            ],
          }),
          s.jsx("div", {
            className: "calendar-scroll",
            tabIndex: 0,
            role: "region",
            "aria-label":
              "GitHub contribution calendar, scroll horizontally to explore",
            children: s.jsx(CalendarBoundary, {
              children: s.jsx(Calendar, {
                username: "deepshekhardas",
                colorScheme: "dark",
                theme: {
                  dark: ["#20201e", "#4c3c25", "#80613b", "#b58b51", "#e3bd82"],
                },
                fontSize: 12,
                blockSize: 12,
                blockMargin: 4,
              }),
            }),
          }),
          s.jsx("p", {
            className: "github-note",
            children:
              "Live public GitHub activity. Repository stars cover the first 100 public repositories returned by GitHub.",
          }),
        ],
      }),
    ],
  });
}

function About() {
  return s.jsxs("section", {
    id: "expertise-section",
    className: "studio-about section-space",
    children: [
      s.jsxs("div", {
        className: "about-layout",
        children: [
          s.jsxs("div", {
            className: "about-visual reveal",
            children: [
              s.jsx("img", {
                src: "./assets/hero-sculpture.png",
                alt: "",
                width: 1536,
                height: 1024,
                loading: "lazy",
              }),
              s.jsx("span", {
                className: "about-signature",
                children: "Deepshekhar Das",
              }),
              s.jsx("span", {
                className: "about-art-caption",
                children: "THOUGHTFUL BY DESIGN. PRECISE BY CODE.",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "about-copy reveal",
            children: [
              s.jsx("p", {
                className: "studio-kicker",
                children: "04 / The person behind the work",
              }),
              s.jsxs("h2", {
                children: [
                  "A builder’s mind.",
                  s.jsx("em", { children: "An eye for detail." }),
                ],
              }),
              s.jsx("p", {
                children:
                  "I’m Deepshekhar, CTO at EzeFare since October 2026, based in Gagaha, Gorakhpur, Uttar Pradesh, India. My work focuses on web interfaces, debugging and transport software workflows.",
              }),
              s.jsx("p", {
                children:
                  "My work spans React interfaces, web applications, and practical AI integrations. Open source keeps me close to real codebases, careful testing, and the details that make software reliable.",
              }),
              s.jsxs("a", {
                href: "#contact-section",
                className: "about-contact",
                children: ["Have something in mind? Let’s talk ", arrow()],
              }),
              s.jsxs("div", {
                id: "trajectory-section",
                className: "about-experience",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", { children: "CURRENT FOCUS" }),
                      s.jsx("h3", {
                        children: "CTO at EzeFare",
                      }),
                      s.jsx("p", {
                        children: "Since October 2026 · Web interfaces, debugging & transport workflows",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", { children: "BUILDING IN PUBLIC" }),
                      s.jsx("h3", { children: "Open-source contributor" }),
                      s.jsx("p", {
                        children:
                          "CopilotKit, TheAlgorithms & the wider ecosystem",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function Contact() {
  return s.jsxs("footer", {
    id: "contact-section",
    className: "studio-contact section-space",
    children: [
      s.jsxs("div", {
        className: "contact-grid",
        children: [
          s.jsxs("div", {
            className: "contact-copy reveal",
            children: [
              s.jsx("p", {
                className: "studio-kicker",
                children: "05 / Your next chapter",
              }),
              s.jsxs("h2", {
                children: [
                  "Let’s make",
                  s.jsx("br", {}),
                  "something",
                  s.jsx("em", { children: "matter." }),
                ],
              }),
              s.jsx("p", {
                children:
                  "An idea, a rough brief, or a product that could be better. Tell me where you want to take it.",
              }),
              s.jsxs("a", {
                href: "mailto:" + email,
                className: "contact-email",
                children: [email, arrow()],
              }),
              s.jsxs("div", {
                className: "contact-socials",
                children: [
                  s.jsxs("a", {
                    href: linkedin,
                    ...external,
                    children: ["LinkedIn ", arrow()],
                  }),
                  s.jsxs("a", {
                    href: github,
                    ...external,
                    children: ["GitHub ", arrow()],
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", {
            className: "contact-form-panel",
            children: s.jsx(EnquiryForm, {}),
          }),
        ],
      }),
      s.jsx("div", {
        className: "closing-signature",
        "aria-hidden": true,
        children: "DEEPSHEKHAR",
      }),
      s.jsxs("div", {
        className: "footer-bottom",
        children: [
          s.jsx("span", {
            children: "© " + new Date().getFullYear() + " Deepshekhar Das",
          }),
          s.jsx(OwnerInboxLink, {}),
          s.jsx("span", {
            children: "BUILT WITH INTENT, DOWN TO THE LAST DETAIL.",
          }),
          s.jsx("a", { href: "#hero-section", children: "Back to top ↑" }),
        ],
      }),
    ],
  });
}

export function StudioPortfolio({ Calendar }) {
  const page = React.useRef(null);
  React.useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    page.current?.querySelectorAll(".reveal").forEach((element) => {
      element.dataset.reveal = "ready";
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return s.jsxs("div", {
    className: "studio",
    ref: page,
    children: [
      s.jsx(ScrollProgress, {}),
      s.jsx(Header, {}),
      s.jsxs("main", {
        children: [
          s.jsx(CinematicHero, {}),
          s.jsxs("div", {
            className: "proof-band",
            children: [
              s.jsx("p", {
                children: "Building in public.\nConnecting with people.",
              }),
              s.jsxs("a", {
                href: github,
                ...external,
                children: [
                  s.jsx("strong", { children: "Merged fixes" }),
                  s.jsx("span", { children: "Inspect the code" }),
                ],
              }),
              s.jsxs("a", {
                href: linkedin,
                ...external,
                children: [
                  s.jsx("strong", { children: "Let’s connect" }),
                  s.jsx("span", { children: "LinkedIn profile" }),
                ],
              }),
              s.jsx("small", {
                children: "Concrete work over vanity metrics.",
              }),
            ],
          }),
          s.jsx(Work, {}),
          s.jsx(Services, {}),
          s.jsx(OpenSource, { Calendar }),
          s.jsx(About, {}),
        ],
      }),
      s.jsx(Contact, {}),
    ],
  });
}
