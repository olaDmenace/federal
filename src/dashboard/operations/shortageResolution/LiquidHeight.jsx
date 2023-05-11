import React from "react";

function LiquidHeight({ formData, setFormData }) {
  const handleLiquidHeightChange = (index, field, value) => {
    const updatedFormData = { ...formData };
    updatedFormData.resolutions[0].calibration.liquidHeight[index][field] =
      parseFloat(value);

    // Ensure there are exactly three items in the liquidHeight array
    const numLiquidHeight =
      updatedFormData.resolutions[0].calibration.liquidHeight.length;
    if (numLiquidHeight < 3) {
      for (let i = numLiquidHeight; i < 3; i++) {
        updatedFormData.resolutions[0].calibration.liquidHeight.push({
          loadingDepot: 0,
          arrivalLocation: 0,
        });
      }
    } else if (numLiquidHeight > 3) {
      updatedFormData.resolutions[0].calibration.liquidHeight =
        updatedFormData.resolutions[0].calibration.liquidHeight.slice(0, 3);
    }

    setFormData(updatedFormData);
  };
  return (
    <div>
      <form className="grid gap-5 text-primary my-5" action="">
        <h4 className="text-xl text-primary font-medium">Liquid Height</h4>
        {formData.resolutions[0].calibration.liquidHeight.map((item, index) => (
          <div key={index}>
            <h4 className="text-xl mb-5">Compartment {index + 1}</h4>

            <fieldset className="grid gap-3 md:grid-cols-2 items-end">
              <label htmlFor="">
                Loading Depot
                <input
                  className="input input-primary w-full"
                  type="number"
                  min={0}
                  name=""
                  id=""
                  value={item.loadingDepot}
                  onChange={(e) =>
                    handleLiquidHeightChange(
                      index,
                      "loadingDepot",
                      e.target.value
                    )
                  }
                />
              </label>
              <label htmlFor="">
                Arrival
                <input
                  className="input input-primary w-full"
                  type="number"
                  min={0}
                  name=""
                  id=""
                  value={item.arrivalLocation}
                  onChange={(e) =>
                    handleLiquidHeightChange(
                      index,
                      "arrivalLocation",
                      e.target.value
                    )
                  }
                />
              </label>
              <label htmlFor="">
                Difference
                <input
                  className="input input-primary w-full"
                  type="text"
                  name=""
                  id=""
                />
              </label>
              <label htmlFor="">
                Value
                <input
                  className="input input-primary w-full"
                  type="text"
                  name=""
                  id=""
                />
              </label>
            </fieldset>
          </div>
        ))}
      </form>
    </div>
  );
}

export default LiquidHeight;
