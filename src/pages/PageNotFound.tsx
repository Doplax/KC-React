import { Button } from '@components/styledComponents/Button'
import error404 from '/images/error404.webp'

export function PageNotFound(){
    return(
        <div className='flex flex-col justify-center items-center'>
            <img  src={error404}></img>
            <h1 className='text-2xl font-bold m-5'>Nada por aquí</h1>
            <div className='flex flex-col justify-center items-center m-5'>
                <p>Uish... Esta página no existe en Wallapop, lo que sí que existen son miles</p>
                <p>de oportunidades esperándote.</p>
            </div>
            <a className='m-5' href="/">
                <Button $variant='fullFill'>Ver productos</Button>
            </a>
        </div>
    )
}