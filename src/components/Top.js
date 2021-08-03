import PowerOff from "./PowerOff";
import PowerOn from "./PowerOn";
import logo from "../logo.png";

function Top({ signIn, signOut, currentUser, user }) {
    return (
        <div style={top}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '2em', height: '2em' }}>
                    <a href='https://kaloyan-kirilov.github.io/' target='_blank' rel="noreferrer"><img src={logo} height='100%' alt='logo' /></a>
                </div>
                <p style={{ paddingLeft: '.35em', fontFamily: 'Zen Dots', letterSpacing: '2px', wordSpacing: '-5px', transform: 'skew(-10deg)' }}>Chat App</p>
            </div>
            {user ? <PowerOn signOut={signOut} currentUser={currentUser} /> : <PowerOff signIn={signIn} />}
        </div>
    )
}

const top = {
    width: '100%',
    color: 'white',
    fontSize: '1.25em',
    marginLeft: '.65em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

export default Top;