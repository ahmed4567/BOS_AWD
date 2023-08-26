import React from "react";

export const ComponentToPrint = React.forwardRef((props, ref) => {
    const {cart, totalAmount} = props;
    return (
      <div ref={ref}>
       <style type="text/css" media="print">
          {"\
   @page { size: landscape; }\
"}</style>
   <h1>مركز تلوين الجندى</h1>.
          <table className='table'>
                  <thead>
                    <tr>
                      <td>#</td>
                      <td>Name</td>
                      <td>Price</td>
                      <td>Qty</td>
                    </tr>
                  </thead>
                  <tbody>
                    { cart ? cart.map((cartProduct, key) => <tr key={key}>
                      <td>{cartProduct._id}</td>
                      <td>{cartProduct.Iname}</td>
                      <td>{cartProduct.SPrice}</td>
                      <td>{cartProduct.qunt}</td>
                    </tr>)

                    : ''}
                  </tbody>
                </table>
                <h2 className='px-2'>Total Amount: ${totalAmount}</h2>
      </div>
    );
});