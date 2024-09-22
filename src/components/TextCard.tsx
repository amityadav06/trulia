interface TextCardProps {
    title: string,
    place: string,
    desc: string,
    bgc: string
}

const TextCard = ({title, place, desc, bgc} : TextCardProps) => {
  return (
    <div className="card_text h-[100%] flex flex-col items-start p-4" style={{backgroundColor: `${bgc}`}}>
        <h3 className="card_title">{title}</h3>
        <h4 className="card_residence">{place}</h4>
        <p className="card_desc">{desc}</p>
    </div>
  )
}

export default TextCard