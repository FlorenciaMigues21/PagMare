import {useData} from "../../hooks/useData";
import {ButtonAppBar} from "./FilterDropMenu";
import {useState} from "react";


function Catalog(){

    const { docs: prods } = useData('Productos');
    const [ filter, setFilter ] = useState(null)

    const temp = {}

    if (prods.length > 0){
        for (let i=0; i<prods.length; i++){
            if (temp[prods[i].Caracteristicas] == null){
                temp[prods[i].Caracteristicas] = [i];
            } else {
                temp[prods[i].Caracteristicas].push(i)
            }
        }
        setFilter(temp)
    }




    return (
        <>
            <div id='filter-cont'>
                <ButtonAppBar/>
            </div>
        </>
    )

}