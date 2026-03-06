import { useEffect, useState } from "react";
import {
  getMyOrders,
  cancelOrder,
  updateOrderStatus,
} from "../api/orderApi";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await getMyOrders();
      setOrders(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleCancel = async (id) => {
    await cancelOrder(id);
    fetchOrders();
  };

  const handleStatusUpdate = async (id) => {
    await updateOrderStatus(id, "SHIPPED");
    fetchOrders();
  };

  const grandTotal = orders.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-10">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-lg flex overflow-hidden">
        
        <div className="w-2/3 p-10">
          <h1 className="text-2xl font-semibold mb-6">
            My Orders
          </h1>

          {orders.length === 0 ? (
            <p className="text-gray-500">No orders found.</p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="border-b py-6 flex justify-between items-center"
              >
                <div>
                  <p className="text-sm text-gray-500">
                    Order ID: {order.id}
                  </p>

                  <p className="mt-1 font-medium">
                    Status:
                    <span
                      className={`ml-2 px-2 py-1 text-xs rounded ${
                        order.status === "SHIPPED"
                          ? "bg-green-100 text-green-600"
                          : order.status === "CANCELLED"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>

                  <p className="mt-2 font-semibold">
                    ₹{order.totalAmount}
                  </p>
                </div>

                <div className="space-x-3">
                  <button
                    onClick={() => handleCancel(order.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => handleStatusUpdate(order.id)}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition"
                  >
                    Mark Shipped
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="w-1/3 bg-gray-50 p-10 border-l">
          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Total Orders</span>
              <span>{orders.length}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total Amount</span>
              <span>₹{grandTotal}</span>
            </div>

            <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}