import { useEffect, useState } from "react";
import {database as db} from "../../firebase/config";

export const useDataByCat = (collectionName, cat) => {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        const unsub = db.collection(collectionName)
            .onSnapshot(snap => {
                const documents = [];
                //console.log(documents);
                snap.forEach(doc => {
                    if (doc.data().Caracteristicas === cat){
                        documents.push({id: doc.id, ...doc.data()});
                        console.log("DOC: ", doc);
                    }
                });
                setDocs(documents);
            });
        // Limpiar el componente
        return () => unsub();
    }, [collectionName]);
    return { docs }
}