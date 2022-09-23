import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {products} from '../data.js'
import '../styles/productsshop.css'
import ProductShop from './ProductShop'
import ReactPaginate from 'react-paginate'

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH REQUEST':
            return {...state, loading: true};
        case 'FETCH SUCCESS':
            return {...state, products: action.payload, loading: false};
        case 'FETCH FAIL':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

const ProductsShop = () => {

    const [{loading, error, products}, dispatch] = useReducer(reducer, {
        loading: true,
        err: ''
        /*3:39:45*/
    })

    //for filter category and all products
    const [data, setData] = useState(products);

    //for category
    const [category, setCategory] = useState([]);

    //for paginate
    const [pageNumber, setPageNumber] = useState(0);

    const productPerPage = 3;

    const pagesVisited = pageNumber * productPerPage;

    const displayProducts = data.slice(pagesVisited, pagesVisited + productPerPage).map((item) => (
        <ProductShop item={item} key={item._id} />
    ))

    const pageCount = Math.ceil(data.length / productPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }



    //filter and all products
    const filterResult = (catItem) => {
        const result = products.filter((curDate) => {
            return curDate.category === catItem;
        });
        setData(result);
    }

    //for all category
    useEffect(() => {

        const fetchData = async () => {
            const result = await axios.get('/api/category');
            setCategory(result.data);
        }
        fetchData();
    }, []);



  return (
    <div className="shop-container">
        <div className="shop-row">
            <div className="shop col">
                <h2>Category</h2>
                <button className='shop-btn' onClick={() => setData(products)}>All <FontAwesomeIcon icon={faChevronRight} /></button>
                {/* show all category if exists */}
                {category.map((item) => (
                    <button className='shop-btn' onClick={() => filterResult(item.title)}>{item.title} <FontAwesomeIcon icon={faChevronRight} /></button>
                ))}
            </div>
            <div className="shop col">
                <div className="shop-products">
                   {displayProducts}
                </div>
                <div className="shop-pagination">
                    <ReactPaginate 
                        previousLabel={"<<"} //for previus
                        nextLabel={">>"} //for next
                        pageCount = {pageCount} // for page number
                        onPageChange={changePage} //for selected page, current page
                        constainerClassName={"paginationBttns"} //class for style
                        previousLinkClassName={"previosuBttn"} //class for style
                        nextLinkClassName={"nextBttn"}  //class for style
                        disabledClassName={"paginationDisabled"}  //class for style
                        activeClassName={"paginationActive"}  //class for style
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsShop
