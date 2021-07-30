import { FaPowerOff } from 'react-icons/fa';

function PowerOn({ signOut, currentUser }) {
    return currentUser && (
        <div className='power-button power-on' onClick={signOut}><FaPowerOff /></div>
    )
}

export default PowerOn;