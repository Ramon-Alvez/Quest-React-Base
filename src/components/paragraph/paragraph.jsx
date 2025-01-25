const Paragraph = ({color}) => {
    return (
        <p className='paragraph' style={{ color: color, textTransform: 'uppercase' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis ducimus cumque qui reiciendis dolorum, facere quibusdam debitis. Quas culpa animi soluta doloremque! Quaerat, possimus eius commodi aperiam dicta doloremque!</p>
    )
}

Paragraph.defaultProps = {
    color: '#4097FC'
}

export default Paragraph