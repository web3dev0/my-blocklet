const axios = require('axios').default;
const Joi = require('joi');
const { isAddress } = require('@ethersproject/address');
// const logger = require('../libs/logger');
const SUPPORT_PAGE_SEIZE = [10, 25, 50, 100];

const { successDto, errorDto, parseHtml } = require('../libs/util');

const { FETCH_INIT, ETHERSCAN_URL } = require('../constant');

const schema = Joi.number().greater(0);

const buildQuery = (address, ps, p) => {
  return `a=${address}&ps=${ps}&p=${p}`;
};

const getTxHistory = async (req, res) => {
  const { a: address, ps: pageSize = 10, p: page = 1 } = req.query;

  if (!isAddress(address)) {
    res.json(errorDto('param a not vaild'));
    return;
  }
  const { error: pageSizeError } = schema.validate(pageSize);
  if (pageSizeError || SUPPORT_PAGE_SEIZE.indexOf(Number(pageSize)) < 0) {
    res.json(errorDto('param ps not vaild'));
    return;
  }
  const { error: pageIndexError } = schema.validate(page);
  if (pageIndexError) {
    res.json(errorDto('param p not vaild'));
    return;
  }
  const { cache } = req.app.locals;
  const queryKey = buildQuery(address, pageSize, page);
  if (cache.has(queryKey)) {
    res.json(successDto(cache.get(queryKey)));
    return;
  }
  try {
    const html = (await axios.get(`${ETHERSCAN_URL}?${queryKey}`, FETCH_INIT)).data;

    const [total, txList] = parseHtml(html);

    const ret = {
      pageSize: Number(pageSize),
      page: Number(page),
      total,
      list: txList,
    };
    cache.set(queryKey, ret);
    res.json(successDto(ret));
  } catch (error) {
    res.json(errorDto(error.message));
  }
};

module.exports = {
  getTxHistory,
};
