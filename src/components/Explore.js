import React, { Fragment } from 'react'
import ExploreNav from './ExploreNav'
import './Explore.css'
import Books from './Books.js'

function Explore() {

    // const { books } = useSelector(state => state.getBooks);
    // const dispatch = useDispatch();


    // useEffect(() => {
    //     dispatch(getBooks())
    // }, [dispatch]);


    return (
        <Fragment>
            <div className="explore">
                <ExploreNav />
                <div className='explore__header' >
                </div>
                <div className="explore__info">
                    <Books />
                </div>

            </div>
        </Fragment>

    )
}

export default Explore