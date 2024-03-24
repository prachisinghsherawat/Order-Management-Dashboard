import Button from "../base/Button";


export default function Table(){

    const displayedItems = [
      {
        id: 1,
        name: "Iced Latte",
        customization: "Vanilla Syrup, Extra Shot",
        amount: "Large",
        status: "failure",
        refund: "complete"
      },
      {
        id: 2,
        name: "Cappuccino",
        customization: "Cinnamon, Skim Milk",
        amount: "Regular",
        status: "sent",
        refund: "complete"
      },
      {
        id: 3,
        name: "Espresso",
        customization: "Double Shot",
        amount: "Single",
        status: "success",
        refund: "incomplete"
      },
      {
        id: 4,
        name: "Green Tea",
        customization: "Honey, Lemon",
        amount: "Large",
        status: "pending",
        refund: "complete"
      },
      {
        id: 5,
        name: "Mocha",
        customization: "Chocolate Syrup, Whipped Cream",
        amount: "Regular",
        status: "pending",
        refund: "incomplete"
      }
    ];

    return (
      <>
        <div className="rounded-md px-4 py-8 bg-white ">
          <h1 className="text-sm font-semibold text-gray-500">ORDER DETAILS</h1>
          <div className="flow-root">
            <div className="-mx-4 mt-3 overflow-x-auto xs:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle xs:px-6 lg:px-8">
                <table className="min-w-full">
                  <thead>
                    <tr className="align-top">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-blue-400 xs:pl-0"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-xs font-semibold text-blue-400"
                      >
                        DRINK NAME
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-xs font-semibold text-blue-400"
                      >
                        CUSTOMIZATION
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-xs font-semibold text-blue-400"
                      >
                        AMOUNT
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-xs font-semibold text-blue-400"
                      >
                        DRINK STATUS
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-xs font-semibold text-blue-400"
                      >
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {displayedItems.map((drink: any) => (
                      <tr key={drink.id}>
                        <td className="whitespace-nowrap px-3 py-3 text-xs text-gray-500">
                          {drink.id}.
                        </td>

                        <div className="flex items-center pl-2">
                          <div className="h-8 w-8 flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="whitespace-nowrap px-3 py-3.5 text-xs text-gray-500">
                              {drink.name}
                            </div>
                          </div>
                        </div>

                        <td className="whitespace-nowrap px-3 py-3.5 text-xs text-gray-500">
                          {drink.customization}
                        </td>

                        <td className="whitespace-nowrap px-3 py-3.5 text-xs text-gray-500">
                          {drink.amount}
                        </td>

                        <td className="whitespace-nowrap px-3 py-3.5 text-xs text-gray-500">
                          <span
                            className={`inline-flex items-center rounded-xl px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                              drink.status === "success"
                                ? "ring-green-500 text-green-500"
                                : drink.status === "failure"
                                ? "ring-red-500 text-red-500"
                                : drink.status === "pending"
                                ? "ring-yellow-500 text-yellow-500"
                                : drink.status === "sent"
                                ? "ring-orange-500 text-orange-500"
                                : drink.status === "refund initiated"
                                ? "ring-indigo-500 text-indigo-500"
                                : "ring-purple-500 text-purple-500"
                            }`}
                          >
                            {drink.status}
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-3 py-3.5 text-xs text-gray-500">
                          <button
                            type="button"
                            className={`rounded-md px-3.5 py-2 text-xs font-semibold text-white shadow-sm  ${
                              drink.refund === "complete"
                                ? "bg-blue-500"
                                : "bg-gray-500"
                            }`}
                          >
                            Refund
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}