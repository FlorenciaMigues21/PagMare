import { useEffect, useState } from "react";
import { database as db } from "../firebase/config";

export const useData = (collectionName) => {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        const unsub = db.collection(collectionName)
            .onSnapshot(snap => {
                const documents = [];
                //console.log(documents);
                snap.forEach(doc => {
                    documents.push({id: doc.id, ...doc.data()})
                });
                setDocs(documents);
            });
        // Limpiar el componente
        return () => unsub();
    }, [collectionName]);
    return { docs }
}