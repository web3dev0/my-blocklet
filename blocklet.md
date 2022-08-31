# API

query etherscan tx history by address support paging

**URL** : `/api/txs?a={address}&ps={pagesize}&p={page}`

**URL Parameters** :
`address` a vaild address, required.
`pagesize` number default 10, only 10,25,50,100 support,option.
`page` number default 1,option.

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "success": true,
  "data": {
    "pageSize": 10,
    "index": 1,
    "total": 1507,
    "list": [
      {
        "txHash": "0xbf2b128cff5682386ff6124e8423208c5c48525f413902ead75c0f556e881763",
        "blockNumber": "14777116",
        "method": "Multicall",
        "time": "2022-05-15 1:33:13",
        "from": "0xeb2a81e229b68c1c22b6683275c00945f9872d90",
        "to": "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
        "value": "0.75 Ether",
        "txFee": "0.00685354"
      },
      {
        "txHash": "0x1137a1a01bfe03959a3665094dc913aee1514a26c7d48618b2e75772f8be0953",
        "blockNumber": "14777103",
        "method": "Multicall",
        "time": "2022-05-15 1:30:03",
        "from": "0xeb2a81e229b68c1c22b6683275c00945f9872d90",
        "to": "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
        "value": "0 Ether",
        "txFee": "0.0051528"
      },
      {
        "txHash": "0x3234f0476f1028d1c392d3f8e59640472b301493ea452c9bd23d09a74d7d46c2",
        "blockNumber": "14777092",
        "method": "Approve",
        "time": "2022-05-15 1:27:39",
        "from": "0xeb2a81e229b68c1c22b6683275c00945f9872d90",
        "to": "0x1e2f15302b90edde696593607b6bd444b64e8f02",
        "value": "0 Ether",
        "txFee": "0.00093545"
      },
      {
        "txHash": "0x5f46614a530302fba40db65b3cfc90044d04204fc649980f80ece57f07e78c9b",
        "blockNumber": "14777087",
        "method": "Swap Exact Token...",
        "time": "2022-05-15 1:27:10",
        "from": "0xeb2a81e229b68c1c22b6683275c00945f9872d90",
        "to": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        "value": "0 Ether",
        "txFee": "0.00281691"
      },
      {
        "txHash": "0x0a41fa9ea5d3fd5bdc988f8628c9adc99e2a5988b09043e8cff715355c16b046",
        "blockNumber": "14651057",
        "method": "Approve",
        "time": "2022-04-25 2:02:59",
        "from": "0xeb2a81e229b68c1c22b6683275c00945f9872d90",
        "to": "0x33d203fa03bb30b133de0fe2d6533c268ba286b6",
        "value": "0 Ether",
        "txFee": "0.00119652"
      },
      {
        "txHash": "0xad49df113c13d1d0b865d373f948b4a00f405529cd4503bdb1cbf9899c6d0f57",
        "blockNumber": "14649530",
        "method": "Mint Queens",
        "time": "2022-04-24 20:25:36",
        "from": "0xeb2a81e229b68c1c22b6683275c00945f9872d90",
        "to": "0x1417404d0d92f9d21b046afbaa9d1c4e17c4c723",
        "value": "0.18 Ether",
        "txFee": "0.0058985"
      },
      {
        "txHash": "0xf4c06b55621428b24d21a5b3c9f3f21ae3010498f652f43076efb5bcf83d6f26",
        "blockNumber": "14642532",
        "method": "Atomic Match_",
        "time": "2022-04-23 17:55:55",
        "from": "0xeb2a81e229b68c1c22b6683275c00945f9872d90",
        "to": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "value": "0.14 Ether",
        "txFee": "0.02718761"
      },
      {
        "txHash": "0xced9096ec4f691eaf9f4cbe3361a68b0a942713d41599e4d311c3f30ccaa97c2",
        "blockNumber": "14619803",
        "method": "Set Approval For...",
        "time": "2022-04-20 4:39:07",
        "from": "0xeb2a81e229b68c1c22b6683275c00945f9872d90",
        "to": "0xc5a6afbe82eb9a119ac0d15392ca43b683ae8136",
        "value": "0 Ether",
        "txFee": "0.00242555"
      },
      {
        "txHash": "0x35952d3bbf929bc555aa5ad523aeb0b4c543de522c3eed2b982408992e90b743",
        "blockNumber": "14619803",
        "method": "Atomic Match_",
        "time": "2022-04-20 4:39:07",
        "from": "0xeb2a81e229b68c1c22b6683275c00945f9872d90",
        "to": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "value": "0.04 Ether",
        "txFee": "0.01163308"
      },
      {
        "txHash": "0x83bdf893607591a5545f5d330fab156ba5b7b03749b2eba1688143f5e45f96c3",
        "blockNumber": "14619780",
        "method": "Atomic Match_",
        "time": "2022-04-20 4:33:02",
        "from": "0xeb2a81e229b68c1c22b6683275c00945f9872d90",
        "to": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "value": "0.06 Ether",
        "txFee": "0.01087402"
      }
    ]
  }
}
```

## Notes

- API depend on cn.etherscan.com .
- in some case cn.etherscan.com not stable.
