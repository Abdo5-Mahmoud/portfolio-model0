import './Letter.scss'

export default function Letter({ letterClass, strArray, idx }) {
  return (
    <>
      {strArray.map((char, i) => {
        return (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        )
      })}
    </>
  )
}
