import { getAdverts } from "@services/advertsService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from '@components/Spinner/Spinner'


export function AdvertsPage() {
    const [advertsList, setAdvertsList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsFetching(false)
                const response = await getAdverts();
                setAdvertsList(response.data);
                setIsFetching(true)
            } catch (err) {
                console.log('Error: ', err);
            }
        };
        fetchData();
    }, []);



  

    return (
        <div>
            {/* Asegúrate de que el input con id 'searchBar' exista en tu HTML */}
            <div className="flex flex-wrap justify-center">
                {isFetching
                    ? <RenderAdvertList advertsList={advertsList} />
                    : <Spinner />
                }

            </div>
        </div>
    );
}

function RenderAdvertList({ advertsList }) {
    return (
        <>
            {advertsList.map((advert, key) => (
                <Link to={`/adverts/${advert.id}`} key={key} className="m-3">
                    <div className="max-w-sm rounded overflow-hidden">
                        <img className="w-full rounded-lg" src="https://github.com/Doplax/doplax/blob/main/assets/img/product/defaultImage.png?raw=true" alt={`${advert.name}`} />
                        <div className="flex justify-between w-full mt-1">
                            <span className="text-gray-700 font-bold text-xl">{advert.price} $</span>
                            <span className="bg-[--primary-color] font-bold text-white rounded-md text-xs py-1 px-2 hover:bg-[--secondary-color]">{advert.tags}</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span>{advert.name}</span>
                            <span> {advert.sale ? "En Venta" : "NO en venta"}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

