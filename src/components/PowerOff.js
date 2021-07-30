import { FaPowerOff } from 'react-icons/fa';

function PowerOff({ signIn }) {
    return (
        <div className='power-button power-off' onClick={signIn}><FaPowerOff /></div>
    )
}

export default PowerOff;