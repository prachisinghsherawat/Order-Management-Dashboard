import Link from "next/link";
import useFilterMachineStore from '@/zustand/FilterValueMachine';
import useFilterStore from "@/zustand/FilterValue";

interface Props {
  open: boolean;
  setOpen: any;
}

export default function Filters({ open, setOpen }: Props) {

  const { filterValue } = useFilterStore();

  return (
    <>
      <div className=" bg-white rounded-lg py-2 px-9">
        <h3 className="my-4 text-md font-bold text-center w-full leading-6 text-gray-600">
          FILTERS
        </h3>
        <div className="flex flex-wrap gap-3">
          {filterValue &&
            filterValue.map((machine: any, i: number) => (
              <div className="w-fit flex items-center justify-between border-2 border-gray-200 rounded-lg p-2">
                <p className="text-gray-800 text-xs">{machine}</p>
                <p className="ml-2 text-gray-400 text-sm cursor-pointer">x</p>
              </div>
            ))}
        </div>
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