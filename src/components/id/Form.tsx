export default function Form() {
  const OrderDetails = [
    {
      heading: "BASIC INFORMATION",
      details: [
        { title: "Date and Time", value: "3/10/2023" },
        { title: "Machine", value: "Adhaar stall 3" }
      ]
    },
    {
      heading: "ORDER SUMMARY",
      details: [
        { title: "Paytym ID", value: "TYRUWDYGH" },
        { title: "Total Amount", value: "796" }
      ]
    },
    {
      heading: "CUSTOMER INFORMATION",
      details: [
        { title: "Name", value: "simranjeet" },
        { title: "Contact Number", value: "746934643743" },
        { title: "Email", value: "simmo@gsamndil" }
      ]
    },
    {
      heading: "REFUND INFORMATION",
      details: [{ title: "Refund Transaction ID", value: "TUTGT8378234" }]
    }
  ];

  return (
    <>
      <div className="rounded-md p-8 bg-white space-y-6">
        <div className="flex justify-between">
          <h1 className="text-md font-semibold text-blue-400">OD101</h1>
          <div className="rounded-xl px-2 py-1 text-xs font-medium ring-1 ring-inset ring-green-500 text-green-500">
            success
          </div>
        </div>

        {OrderDetails.map((orders: any) => (
          <div key={orders.heading}>
            <h1 className="text-sm font-semibold text-gray-400">
              {orders.heading}
            </h1>
            <div className="grid grid-cols-2">
              {orders.details.map((details: any, index: number) => (
                <div key={index} className="mt-3">
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500">{details.title}</p>
                    <p className="text-xs text-gray-950">{details.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
