import ListGroup from "./ListGroup";
import { useSelector } from 'react-redux';

const List = () => {
    const data = useSelector(state => state.data);
    const page = useSelector(state => state.page);

    return (
        <section className="main">
            <div className="main__title">
                <h1>台北旅遊資訊</h1>
            </div>
            <div className="main__list">
                {data.map(item =>
                    <ListGroup key={item.id} item={item} page={page} />
                )}
            </div>
        </section>
    );
}

export default List;