import React from 'react'
import ReactPaginate from 'react-paginate';

function Pages({info, pageNumber, setPageNumber}) {

  return (
      <ReactPaginate 
      className='pagination'
      forcePage={pageNumber===1? 0: pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName='btn btn-primary next'
      previousClassName='btn btn-primary prev'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      activeClassName='active'
      onPageChange={(data)=>{
        setPageNumber(data.selected+1);
      }}
      pageCount={info?.pages}/>
  )
}

export default Pages