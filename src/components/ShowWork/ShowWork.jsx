
const studentWork = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'green',
    marginBottom: '2%',

}

export default function ShowWork( props ) {

    const { people, title, link, img, date, description } = props;

    return (
        <>
            <div className="studentWork" style={studentWork}>
                <h3>{title}</h3>
                <img src={img}/>
                <h4>{people}</h4>
                <h5>{date}</h5>
                <a href={link} target={"_blank"}>Check out the work</a>
                {description}
            </div>
        </>
    )
}