import { Button } from "@/components/ui/button";
import Loading from "@/mycomponents/layout/Loading";
import { clearCart } from "@/redux/features/cart/CartSlice";
import { useVerifyOrderQuery } from "@/redux/features/oreder/orderApi";
import { useAppDispatch } from "@/redux/hook";
import { IOrderVerify } from "@/types";

import { Link, useSearchParams } from "react-router-dom";

const VerifyOrder = () => {
  const [urlParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const params = urlParams.get("order_id");
  const { data, isLoading } = useVerifyOrderQuery(params, {
    refetchOnMountOrArgChange: true,
  });
  const orderData: IOrderVerify = data?.data?.[0];

  if (isLoading) {
    return <Loading />;
  }
  if (orderData.bank_status === "Success") {
    dispatch(clearCart());
  }

  return (
    <div className=" py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-blue-600 p-6">
          <h1 className="text-2xl font-bold text-white">
            Payment Verification
          </h1>
          <p className="text-sm text-blue-200 mt-1">
            Order ID: {orderData?.order_id}
          </p>
        </div>

        {/* Order Details Section */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Order Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-medium text-gray-800">
                    {orderData?.amount} {orderData?.currency}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payable Amount:</span>
                  <span className="font-medium text-gray-800">
                    {orderData?.payable_amount} {orderData.currency}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount:</span>
                  <span className="font-medium text-gray-800">
                    {orderData?.discsount_amount || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-medium text-gray-800">
                    {orderData.method}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction Status:</span>
                  <span
                    className={`font-medium ${
                      orderData.bank_status === "Success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {orderData.bank_status}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Customer Details
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium text-gray-800">
                    {orderData?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-gray-800">
                    {orderData?.email}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium text-gray-800">
                    {orderData?.phone_no}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Address:</span>
                  <span className="font-medium text-gray-800">
                    {orderData?.address}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">City:</span>
                  <span className="font-medium text-gray-800">
                    {orderData.city}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Details Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Transaction Details
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Bank Transaction ID:</span>
                <span className="font-medium text-gray-800">
                  {orderData.bank_trx_id}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Invoice No:</span>
                <span className="font-medium text-gray-800">
                  {orderData.invoice_no}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date & Time:</span>
                <span className="font-medium text-gray-800">
                  {orderData.date_time}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 p-6 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            If you have any questions, please contact our support team.
          </p>
          <Link to="/dashboard/my-orders">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
              View Order
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyOrder;
