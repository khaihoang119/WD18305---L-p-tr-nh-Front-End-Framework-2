import React, { useEffect } from 'react';

//props
// name == undefind => '-'
// name == null => null
const ItemProduct = ({name, price, image})=>{
// const ItemProduct = (props)=>{
//   const {name, price, image} = props;

  // useEffect(()=>{
  //   console.log("name change === ", name);
  // }, [name])

  return(
    <div className="col-md-3 p-3">
      <div className='col-12 border border-1 rounded-3 text-center'>
        <div className="col-12 text-center">
          {/* <img src={image} style={{height: '20vh', width: 'auto'}}/> */}
          <img src={`/assets/images/${image}`} style={{height: '20vh', width: 'auto'}}/>
        </div>
        <a className="mt-3 link-underline-light text-black" href="#">{name || '-'}</a>
        <p className="text-danger">{price || '-'}</p>
        {/* null or undefind or false => default value */}
      </div>
    </div>
  )
}

export default ItemProduct;
// export {ItemProduct1, ItemProduct};