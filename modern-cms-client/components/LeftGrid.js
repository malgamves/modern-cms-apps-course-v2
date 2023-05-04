
const LeftGrid = ({ children }) => {
    return (
        <div className="h-full w-6/12 fixed top-0 overflow-x-hidden left-0 bg-yellow-300">
        {children}
      </div>
    );
  };
  
  export default LeftGrid;
  