
interface ButtonProps {
  children: string;
}

const Button= ({ children }: ButtonProps) => {
  return (
     <button
        type="button"
        className="w-28 rounded-md bg-blue-500 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
      {children}
    </button>
  );
};

export default Button;
