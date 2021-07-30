function WelcomeText() {
    return (
        <div className='welcome-text-size' style={text}>
            <p style={{ textAlign: 'center', paddingBottom: '.5em', fontFamily: 'Righteous', wordSpacing: '-1px', transform: 'scaleX(.95)' }}>Welcome to my Chat Room!</p>
            <div style={{ width: '13.25em' }}>
                <p style={{ textAlign: 'justify', fontFamily: 'Barlow Condensed' }}>This app is using a Google Back-End service. To enter, please sign in with your Google account by pressing the power button.</p>
            </div>
        </div>
    )
}

const text = {
    padding: '1em 1.25em 1.25em 1.25em',
    backgroundImage: 'linear-gradient(150deg, white, rgba(255, 255, 255, .55))',
    borderRadius: '.5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'hsl(240, 15%, 25%)'
}

export default WelcomeText;