// Write your code here
import {useState} from 'react'

import {
  ReadMoreAppContainer,
  Title,
  SubTitle,
  Discription,
  ReactHooksImg,
  Btn,
} from './styledComponents'

const ReadMore = () => {
  const [isShort, setReadMoreReadLess] = useState(true)

  const onClickReadMoreReadLessBtn = () =>
    setReadMoreReadLess(prevState => !prevState)

  return (
    <ReadMoreAppContainer>
      <Title>React Hooks</Title>
      <SubTitle>Hooks are a new addition to React</SubTitle>
      <ReactHooksImg
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Discription>
        {isShort
          ? 'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.'
          : 'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'}
      </Discription>
      <div>
        <Btn type="button" onClick={onClickReadMoreReadLessBtn}>
          {isShort ? 'Read More' : 'Read Less'}
        </Btn>
      </div>
    </ReadMoreAppContainer>
  )
}

export default ReadMore
