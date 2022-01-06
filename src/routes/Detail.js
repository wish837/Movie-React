import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const getMovie = async() => {
        const json = await (
            await fetch (
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <h1>영화 상세 정보</h1>
    );
}

export default Detail;