import './index.css'

const FilterWeek = props => {
  const {eachDay, filterActiveWeek} = props
  const {day} = eachDay

  return (
    <option value={day} selected={day === filterActiveWeek}>
      {day}
    </option>
  )
}

export default FilterWeek
