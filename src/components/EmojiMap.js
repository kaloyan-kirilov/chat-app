const emojiMap = (value) => {
    value = value.replace(':)', '🙂')
    value = value.replace(';)', '😉')
    value = value.replace(':P', '😜')
    value = value.replace(':D', '😃')
    value = value.replace('xD', '😆')
    value = value.replace('^_^', '😊')
    value = value.replace('o_o;', '😅')
    value = value.replace(':\\', '😕')
    value = value.replace(':(', '😞')
    value = value.replace(';(', '😢')
    value = value.replace('>:|', '😠')
    value = value.replace('O_O', '😳')
    value = value.replace(';\\', '🤔')
    value = value.replace(':|', '😐')
    value = value.replace('-_-', '😑')
    value = value.replace(':O', '😲')
    value = value.replace(':X', '😶')
    value = value.replace('<3', '😍')
    value = value.replace('8)', '😎')
    value = value.replace(':Z', '😴')
    
    return value
}

export default emojiMap;