import { b as React, j as ui } from './index-BwnWIdL-.js';
const questions = [
  { question: 'What can we build together?', answer: 'Web applications, MVPs, AI integrations, and improvements to an existing product. Start with a short project brief and agree on a useful first milestone.' },
  { question: 'Where can I see your work?', answer: 'Selected Works contains four linked project demos. Open Source contains three specific merged pull requests, including changes to CopilotKit and TheAlgorithms.' },
  { question: 'How do I start a project?', answer: 'Use the contact form to send a project enquiry directly to my private inbox. Include your timeline and budget range if you know them. You can also email deepshekhardas1234@gmail.com.' }
];
export function AIChat() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const launcher = React.useRef(null);
  function close() { setOpen(false); launcher.current?.focus(); }
  React.useEffect(() => {
    if (!open) return;
    function escape(event) { if (event.key === 'Escape') close(); }
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  return ui.jsxs(React.Fragment, { children: [
    ui.jsx('button', { ref: launcher, type: 'button', className: 'portfolio-guide-launcher', 'aria-label': open ? 'Close portfolio guide' : 'Open portfolio guide', 'aria-expanded': open, 'aria-controls': 'portfolio-guide', onClick: () => open ? close() : setOpen(true), children: '?' }),
    open && ui.jsxs('aside', { id: 'portfolio-guide', className: 'portfolio-guide', 'aria-label': 'Portfolio guide', children: [
      ui.jsxs('div', { className: 'portfolio-guide-header', children: [ui.jsx('h2', { children: 'A few quick answers' }), ui.jsx('button', { type: 'button', 'aria-label': 'Close guide', onClick: close, children: '×' })] }),
      ui.jsx('p', { children: 'Choose a question about my work or how to start a project.' }),
      ui.jsx('div', { className: 'guide-options', children: questions.map((item, index) => ui.jsx('button', { type: 'button', 'aria-pressed': selected === index, onClick: () => setSelected(index), children: item.question }, item.question)) }),
      selected !== null && ui.jsx('p', { className: 'guide-answer', 'aria-live': 'polite', children: questions[selected].answer }),
      ui.jsx('a', { href: '#contact-section', className: 'portfolio-secondary', onClick: () => setOpen(false), children: 'Discuss your project ↗' })
    ] })
  ] });
}
