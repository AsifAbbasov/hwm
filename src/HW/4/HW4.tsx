import { useState } from 'react'
import s from './HW4.module.css'
import { Button } from './Button'
import { Input } from './Input'

export const HW4 = () => {
  // Состояния
  const [currentText, setCurrentText] = useState('') // хранит текст из поля ввода
  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
  ]) // массив всех дел

  // Функция сохранения нового дела
  const handleSave = () => {
    if (!currentText) return // если поле пустое — не сохраняем
    setTexts([currentText, ...texts]) // добавляем новое дело в начало массива
    setCurrentText('') // очищаем поле ввода
  }

  return (
    <div id={'hw04'}>
      {/* Заголовок: если есть вводимый текст — показываем его, иначе заглушка */}
      {currentText ? (
        <h1 id={'hw03-text'}>{currentText}</h1>
      ) : (
        <h1 id={'hw03-default-text'}>Здесь появится новое дело</h1>
      )}

      {/* Компонент Input */}
      <Input
        currentText={currentText} // текущее значение input
        setCurrentText={setCurrentText} // функция для обновления значения
      />

      {/* Компонент Button */}
      <Button name='Сохранить' callBack={handleSave} />

      {/* Список дел */}
      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>
      <ol id={'hw04-tasks'}>
        {texts.map((el, index) => (
          <li
            key={index}
            id={`hw04-task-${index}`}
            className={index % 2 === 0 ? s.chetNechet : ''} // применяем класс для четных элементов
          >
            {el}
          </li>
        ))}
      </ol>
    </div>
  )
}
