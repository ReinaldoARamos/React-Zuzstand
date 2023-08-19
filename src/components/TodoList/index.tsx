import {useSelector} from 'react-redux'
export function Todo() {
    const store = useSelector(store => {
        return store
    })

    console.log(store)
    return (
        <ul>
            <li>
                Fazer Café
            </li>
            <li>
                Jogar overlixo
            </li>
        </ul>
    )
}