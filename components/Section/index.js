export const Section = ({ children }) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          padding: 4rem 0;
          border: 1px solid black;
        }
      `}</style>
    </section>
  )
}