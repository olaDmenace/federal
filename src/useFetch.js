import React, { useEffect, useState } from "react";
import endpoint from "./utils/endpoints/endpoint";
import { useParams } from "react-router-dom";

const useFetch = (url) => {
  const { wayBillId } = useParams();
  const [trucks, setTrucks] = useState([]);
  const [formData, setFormData] = useState({
    productPrice: 0,
    journeyManagementId: "",
    resolutions: [
      {
        wayBillId,
        agreedShortage: 0,
        reason: 0,
        source: 0,
        status: 0,
        sourceCharge: 0,
        remarks: "",
        refundStatus: 0,
        calibration: {
          calibrationType: 0,
          meter: {
            loadingDepot: 0,
            arrivalLocation: 0,
          },
          ullage: [
            {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
            {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
            {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
          ],
          liquidHeight: [
            {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
            {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
            {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
          ],
        },
      },
    ],
  });

  const handleResolveShortageClaim = (wayBillId) => {
    setFormData((prevFormData) => {
      const existingResolutionIndex = prevFormData.resolutions.findIndex(
        (resolution) => resolution.wayBillId === wayBillId
      );
      if (existingResolutionIndex >= 0) {
        // If a resolution already exists for this waybill, return the previous form data as-is
        return prevFormData;
      } else {
        // If a resolution doesn't exist yet for this waybill, add a new one to the resolutions array
        const newResolution = {
          wayBillId,
          agreedShortage: 0,
          reason: 0,
          source: 0,
          status: 0,
          sourceCharge: 0,
          remarks: "",
          refundStatus: 0,
          calibration: {
            calibrationType: 0,
            meter: {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
            ullage: [
              {
                loadingDepot: 0,
                arrivalLocation: 0,
              },
              {
                loadingDepot: 0,
                arrivalLocation: 0,
              },
              {
                loadingDepot: 0,
                arrivalLocation: 0,
              },
            ],
            liquidHeight: [
              {
                loadingDepot: 0,
                arrivalLocation: 0,
              },
              {
                loadingDepot: 0,
                arrivalLocation: 0,
              },
              {
                loadingDepot: 0,
                arrivalLocation: 0,
              },
            ],
          },
        };
        return {
          ...prevFormData,
          resolutions: [...prevFormData.resolutions, newResolution],
        };
      }
    });
  };

  console.log(formData);

  useEffect(() => {
    endpoint
      .get(url)
      .then((res) => {
        console.log(res.data.data, "data");
        setTrucks(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  return { trucks, formData, setFormData, handleResolveShortageClaim };
};

export default useFetch;
