
import styles from '@/app/sobrenos/page.module.css'

import Image from 'next/image'

function Integrante(props) {

    return (
        <>
            {props.ImageUrls.map((imageUrl, index) => (
                <div  key={index}className={styles.card}>
                    <div
                    
                        className={styles.imgBx}
                    >
                        <Image src={imageUrl.img} alt={`Integrante ${index}`} width={300} height={250}  />
                    </div>
                    <div className={styles.content}>
                        <h3>Nome: {imageUrl.nome}</h3><br />
                        <h3>Idade: {imageUrl.idade}</h3><br />
                        <h3>Posição: {imageUrl.posicao}</h3>
                    </div>
                </div>
            ))}
        </>
    )

}

export default Integrante