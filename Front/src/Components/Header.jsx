import '../Styles/Header.css'

function Header() {

    function NestAPI(){
        fetch(`http://localhost:8000/`, 
        {
            'method': 'GET',
            mode: 'no-cors'
        }
        ).then(data => console.log(data))
    }

    return(
        <div className='header'>
            <button onClick={NestAPI}>Log-in</button>
        </div>
    )
}

export default Header