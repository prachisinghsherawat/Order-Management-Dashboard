import Link from "next/link";

interface Props {
  open: boolean;
  setOpen: any;
}

export default function Filters({ open, setOpen }: Props) {
  return (
    <>
      <div className=" bg-white rounded-lg py-2 px-9">
        <h3 className="my-4 text-md font-bold text-center w-full leading-6 text-gray-600">
          FILTERS
        </h3>
        <div className="flex justify-between items-center my-6">
          <button
            onClick={() => setOpen(true)}
            type="button"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Select Filters
          </button>
          <Link className="underline text-sm text-gray-600" href="">
            Clear All
          </Link>
        </div>
      </div>
    </>
  );
}