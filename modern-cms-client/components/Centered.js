import '@/app/globals.css';

const Centered = ({ children }) => {
    return (
        <div className="absolute text-left top-2/4 left-2/4 -translate-y-2/4 -translate-x-3/4">
        {children}
      </div>
    );
  };
  
  export default Centered;
  