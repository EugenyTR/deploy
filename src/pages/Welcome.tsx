import { useSearchParams } from "react-router-dom"

export const Welcome = () => {
    let [searchParams] = useSearchParams();

    const id = searchParams.get('id');

    return (
        <div>
            <h1>
                id = {id}
            </h1>
        
            <h2>Welcome</h2>
        </div>
    )
}