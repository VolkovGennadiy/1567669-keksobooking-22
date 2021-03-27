import { getData } from './fetch.js';
import { renderList } from './map.js';
import {
  debounce
} from './util.js';

import {filterData} from './filter.js'
import { changeFilteres, resetAllForm } from './form.js';

const RERENDER_DELAY = 500;

const sendSuccess = () => {
  getData((data) => {
    renderList(data);

    const renderFilterData = () => {
      renderList(filterData(data))
    };

    changeFilteres(debounce(renderFilterData, RERENDER_DELAY));

    resetAllForm(() => {
      renderList(data);
    });
  });
}

getData(sendSuccess);
