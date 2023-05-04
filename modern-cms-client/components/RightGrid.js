
const RightGrid = ({ children }) => {
    return (
      <div className="h-full w-6/12 fixed top-0 overflow-x-hidden right-0 bg-red-500">
        {children}
      </div>
    );
  };
  
  export default RightGrid;
  