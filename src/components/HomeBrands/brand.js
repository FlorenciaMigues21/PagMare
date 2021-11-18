/***
 * El objeto brand contiene un documento con todos los atributos de marcas.
 *
 * Los usados son:
 * -id: id unico por el cual esta almacenado en la bdd.
 * -nombre: nombre de la marca.
 * -logo: url(token activo) referenciable como src para image, contiene el logo de dicha marca.
 *
 * El componente brand devuelve una unica marca, osea, lo que se modele aca sera repetido para cada marca, y sera
 * iterado dentro del componente "Container" en "indexBrandsConteiner.js".
 */

export const Brand = ({ brand }) => {
    const { id, nombre , logo } = brand;

    return (
        <div>
            <img src={logo} alt={id}/>

        </div>
    )
}