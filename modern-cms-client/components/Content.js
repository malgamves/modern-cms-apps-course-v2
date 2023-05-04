import ReactMarkdown from 'react-markdown'

const Content = ({ children }) => {
    return (
      <span className="ml-6 pb-4 leading-normal text-black text-base">
        <ReactMarkdown>{`${children}`}</ReactMarkdown>
      </span>
    );
  };
  
  export default Content;
  