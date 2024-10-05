import { useEffect, useState } from 'react';

import { HistoryList, Pagination } from './component';

import './style.css';

const ITEMS_PER_PAGE = 100; // 1ページあたりのアイテム数
const ONE_MONTH_IN_MS = 30 * 24 * 60 * 60 * 1000; // 1ヶ月（ミリ秒）

function IndexPopup() {
  const [historyItems, setHistoryItems] = useState<chrome.history.HistoryItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const oneMonthAgo = Date.now() - ONE_MONTH_IN_MS; // 1ヶ月前のタイムスタンプ

    chrome.history.search(
      { text: '', maxResults: 10000, startTime: oneMonthAgo },
      (data: chrome.history.HistoryItem[]) => {
        setHistoryItems(data);
      }
    );
  }, []);

  // ページに応じた履歴アイテムを取得
  const paginatedItems = historyItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // 次のページに移動
  const nextPage = () => {
    if (currentPage < Math.ceil(historyItems.length / ITEMS_PER_PAGE)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // 前のページに移動
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* ページネーション（上部にステッキー） */}
      <div className="sticky top-0 bg-gray-100 py-2 z-10">
        <Pagination
          currentPage={currentPage}
          itemLength={historyItems.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPrevPage={prevPage}
          onNextPage={nextPage}
        />
      </div>

      {/* 履歴アイテム表示 */}
      <HistoryList items={paginatedItems} />
    </div>
  );
}

export default IndexPopup;
