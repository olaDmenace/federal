import PageTitle from "../../../utils/PageTitle";
import FormTitle from "../../FormTitle";

const InventoryRequest = () => {
  PageTitle("Axle & Cartage - ");
  return (
    <div className="p-5 rounded-lg text-primary y-3 bg-white">
      <FormTitle Title={"Inventory Request Form"} />

      <form action="" className="grid text-primary gap-5 w-full">
        <fieldset className="grid md:grid-cols-2 gap-3 items-end">
          <label htmlFor="">
            Truck
            <select
              className="w-full select select-primary"
              placeholder="Select Truck Number"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Brand
            <select
              className="w-full select select-primary"
              placeholder="Select Brand"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Booking ID
            <input
              className="w-full input input-primary"
              placeholder="BID-0000000"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Spare By Group
            <select
              className="w-full select select-primary"
              placeholder="Select spare"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Spare
            <select
              className="w-full select select-primary"
              placeholder="Select Spare Name"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Quantity Needed
            <input
              className="w-full input input-primary"
              placeholder="10"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Spares Source
            <select
              className="w-full select select-primary"
              placeholder="Select Spare Name"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Spares Issuance Date
            <input
              className="w-full input input-primary"
              placeholder="21/09/2018"
              type="date"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Request Status
            <select
              className="w-full select select-primary"
              placeholder="Select Status"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Quantity Issued
            <input
              className="w-full input input-primary"
              placeholder="7"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Unit Price
            <input
              className="w-full input input-primary"
              placeholder="100"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Total Price
            <input
              className="w-full input input-primary"
              placeholder="700"
              type="text"
              name=""
              id=""
            />
          </label>
        </fieldset>
        <button class="btn btn-primary mx-auto" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InventoryRequest;
