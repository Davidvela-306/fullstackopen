const Notification = ({ message, type }) => {
  console.log("message: ", message)
  console.log("type: ", type)
  if (message === null) {
    return null
  }

  return (
    <div className={`${type==='error'?'error':'success'}`}>
      {message}
    </div>
  )
}

export default Notification