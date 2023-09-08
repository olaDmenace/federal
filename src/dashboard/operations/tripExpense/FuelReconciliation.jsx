import React from "react";

const FuelReconciliation = ({ formData, setFormData }) => {
  return (
    <div className="py-5 text-primary space-y-3">
      <h4 className="text-lg font-semibold">Fuel Reconciliation</h4>
      <form action="" className="grid text-primary gap-5 w-full">
        <fieldset className="grid md:grid-cols-2 gap-3 items-end">
          <label htmlFor="">
            Actual Fuel Consumed (Incl. Top Up)
            <input
              className="w-full input input-primary"
              placeholder="200 Ltr"
              type="number"
              name=""
              id=""
              value={formData.fuelReconciliation.volumeConsumed}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  fuelReconciliation: {
                    ...formData.fuelReconciliation,
                    volumeConsumed: +e.target.value,
                  },
                });
              }}
            />
          </label>
          <label htmlFor="">
            Expected Fuel Consumption
            <input
              className="w-full input input-primary"
              placeholder="200 Ltr"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Difference
            <input
              className="w-full input input-primary"
              placeholder="20"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Fuel Consumption Rate
            <input
              className="w-full input input-primary"
              placeholder="48 Ltr"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Fuel Consumption Rating
            <input
              className="w-full input input-primary"
              placeholder="68 Ltr"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Consumption Variation Reason
            <input
              className="w-full input input-primary"
              placeholder="Above Expectation"
              type="text"
              name=""
              id=""
              value={formData.fuelReconciliation.variationReason}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  fuelReconciliation: {
                    ...formData.fuelReconciliation,
                    variationReason: e.target.value,
                  },
                });
              }}
            />
          </label>
        </fieldset>
        <label htmlFor="">
          Comment
          <textarea
            className="w-full textarea textarea-primary"
            name=""
            id=""
            rows="5"
            value={formData.fuelReconciliation.comment}
            onChange={(e) => {
              setFormData({
                ...formData,
                fuelReconciliation: {
                  ...formData.fuelReconciliation,
                  comment: e.target.value,
                },
              });
            }}
          ></textarea>
        </label>
      </form>
    </div>
  );
};

export default FuelReconciliation;
