
import { Link } from 'react-router-dom'

function Error() {

  return (
    <>
    
    <div className='error'>
      <div className="error-head">
        <h2>Oops!..</h2>
        <p className='error-p'>Sorry, an unexpected error has occurred.<br/>
          <i>Not found!</i>
        </p>
        </div>
          <div className="btn-footer">
            <Link to = "/" href="" className="brand-btn"> Back to Home!</Link>
          </div>
    </div>
    </>
  )
}

export default Error