function ProductDetails() {
  return (
    <div className="space-y-2">
      <div className="space-y-2">
        <h4 className="text-xl text-primary font-medium">Product Details</h4>
        <hr />
        {/* Show the entry as requested here */}
        <form className="grid gap-5">
          <div className="grid text-primary gap-5 w-full md:grid-cols-2 lg:grid-cols-3 items-end">
            <label htmlFor="">
              Product Loaded
              <br />
              <input
                className="input input-primary w-full"
                placeholder="PMS"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Quantity Loaded
              <br />
              <input
                className="input input-primary w-full"
                placeholder="33000 LTRS"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Total Quatity Delivered (Multiple Customers)
              <br />
              <input
                className="input input-primary w-full"
                placeholder="PMS"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Quantity Delivered to Direct Customer
              <br />
              <input
                className="input input-primary w-full"
                placeholder="PMS"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Estimated Product Storage
              <br />
              <input
                className="input input-primary w-full"
                placeholder="PMS"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Customer Shortage Claim (Multiple Customers)
              <br />
              <input
                className="input input-primary w-full"
                placeholder="PMS"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Customer Shortage Claim (Direct Customer)
              <br />
              <input
                className="input input-primary w-full"
                placeholder="PMS"
                type="text"
                name=""
                id=""
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductDetails;
