const Box = props => {
  //  Write your code here.
  const {className, text} = props
  const containerClassName = `container ${className}`
  return (
    <div className={containerClassName}>
      <p className='text'> {text} </p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'> Boxes </h1>
    <div className='box-containers'>
      <Box className='box-small' text='Small' />

      <Box className='box-medium' text='Large' />

      <Box className='box-large' text='Medium' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
