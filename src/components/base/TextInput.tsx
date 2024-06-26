import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = {
  id: string;
  name: string;
  onChange?: any;
  placeholder?:any
};

export default function TextInput(props: Props){

    return (
      <>
          <div className="w-full">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                onChange={props.onChange}
                id={props.id}
                name={props.name}
                className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-xs sm:leading-6"
                placeholder={props.placeholder}
                type="search"
              />
            </div>
          </div>
      </>
    );
}