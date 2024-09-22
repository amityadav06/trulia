interface MainHeadingProps {
  title: string;
}


const MainHeading = ({title} : MainHeadingProps) => {
  return (
    <div className='main_heading'>
        <h2>{title}</h2>
    </div>
  )
}

export default MainHeading;