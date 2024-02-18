import './index.css'

const FilterEmoji = props => {
  const {eachEmoji, filterActiveEmoji} = props
  const {emojiName} = eachEmoji

  return (
    <option value={emojiName} selected={emojiName === filterActiveEmoji}>
      {emojiName}
    </option>
  )
}

export default FilterEmoji
