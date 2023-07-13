import { Text } from '@/ui/atoms'
import { Seo } from '@/ui/organisms'
import { GenericLayout } from '@/ui/templates'
import * as React from 'react'
import styled from 'styled-components'
import { Container } from '@/ui/atoms'
import { useCountdown } from '@/features/countdown'
// @ts-ignore
import map from './map.png'

export default () => {
  const [days, hours, minutes, seconds] = useCountdown(1695081600 * 1000)

  return (
    <GenericLayout>
      <Seo />
      <Wedding>
        <Container>
          <WeddingNames>Анна и Дима</WeddingNames>
          <WeddingTitle>Мы женимся</WeddingTitle>
          <WeddingDate>19 сентября 2023 года</WeddingDate>
        </Container>
      </Wedding>

      {/* // */}
      <Invite>
        <Container>
          <SectionTitle>Дорогой гость</SectionTitle>
          <InviteText>
            Мы рады сообщить тебе, что 19 сентября состоится самое главное
            торжество в нашей жизни - день нашей свадьбы! Приглашаем тебя
            разделить с нами радость этого незабываемого дня. Ждем тебя!
          </InviteText>
        </Container>
      </Invite>

      {/* // */}
      <Countdown>
        <CountdownTitle>До праздника:</CountdownTitle>
        <Timer>
          <TimerItem>
            <TimerValue>
              {days < 10 && 0}
              {days}
            </TimerValue>
            <TimerLabel>Дней</TimerLabel>
          </TimerItem>
          <TimerItem>
            <TimerValue>
              {hours < 10 && 0}
              {hours}
            </TimerValue>
            <TimerLabel>Часов</TimerLabel>
          </TimerItem>
          <TimerItem>
            <TimerValue>
              {minutes < 10 && 0}
              {minutes}
            </TimerValue>
            <TimerLabel>Минут</TimerLabel>
          </TimerItem>
          <TimerItem>
            <TimerValue>
              {seconds < 10 && 0}
              {seconds}
            </TimerValue>
            <TimerLabel>Секунд</TimerLabel>
          </TimerItem>
        </Timer>
      </Countdown>
      {/* // */}
      <Calendar>
        <CalendarButton>Добавить в календарь</CalendarButton>
      </Calendar>
      {/* // */}
      <Place>
        <Container>
          <SectionTitle>Место -- Пушкинская усадьба</SectionTitle>
          <SectionDescription>
            Собственная кухня: разнообразное, качественное и сытное банкетное
            меню традиционной европейской кухни не оставит равнодушным даже
            самого изысканного гурмана.
          </SectionDescription>
          <PlacePhotos>
            {[
              'https://usadbapushkinskaya.ru/static/images/photos/04-5.jpg',
              'https://usadbapushkinskaya.ru/static/images/photos/04-8.jpg',
              'https://usadbapushkinskaya.ru/static/images/photos/04-10.jpg',
              'https://usadbapushkinskaya.ru/static/images/photos/01-4.jpg',
              'https://usadbapushkinskaya.ru/static/images/g/4/1.jpg',
              'https://usadbapushkinskaya.ru/static/images/g/4/2.jpg',
            ].map((src, key) => (
              <PlacePhoto key={key} src={src} />
            ))}
          </PlacePhotos>
        </Container>
      </Place>

      {/* // */}

      <Map>
        <SectionTitle>Местоположение</SectionTitle>
        <InteractiveMap />
      </Map>

      {/* // */}

      <Schedule>
        <Container>
          <SectionTitle>Расписание</SectionTitle>
          <ScheduleList>
            {[
              {
                time: '10:00',
                title: 'Встречаемся',
                text: 'Фотосессия там и то и там то',
                address: 'Английская набережная',
              },
              {
                time: '22:00',
                title: 'Расходимся',
                text: 'Берем еду и уезжайем домой',
                address: 'Пушкинская усадьба',
              },
            ].map(({ time, title, text, address }) => (
              <ScheduleItem>
                <ScheduleLeft>
                  <ScheduleTime>{time}</ScheduleTime>
                </ScheduleLeft>
                <ScheduleRight>
                  <ScheduleTitle>{title}</ScheduleTitle>
                  <ScheduleDescription>{text}</ScheduleDescription>
                  <ScheduleAddress>{address}</ScheduleAddress>
                </ScheduleRight>
              </ScheduleItem>
            ))}
          </ScheduleList>
        </Container>
      </Schedule>
      {/* // */}
      <Dresscode>
        <Container>
          <SectionTitle>Дресскод</SectionTitle>
          <SectionDescription>
            Официальный дресс-код – строгие однотонные наряды без ярких
            акцентов.
          </SectionDescription>
          <DresscodeColors>
            <DresscodeColor data-color="1" />
            <DresscodeColor data-color="2" />
            <DresscodeColor data-color="3" />
            <DresscodeColor data-color="4" />
            <DresscodeColor data-color="5" />
          </DresscodeColors>
        </Container>
      </Dresscode>
      {/* <Seating>Рассадка</Seating> */}

      {/* // */}
      <Questions>
        <Container>
          <SectionTitle>Вопросы и ответы</SectionTitle>
          <QuestionsList>
            <Question>
              <QuestionTitle>Нужно ли дарить цветы?</QuestionTitle>
              <QuestionAnswear>
                Просим вас не дарить цветы, так как на следующий день мы улетаем
                в свадебное путешествие и не успеем насладиться красивыми
                букетами.
              </QuestionAnswear>
            </Question>
            <Question>
              <QuestionTitle>Какие подарки предпочтительны?</QuestionTitle>
              <QuestionAnswear>
                Мы составили wish-лист подарков, которые были бы нам особенно
                приятны или полезны. Но мы будем рады и сюрпризам, а также
                поздравлениям в конвертах.
              </QuestionAnswear>
            </Question>
            <Question>
              <QuestionTitle>
                Возможно ли приехать на своем автомобиле?
              </QuestionTitle>
              <QuestionAnswear>
                Да, на территории отеля имеется парковка. Для бронирования места
                просим заранее сообщить марку и номер автомобиля.
              </QuestionAnswear>
            </Question>
          </QuestionsList>
        </Container>
      </Questions>
      {/* // */}
      <Thanks>Спасибо что прошли</Thanks>
    </GenericLayout>
  )
}

const Section = styled.div`
  padding: 42px 0;
`

const SectionTitle = styled.div`
  font-size: 3.6rem;
  text-align: center;
  margin-bottom: 24px;
`

const SectionDescription = styled.div`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 36px;
`

const Wedding = styled.div`
  min-height: 80vh;
  background-color: #d199ff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WeddingNames = styled.div`
  font-family: 'JetBrains Mono', serif;
  font-size: 4rem;
`
const WeddingTitle = styled.div`
  font-size: 2.4rem;
`

const WeddingDate = styled.div`
  font-size: 1.8rem;
`

const Calendar = styled.div`
  display: flex;
  justify-content: center;
  padding: 36px 0;
`

const CalendarButton = styled.button`
  background-color: #d199ff;
  max-width: 320px;
  width: 100%;
  height: 56px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  font-size: 1.4rem;
  cursor: pointer;
`

const Invite = styled.div`
  text-align: center;
  padding: 36px 0;
`

const InviteTitle = styled.div`
  font-size: 2.4rem;
`

const InviteText = styled.div`
  font-size: 1.8rem;
  margin-top: 24px;
`

const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CountdownTitle = styled.div`
  font-size: 1.8rem;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
`

const Timer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`

const TimerItem = styled.div`
  text-align: center;
`

const TimerValue = styled.div`
  font-size: 4.2rem;
`

const TimerLabel = styled.div`
  font-size: 1.4rem;
  text-transform: uppercase;
`

//

const Schedule = styled(Section)``

const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  padding: 48px 0 0 0;
`

const ScheduleItem = styled.div`
  display: flex;
  padding-bottom: 48px;
`

const ScheduleLeft = styled.div`
  width: 25%;
`

const ScheduleRight = styled.div`
  width: 75%;
`

const ScheduleTime = styled.div`
  font-size: 2.4rem;
  line-height: 0;
`

const ScheduleTitle = styled.div`
  font-size: 2.4rem;
  line-height: 0;
  margin-bottom: 24px;
  position: relative;

  &:before {
    content: '○';
    position: absolute;
    left: -36px;
  }
`

const ScheduleDescription = styled.div`
  font-size: 1.8rem;
  margin-bottom: 12px;
`

const ScheduleAddress = styled.div`
  font-size: 1.8rem;
  opacity: 0.75;
  border-bottom: 1px dashed;
  display: inline-block;
`

const Dresscode = styled.div``

const DresscodeColors = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 24px 0;
`

const DresscodeColor = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;

  &[data-color='1'] {
    background-color: #8b00ff;
  }
  &[data-color='2'] {
    background-color: #ad4bfd;
  }
  &[data-color='3'] {
    background-color: #c680ff;
  }
  &[data-color='4'] {
    background-color: #daadff;
  }
  &[data-color='5'] {
    background-color: #f3e4ff;
  }
`

const Place = styled(Section)``

const PlacePhotos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 0;
`

const PlacePhoto = styled.div<{ src: string }>`
  width: 240px;
  height: 240px;
  background-image: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 3px;
`

//

const Map = styled(Section)``

const InteractiveMap = styled.div`
  margin-top: 48px;
  background-image: url(${map});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
`

const Seating = styled.div``

//

const Questions = styled.div`
  margin-top: 24px;
`

const QuestionsList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  max-width: 720px;
  margin: 0 auto;
`

const Question = styled.div``

const QuestionTitle = styled.div`
  font-size: 2.4rem;
  margin-bottom: 8px;
`

const QuestionAnswear = styled.div`
  font-size: 1.8rem;
`

const Thanks = styled.div``
