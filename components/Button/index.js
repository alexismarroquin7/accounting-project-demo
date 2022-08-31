

export const Button = ({
  text = '',
  variant = '',
  fullWidth = false
}) => {
  return <button
    className={`
      Button 
      ${variant ? variant : 'contained'}
      ${fullWidth ? 'fullWidth' : ''}
    `}
  >
    
    <p>{text}</p>
    
    <style jsx>{`
      .Button,
      .Button.contained {
        padding: 1rem;
        border-radius: 1rem;
        border: .2rem solid var(--primary-color);
        color: var(--primary-color);
        background-color: var(--secondary-color);
        font-weight: bold;
      }

      .Button.outlined {
        
      }

      .Button.fullWidth {
        width: 100%;
      }

    `}</style>
  </button>
}