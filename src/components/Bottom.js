import ActiveForm from "./ActiveForm";
import InactiveForm from "./InactiveForm";

function Bottom({ user, value, setValue, sendMessage, emoji }) {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {user ? <ActiveForm value={value} setValue={setValue} sendMessage={sendMessage} emoji={emoji} /> : <InactiveForm />}
        </div>
    )
}

export default Bottom;