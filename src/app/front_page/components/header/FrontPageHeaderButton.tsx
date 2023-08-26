export const FrontPageHeaderButton = ({label = "Placeholder", fun: onClick} : {label: string, fun: () => void}) => {
  return (
      <button 
        className={'text-3xl mx-6 my-2 p-2' 
        + ' border-solid relative'
        + ' before:absolute before:border-solid before:h-[50%] before:aspect-square'
        + ' before:-left-1 before:top-1 before:opacity-0'
        + ' before:transition-all hover:before:opacity-100'
        + ' before:border-t-2 before:border-color-primary'
        + ' before:border-l-2'

        + ' after:absolute after:border-solid after:h-[50%] after:aspect-square'
        + ' after:-right-1 after:bottom-0 after:opacity-0'
        + ' after:transition-all hover:after:opacity-100'
        + ' after:border-b-2 after:border-color-primary'
        + ' after:border-r-2'
      }
        onClick={onClick}
        >
        {label}
      </button>
  )
}

