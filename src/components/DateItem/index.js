import './index.css'

const DateItem = props => {
  const {activeEmoji, eachDateItem, onChangeDateEmoji} = props
  const {id, date, emojiUrl, emojiName} = eachDateItem
  const changeDateEmoji = () => {
    if (emojiUrl === '') {
      onChangeDateEmoji(id, activeEmoji)
    } else if (emojiName !== activeEmoji) {
      onChangeDateEmoji(id, activeEmoji)
    } else if (emojiName === activeEmoji) {
      onChangeDateEmoji(id, '')
    }
  }

  return (
    <li>
      <button type="button" onClick={changeDateEmoji}>
        <p>{date}</p>
        {emojiName !== '' && <img alt={emojiName} src={emojiUrl} />}
      </button>
    </li>
  )
}

export default DateItem
