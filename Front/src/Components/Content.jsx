import '../Styles/Content.css'
import Community from './Community'

function Content({content}) {
    return(
        <div className='content'>
            {content}
            <Community/>
        </div>
    )
}

export default Content