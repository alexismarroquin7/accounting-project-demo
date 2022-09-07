

export const Button = ({
  variant = '',
  fullWidth = false,
  children
}) => {
  return <button
    className={`
      Button 
      ${variant ? variant : 'contained'}
      ${fullWidth ? 'fullWidth' : ''}
    `}
  >
    
    {children}
    
    <style jsx>{`
      .Button,
      .Button.contained {
        padding: 1rem;
        border-radius: 1rem;
        border: .2rem solid var(--color-d);
        color: var(--black);
        background-color: var(--color-d);
        color: var(--color-a);
        font-weight: bold;
        display: flex;
        flex-flow: row wrap;
      }

      .Button.outlined {
        
      }

      .Button.fullWidth {
        width: 100%;
      }

    `}</style>
  </button>
}