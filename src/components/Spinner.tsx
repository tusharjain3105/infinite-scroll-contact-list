import {ImSpinner9} from 'react-icons/im'

const Spinner = ({size=24}) => {
  return (
    <div className='spinner'><ImSpinner9 size={size}/></div>
  )
}

export default Spinner