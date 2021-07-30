function InactiveForm() {
    return (
        <form style={{ width: '90%', height: '2em', display: 'flex', justifyContent: 'space-between', pointerEvents: 'none', opacity: '.65' }}>
            <div className='emoji-icon'></div>
            <input type='text' placeholder='Sign in to chat...' />
            <button className='send-button'>Send</button>
        </form>
    )
}

export default InactiveForm;