import BestCharacters from "../components/BestCharacters"; //eso funciona sin poner "../components/BestCharacters/BestCharacters" por el index, que lo redirige ya con el export.
import ListLastEvents from "../components/ListLastEvents";


export default function Home() {
    return (
        <div>
            <BestCharacters />
            <ListLastEvents />
        </div>
        
    );
}