const problems = [
  {
    icon: '📅',
    title: 'Forgot the date?',
    description:
      "No more wondering if that toothbrush has been there for 2 months or 6. SparesBro remembers so you don't have to.",
  },
  {
    icon: '📦',
    title: 'Out of stock?',
    description:
      "Stop reaching for a spare razor blade only to find an empty box. Know exactly what's on your shelf - and what's running low.",
  },
  {
    icon: '💸',
    title: 'Wasted money?',
    description:
      "Don't replace things too early - or way too late. Replace at the perfect time to get the most out of every item.",
  },
];

export default function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">We've all been there</span>
          <h2>
            Life is busy.
            <br />
            Details shouldn't be.
          </h2>
          <p>
            You've got better things to worry about than whether your
            <br />
            toothbrush is two months old or six.
          </p>
        </div>
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div className="problem-card" key={index}>
              <div className="problem-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
