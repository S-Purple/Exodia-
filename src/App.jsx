import './App.css'

const cards = [
  { id: 'right-arm', label: 'right-arm.jsx' },
  { id: 'head', label: 'head.jsx' },
  { id: 'left-arm', label: 'left-arm.jsx' },
  { id: 'right-leg', label: 'right-leg.jsx' },
  { id: 'left-leg', label: 'left-leg.jsx' },
]

function Card({ label }) {
  return (
    <article className="card">
      <span className="card-label">{label}</span>
    </article>
  )
}

function App() {
  return (
    <main className="layout">
      <section className="row row-top" aria-label="Upper body">
        {cards.slice(0, 3).map((card) => (
          <Card key={card.id} label={card.label} />
        ))}
      </section>
      <section className="row row-bottom" aria-label="Lower body">
        {cards.slice(3).map((card) => (
          <Card key={card.id} label={card.label} />
        ))}
      </section>
    </main>
  )
}

export default App
