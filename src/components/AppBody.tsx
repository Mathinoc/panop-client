import Header from './Header'

export default function AppBody({children}: appBodyProps) {
  return (
    <div className="AppBody">
      <Header />
      <div className="AppBody-wrapper">
        {children}
      </div>
    </div>
  )
}

interface appBodyProps {
  children: JSX.Element | JSX.Element[]
}
