const express = require('express');
const router = express.Router();

const { TxHistory } = require('../controllers');

router.route('/api/txs').get(TxHistory.getTxHistory);

module.exports = router;
