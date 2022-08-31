const cheerio = require('cheerio');

const { ROW_SELECTOR, TOTAL_SELECTOR } = require('../constant');

const successDto = (data) => {
  return {
    success: true,
    data,
  };
};

const errorDto = (msg) => {
  return {
    success: false,
    errMsg: msg,
  };
};

const parseHtml = (html) => {
  const $ = cheerio.load(html);
  const txList = [];
  const total = Number(($(TOTAL_SELECTOR).text().match(/\d+/g) || []).join(''));

  if (total <= 0) {
    return [total, txList];
  }
  for (const tr of $(ROW_SELECTOR).children()) {
    const $tr = cheerio.load(tr);
    txList.push(parseTr2Object($tr));
  }

  return [total, txList];
};

const parseTr2Object = (tr) => {
  return {
    txHash: tr('tr td:nth-child(2)').text().trim(),
    blockNumber: tr('tr td:nth-child(4)').text().trim(),
    method: tr('tr td:nth-child(3)').text().trim(),
    time: tr('tr td:nth-child(5)').text().trim(),
    from: tr('tr td:nth-child(7)').text().trim(),
    to: tr('tr td:nth-child(9) a[href]').attr('href').replace('/address/', ''),
    value: tr('tr td:nth-child(10)').text().trim(),
    txFee: tr('tr td:nth-child(11)').text().trim(),
  };
};
module.exports = {
  successDto,
  errorDto,
  parseHtml,
};
