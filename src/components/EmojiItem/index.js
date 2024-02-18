import './index.css'

const EmojiItem = props => {
  const {eachEmoji, activeEmoji, onChangeActiveEmoji} = props
  const {emojiName, emojiUrl} = eachEmoji

  const activeEmojiNameStyle =
    activeEmoji === emojiName ? 'active-emoji-name' : ''

  const activeButtonStyle = activeEmoji === emojiName ? 'active-emoji-btn' : ''

  const changeActiveEmoji = () => {
    onChangeActiveEmoji(emojiName)
  }

  return (
    <li className="emoji-item">
      <p className={`emoji-name ${activeEmojiNameStyle}`}>{emojiName}</p>{' '}
      <button
        onClick={changeActiveEmoji}
        type="button"
        className={`emoji-btn ${activeButtonStyle}`}
      >
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiItem
