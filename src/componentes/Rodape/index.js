import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <div className='social-media'>
                <ul>
                    <li><a href='#'><img src="/imagens/fb.png" alt='Logo Facebook' /></a></li>
                    <li><a href='#'><img src="/imagens/tw.png" alt='Logo Twitter' /></a></li>
                    <li><a href='#'><img src="/imagens/ig.png" /></a></li>
                </ul>
            </div>
            <div className='img-logo'>
                <img src='/imagens/logo.png' />           
            </div>
            <div className='descricao'>
                <h6>Desenvolvido por Alura</h6>
            </div>
        </footer>
    )
}

export default Rodape