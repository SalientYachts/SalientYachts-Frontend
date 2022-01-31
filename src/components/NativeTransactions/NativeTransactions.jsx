import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "../../helpers/formatters";
import useNativeTransactions from "hooks/useNativeTransactions";
import 'antd/dist/antd.css';
import { Skeleton, Table } from 'antd'
import styles from "./styles";



function NativeTransactions() {
  const { nativeTransactions, chainId } = useNativeTransactions();
  const { Moralis } = useMoralis();
  useEffect(() => {
    console.log(nativeTransactions)
  }, [nativeTransactions])
  const columns = [
    {
      title: 'From',
      dataIndex: 'from_address',
      key: 'from_address',
      render: from => (
        getEllipsisTxt(from, 5)
      )
    },
    {
      title: 'To',
      dataIndex: 'to_address',
      key: 'to_address',
      render: to => (
        getEllipsisTxt(to, 5)
      )
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      render: value => (
          // missing second argument in FromWei, decimals
        parseFloat(Moralis.Units.FromWei(value).toFixed(6))
      )
    },
    {
      title: 'Hash',
      dataIndex: 'hash',
      key: 'hash',
      render: hash => (
        <a 
          href={
            chainId === "0x1" ? `https://etherscan.io/tx/${hash}` :
            chainId === "0x38" ? `https://bscscan.com/tx/${hash}` :
            chainId === "0x89" ? `https://polygonscan.com/tx/${hash}` :
            chainId === "0xa86a" ? `https://snowtrace.io/tx/${hash}` :
            `https://testnet.snowtrace.io/tx/${hash}`
          }
          target="_blank"
          rel="noreferrer"
        >
          View Transaction
        </a>
      )
    }
  ]

  let key = 0;
  return (
    <div>
      <h1 style={styles.fontH}>💸Native Transactions</h1>
      <Skeleton loading={!nativeTransactions || nativeTransactions.length === 0}>
        <Table
          dataSource={nativeTransactions}
          columns={columns}
          rowKey={(record) => {
            key++;
            return `${record.transaction_hash}-${key}`;
          }}
        />
      </Skeleton>
    </div>
  );
}

export default NativeTransactions;
