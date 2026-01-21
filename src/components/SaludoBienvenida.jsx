import '../css/SaludoBienvenida.css'

const SaludoBienvenida =({saludo}) => {

        return (
            <div className = 'saludo-bienvenida'>
                <h3>{saludo}</h3>
            </div>
        )


}
export default SaludoBienvenida