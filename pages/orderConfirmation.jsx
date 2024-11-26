import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";


function orderConfirmation() {
    const router = useRouter();
    const currentOrder = useSelector((state) => state.currentRecords.currentOrder);
    const currentConsumer = useSelector((state) => state.currentRecords.currentConsumer);
    const currentPayment = useSelector((state) => state.currentRecords.currentPayment);

    console.log(currentOrder);
    console.log(currentConsumer);
    console.log(currentPayment);


  return (
    <div>
      <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div class="mx-auto max-w-2xl px-4 2xl:px-0">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
            Thanks for your order!
          </h2>
          <p class="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
            Your order{" "}
            <a
              href="#"
              class="font-medium text-gray-900 dark:text-white hover:underline"
            >
              {currentOrder.orderID}
            </a>{" "}
            will be processed within 24 hours during working days. We will
            notify you by email once your order has been shipped.
          </p>
          <div class="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
            <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                Date
              </dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">
                {currentOrder.datePlaced}
              </dd>
            </dl>
            <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              {currentPayment.method}
              </dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">
                One Time Payment
              </dd>
            </dl>
            <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                Name
              </dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">
                {currentConsumer.name}
              </dd>
            </dl>
            <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                Address
              </dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">
                34 Scott Street, San Francisco, California, USA
              </dd>
            </dl>
            <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                Phone
              </dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">
                +(92) 305 49 67155
              </dd>
            </dl>
          </div>
          <div class="flex items-center space-x-4">
            <Button
              onClick={()=>{router.push("/CropsConsumer")}}
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Return to shopping
            </Button>
          </div>
        </div>
      </section>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default orderConfirmation;
