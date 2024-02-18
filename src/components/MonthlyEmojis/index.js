import {Component} from 'react'
import './index.css'
import EmojiItem from '../EmojiItem'
import FilterEmoji from '../FilterEmoji'
import FilterWeek from '../FilterWeek'
import DateItem from '../DateItem'

const initialEmojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

const daysList = [
  {
    id: '3639dd44-a5d5-11ec-b909-0242ac120002',
    day: 'Sun',
  },
  {
    id: '3639e17c-a5d5-11ec-b909-0242ac120002',
    day: 'Mon',
  },
  {
    id: '3639e37a-a5d5-11ec-b909-0242ac120002',
    day: 'Tue',
  },
  {
    id: '3639e532-a5d5-11ec-b909-0242ac120002',
    day: 'Wed',
  },
  {
    id: '3639e8c0-a5d5-11ec-b909-0242ac120002',
    day: 'Thu',
  },
  {
    id: '3639ea32-a5d5-11ec-b909-0242ac120002',
    day: 'Fri',
  },
  {
    id: '3639eb90-a5d5-11ec-b909-0242ac120002',
    day: 'Sat',
  },
]

const initialDatesList = [
  {
    id: '380e6b12-a454-11ec-b909-0242ac120002',
    date: '01',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6cac-a454-11ec-b909-0242ac120002',
    date: '02',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6de2-a454-11ec-b909-0242ac120002',
    date: '03',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6efa-a454-11ec-b909-0242ac120002',
    date: '04',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7012-a454-11ec-b909-0242ac120002',
    date: '05',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e712a-a454-11ec-b909-0242ac120002',
    date: '06',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7454-a454-11ec-b909-0242ac120002',
    date: '07',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7576-a454-11ec-b909-0242ac120002',
    date: '08',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e768e-a454-11ec-b909-0242ac120002',
    date: '09',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e77a6-a454-11ec-b909-0242ac120002',
    date: '10',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e78b4-a454-11ec-b909-0242ac120002',
    date: '11',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e79d6-a454-11ec-b909-0242ac120002',
    date: '12',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7aee-a454-11ec-b909-0242ac120002',
    date: '13',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7c06-a454-11ec-b909-0242ac120002',
    date: '14',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7ec2-a454-11ec-b909-0242ac120002',
    date: '15',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7fda-a454-11ec-b909-0242ac120002',
    date: '16',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e80e8-a454-11ec-b909-0242ac120002',
    date: '17',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8282-a454-11ec-b909-0242ac120002',
    date: '18',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e83e0-a454-11ec-b909-0242ac120002',
    date: '19',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8516-a454-11ec-b909-0242ac120002',
    date: '20',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8638-a454-11ec-b909-0242ac120002',
    date: '21',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e88cc-a454-11ec-b909-0242ac120002',
    date: '22',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e89f8-a454-11ec-b909-0242ac120002',
    date: '23',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8b1a-a454-11ec-b909-0242ac120002',
    date: '24',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8c32-a454-11ec-b909-0242ac120002',
    date: '25',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8d40-a454-11ec-b909-0242ac120002',
    date: '26',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8e4e-a454-11ec-b909-0242ac120002',
    date: '27',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8f70-a454-11ec-b909-0242ac120002',
    date: '28',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e90e2-a454-11ec-b909-0242ac120002',
    date: '29',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e94de-a454-11ec-b909-0242ac120002',
    date: '30',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e96be-a454-11ec-b909-0242ac120002',
    date: '31',
    emojiUrl: '',
    emojiName: '',
  },
]

class MonthlyEmojis extends Component {
  state = {
    emojisList: initialEmojisList,
    datesList: initialDatesList,
    activeEmoji: initialEmojisList[0].emojiName,
    filterActiveEmoji: initialEmojisList[0].emojiName,
    filterActiveWeek: daysList[0].day,
  }

  onChangeActiveEmoji = emojiName => {
    this.setState({activeEmoji: emojiName})
  }

  onChangeFilterActiveEmoji = event => {
    this.setState({filterActiveEmoji: event.target.value})
  }

  onChangeFilterActiveWeek = event => {
    this.setState({filterActiveWeek: event.target.value})
  }

  onChangeDateEmoji = (id, activeEmoji) => {
    const {emojisList, datesList} = this.state
    let newEmojiName
    let newEmojiUrl
    if (activeEmoji === '') {
      newEmojiName = ''
      newEmojiUrl = ''
    } else {
      const filteredEmojisList = emojisList.filter(
        eachEmojiItem => eachEmojiItem.emojiName === activeEmoji,
      )
      newEmojiName = filteredEmojisList[0].emojiName
      newEmojiUrl = filteredEmojisList[0].emojiUrl
    }
    const newDatesList = datesList.map(eachDateItem =>
      eachDateItem.id === id
        ? {...eachDateItem, emojiUrl: newEmojiUrl, emojiName: newEmojiName}
        : eachDateItem,
    )
    this.setState({datesList: newDatesList})
  }

  render() {
    const {
      emojisList,
      datesList,
      activeEmoji,
      filterActiveEmoji,
      filterActiveWeek,
    } = this.state
    let filteredDatesList = datesList
    if (filterActiveWeek === 'Sun') {
      filteredDatesList = filteredDatesList.filter(eachDateItem =>
        ['01', '08', '15', '22', '29'].includes(eachDateItem.date),
      )
    } else if (filterActiveWeek === 'Mon') {
      filteredDatesList = filteredDatesList.filter(eachDateItem =>
        ['02', '09', '16', '23', '30'].includes(eachDateItem.date),
      )
    } else if (filterActiveWeek === 'Tue') {
      filteredDatesList = filteredDatesList.filter(eachDateItem =>
        ['03', '10', '17', '24', '31'].includes(eachDateItem.date),
      )
    } else if (filterActiveWeek === 'Wed') {
      filteredDatesList = filteredDatesList.filter(eachDateItem =>
        ['04', '11', '18', '25'].includes(eachDateItem.date),
      )
    } else if (filterActiveWeek === 'Thu') {
      filteredDatesList = filteredDatesList.filter(eachDateItem =>
        ['05', '12', '19', '26'].includes(eachDateItem.date),
      )
    } else if (filterActiveWeek === 'Fri') {
      filteredDatesList = filteredDatesList.filter(eachDateItem =>
        ['06', '13', '20', '27'].includes(eachDateItem.date),
      )
    } else if (filterActiveWeek === 'Sat') {
      filteredDatesList = filteredDatesList.filter(eachDateItem =>
        ['07', '14', '21', '28'].includes(eachDateItem.date),
      )
    }

    const newfilteredDatesList = filteredDatesList.filter(
      eachDateItem => eachDateItem.emojiName === filterActiveEmoji,
    )

    const count = newfilteredDatesList.length

    return (
      <div className="bg-container">
        <h1 className="title"> Monthly Emojis </h1>
        <div className="bottom-container">
          <div className="calendar-container">
            <h1 className="month-name"> January</h1>
            <ul className="days-list">
              <li>
                <p>Sun</p>
              </li>
              <li>
                <p>Mon</p>
              </li>
              <li>
                <p>Tue</p>
              </li>
              <li>
                <p>Wed</p>
              </li>
              <li>
                <p>Thu</p>
              </li>
              <li>
                <p>Fri</p>
              </li>
              <li>
                <p>Sat</p>
              </li>
            </ul>
            <ul className="dates-list">
              {datesList.map(eachDateItem => (
                <DateItem
                  key={eachDateItem.id}
                  activeEmoji={activeEmoji}
                  eachDateItem={eachDateItem}
                  onChangeDateEmoji={this.onChangeDateEmoji}
                />
              ))}
            </ul>
          </div>
          <div className="bottom-right-container">
            <div className="emojis-container">
              <ul className="emojis-list">
                {emojisList.map(eachEmoji => (
                  <EmojiItem
                    key={eachEmoji.id}
                    eachEmoji={eachEmoji}
                    activeEmoji={activeEmoji}
                    onChangeActiveEmoji={this.onChangeActiveEmoji}
                  />
                ))}
              </ul>
            </div>
            <div className="filter-container">
              <div className="filters-header">
                <select onChange={this.onChangeFilterActiveEmoji}>
                  {emojisList.map(eachEmoji => (
                    <FilterEmoji
                      key={eachEmoji.id}
                      eachEmoji={eachEmoji}
                      filterActiveEmoji={filterActiveEmoji}
                    />
                  ))}
                </select>
                <select onChange={this.onChangeFilterActiveWeek}>
                  {daysList.map(eachDay => (
                    <FilterWeek
                      key={eachDay.id}
                      eachDay={eachDay}
                      filterActiveWeek={filterActiveWeek}
                    />
                  ))}
                </select>
              </div>
              <h1 className="emojis-count">0{count}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MonthlyEmojis
