type Props = {
  items: Array<chrome.history.HistoryItem>;
};

export const HistoryList: React.FC<Props> = ({ items }) => {
  return (
    <ul className="w-full space-y-2">
      {items.map((item) => (
        <li key={item.id} className="w-full bg-white rounded-lg shadow p-4 hover:bg-gray-50 transition-colors">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="block w-full">
            <div className="mb-2">
              <span className="font-bold text-gray-600">ID: </span>
              <span className="text-gray-800 break-all">{item.id}</span>
            </div>
            <div className="mb-2">
              <h3 className="font-bold text-blue-600 break-words">Title: {item.title}</h3>
            </div>
            <div className="mb-2">
              <span className="font-bold text-gray-600">URL: </span>
              <span className="text-gray-800 break-words">{item.url}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold text-gray-600">Visit Count: </span>
              <span className="text-gray-800">{item.visitCount ?? 'N/A'}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold text-gray-600">Last Visit Time: </span>
              <span className="text-gray-800">
                {item.lastVisitTime ? new Date(item.lastVisitTime).toLocaleString() : 'N/A'}
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-600">Typed Count: </span>
              <span className="text-gray-800">{item.typedCount ?? 'N/A'}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};
